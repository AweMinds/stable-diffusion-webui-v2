import json
import threading
import time
import os
import pathlib
import shutil
import uuid
from concurrent.futures import ThreadPoolExecutor
from functools import wraps

from modules.paths import data_path, script_path
from modules.lru_cache import LruCache

cache_filename = os.path.join(data_path, "cache.json")
cache_data = None
cache_lock = threading.Lock()

dump_cache_after = None
dump_cache_thread = None


def dump_cache():
    """
    Marks cache for writing to disk. 5 seconds after no one else flags the cache for writing, it is written.
    """

    global dump_cache_after
    global dump_cache_thread

    def thread_func():
        global dump_cache_after
        global dump_cache_thread

        while dump_cache_after is not None and time.time() < dump_cache_after:
            time.sleep(1)

        with cache_lock:
            with open(cache_filename, "w", encoding="utf8") as file:
                json.dump(cache_data, file, indent=4)

            dump_cache_after = None
            dump_cache_thread = None

    with cache_lock:
        dump_cache_after = time.time() + 5
        if dump_cache_thread is None:
            dump_cache_thread = threading.Thread(name='cache-writer', target=thread_func)
            dump_cache_thread.start()


def cache(subsection):
    """
    Retrieves or initializes a cache for a specific subsection.

    Parameters:
        subsection (str): The subsection identifier for the cache.

    Returns:
        dict: The cache data for the specified subsection.
    """

    global cache_data

    if cache_data is None:
        with cache_lock:
            if cache_data is None:
                if not os.path.isfile(cache_filename):
                    cache_data = {}
                else:
                    try:
                        with open(cache_filename, "r", encoding="utf8") as file:
                            cache_data = json.load(file)
                    except Exception:
                        os.replace(cache_filename, os.path.join(script_path, "tmp", "cache.json"))
                        print(
                            '[ERROR] issue occurred while trying to read cache.json, '
                            'move current cache to tmp/cache.json and create new cache')
                        cache_data = {}

    s = cache_data.get(subsection, {})
    cache_data[subsection] = s

    return s


def cached_data_for_file(subsection, title, filename, func):
    """
    Retrieves or generates data for a specific file, using a caching mechanism.

    Parameters:
        subsection (str): The subsection of the cache to use.
        title (str): The title of the data entry in the subsection of the cache.
        filename (str): The path to the file to be checked for modifications.
        func (callable): A function that generates the data if it is not available in the cache.

    Returns:
        dict or None: The cached or generated data, or None if data generation fails.

    The `cached_data_for_file` function implements a caching mechanism for data stored in files.
    It checks if the data associated with the given `title` is present in the cache and compares the
    modification time of the file with the cached modification time. If the file has been modified,
    the cache is considered invalid and the data is regenerated using the provided `func`.
    Otherwise, the cached data is returned.

    If the data generation fails, None is returned to indicate the failure. Otherwise, the generated
    or cached data is returned as a dictionary.
    """

    existing_cache = cache(subsection)
    ondisk_mtime = os.path.getmtime(filename)

    entry = existing_cache.get(title)
    if entry:
        cached_mtime = entry.get("mtime", 0)
        if ondisk_mtime > cached_mtime:
            entry = None

    if not entry or 'value' not in entry:
        value = func()
        if value is None:
            return None

        entry = {'mtime': ondisk_mtime, 'value': value}
        existing_cache[title] = entry

        dump_cache()

    return entry['value']


def get_cache_filepath(filepath: str, base_dir: str, cache_dir: str) -> str:
    filepath = os.path.abspath(filepath)
    base_dir = os.path.abspath(base_dir)
    cache_dir = os.path.abspath(cache_dir)
    return os.path.join(cache_dir, os.path.relpath(filepath, base_dir))


def copy_file_to_cache_dir_atomically(filepath: str, base_dir: str, cache_dir: str):
    destpath = get_cache_filepath(filepath, base_dir, cache_dir)
    dirname = os.path.dirname(destpath)
    tmppath = os.path.join(dirname, str(uuid.uuid4()))
    if not os.path.exists(dirname):
        os.makedirs(dirname, exist_ok=True)
    # This is not atomic, so we first copy to a unique path
    shutil.copy2(filepath, tmppath)
    # This is atomic
    os.rename(tmppath, destpath)
    print(f"Cache model {destpath} created.")
    return destpath


# check if the cache_dir has enough space to store new file
def check_cache_space(lru_cache: LruCache, new_file_size_gb, cache_size_gb):
    total_space_occupied_gb = 0
    for file_path, file_info in lru_cache:
        total_space_occupied_gb += file_info['file_size']
    return new_file_size_gb + total_space_occupied_gb < cache_size_gb


def copy_file_to_cache_dir_if_space_available(lru_cache: LruCache,
                                              filepath: str,
                                              base_dir: str,
                                              cache_dir: str,
                                              cache_size_gb: float):
    cache_dir = os.path.abspath(cache_dir)
    filepath = os.path.abspath(filepath)
    current_file_size_gb = os.stat(filepath).st_size / 1e9  # Convert bytes to GB
    while not check_cache_space(lru_cache, current_file_size_gb, cache_size_gb):
        # disk is full, release a file
        cached_filepath, _ = lru_cache.pop()
        if cached_filepath:
            os.unlink(cached_filepath)
        else:
            break

    # in case of cache is empty, but still not get enough disk space
    if check_cache_space(lru_cache, current_file_size_gb, cache_size_gb):
        cached_filepath = copy_file_to_cache_dir_atomically(filepath, base_dir, cache_dir)
        _cache_file_info(lru_cache, cached_filepath, current_file_size_gb)


def _cache_file_info(lru_cache: LruCache, cached_filepath, cached_file_size_gb):
    lru_cache.touch(cached_filepath, {'file_size': cached_file_size_gb})


# scan cache dir, load all cache model file info to lru_cache at service startup.
# the model files are cached in arbitrary order.
def setup_remote_file_cache(lru_cache: LruCache, cache_dir: str):
    if not cache_dir:
        return
    cache_path = pathlib.Path(cache_dir)
    if not cache_path.exists():
        return
    for item in cache_path.iterdir():
        if item.is_dir():
            setup_remote_file_cache(lru_cache, str(item))
        else:
            file_size = os.stat(item).st_size / 1e9
            _cache_file_info(lru_cache, str(item.absolute()), file_size)


# A function wrapper (Decorator) to help cache big files to a local ssd
def use_sdd_to_cache_remote_file(
        func: callable,
        lru_cache: LruCache,
        base_dir: str,
        cache_dir: str,
        executor_ppol: ThreadPoolExecutor,
        filepath_arg_index: int = 0,
        cache_size_gb: float = 100.0):
    @wraps(func)
    def weight_loading_wrapper(*args, **kwargs):
        if base_dir and cache_dir and executor_ppol and cache_size_gb > 0:
            filepath = args[filepath_arg_index]
            cached_filepath = get_cache_filepath(filepath, base_dir, cache_dir)
            if os.path.exists(cached_filepath):
                args = list(args)
                args[filepath_arg_index] = cached_filepath
                lru_cache.touch(cached_filepath)
                print(f"Loading cached model {cached_filepath}.")
            else:
                print(f"Loading original model {filepath}.")
                executor_ppol.submit(
                    copy_file_to_cache_dir_if_space_available, lru_cache, filepath, base_dir, cache_dir, cache_size_gb)
        return func(*args, **kwargs)

    return weight_loading_wrapper
