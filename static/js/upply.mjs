var So = Object.defineProperty;
var Po = (r, e, t) => e in r ? So(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ir = (r, e, t) => (Po(r, typeof e != "symbol" ? e + "" : e, t), t);
function Wt(r, e) {
  return Object.prototype.hasOwnProperty.call(r, e);
}
function dn(r, e) {
  if (!Object.prototype.hasOwnProperty.call(r, e))
    throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var Fo = 0;
function Co(r) {
  return "__private_" + Fo++ + "_" + r;
}
function ko(r, e, t) {
  const i = [];
  return r.forEach((s) => typeof s != "string" ? i.push(s) : e[Symbol.split](s).forEach((n, a, o) => {
    n !== "" && i.push(n), a < o.length - 1 && i.push(t);
  })), i;
}
/**
 * Takes a string with placeholder variables like `%{smart_count} file selected`
 * and replaces it with values from options `{smart_count: 5}`
 *
 * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
 * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
 *
 * @param {string} phrase that needs interpolation, with placeholders
 * @param {object} options with values that will be used to replace placeholders
 * @returns {any[]} interpolated
 */
function cn(r, e) {
  const t = /\$/g, i = "$$$$";
  let s = [r];
  if (e == null)
    return s;
  for (const n of Object.keys(e))
    if (n !== "_") {
      let a = e[n];
      typeof a == "string" && (a = t[Symbol.replace](a, i)), s = ko(s, new RegExp(`%\\{${n}\\}`, "g"), a);
    }
  return s;
}
var kt = /* @__PURE__ */ Co("apply");
class Ds {
  /**
   * @param {object|Array<object>} locales - locale or list of locales.
   */
  constructor(e) {
    Object.defineProperty(this, kt, {
      value: Ao
    }), this.locale = {
      strings: {},
      pluralize(t) {
        return t === 1 ? 0 : 1;
      }
    }, Array.isArray(e) ? e.forEach(dn(this, kt)[kt], this) : dn(this, kt)[kt](e);
  }
  /**
   * Public translate method
   *
   * @param {string} key
   * @param {object} options with values that will be used later to replace placeholders in string
   * @returns {string} translated (and interpolated)
   */
  translate(e, t) {
    return this.translateArray(e, t).join("");
  }
  /**
   * Get a translation and return the translated and interpolated parts as an array.
   *
   * @param {string} key
   * @param {object} options with values that will be used to replace placeholders
   * @returns {Array} The translated and interpolated parts, in order.
   */
  translateArray(e, t) {
    if (!Wt(this.locale.strings, e))
      throw new Error(`missing string: ${e}`);
    const i = this.locale.strings[e];
    if (typeof i == "object") {
      if (t && typeof t.smart_count < "u") {
        const n = this.locale.pluralize(t.smart_count);
        return cn(i[n], t);
      }
      throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}");
    }
    return cn(i, t);
  }
}
function Ao(r) {
  if (!(r != null && r.strings))
    return;
  const e = this.locale;
  this.locale = {
    ...e,
    strings: {
      ...e.strings,
      ...r.strings
    }
  }, this.locale.pluralize = r.pluralize || e.pluralize;
}
var le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Eo(r) {
  if (r.__esModule)
    return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function i() {
      if (this instanceof i) {
        var s = [null];
        s.push.apply(s, arguments);
        var n = Function.bind.apply(e, s);
        return new n();
      }
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(r, i);
    Object.defineProperty(t, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return r[i];
      }
    });
  }), t;
}
var Ns = function() {
  var e = {}, t = e._fns = {};
  e.emit = function(a, o, d, l, u, c, h) {
    var p = i(a);
    p.length && s(a, p, [o, d, l, u, c, h]);
  }, e.on = function(a, o) {
    t[a] || (t[a] = []), t[a].push(o);
  }, e.once = function(a, o) {
    function d() {
      o.apply(this, arguments), e.off(a, d);
    }
    this.on(a, d);
  }, e.off = function(a, o) {
    var d = [];
    if (a && o) {
      var l = this._fns[a], u = 0, c = l ? l.length : 0;
      for (u; u < c; u++)
        l[u] !== o && d.push(l[u]);
    }
    d.length ? this._fns[a] = d : delete this._fns[a];
  };
  function i(n) {
    var a = t[n] ? t[n] : [], o = n.indexOf(":"), d = o === -1 ? [n] : [n.substring(0, o), n.substring(o + 1)], l = Object.keys(t), u = 0, c = l.length;
    for (u; u < c; u++) {
      var h = l[u];
      if (h === "*" && (a = a.concat(t[h])), d.length === 2 && d[0] === h) {
        a = a.concat(t[h]);
        break;
      }
    }
    return a;
  }
  function s(n, a, o) {
    var d = 0, l = a.length;
    for (d; d < l && a[d]; d++)
      a[d].event = n, a[d].apply(a[d], o);
  }
  return e;
};
let Uo = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Oi = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += Uo[Math.random() * 64 | 0];
  return e;
};
var Is = "Expected a function", hn = 0 / 0, To = "[object Symbol]", Oo = /^\s+|\s+$/g, Bo = /^[-+]0x[0-9a-f]+$/i, Ro = /^0b[01]+$/i, Do = /^0o[0-7]+$/i, No = parseInt, Io = typeof le == "object" && le && le.Object === Object && le, $o = typeof self == "object" && self && self.Object === Object && self, zo = Io || $o || Function("return this")(), Lo = Object.prototype, Mo = Lo.toString, Ho = Math.max, jo = Math.min, $r = function() {
  return zo.Date.now();
};
function qo(r, e, t) {
  var i, s, n, a, o, d, l = 0, u = !1, c = !1, h = !0;
  if (typeof r != "function")
    throw new TypeError(Is);
  e = fn(e) || 0, Pr(t) && (u = !!t.leading, c = "maxWait" in t, n = c ? Ho(fn(t.maxWait) || 0, e) : n, h = "trailing" in t ? !!t.trailing : h);
  function p(w) {
    var F = i, P = s;
    return i = s = void 0, l = w, a = r.apply(P, F), a;
  }
  function f(w) {
    return l = w, o = setTimeout(_, e), u ? p(w) : a;
  }
  function v(w) {
    var F = w - d, P = w - l, A = e - F;
    return c ? jo(A, n - P) : A;
  }
  function y(w) {
    var F = w - d, P = w - l;
    return d === void 0 || F >= e || F < 0 || c && P >= n;
  }
  function _() {
    var w = $r();
    if (y(w))
      return g(w);
    o = setTimeout(_, v(w));
  }
  function g(w) {
    return o = void 0, h && i ? p(w) : (i = s = void 0, a);
  }
  function x() {
    o !== void 0 && clearTimeout(o), l = 0, i = d = s = o = void 0;
  }
  function b() {
    return o === void 0 ? a : g($r());
  }
  function C() {
    var w = $r(), F = y(w);
    if (i = arguments, s = this, d = w, F) {
      if (o === void 0)
        return f(d);
      if (c)
        return o = setTimeout(_, e), p(d);
    }
    return o === void 0 && (o = setTimeout(_, e)), a;
  }
  return C.cancel = x, C.flush = b, C;
}
function Wo(r, e, t) {
  var i = !0, s = !0;
  if (typeof r != "function")
    throw new TypeError(Is);
  return Pr(t) && (i = "leading" in t ? !!t.leading : i, s = "trailing" in t ? !!t.trailing : s), qo(r, e, {
    leading: i,
    maxWait: e,
    trailing: s
  });
}
function Pr(r) {
  var e = typeof r;
  return !!r && (e == "object" || e == "function");
}
function Vo(r) {
  return !!r && typeof r == "object";
}
function Go(r) {
  return typeof r == "symbol" || Vo(r) && Mo.call(r) == To;
}
function fn(r) {
  if (typeof r == "number")
    return r;
  if (Go(r))
    return hn;
  if (Pr(r)) {
    var e = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = Pr(e) ? e + "" : e;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = r.replace(Oo, "");
  var t = Ro.test(r);
  return t || Do.test(r) ? No(r.slice(2), t ? 2 : 8) : Bo.test(r) ? hn : +r;
}
var Bi = Wo;
function yr(r, e) {
  if (!Object.prototype.hasOwnProperty.call(r, e))
    throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var Ko = 0;
function $s(r) {
  return "__private_" + Ko++ + "_" + r;
}
const Xo = {
  version: "3.0.2"
};
var rt = /* @__PURE__ */ $s("callbacks"), zr = /* @__PURE__ */ $s("publish");
class zs {
  constructor() {
    Object.defineProperty(this, zr, {
      value: Yo
    }), Object.defineProperty(this, rt, {
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), this.state = {};
  }
  getState() {
    return this.state;
  }
  setState(e) {
    const t = {
      ...this.state
    }, i = {
      ...this.state,
      ...e
    };
    this.state = i, yr(this, zr)[zr](t, i, e);
  }
  subscribe(e) {
    return yr(this, rt)[rt].add(e), () => {
      yr(this, rt)[rt].delete(e);
    };
  }
}
function Yo() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  yr(this, rt)[rt].forEach((i) => {
    i(...e);
  });
}
zs.VERSION = Xo.version;
function Ls(r) {
  const e = r.lastIndexOf(".");
  return e === -1 || e === r.length - 1 ? {
    name: r,
    extension: void 0
  } : {
    name: r.slice(0, e),
    extension: r.slice(e + 1)
  };
}
const pn = {
  md: "text/markdown",
  markdown: "text/markdown",
  mp4: "video/mp4",
  mp3: "audio/mp3",
  svg: "image/svg+xml",
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  heic: "image/heic",
  heif: "image/heif",
  yaml: "text/yaml",
  yml: "text/yaml",
  csv: "text/csv",
  tsv: "text/tab-separated-values",
  tab: "text/tab-separated-values",
  avi: "video/x-msvideo",
  mks: "video/x-matroska",
  mkv: "video/x-matroska",
  mov: "video/quicktime",
  dicom: "application/dicom",
  doc: "application/msword",
  docm: "application/vnd.ms-word.document.macroenabled.12",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  dot: "application/msword",
  dotm: "application/vnd.ms-word.template.macroenabled.12",
  dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  xla: "application/vnd.ms-excel",
  xlam: "application/vnd.ms-excel.addin.macroenabled.12",
  xlc: "application/vnd.ms-excel",
  xlf: "application/x-xliff+xml",
  xlm: "application/vnd.ms-excel",
  xls: "application/vnd.ms-excel",
  xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12",
  xlsm: "application/vnd.ms-excel.sheet.macroenabled.12",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xlt: "application/vnd.ms-excel",
  xltm: "application/vnd.ms-excel.template.macroenabled.12",
  xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  xlw: "application/vnd.ms-excel",
  txt: "text/plain",
  text: "text/plain",
  conf: "text/plain",
  log: "text/plain",
  pdf: "application/pdf",
  zip: "application/zip",
  "7z": "application/x-7z-compressed",
  rar: "application/x-rar-compressed",
  tar: "application/x-tar",
  gz: "application/gzip",
  dmg: "application/x-apple-diskimage"
};
function Ms(r) {
  var e;
  if (r.type)
    return r.type;
  const t = r.name ? (e = Ls(r.name).extension) == null ? void 0 : e.toLowerCase() : null;
  return t && t in pn ? pn[t] : "application/octet-stream";
}
function Jo(r) {
  return r.charCodeAt(0).toString(32);
}
function mn(r) {
  let e = "";
  return r.replace(/[^A-Z0-9]/ig, (t) => (e += `-${Jo(t)}`, "/")) + e;
}
function Qo(r) {
  let e = "uppy";
  return typeof r.name == "string" && (e += `-${mn(r.name.toLowerCase())}`), r.type !== void 0 && (e += `-${r.type}`), r.meta && typeof r.meta.relativePath == "string" && (e += `-${mn(r.meta.relativePath.toLowerCase())}`), r.data.size !== void 0 && (e += `-${r.data.size}`), r.data.lastModified !== void 0 && (e += `-${r.data.lastModified}`), e;
}
function Zo(r) {
  return !r.isRemote || !r.remote ? !1 : (/* @__PURE__ */ new Set(["box", "dropbox", "drive", "facebook", "unsplash"])).has(r.remote.provider);
}
function el(r) {
  if (Zo(r))
    return r.id;
  const e = Ms(r);
  return Qo({
    ...r,
    type: e
  });
}
function tl(r) {
  if (r == null && typeof navigator < "u" && (r = navigator.userAgent), !r)
    return !0;
  const e = /Edge\/(\d+\.\d+)/.exec(r);
  if (!e)
    return !0;
  const t = e[1];
  let [i, s] = t.split(".");
  return i = parseInt(i, 10), s = parseInt(s, 10), i < 15 || i === 15 && s < 15063 || i > 18 || i === 18 && s >= 18218;
}
function rl(r, e) {
  return e.name ? e.name : r.split("/")[0] === "image" ? `${r.split("/")[0]}.${r.split("/")[1]}` : "noname";
}
function Lr(r) {
  return r < 10 ? `0${r}` : r.toString();
}
function xr() {
  const r = /* @__PURE__ */ new Date(), e = Lr(r.getHours()), t = Lr(r.getMinutes()), i = Lr(r.getSeconds());
  return `${e}:${t}:${i}`;
}
const il = {
  debug: () => {
  },
  warn: () => {
  },
  error: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.error(`[Uppy] [${xr()}]`, ...e);
  }
}, nl = {
  debug: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.debug(`[Uppy] [${xr()}]`, ...e);
  },
  warn: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.warn(`[Uppy] [${xr()}]`, ...e);
  },
  error: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.error(`[Uppy] [${xr()}]`, ...e);
  }
};
var Vt = function(e) {
  if (typeof e != "number" || isNaN(e))
    throw new TypeError(`Expected a number, got ${typeof e}`);
  const t = e < 0, i = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  if (t && (e = -e), e < 1)
    return `${(t ? "-" : "") + e} B`;
  const s = Math.min(Math.floor(Math.log(e) / Math.log(1024)), i.length - 1);
  e = Number(e / Math.pow(1024, s));
  const n = i[s];
  return e >= 10 || e % 1 === 0 ? `${(t ? "-" : "") + e.toFixed(0)} ${n}` : `${(t ? "-" : "") + e.toFixed(1)} ${n}`;
};
function Hs(r, e) {
  this.text = r = r || "", this.hasWild = ~r.indexOf("*"), this.separator = e, this.parts = r.split(e);
}
Hs.prototype.match = function(r) {
  var e = !0, t = this.parts, i, s = t.length, n;
  if (typeof r == "string" || r instanceof String)
    if (!this.hasWild && this.text != r)
      e = !1;
    else {
      for (n = (r || "").split(this.separator), i = 0; e && i < s; i++)
        t[i] !== "*" && (i < n.length ? e = t[i] === n[i] : e = !1);
      e = e && n;
    }
  else if (typeof r.splice == "function")
    for (e = [], i = r.length; i--; )
      this.match(r[i]) && (e[e.length] = r[i]);
  else if (typeof r == "object") {
    e = {};
    for (var a in r)
      this.match(a) && (e[a] = r[a]);
  }
  return e;
};
var sl = function(r, e, t) {
  var i = new Hs(r, t || /[\/\.]/);
  return typeof e < "u" ? i.match(e) : i;
}, al = sl, ol = /[\/\+\.]/, ll = function(r, e) {
  function t(i) {
    var s = al(i, r, ol);
    return s && s.length >= 2;
  }
  return e ? t(e.split(";")[0]) : t;
};
const ul = {
  maxFileSize: null,
  minFileSize: null,
  maxTotalFileSize: null,
  maxNumberOfFiles: null,
  minNumberOfFiles: null,
  allowedFileTypes: null,
  requiredMetaFields: []
};
class _e extends Error {
  constructor() {
    super(...arguments), this.isRestriction = !0;
  }
}
class dl {
  constructor(e, t) {
    this.i18n = t, this.getOpts = () => {
      const i = e();
      if (i.restrictions.allowedFileTypes != null && !Array.isArray(i.restrictions.allowedFileTypes))
        throw new TypeError("`restrictions.allowedFileTypes` must be an array");
      return i;
    };
  }
  validate(e, t) {
    const {
      maxFileSize: i,
      minFileSize: s,
      maxTotalFileSize: n,
      maxNumberOfFiles: a,
      allowedFileTypes: o
    } = this.getOpts().restrictions;
    if (a && t.filter((l) => !l.isGhost).length + 1 > a)
      throw new _e(`${this.i18n("youCanOnlyUploadX", {
        smart_count: a
      })}`);
    if (o && !o.some((l) => l.includes("/") ? e.type ? ll(e.type.replace(/;.*?$/, ""), l) : !1 : l[0] === "." && e.extension ? e.extension.toLowerCase() === l.slice(1).toLowerCase() : !1)) {
      const l = o.join(", ");
      throw new _e(this.i18n("youCanOnlyUploadFileTypes", {
        types: l
      }));
    }
    if (n && e.size != null && t.reduce((l, u) => l + u.size, e.size) > n)
      throw new _e(this.i18n("exceedsSize", {
        size: Vt(n),
        file: e.name
      }));
    if (i && e.size != null && e.size > i)
      throw new _e(this.i18n("exceedsSize", {
        size: Vt(i),
        file: e.name
      }));
    if (s && e.size != null && e.size < s)
      throw new _e(this.i18n("inferiorSize", {
        size: Vt(s)
      }));
  }
  validateMinNumberOfFiles(e) {
    const {
      minNumberOfFiles: t
    } = this.getOpts().restrictions;
    if (Object.keys(e).length < t)
      throw new _e(this.i18n("youHaveToAtLeastSelectX", {
        smart_count: t
      }));
  }
  getMissingRequiredMetaFields(e) {
    const t = new _e(this.i18n("missingRequiredMetaFieldOnFile", {
      fileName: e.name
    })), {
      requiredMetaFields: i
    } = this.getOpts().restrictions, s = [];
    for (const n of i)
      (!Object.hasOwn(e.meta, n) || e.meta[n] === "") && s.push(n);
    return {
      missingFields: s,
      error: t
    };
  }
}
const cl = {
  strings: {
    addBulkFilesFailed: {
      0: "Failed to add %{smart_count} file due to an internal error",
      1: "Failed to add %{smart_count} files due to internal errors"
    },
    youCanOnlyUploadX: {
      0: "You can only upload %{smart_count} file",
      1: "You can only upload %{smart_count} files"
    },
    youHaveToAtLeastSelectX: {
      0: "You have to select at least %{smart_count} file",
      1: "You have to select at least %{smart_count} files"
    },
    exceedsSize: "%{file} exceeds maximum allowed size of %{size}",
    missingRequiredMetaField: "Missing required meta fields",
    missingRequiredMetaFieldOnFile: "Missing required meta fields in %{fileName}",
    inferiorSize: "This file is smaller than the allowed size of %{size}",
    youCanOnlyUploadFileTypes: "You can only upload: %{types}",
    noMoreFilesAllowed: "Cannot add more files",
    noDuplicates: "Cannot add the duplicate file '%{fileName}', it already exists",
    companionError: "Connection with Companion failed",
    authAborted: "Authentication aborted",
    companionUnauthorizeHint: "To unauthorize to your %{provider} account, please go to %{url}",
    failedToUpload: "Failed to upload %{file}",
    noInternetConnection: "No Internet connection",
    connectedToInternet: "Connected to the Internet",
    // Strings for remote providers
    noFilesFound: "You have no files or folders here",
    noSearchResults: "Unfortunately, there are no results for this search",
    selectX: {
      0: "Select %{smart_count}",
      1: "Select %{smart_count}"
    },
    allFilesFromFolderNamed: "All files from folder %{name}",
    openFolderNamed: "Open folder %{name}",
    cancel: "Cancel",
    logOut: "Log out",
    filter: "Filter",
    resetFilter: "Reset filter",
    loading: "Loading...",
    authenticateWithTitle: "Please authenticate with %{pluginName} to select files",
    authenticateWith: "Connect to %{pluginName}",
    signInWithGoogle: "Sign in with Google",
    searchImages: "Search for images",
    enterTextToSearch: "Enter text to search for images",
    search: "Search",
    resetSearch: "Reset search",
    emptyFolderAdded: "No files were added from empty folder",
    folderAlreadyAdded: 'The folder "%{folder}" was already added',
    folderAdded: {
      0: "Added %{smart_count} file from %{folder}",
      1: "Added %{smart_count} files from %{folder}"
    }
  }
};
let js, qs;
function D(r, e) {
  if (!Object.prototype.hasOwnProperty.call(r, e))
    throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var hl = 0;
function ee(r) {
  return "__private_" + hl++ + "_" + r;
}
const fl = {
  version: "3.1.2"
};
var ie = /* @__PURE__ */ ee("plugins"), we = /* @__PURE__ */ ee("restricter"), At = /* @__PURE__ */ ee("storeUnsubscribe"), Ue = /* @__PURE__ */ ee("emitter"), it = /* @__PURE__ */ ee("preProcessors"), nt = /* @__PURE__ */ ee("uploaders"), $e = /* @__PURE__ */ ee("postProcessors"), pe = /* @__PURE__ */ ee("informAndEmit"), Yt = /* @__PURE__ */ ee("checkRequiredMetaFieldsOnFile"), Mr = /* @__PURE__ */ ee("checkRequiredMetaFields"), Et = /* @__PURE__ */ ee("assertNewUploadAllowed"), Ut = /* @__PURE__ */ ee("checkAndCreateFileStateObject"), Tt = /* @__PURE__ */ ee("startIfAutoProceed"), Hr = /* @__PURE__ */ ee("addListeners"), Pe = /* @__PURE__ */ ee("updateOnlineStatus"), Te = /* @__PURE__ */ ee("createUpload"), jr = /* @__PURE__ */ ee("getUpload"), at = /* @__PURE__ */ ee("removeUpload"), Oe = /* @__PURE__ */ ee("runUpload");
js = Symbol.for("uppy test: getPlugins");
qs = Symbol.for("uppy test: createUpload");
class Ws {
  /** @type {Record<string, BasePlugin[]>} */
  /**
   * Instantiate Uppy
   *
   * @param {object} opts — Uppy options
   */
  constructor(e) {
    Object.defineProperty(this, Oe, {
      value: Pl
    }), Object.defineProperty(this, at, {
      value: Sl
    }), Object.defineProperty(this, jr, {
      value: wl
    }), Object.defineProperty(this, Te, {
      value: _l
    }), Object.defineProperty(this, Hr, {
      value: bl
    }), Object.defineProperty(this, Tt, {
      value: xl
    }), Object.defineProperty(this, Ut, {
      value: yl
    }), Object.defineProperty(this, Et, {
      value: vl
    }), Object.defineProperty(this, Mr, {
      value: gl
    }), Object.defineProperty(this, Yt, {
      value: ml
    }), Object.defineProperty(this, pe, {
      value: pl
    }), Object.defineProperty(this, ie, {
      writable: !0,
      value: /* @__PURE__ */ Object.create(null)
    }), Object.defineProperty(this, we, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, At, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Ue, {
      writable: !0,
      value: Ns()
    }), Object.defineProperty(this, it, {
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), Object.defineProperty(this, nt, {
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), Object.defineProperty(this, $e, {
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), Object.defineProperty(this, Pe, {
      writable: !0,
      value: this.updateOnlineStatus.bind(this)
    }), this.defaultLocale = cl;
    const t = {
      id: "uppy",
      autoProceed: !1,
      allowMultipleUploadBatches: !0,
      debug: !1,
      restrictions: ul,
      meta: {},
      onBeforeFileAdded: (i) => i,
      onBeforeUpload: (i) => i,
      store: new zs(),
      logger: il,
      infoTimeout: 5e3
    };
    this.opts = {
      ...t,
      ...e,
      restrictions: {
        ...t.restrictions,
        ...e && e.restrictions
      }
    }, e && e.logger && e.debug ? this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning") : e && e.debug && (this.opts.logger = nl), this.log(`Using Core v${this.constructor.VERSION}`), this.i18nInit(), this.calculateProgress = Bi(this.calculateProgress.bind(this), 500, {
      leading: !0,
      trailing: !0
    }), this.store = this.opts.store, this.setState({
      plugins: {},
      files: {},
      currentUploads: {},
      allowNewUpload: !0,
      capabilities: {
        uploadProgress: tl(),
        individualCancellation: !0,
        resumableUploads: !1
      },
      totalProgress: 0,
      meta: {
        ...this.opts.meta
      },
      info: [],
      recoveredState: null
    }), D(this, we)[we] = new dl(() => this.opts, this.i18n), D(this, At)[At] = this.store.subscribe((i, s, n) => {
      this.emit("state-update", i, s, n), this.updateAll(s);
    }), this.opts.debug && typeof window < "u" && (window[this.opts.id] = this), D(this, Hr)[Hr]();
  }
  emit(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      i[s - 1] = arguments[s];
    D(this, Ue)[Ue].emit(e, ...i);
  }
  on(e, t) {
    return D(this, Ue)[Ue].on(e, t), this;
  }
  once(e, t) {
    return D(this, Ue)[Ue].once(e, t), this;
  }
  off(e, t) {
    return D(this, Ue)[Ue].off(e, t), this;
  }
  /**
   * Iterate on all plugins and run `update` on them.
   * Called each time state changes.
   *
   */
  updateAll(e) {
    this.iteratePlugins((t) => {
      t.update(e);
    });
  }
  /**
   * Updates state with a patch
   *
   * @param {object} patch {foo: 'bar'}
   */
  setState(e) {
    this.store.setState(e);
  }
  /**
   * Returns current state.
   *
   * @returns {object}
   */
  getState() {
    return this.store.getState();
  }
  /**
   * Shorthand to set state for a specific file.
   */
  setFileState(e, t) {
    if (!this.getState().files[e])
      throw new Error(`Can’t set state for ${e} (the file could have been removed)`);
    this.setState({
      files: {
        ...this.getState().files,
        [e]: {
          ...this.getState().files[e],
          ...t
        }
      }
    });
  }
  i18nInit() {
    const e = new Ds([this.defaultLocale, this.opts.locale]);
    this.i18n = e.translate.bind(e), this.i18nArray = e.translateArray.bind(e), this.locale = e.locale;
  }
  setOptions(e) {
    this.opts = {
      ...this.opts,
      ...e,
      restrictions: {
        ...this.opts.restrictions,
        ...e && e.restrictions
      }
    }, e.meta && this.setMeta(e.meta), this.i18nInit(), e.locale && this.iteratePlugins((t) => {
      t.setOptions(e);
    }), this.setState();
  }
  resetProgress() {
    const e = {
      percentage: 0,
      bytesUploaded: 0,
      uploadComplete: !1,
      uploadStarted: null
    }, t = {
      ...this.getState().files
    }, i = {};
    Object.keys(t).forEach((s) => {
      i[s] = {
        ...t[s],
        progress: {
          ...t[s].progress,
          ...e
        }
      };
    }), this.setState({
      files: i,
      totalProgress: 0,
      allowNewUpload: !0,
      error: null,
      recoveredState: null
    }), this.emit("reset-progress");
  }
  addPreProcessor(e) {
    D(this, it)[it].add(e);
  }
  removePreProcessor(e) {
    return D(this, it)[it].delete(e);
  }
  addPostProcessor(e) {
    D(this, $e)[$e].add(e);
  }
  removePostProcessor(e) {
    return D(this, $e)[$e].delete(e);
  }
  addUploader(e) {
    D(this, nt)[nt].add(e);
  }
  removeUploader(e) {
    return D(this, nt)[nt].delete(e);
  }
  setMeta(e) {
    const t = {
      ...this.getState().meta,
      ...e
    }, i = {
      ...this.getState().files
    };
    Object.keys(i).forEach((s) => {
      i[s] = {
        ...i[s],
        meta: {
          ...i[s].meta,
          ...e
        }
      };
    }), this.log("Adding metadata:"), this.log(e), this.setState({
      meta: t,
      files: i
    });
  }
  setFileMeta(e, t) {
    const i = {
      ...this.getState().files
    };
    if (!i[e]) {
      this.log("Was trying to set metadata for a file that has been removed: ", e);
      return;
    }
    const s = {
      ...i[e].meta,
      ...t
    };
    i[e] = {
      ...i[e],
      meta: s
    }, this.setState({
      files: i
    });
  }
  /**
   * Get a file object.
   *
   * @param {string} fileID The ID of the file object to return.
   */
  getFile(e) {
    return this.getState().files[e];
  }
  /**
   * Get all files in an array.
   */
  getFiles() {
    const {
      files: e
    } = this.getState();
    return Object.values(e);
  }
  getObjectOfFilesPerState() {
    const {
      files: e,
      totalProgress: t,
      error: i
    } = this.getState(), s = Object.values(e), n = s.filter((f) => {
      let {
        progress: v
      } = f;
      return !v.uploadComplete && v.uploadStarted;
    }), a = s.filter((f) => !f.progress.uploadStarted), o = s.filter((f) => f.progress.uploadStarted || f.progress.preprocess || f.progress.postprocess), d = s.filter((f) => f.progress.uploadStarted), l = s.filter((f) => f.isPaused), u = s.filter((f) => f.progress.uploadComplete), c = s.filter((f) => f.error), h = n.filter((f) => !f.isPaused), p = s.filter((f) => f.progress.preprocess || f.progress.postprocess);
    return {
      newFiles: a,
      startedFiles: o,
      uploadStartedFiles: d,
      pausedFiles: l,
      completeFiles: u,
      erroredFiles: c,
      inProgressFiles: n,
      inProgressNotPausedFiles: h,
      processingFiles: p,
      isUploadStarted: d.length > 0,
      isAllComplete: t === 100 && u.length === s.length && p.length === 0,
      isAllErrored: !!i && c.length === s.length,
      isAllPaused: n.length !== 0 && l.length === n.length,
      isUploadInProgress: n.length > 0,
      isSomeGhost: s.some((f) => f.isGhost)
    };
  }
  /*
  * @constructs
  * @param { Error } error
  * @param { undefined } file
  */
  /*
  * @constructs
  * @param { RestrictionError } error
  * @param { UppyFile | undefined } file
  */
  validateRestrictions(e, t) {
    t === void 0 && (t = this.getFiles());
    try {
      D(this, we)[we].validate(e, t);
    } catch (i) {
      return i;
    }
    return null;
  }
  checkIfFileAlreadyExists(e) {
    const {
      files: t
    } = this.getState();
    return !!(t[e] && !t[e].isGhost);
  }
  /**
   * Create a file state object based on user-provided `addFile()` options.
   *
   * Note this is extremely side-effectful and should only be done when a file state object
   * will be added to state immediately afterward!
   *
   * The `files` value is passed in because it may be updated by the caller without updating the store.
   */
  /**
   * Add a new file to `state.files`. This will run `onBeforeFileAdded`,
   * try to guess file type in a clever way, check file against restrictions,
   * and start an upload if `autoProceed === true`.
   *
   * @param {object} file object to add
   * @returns {string} id for the added file
   */
  addFile(e) {
    D(this, Et)[Et](e);
    const {
      files: t
    } = this.getState();
    let i = D(this, Ut)[Ut](t, e);
    return t[i.id] && t[i.id].isGhost && (i = {
      ...t[i.id],
      data: e.data,
      isGhost: !1
    }, this.log(`Replaced the blob in the restored ghost file: ${i.name}, ${i.id}`)), this.setState({
      files: {
        ...t,
        [i.id]: i
      }
    }), this.emit("file-added", i), this.emit("files-added", [i]), this.log(`Added file: ${i.name}, ${i.id}, mime type: ${i.type}`), D(this, Tt)[Tt](), i.id;
  }
  /**
   * Add multiple files to `state.files`. See the `addFile()` documentation.
   *
   * If an error occurs while adding a file, it is logged and the user is notified.
   * This is good for UI plugins, but not for programmatic use.
   * Programmatic users should usually still use `addFile()` on individual files.
   */
  addFiles(e) {
    D(this, Et)[Et]();
    const t = {
      ...this.getState().files
    }, i = [], s = [];
    for (let n = 0; n < e.length; n++)
      try {
        let a = D(this, Ut)[Ut](t, e[n]);
        t[a.id] && t[a.id].isGhost && (a = {
          ...t[a.id],
          data: e[n].data,
          isGhost: !1
        }, this.log(`Replaced blob in a ghost file: ${a.name}, ${a.id}`)), t[a.id] = a, i.push(a);
      } catch (a) {
        a.isRestriction || s.push(a);
      }
    if (this.setState({
      files: t
    }), i.forEach((n) => {
      this.emit("file-added", n);
    }), this.emit("files-added", i), i.length > 5 ? this.log(`Added batch of ${i.length} files`) : Object.keys(i).forEach((n) => {
      this.log(`Added file: ${i[n].name}
 id: ${i[n].id}
 type: ${i[n].type}`);
    }), i.length > 0 && D(this, Tt)[Tt](), s.length > 0) {
      let n = `Multiple errors occurred while adding files:
`;
      if (s.forEach((a) => {
        n += `
 * ${a.message}`;
      }), this.info({
        message: this.i18n("addBulkFilesFailed", {
          smart_count: s.length
        }),
        details: n
      }, "error", this.opts.infoTimeout), typeof AggregateError == "function")
        throw new AggregateError(s, n);
      {
        const a = new Error(n);
        throw a.errors = s, a;
      }
    }
  }
  removeFiles(e, t) {
    const {
      files: i,
      currentUploads: s
    } = this.getState(), n = {
      ...i
    }, a = {
      ...s
    }, o = /* @__PURE__ */ Object.create(null);
    e.forEach((c) => {
      i[c] && (o[c] = i[c], delete n[c]);
    });
    function d(c) {
      return o[c] === void 0;
    }
    Object.keys(a).forEach((c) => {
      const h = s[c].fileIDs.filter(d);
      if (h.length === 0) {
        delete a[c];
        return;
      }
      const {
        capabilities: p
      } = this.getState();
      if (h.length !== s[c].fileIDs.length && !p.individualCancellation)
        throw new Error("individualCancellation is disabled");
      a[c] = {
        ...s[c],
        fileIDs: h
      };
    });
    const l = {
      currentUploads: a,
      files: n
    };
    Object.keys(n).length === 0 && (l.allowNewUpload = !0, l.error = null, l.recoveredState = null), this.setState(l), this.calculateTotalProgress();
    const u = Object.keys(o);
    u.forEach((c) => {
      this.emit("file-removed", o[c], t);
    }), u.length > 5 ? this.log(`Removed ${u.length} files`) : this.log(`Removed files: ${u.join(", ")}`);
  }
  removeFile(e, t) {
    t === void 0 && (t = null), this.removeFiles([e], t);
  }
  pauseResume(e) {
    if (!this.getState().capabilities.resumableUploads || this.getFile(e).uploadComplete)
      return;
    const i = !(this.getFile(e).isPaused || !1);
    return this.setFileState(e, {
      isPaused: i
    }), this.emit("upload-pause", e, i), i;
  }
  pauseAll() {
    const e = {
      ...this.getState().files
    };
    Object.keys(e).filter((i) => !e[i].progress.uploadComplete && e[i].progress.uploadStarted).forEach((i) => {
      const s = {
        ...e[i],
        isPaused: !0
      };
      e[i] = s;
    }), this.setState({
      files: e
    }), this.emit("pause-all");
  }
  resumeAll() {
    const e = {
      ...this.getState().files
    };
    Object.keys(e).filter((i) => !e[i].progress.uploadComplete && e[i].progress.uploadStarted).forEach((i) => {
      const s = {
        ...e[i],
        isPaused: !1,
        error: null
      };
      e[i] = s;
    }), this.setState({
      files: e
    }), this.emit("resume-all");
  }
  retryAll() {
    const e = {
      ...this.getState().files
    }, t = Object.keys(e).filter((s) => e[s].error);
    if (t.forEach((s) => {
      const n = {
        ...e[s],
        isPaused: !1,
        error: null
      };
      e[s] = n;
    }), this.setState({
      files: e,
      error: null
    }), this.emit("retry-all", t), t.length === 0)
      return Promise.resolve({
        successful: [],
        failed: []
      });
    const i = D(this, Te)[Te](t, {
      forceAllowNewUpload: !0
      // create new upload even if allowNewUpload: false
    });
    return D(this, Oe)[Oe](i);
  }
  cancelAll(e) {
    let {
      reason: t = "user"
    } = e === void 0 ? {} : e;
    if (this.emit("cancel-all", {
      reason: t
    }), t === "user") {
      const {
        files: i
      } = this.getState(), s = Object.keys(i);
      s.length && this.removeFiles(s, "cancel-all"), this.setState({
        totalProgress: 0,
        error: null,
        recoveredState: null
      });
    }
  }
  retryUpload(e) {
    this.setFileState(e, {
      error: null,
      isPaused: !1
    }), this.emit("upload-retry", e);
    const t = D(this, Te)[Te]([e], {
      forceAllowNewUpload: !0
      // create new upload even if allowNewUpload: false
    });
    return D(this, Oe)[Oe](t);
  }
  logout() {
    this.iteratePlugins((e) => {
      e.provider && e.provider.logout && e.provider.logout();
    });
  }
  calculateProgress(e, t) {
    if (e == null || !this.getFile(e.id)) {
      this.log(`Not setting progress for a file that has been removed: ${e == null ? void 0 : e.id}`);
      return;
    }
    const i = Number.isFinite(t.bytesTotal) && t.bytesTotal > 0;
    this.setFileState(e.id, {
      progress: {
        ...this.getFile(e.id).progress,
        bytesUploaded: t.bytesUploaded,
        bytesTotal: t.bytesTotal,
        percentage: i ? Math.round(t.bytesUploaded / t.bytesTotal * 100) : 0
      }
    }), this.calculateTotalProgress();
  }
  calculateTotalProgress() {
    const t = this.getFiles().filter((l) => l.progress.uploadStarted || l.progress.preprocess || l.progress.postprocess);
    if (t.length === 0) {
      this.emit("progress", 0), this.setState({
        totalProgress: 0
      });
      return;
    }
    const i = t.filter((l) => l.progress.bytesTotal != null), s = t.filter((l) => l.progress.bytesTotal == null);
    if (i.length === 0) {
      const l = t.length * 100, u = s.reduce((h, p) => h + p.progress.percentage, 0), c = Math.round(u / l * 100);
      this.setState({
        totalProgress: c
      });
      return;
    }
    let n = i.reduce((l, u) => l + u.progress.bytesTotal, 0);
    const a = n / i.length;
    n += a * s.length;
    let o = 0;
    i.forEach((l) => {
      o += l.progress.bytesUploaded;
    }), s.forEach((l) => {
      o += a * (l.progress.percentage || 0) / 100;
    });
    let d = n === 0 ? 0 : Math.round(o / n * 100);
    d > 100 && (d = 100), this.setState({
      totalProgress: d
    }), this.emit("progress", d);
  }
  /**
   * Registers listeners for all global actions, like:
   * `error`, `file-removed`, `upload-progress`
   */
  updateOnlineStatus() {
    (typeof window.navigator.onLine < "u" ? window.navigator.onLine : !0) ? (this.emit("is-online"), this.wasOffline && (this.emit("back-online"), this.info(this.i18n("connectedToInternet"), "success", 3e3), this.wasOffline = !1)) : (this.emit("is-offline"), this.info(this.i18n("noInternetConnection"), "error", 0), this.wasOffline = !0);
  }
  getID() {
    return this.opts.id;
  }
  /**
   * Registers a plugin with Core.
   *
   * @param {object} Plugin object
   * @param {object} [opts] object with options to be passed to Plugin
   * @returns {object} self for chaining
   */
  // eslint-disable-next-line no-shadow
  use(e, t) {
    if (typeof e != "function") {
      const a = `Expected a plugin class, but got ${e === null ? "null" : typeof e}. Please verify that the plugin was imported and spelled correctly.`;
      throw new TypeError(a);
    }
    const i = new e(this, t), s = i.id;
    if (!s)
      throw new Error("Your plugin must have an id");
    if (!i.type)
      throw new Error("Your plugin must have a type");
    const n = this.getPlugin(s);
    if (n) {
      const a = `Already found a plugin named '${n.id}'. Tried to use: '${s}'.
Uppy plugins must have unique \`id\` options. See https://uppy.io/docs/plugins/#id.`;
      throw new Error(a);
    }
    return e.VERSION && this.log(`Using ${s} v${e.VERSION}`), i.type in D(this, ie)[ie] ? D(this, ie)[ie][i.type].push(i) : D(this, ie)[ie][i.type] = [i], i.install(), this;
  }
  /**
   * Find one Plugin by name.
   *
   * @param {string} id plugin id
   * @returns {BasePlugin|undefined}
   */
  getPlugin(e) {
    for (const t of Object.values(D(this, ie)[ie])) {
      const i = t.find((s) => s.id === e);
      if (i != null)
        return i;
    }
  }
  [js](e) {
    return D(this, ie)[ie][e];
  }
  /**
   * Iterate through all `use`d plugins.
   *
   * @param {Function} method that will be run on each plugin
   */
  iteratePlugins(e) {
    Object.values(D(this, ie)[ie]).flat(1).forEach(e);
  }
  /**
   * Uninstall and remove a plugin.
   *
   * @param {object} instance The plugin instance to remove.
   */
  removePlugin(e) {
    this.log(`Removing plugin ${e.id}`), this.emit("plugin-remove", e), e.uninstall && e.uninstall();
    const t = D(this, ie)[ie][e.type], i = t.findIndex((a) => a.id === e.id);
    i !== -1 && t.splice(i, 1);
    const n = {
      plugins: {
        ...this.getState().plugins,
        [e.id]: void 0
      }
    };
    this.setState(n);
  }
  /**
   * Uninstall all plugins and close down this Uppy instance.
   */
  close(e) {
    let {
      reason: t
    } = e === void 0 ? {} : e;
    this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`), this.cancelAll({
      reason: t
    }), D(this, At)[At](), this.iteratePlugins((i) => {
      this.removePlugin(i);
    }), typeof window < "u" && window.removeEventListener && (window.removeEventListener("online", D(this, Pe)[Pe]), window.removeEventListener("offline", D(this, Pe)[Pe]));
  }
  hideInfo() {
    const {
      info: e
    } = this.getState();
    this.setState({
      info: e.slice(1)
    }), this.emit("info-hidden");
  }
  /**
   * Set info message in `state.info`, so that UI plugins like `Informer`
   * can display the message.
   *
   * @param {string | object} message Message to be displayed by the informer
   * @param {string} [type]
   * @param {number} [duration]
   */
  info(e, t, i) {
    t === void 0 && (t = "info"), i === void 0 && (i = 3e3);
    const s = typeof e == "object";
    this.setState({
      info: [...this.getState().info, {
        type: t,
        message: s ? e.message : e,
        details: s ? e.details : null
      }]
    }), setTimeout(() => this.hideInfo(), i), this.emit("info-visible");
  }
  /**
   * Passes messages to a function, provided in `opts.logger`.
   * If `opts.logger: Uppy.debugLogger` or `opts.debug: true`, logs to the browser console.
   *
   * @param {string|object} message to log
   * @param {string} [type] optional `error` or `warning`
   */
  log(e, t) {
    const {
      logger: i
    } = this.opts;
    switch (t) {
      case "error":
        i.error(e);
        break;
      case "warning":
        i.warn(e);
        break;
      default:
        i.debug(e);
        break;
    }
  }
  /**
   * Restore an upload by its ID.
   */
  restore(e) {
    return this.log(`Core: attempting to restore upload "${e}"`), this.getState().currentUploads[e] ? D(this, Oe)[Oe](e) : (D(this, at)[at](e), Promise.reject(new Error("Nonexistent upload")));
  }
  /**
   * Create an upload for a bunch of files.
   *
   * @param {Array<string>} fileIDs File IDs to include in this upload.
   * @returns {string} ID of this upload.
   */
  [qs]() {
    return D(this, Te)[Te](...arguments);
  }
  /**
   * Add data to an upload's result object.
   *
   * @param {string} uploadID The ID of the upload.
   * @param {object} data Data properties to add to the result object.
   */
  addResultData(e, t) {
    if (!D(this, jr)[jr](e)) {
      this.log(`Not setting result for an upload that has been removed: ${e}`);
      return;
    }
    const {
      currentUploads: i
    } = this.getState(), s = {
      ...i[e],
      result: {
        ...i[e].result,
        ...t
      }
    };
    this.setState({
      currentUploads: {
        ...i,
        [e]: s
      }
    });
  }
  /**
   * Remove an upload, eg. if it has been canceled or completed.
   *
   * @param {string} uploadID The ID of the upload.
   */
  /**
   * Start an upload for all the files that are not currently being uploaded.
   *
   * @returns {Promise}
   */
  upload() {
    var e;
    (e = D(this, ie)[ie].uploader) != null && e.length || this.log("No uploader type plugins are used", "warning");
    let {
      files: t
    } = this.getState();
    const i = this.opts.onBeforeUpload(t);
    return i === !1 ? Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false")) : (i && typeof i == "object" && (t = i, this.setState({
      files: t
    })), Promise.resolve().then(() => D(this, we)[we].validateMinNumberOfFiles(t)).catch((s) => {
      throw D(this, pe)[pe](s), s;
    }).then(() => {
      if (!D(this, Mr)[Mr](t))
        throw new _e(this.i18n("missingRequiredMetaField"));
    }).catch((s) => {
      throw s;
    }).then(() => {
      const {
        currentUploads: s
      } = this.getState(), n = Object.values(s).flatMap((d) => d.fileIDs), a = [];
      Object.keys(t).forEach((d) => {
        const l = this.getFile(d);
        !l.progress.uploadStarted && n.indexOf(d) === -1 && a.push(l.id);
      });
      const o = D(this, Te)[Te](a);
      return D(this, Oe)[Oe](o);
    }).catch((s) => {
      throw this.emit("error", s), this.log(s, "error"), s;
    }));
  }
}
function pl(r, e) {
  const {
    message: t,
    details: i = ""
  } = r;
  r.isRestriction ? this.emit("restriction-failed", e, r) : this.emit("error", r), this.info({
    message: t,
    details: i
  }, "error", this.opts.infoTimeout), this.log(r, "warning");
}
function ml(r) {
  const {
    missingFields: e,
    error: t
  } = D(this, we)[we].getMissingRequiredMetaFields(r);
  return e.length > 0 ? (this.setFileState(r.id, {
    missingRequiredMetaFields: e
  }), this.log(t.message), this.emit("restriction-failed", r, t), !1) : !0;
}
function gl(r) {
  let e = !0;
  for (const t of Object.values(r))
    D(this, Yt)[Yt](t) || (e = !1);
  return e;
}
function vl(r) {
  const {
    allowNewUpload: e
  } = this.getState();
  if (e === !1) {
    const t = new _e(this.i18n("noMoreFilesAllowed"));
    throw D(this, pe)[pe](t, r), t;
  }
}
function yl(r, e) {
  e instanceof File && (e = {
    name: e.name,
    type: e.type,
    size: e.size,
    data: e
  });
  const t = Ms(e), i = rl(t, e), s = Ls(i).extension, n = !!e.isRemote, a = el(e);
  if (this.checkIfFileAlreadyExists(a)) {
    const c = new _e(this.i18n("noDuplicates", {
      fileName: i
    }));
    throw D(this, pe)[pe](c, e), c;
  }
  const o = e.meta || {};
  o.name = i, o.type = t;
  const d = Number.isFinite(e.data.size) ? e.data.size : null;
  let l = {
    source: e.source || "",
    id: a,
    name: i,
    extension: s || "",
    meta: {
      ...this.getState().meta,
      ...o
    },
    type: t,
    data: e.data,
    progress: {
      percentage: 0,
      bytesUploaded: 0,
      bytesTotal: d,
      uploadComplete: !1,
      uploadStarted: null
    },
    size: d,
    isRemote: n,
    remote: e.remote || "",
    preview: e.preview
  };
  const u = this.opts.onBeforeFileAdded(l, r);
  if (u === !1) {
    const c = new _e("Cannot add the file because onBeforeFileAdded returned false.");
    throw this.emit("restriction-failed", e, c), c;
  } else
    typeof u == "object" && u !== null && (l = u);
  try {
    const c = Object.keys(r).map((h) => r[h]);
    D(this, we)[we].validate(l, c);
  } catch (c) {
    throw D(this, pe)[pe](c, l), c;
  }
  return l;
}
function xl() {
  this.opts.autoProceed && !this.scheduledAutoProceed && (this.scheduledAutoProceed = setTimeout(() => {
    this.scheduledAutoProceed = null, this.upload().catch((r) => {
      r.isRestriction || this.log(r.stack || r.message || r);
    });
  }, 4));
}
function bl() {
  const r = (t, i, s) => {
    let n = t.message || "Unknown error";
    t.details && (n += ` ${t.details}`), this.setState({
      error: n
    }), i != null && i.id in this.getState().files && this.setFileState(i.id, {
      error: n,
      response: s
    });
  };
  this.on("error", r), this.on("upload-error", (t, i, s) => {
    if (r(i, t, s), typeof i == "object" && i.message) {
      const n = new Error(i.message);
      n.details = i.message, i.details && (n.details += ` ${i.details}`), n.message = this.i18n("failedToUpload", {
        file: t == null ? void 0 : t.name
      }), D(this, pe)[pe](n);
    } else
      D(this, pe)[pe](i);
  });
  let e;
  this.on("upload-stalled", (t, i) => {
    const {
      message: s
    } = t, n = i.map((a) => a.meta.name).join(", ");
    e || (this.info({
      message: s,
      details: n
    }, "warning", this.opts.infoTimeout), e = setTimeout(() => {
      e = null;
    }, this.opts.infoTimeout)), this.log(`${s} ${n}`.trim(), "warning");
  }), this.on("upload", () => {
    this.setState({
      error: null
    });
  }), this.on("upload-started", (t) => {
    if (t == null || !this.getFile(t.id)) {
      this.log(`Not setting progress for a file that has been removed: ${t == null ? void 0 : t.id}`);
      return;
    }
    this.setFileState(t.id, {
      progress: {
        uploadStarted: Date.now(),
        uploadComplete: !1,
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: t.size
      }
    });
  }), this.on("upload-progress", this.calculateProgress), this.on("upload-success", (t, i) => {
    if (t == null || !this.getFile(t.id)) {
      this.log(`Not setting progress for a file that has been removed: ${t == null ? void 0 : t.id}`);
      return;
    }
    const s = this.getFile(t.id).progress;
    this.setFileState(t.id, {
      progress: {
        ...s,
        postprocess: D(this, $e)[$e].size > 0 ? {
          mode: "indeterminate"
        } : null,
        uploadComplete: !0,
        percentage: 100,
        bytesUploaded: s.bytesTotal
      },
      response: i,
      uploadURL: i.uploadURL,
      isPaused: !1
    }), t.size == null && this.setFileState(t.id, {
      size: i.bytesUploaded || s.bytesTotal
    }), this.calculateTotalProgress();
  }), this.on("preprocess-progress", (t, i) => {
    if (t == null || !this.getFile(t.id)) {
      this.log(`Not setting progress for a file that has been removed: ${t == null ? void 0 : t.id}`);
      return;
    }
    this.setFileState(t.id, {
      progress: {
        ...this.getFile(t.id).progress,
        preprocess: i
      }
    });
  }), this.on("preprocess-complete", (t) => {
    if (t == null || !this.getFile(t.id)) {
      this.log(`Not setting progress for a file that has been removed: ${t == null ? void 0 : t.id}`);
      return;
    }
    const i = {
      ...this.getState().files
    };
    i[t.id] = {
      ...i[t.id],
      progress: {
        ...i[t.id].progress
      }
    }, delete i[t.id].progress.preprocess, this.setState({
      files: i
    });
  }), this.on("postprocess-progress", (t, i) => {
    if (t == null || !this.getFile(t.id)) {
      this.log(`Not setting progress for a file that has been removed: ${t == null ? void 0 : t.id}`);
      return;
    }
    this.setFileState(t.id, {
      progress: {
        ...this.getState().files[t.id].progress,
        postprocess: i
      }
    });
  }), this.on("postprocess-complete", (t) => {
    if (t == null || !this.getFile(t.id)) {
      this.log(`Not setting progress for a file that has been removed: ${t == null ? void 0 : t.id}`);
      return;
    }
    const i = {
      ...this.getState().files
    };
    i[t.id] = {
      ...i[t.id],
      progress: {
        ...i[t.id].progress
      }
    }, delete i[t.id].progress.postprocess, this.setState({
      files: i
    });
  }), this.on("restored", () => {
    this.calculateTotalProgress();
  }), this.on("dashboard:file-edit-complete", (t) => {
    t && D(this, Yt)[Yt](t);
  }), typeof window < "u" && window.addEventListener && (window.addEventListener("online", D(this, Pe)[Pe]), window.addEventListener("offline", D(this, Pe)[Pe]), setTimeout(D(this, Pe)[Pe], 3e3));
}
function _l(r, e) {
  e === void 0 && (e = {});
  const {
    forceAllowNewUpload: t = !1
  } = e, {
    allowNewUpload: i,
    currentUploads: s
  } = this.getState();
  if (!i && !t)
    throw new Error("Cannot create a new upload: already uploading.");
  const n = Oi();
  return this.emit("upload", {
    id: n,
    fileIDs: r
  }), this.setState({
    allowNewUpload: this.opts.allowMultipleUploadBatches !== !1 && this.opts.allowMultipleUploads !== !1,
    currentUploads: {
      ...s,
      [n]: {
        fileIDs: r,
        step: 0,
        result: {}
      }
    }
  }), n;
}
function wl(r) {
  const {
    currentUploads: e
  } = this.getState();
  return e[r];
}
function Sl(r) {
  const e = {
    ...this.getState().currentUploads
  };
  delete e[r], this.setState({
    currentUploads: e
  });
}
async function Pl(r) {
  let {
    currentUploads: e
  } = this.getState(), t = e[r];
  const i = t.step || 0, s = [...D(this, it)[it], ...D(this, nt)[nt], ...D(this, $e)[$e]];
  try {
    for (let a = i; a < s.length && t; a++) {
      const o = s[a], d = {
        ...t,
        step: a
      };
      this.setState({
        currentUploads: {
          ...e,
          [r]: d
        }
      }), await o(d.fileIDs, r), e = this.getState().currentUploads, t = e[r];
    }
  } catch (a) {
    throw D(this, at)[at](r), a;
  }
  if (t) {
    t.fileIDs.forEach((l) => {
      const u = this.getFile(l);
      u && u.progress.postprocess && this.emit("postprocess-complete", u);
    });
    const a = t.fileIDs.map((l) => this.getFile(l)), o = a.filter((l) => !l.error), d = a.filter((l) => l.error);
    await this.addResultData(r, {
      successful: o,
      failed: d,
      uploadID: r
    }), e = this.getState().currentUploads, t = e[r];
  }
  let n;
  return t && (n = t.result, this.emit("complete", n), D(this, at)[at](r)), n == null && this.log(`Not setting result for an upload that has been removed: ${r}`), n;
}
Ws.VERSION = fl.version;
var rr, z, Vs, st, gn, Gs, ci, Fr = {}, Ks = [], Fl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Le(r, e) {
  for (var t in e)
    r[t] = e[t];
  return r;
}
function Xs(r) {
  var e = r.parentNode;
  e && e.removeChild(r);
}
function m(r, e, t) {
  var i, s, n, a = {};
  for (n in e)
    n == "key" ? i = e[n] : n == "ref" ? s = e[n] : a[n] = e[n];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? rr.call(arguments, 2) : t), typeof r == "function" && r.defaultProps != null)
    for (n in r.defaultProps)
      a[n] === void 0 && (a[n] = r.defaultProps[n]);
  return Gt(r, a, i, s, null);
}
function Gt(r, e, t, i, s) {
  var n = { type: r, props: e, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Vs };
  return s == null && z.vnode != null && z.vnode(n), n;
}
function Cl() {
  return { current: null };
}
function Ve(r) {
  return r.children;
}
function ke(r, e) {
  this.props = r, this.context = e;
}
function Jt(r, e) {
  if (e == null)
    return r.__ ? Jt(r.__, r.__.__k.indexOf(r) + 1) : null;
  for (var t; e < r.__k.length; e++)
    if ((t = r.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof r.type == "function" ? Jt(r) : null;
}
function Ys(r) {
  var e, t;
  if ((r = r.__) != null && r.__c != null) {
    for (r.__e = r.__c.base = null, e = 0; e < r.__k.length; e++)
      if ((t = r.__k[e]) != null && t.__e != null) {
        r.__e = r.__c.base = t.__e;
        break;
      }
    return Ys(r);
  }
}
function vn(r) {
  (!r.__d && (r.__d = !0) && st.push(r) && !Cr.__r++ || gn !== z.debounceRendering) && ((gn = z.debounceRendering) || Gs)(Cr);
}
function Cr() {
  var r, e, t, i, s, n, a, o;
  for (st.sort(ci); r = st.shift(); )
    r.__d && (e = st.length, i = void 0, s = void 0, a = (n = (t = r).__v).__e, (o = t.__P) && (i = [], (s = Le({}, n)).__v = n.__v + 1, Ri(o, n, s, t.__n, o.ownerSVGElement !== void 0, n.__h != null ? [a] : null, i, a ?? Jt(n), n.__h), ta(i, n), n.__e != a && Ys(n)), st.length > e && st.sort(ci));
  Cr.__r = 0;
}
function Js(r, e, t, i, s, n, a, o, d, l) {
  var u, c, h, p, f, v, y, _ = i && i.__k || Ks, g = _.length;
  for (t.__k = [], u = 0; u < e.length; u++)
    if ((p = t.__k[u] = (p = e[u]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Gt(null, p, null, null, p) : Array.isArray(p) ? Gt(Ve, { children: p }, null, null, null) : p.__b > 0 ? Gt(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null) {
      if (p.__ = t, p.__b = t.__b + 1, (h = _[u]) === null || h && p.key == h.key && p.type === h.type)
        _[u] = void 0;
      else
        for (c = 0; c < g; c++) {
          if ((h = _[c]) && p.key == h.key && p.type === h.type) {
            _[c] = void 0;
            break;
          }
          h = null;
        }
      Ri(r, p, h = h || Fr, s, n, a, o, d, l), f = p.__e, (c = p.ref) && h.ref != c && (y || (y = []), h.ref && y.push(h.ref, null, p), y.push(c, p.__c || f, p)), f != null ? (v == null && (v = f), typeof p.type == "function" && p.__k === h.__k ? p.__d = d = Qs(p, d, r) : d = Zs(r, p, h, _, f, d), typeof t.type == "function" && (t.__d = d)) : d && h.__e == d && d.parentNode != r && (d = Jt(h));
    }
  for (t.__e = v, u = g; u--; )
    _[u] != null && (typeof t.type == "function" && _[u].__e != null && _[u].__e == t.__d && (t.__d = ea(i).nextSibling), ia(_[u], _[u]));
  if (y)
    for (u = 0; u < y.length; u++)
      ra(y[u], y[++u], y[++u]);
}
function Qs(r, e, t) {
  for (var i, s = r.__k, n = 0; s && n < s.length; n++)
    (i = s[n]) && (i.__ = r, e = typeof i.type == "function" ? Qs(i, e, t) : Zs(t, i, i, s, i.__e, e));
  return e;
}
function je(r, e) {
  return e = e || [], r == null || typeof r == "boolean" || (Array.isArray(r) ? r.some(function(t) {
    je(t, e);
  }) : e.push(r)), e;
}
function Zs(r, e, t, i, s, n) {
  var a, o, d;
  if (e.__d !== void 0)
    a = e.__d, e.__d = void 0;
  else if (t == null || s != n || s.parentNode == null)
    e:
      if (n == null || n.parentNode !== r)
        r.appendChild(s), a = null;
      else {
        for (o = n, d = 0; (o = o.nextSibling) && d < i.length; d += 1)
          if (o == s)
            break e;
        r.insertBefore(s, n), a = n;
      }
  return a !== void 0 ? a : s.nextSibling;
}
function ea(r) {
  var e, t, i;
  if (r.type == null || typeof r.type == "string")
    return r.__e;
  if (r.__k) {
    for (e = r.__k.length - 1; e >= 0; e--)
      if ((t = r.__k[e]) && (i = ea(t)))
        return i;
  }
  return null;
}
function kl(r, e, t, i, s) {
  var n;
  for (n in t)
    n === "children" || n === "key" || n in e || kr(r, n, null, t[n], i);
  for (n in e)
    s && typeof e[n] != "function" || n === "children" || n === "key" || n === "value" || n === "checked" || t[n] === e[n] || kr(r, n, e[n], t[n], i);
}
function yn(r, e, t) {
  e[0] === "-" ? r.setProperty(e, t ?? "") : r[e] = t == null ? "" : typeof t != "number" || Fl.test(e) ? t : t + "px";
}
function kr(r, e, t, i, s) {
  var n;
  e:
    if (e === "style")
      if (typeof t == "string")
        r.style.cssText = t;
      else {
        if (typeof i == "string" && (r.style.cssText = i = ""), i)
          for (e in i)
            t && e in t || yn(r.style, e, "");
        if (t)
          for (e in t)
            i && t[e] === i[e] || yn(r.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      n = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in r ? e.toLowerCase().slice(2) : e.slice(2), r.l || (r.l = {}), r.l[e + n] = t, t ? i || r.addEventListener(e, n ? bn : xn, n) : r.removeEventListener(e, n ? bn : xn, n);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in r)
        try {
          r[e] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? r.removeAttribute(e) : r.setAttribute(e, t));
    }
}
function xn(r) {
  return this.l[r.type + !1](z.event ? z.event(r) : r);
}
function bn(r) {
  return this.l[r.type + !0](z.event ? z.event(r) : r);
}
function Ri(r, e, t, i, s, n, a, o, d) {
  var l, u, c, h, p, f, v, y, _, g, x, b, C, w, F, P = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (d = t.__h, o = e.__e = t.__e, e.__h = null, n = [o]), (l = z.__b) && l(e);
  try {
    e:
      if (typeof P == "function") {
        if (y = e.props, _ = (l = P.contextType) && i[l.__c], g = l ? _ ? _.props.value : l.__ : i, t.__c ? v = (u = e.__c = t.__c).__ = u.__E : ("prototype" in P && P.prototype.render ? e.__c = u = new P(y, g) : (e.__c = u = new ke(y, g), u.constructor = P, u.render = El), _ && _.sub(u), u.props = y, u.state || (u.state = {}), u.context = g, u.__n = i, c = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), P.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Le({}, u.__s)), Le(u.__s, P.getDerivedStateFromProps(y, u.__s))), h = u.props, p = u.state, u.__v = e, c)
          P.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (P.getDerivedStateFromProps == null && y !== h && u.componentWillReceiveProps != null && u.componentWillReceiveProps(y, g), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(y, u.__s, g) === !1 || e.__v === t.__v) {
            for (e.__v !== t.__v && (u.props = y, u.state = u.__s, u.__d = !1), u.__e = !1, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(A) {
              A && (A.__ = e);
            }), x = 0; x < u._sb.length; x++)
              u.__h.push(u._sb[x]);
            u._sb = [], u.__h.length && a.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(y, u.__s, g), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(h, p, f);
          });
        }
        if (u.context = g, u.props = y, u.__P = r, b = z.__r, C = 0, "prototype" in P && P.prototype.render) {
          for (u.state = u.__s, u.__d = !1, b && b(e), l = u.render(u.props, u.state, u.context), w = 0; w < u._sb.length; w++)
            u.__h.push(u._sb[w]);
          u._sb = [];
        } else
          do
            u.__d = !1, b && b(e), l = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++C < 25);
        u.state = u.__s, u.getChildContext != null && (i = Le(Le({}, i), u.getChildContext())), c || u.getSnapshotBeforeUpdate == null || (f = u.getSnapshotBeforeUpdate(h, p)), F = l != null && l.type === Ve && l.key == null ? l.props.children : l, Js(r, Array.isArray(F) ? F : [F], e, t, i, s, n, a, o, d), u.base = e.__e, e.__h = null, u.__h.length && a.push(u), v && (u.__E = u.__ = null), u.__e = !1;
      } else
        n == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Al(t.__e, e, t, i, s, n, a, d);
    (l = z.diffed) && l(e);
  } catch (A) {
    e.__v = null, (d || n != null) && (e.__e = o, e.__h = !!d, n[n.indexOf(o)] = null), z.__e(A, e, t);
  }
}
function ta(r, e) {
  z.__c && z.__c(e, r), r.some(function(t) {
    try {
      r = t.__h, t.__h = [], r.some(function(i) {
        i.call(t);
      });
    } catch (i) {
      z.__e(i, t.__v);
    }
  });
}
function Al(r, e, t, i, s, n, a, o) {
  var d, l, u, c = t.props, h = e.props, p = e.type, f = 0;
  if (p === "svg" && (s = !0), n != null) {
    for (; f < n.length; f++)
      if ((d = n[f]) && "setAttribute" in d == !!p && (p ? d.localName === p : d.nodeType === 3)) {
        r = d, n[f] = null;
        break;
      }
  }
  if (r == null) {
    if (p === null)
      return document.createTextNode(h);
    r = s ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, h.is && h), n = null, o = !1;
  }
  if (p === null)
    c === h || o && r.data === h || (r.data = h);
  else {
    if (n = n && rr.call(r.childNodes), l = (c = t.props || Fr).dangerouslySetInnerHTML, u = h.dangerouslySetInnerHTML, !o) {
      if (n != null)
        for (c = {}, f = 0; f < r.attributes.length; f++)
          c[r.attributes[f].name] = r.attributes[f].value;
      (u || l) && (u && (l && u.__html == l.__html || u.__html === r.innerHTML) || (r.innerHTML = u && u.__html || ""));
    }
    if (kl(r, h, c, s, o), u)
      e.__k = [];
    else if (f = e.props.children, Js(r, Array.isArray(f) ? f : [f], e, t, i, s && p !== "foreignObject", n, a, n ? n[0] : t.__k && Jt(t, 0), o), n != null)
      for (f = n.length; f--; )
        n[f] != null && Xs(n[f]);
    o || ("value" in h && (f = h.value) !== void 0 && (f !== r.value || p === "progress" && !f || p === "option" && f !== c.value) && kr(r, "value", f, c.value, !1), "checked" in h && (f = h.checked) !== void 0 && f !== r.checked && kr(r, "checked", f, c.checked, !1));
  }
  return r;
}
function ra(r, e, t) {
  try {
    typeof r == "function" ? r(e) : r.current = e;
  } catch (i) {
    z.__e(i, t);
  }
}
function ia(r, e, t) {
  var i, s;
  if (z.unmount && z.unmount(r), (i = r.ref) && (i.current && i.current !== r.__e || ra(i, null, e)), (i = r.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (n) {
        z.__e(n, e);
      }
    i.base = i.__P = null, r.__c = void 0;
  }
  if (i = r.__k)
    for (s = 0; s < i.length; s++)
      i[s] && ia(i[s], e, t || typeof r.type != "function");
  t || r.__e == null || Xs(r.__e), r.__ = r.__e = r.__d = void 0;
}
function El(r, e, t) {
  return this.constructor(r, t);
}
function _n(r, e, t) {
  var i, s, n;
  z.__ && z.__(r, e), s = (i = typeof t == "function") ? null : t && t.__k || e.__k, n = [], Ri(e, r = (!i && t || e).__k = m(Ve, null, [r]), s || Fr, Fr, e.ownerSVGElement !== void 0, !i && t ? [t] : s ? null : e.firstChild ? rr.call(e.childNodes) : null, n, !i && t ? t : s ? s.__e : e.firstChild, i), ta(n, r);
}
function na(r, e, t) {
  var i, s, n, a = Le({}, r.props);
  for (n in e)
    n == "key" ? i = e[n] : n == "ref" ? s = e[n] : a[n] = e[n];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? rr.call(arguments, 2) : t), Gt(r.type, a, i || r.key, s || r.ref, null);
}
rr = Ks.slice, z = { __e: function(r, e, t, i) {
  for (var s, n, a; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((n = s.constructor) && n.getDerivedStateFromError != null && (s.setState(n.getDerivedStateFromError(r)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(r, i || {}), a = s.__d), a)
          return s.__E = s;
      } catch (o) {
        r = o;
      }
  throw r;
} }, Vs = 0, ke.prototype.setState = function(r, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Le({}, this.state), typeof r == "function" && (r = r(Le({}, t), this.props)), r && Le(t, r), r != null && this.__v && (e && this._sb.push(e), vn(this));
}, ke.prototype.forceUpdate = function(r) {
  this.__v && (this.__e = !0, r && this.__h.push(r), vn(this));
}, ke.prototype.render = Ve, st = [], Gs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ci = function(r, e) {
  return r.__v.__b - e.__v.__b;
}, Cr.__r = 0;
function sa(r) {
  return (r == null ? void 0 : r.nodeType) === Node.ELEMENT_NODE;
}
function Ul(r, e) {
  return e === void 0 && (e = document), typeof r == "string" ? e.querySelector(r) : sa(r) ? r : null;
}
function aa(r) {
  for (var e; r && !r.dir; )
    r = r.parentNode;
  return (e = r) == null ? void 0 : e.dir;
}
class Di {
  constructor(e, t) {
    t === void 0 && (t = {}), this.uppy = e, this.opts = t;
  }
  getPluginState() {
    const {
      plugins: e
    } = this.uppy.getState();
    return e[this.id] || {};
  }
  setPluginState(e) {
    const {
      plugins: t
    } = this.uppy.getState();
    this.uppy.setState({
      plugins: {
        ...t,
        [this.id]: {
          ...t[this.id],
          ...e
        }
      }
    });
  }
  setOptions(e) {
    this.opts = {
      ...this.opts,
      ...e
    }, this.setPluginState(), this.i18nInit();
  }
  i18nInit() {
    const e = new Ds([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = e.translate.bind(e), this.i18nArray = e.translateArray.bind(e), this.setPluginState();
  }
  /**
   * Extendable methods
   * ==================
   * These methods are here to serve as an overview of the extendable methods as well as
   * making them not conditional in use, such as `if (this.afterUpdate)`.
   */
  // eslint-disable-next-line class-methods-use-this
  addTarget() {
    throw new Error("Extend the addTarget method to add your plugin to another plugin's target");
  }
  // eslint-disable-next-line class-methods-use-this
  install() {
  }
  // eslint-disable-next-line class-methods-use-this
  uninstall() {
  }
  /**
   * Called when plugin is mounted, whether in DOM or into another plugin.
   * Needed because sometimes plugins are mounted separately/after `install`,
   * so this.el and this.parent might not be available in `install`.
   * This is the case with @uppy/react plugins, for example.
   */
  render() {
    throw new Error("Extend the render method to add your plugin to a DOM element");
  }
  // eslint-disable-next-line class-methods-use-this
  update() {
  }
  // Called after every state update, after everything's mounted. Debounced.
  // eslint-disable-next-line class-methods-use-this
  afterUpdate() {
  }
}
function wn(r, e) {
  if (!Object.prototype.hasOwnProperty.call(r, e))
    throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var Tl = 0;
function Ol(r) {
  return "__private_" + Tl++ + "_" + r;
}
function Bl(r) {
  let e = null, t = null;
  return function() {
    for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
      s[n] = arguments[n];
    return t = s, e || (e = Promise.resolve().then(() => (e = null, r(...t)))), e;
  };
}
var Ot = /* @__PURE__ */ Ol("updateUI");
class yt extends Di {
  constructor() {
    super(...arguments), Object.defineProperty(this, Ot, {
      writable: !0,
      value: void 0
    });
  }
  getTargetPlugin(e) {
    let t;
    if (typeof e == "object" && e instanceof yt)
      t = e;
    else if (typeof e == "function") {
      const i = e;
      this.uppy.iteratePlugins((s) => {
        s instanceof i && (t = s);
      });
    }
    return t;
  }
  /**
   * Check if supplied `target` is a DOM element or an `object`.
   * If it’s an object — target is a plugin, and we search `plugins`
   * for a plugin with same name and return its target.
   */
  mount(e, t) {
    const i = t.id, s = Ul(e);
    if (s) {
      this.isTargetDOMEl = !0;
      const o = document.createElement("div");
      return o.classList.add("uppy-Root"), wn(this, Ot)[Ot] = Bl((d) => {
        this.uppy.getPlugin(this.id) && (_n(this.render(d), o), this.afterUpdate());
      }), this.uppy.log(`Installing ${i} to a DOM element '${e}'`), this.opts.replaceTargetContent && (s.innerHTML = ""), _n(this.render(this.uppy.getState()), o), this.el = o, s.appendChild(o), o.dir = this.opts.direction || aa(o) || "ltr", this.onMount(), this.el;
    }
    const n = this.getTargetPlugin(e);
    if (n)
      return this.uppy.log(`Installing ${i} to ${n.id}`), this.parent = n, this.el = n.addTarget(t), this.onMount(), this.el;
    this.uppy.log(`Not installing ${i}`);
    let a = `Invalid target option given to ${i}.`;
    throw typeof e == "function" ? a += " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly." : a += "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.", new Error(a);
  }
  update(e) {
    if (this.el != null) {
      var t, i;
      (t = (i = wn(this, Ot))[Ot]) == null || t.call(i, e);
    }
  }
  unmount() {
    if (this.isTargetDOMEl) {
      var e;
      (e = this.el) == null || e.remove();
    }
    this.onUnmount();
  }
  // eslint-disable-next-line class-methods-use-this
  onMount() {
  }
  // eslint-disable-next-line class-methods-use-this
  onUnmount() {
  }
}
function Rl(r) {
  if (!r.bytesUploaded)
    return 0;
  const e = Date.now() - r.uploadStarted;
  return r.bytesUploaded / (e / 1e3);
}
function Dl(r) {
  return r.bytesTotal - r.bytesUploaded;
}
const ve = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete"
};
var me = {}, Nl = {
  get exports() {
    return me;
  },
  set exports(r) {
    me = r;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(r) {
  (function() {
    var e = {}.hasOwnProperty;
    function t() {
      for (var i = [], s = 0; s < arguments.length; s++) {
        var n = arguments[s];
        if (n) {
          var a = typeof n;
          if (a === "string" || a === "number")
            i.push(n);
          else if (Array.isArray(n)) {
            if (n.length) {
              var o = t.apply(null, n);
              o && i.push(o);
            }
          } else if (a === "object") {
            if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
              i.push(n.toString());
              continue;
            }
            for (var d in n)
              e.call(n, d) && n[d] && i.push(d);
          }
        }
      }
      return i.join(" ");
    }
    r.exports ? (t.default = t, r.exports = t) : window.classNames = t;
  })();
})(Nl);
function qr(r) {
  const e = [];
  let t, i;
  for (const {
    progress: n
  } of Object.values(r)) {
    const {
      preprocess: a,
      postprocess: o
    } = n;
    i == null && (a || o) && ({
      mode: t,
      message: i
    } = a || o), (a == null ? void 0 : a.mode) === "determinate" && e.push(a.value), (o == null ? void 0 : o.mode) === "determinate" && e.push(o.value);
  }
  const s = e.reduce((n, a) => n + a / e.length, 0);
  return {
    mode: t,
    message: i,
    value: s
  };
}
function Il(r) {
  const e = Math.floor(r / 3600) % 24, t = Math.floor(r / 60) % 60, i = Math.floor(r % 60);
  return {
    hours: e,
    minutes: t,
    seconds: i
  };
}
function $l(r) {
  const e = Il(r), t = e.hours === 0 ? "" : `${e.hours}h`, i = e.minutes === 0 ? "" : `${e.hours === 0 ? e.minutes : ` ${e.minutes.toString(10).padStart(2, "0")}`}m`, s = e.hours !== 0 ? "" : `${e.minutes === 0 ? e.seconds : ` ${e.seconds.toString(10).padStart(2, "0")}`}s`;
  return `${t}${i}${s}`;
}
const zl = "·", Sn = () => ` ${zl} `;
function Ll(r) {
  const {
    newFiles: e,
    isUploadStarted: t,
    recoveredState: i,
    i18n: s,
    uploadState: n,
    isSomeGhost: a,
    startUpload: o
  } = r, d = me("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--upload", {
    "uppy-c-btn-primary": n === ve.STATE_WAITING
  }, {
    "uppy-StatusBar-actionBtn--disabled": a
  }), l = e && t && !i ? s("uploadXNewFiles", {
    smart_count: e
  }) : s("uploadXFiles", {
    smart_count: e
  });
  return m("button", {
    type: "button",
    className: d,
    "aria-label": s("uploadXFiles", {
      smart_count: e
    }),
    onClick: o,
    disabled: a,
    "data-uppy-super-focusable": !0
  }, l);
}
function Ml(r) {
  const {
    i18n: e,
    uppy: t
  } = r;
  return m("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
    "aria-label": e("retryUpload"),
    onClick: () => t.retryAll(),
    "data-uppy-super-focusable": !0
  }, m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "8",
    height: "10",
    viewBox: "0 0 8 10"
  }, m("path", {
    d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
  })), e("retry"));
}
function Hl(r) {
  const {
    i18n: e,
    uppy: t
  } = r;
  return m("button", {
    type: "button",
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    title: e("cancel"),
    "aria-label": e("cancel"),
    onClick: () => t.cancelAll(),
    "data-cy": "cancel",
    "data-uppy-super-focusable": !0
  }, m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, m("g", {
    fill: "none",
    fillRule: "evenodd"
  }, m("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), m("path", {
    fill: "#FFF",
    d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
  }))));
}
function jl(r) {
  const {
    isAllPaused: e,
    i18n: t,
    isAllComplete: i,
    resumableUploads: s,
    uppy: n
  } = r, a = t(e ? "resume" : "pause");
  function o() {
    return i ? null : s ? e ? n.resumeAll() : n.pauseAll() : n.cancelAll();
  }
  return m("button", {
    title: a,
    "aria-label": a,
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    type: "button",
    onClick: o,
    "data-uppy-super-focusable": !0
  }, m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, m("g", {
    fill: "none",
    fillRule: "evenodd"
  }, m("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), m("path", {
    fill: "#FFF",
    d: e ? "M6 4.25L11.5 8 6 11.75z" : "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z"
  }))));
}
function ql(r) {
  const {
    i18n: e,
    doneButtonHandler: t
  } = r;
  return m("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--done",
    onClick: t,
    "data-uppy-super-focusable": !0
  }, e("done"));
}
function oa() {
  return m("svg", {
    className: "uppy-StatusBar-spinner",
    "aria-hidden": "true",
    focusable: "false",
    width: "14",
    height: "14"
  }, m("path", {
    d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
    fillRule: "evenodd"
  }));
}
function Wl(r) {
  const {
    progress: e
  } = r, {
    value: t,
    mode: i,
    message: s
  } = e, n = Math.round(t * 100), a = "·";
  return m("div", {
    className: "uppy-StatusBar-content"
  }, m(oa, null), i === "determinate" ? `${n}% ${a} ` : "", s);
}
function Vl(r) {
  const {
    numUploads: e,
    complete: t,
    totalUploadedSize: i,
    totalSize: s,
    totalETA: n,
    i18n: a
  } = r, o = e > 1;
  return m("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, o && a("filesUploadedOfTotal", {
    complete: t,
    smart_count: e
  }), m("span", {
    className: "uppy-StatusBar-additionalInfo"
  }, o && Sn(), a("dataUploadedOfTotal", {
    complete: Vt(i),
    total: Vt(s)
  }), Sn(), a("xTimeLeft", {
    time: $l(n)
  })));
}
function la(r) {
  const {
    i18n: e,
    complete: t,
    numUploads: i
  } = r;
  return m("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, e("filesUploadedOfTotal", {
    complete: t,
    smart_count: i
  }));
}
function Gl(r) {
  const {
    i18n: e,
    newFiles: t,
    startUpload: i
  } = r, s = me("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--uploadNewlyAdded");
  return m("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, m("div", {
    className: "uppy-StatusBar-statusSecondaryHint"
  }, e("xMoreFilesAdded", {
    smart_count: t
  })), m("button", {
    type: "button",
    className: s,
    "aria-label": e("uploadXFiles", {
      smart_count: t
    }),
    onClick: i
  }, e("upload")));
}
const Kl = Bi(Vl, 500, {
  leading: !0,
  trailing: !0
});
function Xl(r) {
  const {
    i18n: e,
    supportsUploadProgress: t,
    totalProgress: i,
    showProgressDetails: s,
    isUploadStarted: n,
    isAllComplete: a,
    isAllPaused: o,
    newFiles: d,
    numUploads: l,
    complete: u,
    totalUploadedSize: c,
    totalSize: h,
    totalETA: p,
    startUpload: f
  } = r, v = d && n;
  if (!n || a)
    return null;
  const y = e(o ? "paused" : "uploading");
  function _() {
    return !o && !v && s ? t ? m(Kl, {
      numUploads: l,
      complete: u,
      totalUploadedSize: c,
      totalSize: h,
      totalETA: p,
      i18n: e
    }) : m(la, {
      i18n: e,
      complete: u,
      numUploads: l
    }) : null;
  }
  return m("div", {
    className: "uppy-StatusBar-content",
    "aria-label": y,
    title: y
  }, o ? null : m(oa, null), m("div", {
    className: "uppy-StatusBar-status"
  }, m("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, t ? `${y}: ${i}%` : y), _(), v ? m(Gl, {
    i18n: e,
    newFiles: d,
    startUpload: f
  }) : null));
}
function Yl(r) {
  const {
    i18n: e
  } = r;
  return m("div", {
    className: "uppy-StatusBar-content",
    role: "status",
    title: e("complete")
  }, m("div", {
    className: "uppy-StatusBar-status"
  }, m("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "15",
    height: "11",
    viewBox: "0 0 15 11"
  }, m("path", {
    d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
  })), e("complete"))));
}
function Jl(r) {
  const {
    error: e,
    i18n: t,
    complete: i,
    numUploads: s
  } = r;
  function n() {
    const a = `${t("uploadFailed")} 

 ${e}`;
    alert(a);
  }
  return m("div", {
    className: "uppy-StatusBar-content",
    title: t("uploadFailed")
  }, m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "11",
    height: "11",
    viewBox: "0 0 11 11"
  }, m("path", {
    d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
  })), m("div", {
    className: "uppy-StatusBar-status"
  }, m("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, t("uploadFailed"), m("button", {
    className: "uppy-u-reset uppy-StatusBar-details",
    "aria-label": t("showErrorDetails"),
    "data-microtip-position": "top-right",
    "data-microtip-size": "medium",
    onClick: n,
    type: "button"
  }, "?")), m(la, {
    i18n: t,
    complete: i,
    numUploads: s
  })));
}
const {
  STATE_ERROR: Pn,
  STATE_WAITING: Fn,
  STATE_PREPROCESSING: Wr,
  STATE_UPLOADING: lr,
  STATE_POSTPROCESSING: Vr,
  STATE_COMPLETE: ur
} = ve;
function Ql(r) {
  const {
    newFiles: e,
    allowNewUpload: t,
    isUploadInProgress: i,
    isAllPaused: s,
    resumableUploads: n,
    error: a,
    hideUploadButton: o,
    hidePauseResumeButton: d,
    hideCancelButton: l,
    hideRetryButton: u,
    recoveredState: c,
    uploadState: h,
    totalProgress: p,
    files: f,
    supportsUploadProgress: v,
    hideAfterFinish: y,
    isSomeGhost: _,
    doneButtonHandler: g,
    isUploadStarted: x,
    i18n: b,
    startUpload: C,
    uppy: w,
    isAllComplete: F,
    showProgressDetails: P,
    numUploads: A,
    complete: S,
    totalSize: k,
    totalETA: U,
    totalUploadedSize: O
  } = r;
  function N() {
    switch (h) {
      case Vr:
      case Wr: {
        const J = qr(f);
        return J.mode === "determinate" ? J.value * 100 : p;
      }
      case Pn:
        return null;
      case lr:
        return v ? p : null;
      default:
        return p;
    }
  }
  function $() {
    switch (h) {
      case Vr:
      case Wr: {
        const {
          mode: J
        } = qr(f);
        return J === "indeterminate";
      }
      case lr:
        return !v;
      default:
        return !1;
    }
  }
  function L() {
    if (c)
      return !1;
    switch (h) {
      case Fn:
        return o || e === 0;
      case ur:
        return y;
      default:
        return !1;
    }
  }
  const V = N(), H = L(), j = V ?? 100, q = !a && e && !i && !s && t && !o, E = !l && h !== Fn && h !== ur, B = n && !d && h === lr, R = a && !F && !u, T = g && h === ur, K = me("uppy-StatusBar-progress", {
    "is-indeterminate": $()
  }), G = me("uppy-StatusBar", `is-${h}`, {
    "has-ghosts": _
  });
  return m("div", {
    className: G,
    "aria-hidden": H
  }, m("div", {
    className: K,
    style: {
      width: `${j}%`
    },
    role: "progressbar",
    "aria-label": `${j}%`,
    "aria-valuetext": `${j}%`,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": V
  }), (() => {
    switch (h) {
      case Wr:
      case Vr:
        return m(Wl, {
          progress: qr(f)
        });
      case ur:
        return m(Yl, {
          i18n: b
        });
      case Pn:
        return m(Jl, {
          error: a,
          i18n: b,
          numUploads: A,
          complete: S
        });
      case lr:
        return m(Xl, {
          i18n: b,
          supportsUploadProgress: v,
          totalProgress: p,
          showProgressDetails: P,
          isUploadStarted: x,
          isAllComplete: F,
          isAllPaused: s,
          newFiles: e,
          numUploads: A,
          complete: S,
          totalUploadedSize: O,
          totalSize: k,
          totalETA: U,
          startUpload: C
        });
      default:
        return null;
    }
  })(), m("div", {
    className: "uppy-StatusBar-actions"
  }, c || q ? m(Ll, {
    newFiles: e,
    isUploadStarted: x,
    recoveredState: c,
    i18n: b,
    isSomeGhost: _,
    startUpload: C,
    uploadState: h
  }) : null, R ? m(Ml, {
    i18n: b,
    uppy: w
  }) : null, B ? m(jl, {
    isAllPaused: s,
    i18n: b,
    isAllComplete: F,
    resumableUploads: n,
    uppy: w
  }) : null, E ? m(Hl, {
    i18n: b,
    uppy: w
  }) : null, T ? m(ql, {
    i18n: b,
    doneButtonHandler: g
  }) : null));
}
const Zl = {
  strings: {
    // Shown in the status bar while files are being uploaded.
    uploading: "Uploading",
    // Shown in the status bar once all files have been uploaded.
    complete: "Complete",
    // Shown in the status bar if an upload failed.
    uploadFailed: "Upload failed",
    // Shown in the status bar while the upload is paused.
    paused: "Paused",
    // Used as the label for the button that retries an upload.
    retry: "Retry",
    // Used as the label for the button that cancels an upload.
    cancel: "Cancel",
    // Used as the label for the button that pauses an upload.
    pause: "Pause",
    // Used as the label for the button that resumes an upload.
    resume: "Resume",
    // Used as the label for the button that resets the upload state after an upload
    done: "Done",
    // When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.
    filesUploadedOfTotal: {
      0: "%{complete} of %{smart_count} file uploaded",
      1: "%{complete} of %{smart_count} files uploaded"
    },
    // When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.
    dataUploadedOfTotal: "%{complete} of %{total}",
    // When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.
    xTimeLeft: "%{time} left",
    // Used as the label for the button that starts an upload.
    uploadXFiles: {
      0: "Upload %{smart_count} file",
      1: "Upload %{smart_count} files"
    },
    // Used as the label for the button that starts an upload, if another upload has been started in the past
    // and new files were added later.
    uploadXNewFiles: {
      0: "Upload +%{smart_count} file",
      1: "Upload +%{smart_count} files"
    },
    upload: "Upload",
    retryUpload: "Retry upload",
    xMoreFilesAdded: {
      0: "%{smart_count} more file added",
      1: "%{smart_count} more files added"
    },
    showErrorDetails: "Show error details"
  }
}, e0 = {
  version: "3.1.0"
};
function t0(r) {
  let e = 0;
  return r.forEach((t) => {
    e += Rl(t.progress);
  }), e;
}
function r0(r) {
  const e = t0(r);
  if (e === 0)
    return 0;
  const t = r.reduce((i, s) => i + Dl(s.progress), 0);
  return Math.round(t / e * 10) / 10;
}
function i0(r, e, t, i) {
  if (r)
    return ve.STATE_ERROR;
  if (e)
    return ve.STATE_COMPLETE;
  if (t)
    return ve.STATE_WAITING;
  let s = ve.STATE_WAITING;
  const n = Object.keys(i);
  for (let a = 0; a < n.length; a++) {
    const {
      progress: o
    } = i[n[a]];
    if (o.uploadStarted && !o.uploadComplete)
      return ve.STATE_UPLOADING;
    o.preprocess && s !== ve.STATE_UPLOADING && (s = ve.STATE_PREPROCESSING), o.postprocess && s !== ve.STATE_UPLOADING && s !== ve.STATE_PREPROCESSING && (s = ve.STATE_POSTPROCESSING);
  }
  return s;
}
class ua extends yt {
  constructor(e, t) {
    super(e, t), this.startUpload = () => {
      const {
        recoveredState: s
      } = this.uppy.getState();
      if (s) {
        this.uppy.emit("restore-confirmed");
        return;
      }
      return this.uppy.upload().catch(() => {
      });
    }, this.id = this.opts.id || "StatusBar", this.title = "StatusBar", this.type = "progressindicator", this.defaultLocale = Zl;
    const i = {
      target: "body",
      hideUploadButton: !1,
      hideRetryButton: !1,
      hidePauseResumeButton: !1,
      hideCancelButton: !1,
      showProgressDetails: !1,
      hideAfterFinish: !0,
      doneButtonHandler: null
    };
    this.opts = {
      ...i,
      ...t
    }, this.i18nInit(), this.render = this.render.bind(this), this.install = this.install.bind(this);
  }
  render(e) {
    const {
      capabilities: t,
      files: i,
      allowNewUpload: s,
      totalProgress: n,
      error: a,
      recoveredState: o
    } = e, {
      newFiles: d,
      startedFiles: l,
      completeFiles: u,
      inProgressNotPausedFiles: c,
      isUploadStarted: h,
      isAllComplete: p,
      isAllErrored: f,
      isAllPaused: v,
      isUploadInProgress: y,
      isSomeGhost: _
    } = this.uppy.getObjectOfFilesPerState(), g = o ? Object.values(i) : d, x = r0(c), b = !!t.resumableUploads, C = t.uploadProgress !== !1;
    let w = 0, F = 0;
    return l.forEach((P) => {
      w += P.progress.bytesTotal || 0, F += P.progress.bytesUploaded || 0;
    }), Ql({
      error: a,
      uploadState: i0(a, p, o, e.files || {}),
      allowNewUpload: s,
      totalProgress: n,
      totalSize: w,
      totalUploadedSize: F,
      isAllComplete: !1,
      isAllPaused: v,
      isAllErrored: f,
      isUploadStarted: h,
      isUploadInProgress: y,
      isSomeGhost: _,
      recoveredState: o,
      complete: u.length,
      newFiles: g.length,
      numUploads: l.length,
      totalETA: x,
      files: i,
      i18n: this.i18n,
      uppy: this.uppy,
      startUpload: this.startUpload,
      doneButtonHandler: this.opts.doneButtonHandler,
      resumableUploads: b,
      supportsUploadProgress: C,
      showProgressDetails: this.opts.showProgressDetails,
      hideUploadButton: this.opts.hideUploadButton,
      hideRetryButton: this.opts.hideRetryButton,
      hidePauseResumeButton: this.opts.hidePauseResumeButton,
      hideCancelButton: this.opts.hideCancelButton,
      hideAfterFinish: this.opts.hideAfterFinish,
      isTargetDOMEl: this.isTargetDOMEl
    });
  }
  onMount() {
    const e = this.el;
    aa(e) || (e.dir = "ltr");
  }
  install() {
    const {
      target: e
    } = this.opts;
    e && this.mount(e, this);
  }
  uninstall() {
    this.unmount();
  }
}
ua.VERSION = e0.version;
const Cn = 300;
class n0 extends ke {
  constructor() {
    super(...arguments), this.ref = Cl();
  }
  componentWillEnter(e) {
    this.ref.current.style.opacity = "1", this.ref.current.style.transform = "none", setTimeout(e, Cn);
  }
  componentWillLeave(e) {
    this.ref.current.style.opacity = "0", this.ref.current.style.transform = "translateY(350%)", setTimeout(e, Cn);
  }
  render() {
    const {
      children: e
    } = this.props;
    return m("div", {
      className: "uppy-Informer-animated",
      ref: this.ref
    }, e);
  }
}
function s0(r, e) {
  return Object.assign(r, e);
}
function a0(r, e) {
  var t;
  return (t = r == null ? void 0 : r.key) != null ? t : e;
}
function o0(r, e) {
  const t = r._ptgLinkedRefs || (r._ptgLinkedRefs = {});
  return t[e] || (t[e] = (i) => {
    r.refs[e] = i;
  });
}
function Bt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++)
    if (r[t] != null) {
      const i = a0(r[t], t.toString(36));
      e[i] = r[t];
    }
  return e;
}
function l0(r, e) {
  r = r || {}, e = e || {};
  const t = (a) => e.hasOwnProperty(a) ? e[a] : r[a], i = {};
  let s = [];
  for (const a in r)
    e.hasOwnProperty(a) ? s.length && (i[a] = s, s = []) : s.push(a);
  const n = {};
  for (const a in e) {
    if (i.hasOwnProperty(a))
      for (let o = 0; o < i[a].length; o++) {
        const d = i[a][o];
        n[i[a][o]] = t(d);
      }
    n[a] = t(a);
  }
  for (let a = 0; a < s.length; a++)
    n[s[a]] = t(s[a]);
  return n;
}
const u0 = (r) => r;
class da extends ke {
  constructor(e, t) {
    super(e, t), this.refs = {}, this.state = {
      children: Bt(je(je(this.props.children)) || [])
    }, this.performAppear = this.performAppear.bind(this), this.performEnter = this.performEnter.bind(this), this.performLeave = this.performLeave.bind(this);
  }
  componentWillMount() {
    this.currentlyTransitioningKeys = {}, this.keysToAbortLeave = [], this.keysToEnter = [], this.keysToLeave = [];
  }
  componentDidMount() {
    const e = this.state.children;
    for (const t in e)
      e[t] && this.performAppear(t);
  }
  componentWillReceiveProps(e) {
    const t = Bt(je(e.children) || []), i = this.state.children;
    this.setState((n) => ({
      children: l0(n.children, t)
    }));
    let s;
    for (s in t)
      if (t.hasOwnProperty(s)) {
        const n = i && i.hasOwnProperty(s);
        t[s] && n && this.currentlyTransitioningKeys[s] ? (this.keysToEnter.push(s), this.keysToAbortLeave.push(s)) : t[s] && !n && !this.currentlyTransitioningKeys[s] && this.keysToEnter.push(s);
      }
    for (s in i)
      if (i.hasOwnProperty(s)) {
        const n = t && t.hasOwnProperty(s);
        i[s] && !n && !this.currentlyTransitioningKeys[s] && this.keysToLeave.push(s);
      }
  }
  componentDidUpdate() {
    const {
      keysToEnter: e
    } = this;
    this.keysToEnter = [], e.forEach(this.performEnter);
    const {
      keysToLeave: t
    } = this;
    this.keysToLeave = [], t.forEach(this.performLeave);
  }
  _finishAbort(e) {
    const t = this.keysToAbortLeave.indexOf(e);
    t !== -1 && this.keysToAbortLeave.splice(t, 1);
  }
  performAppear(e) {
    this.currentlyTransitioningKeys[e] = !0;
    const t = this.refs[e];
    t.componentWillAppear ? t.componentWillAppear(this._handleDoneAppearing.bind(this, e)) : this._handleDoneAppearing(e);
  }
  _handleDoneAppearing(e) {
    const t = this.refs[e];
    t.componentDidAppear && t.componentDidAppear(), delete this.currentlyTransitioningKeys[e], this._finishAbort(e);
    const i = Bt(je(this.props.children) || []);
    (!i || !i.hasOwnProperty(e)) && this.performLeave(e);
  }
  performEnter(e) {
    this.currentlyTransitioningKeys[e] = !0;
    const t = this.refs[e];
    t.componentWillEnter ? t.componentWillEnter(this._handleDoneEntering.bind(this, e)) : this._handleDoneEntering(e);
  }
  _handleDoneEntering(e) {
    const t = this.refs[e];
    t.componentDidEnter && t.componentDidEnter(), delete this.currentlyTransitioningKeys[e], this._finishAbort(e);
    const i = Bt(je(this.props.children) || []);
    (!i || !i.hasOwnProperty(e)) && this.performLeave(e);
  }
  performLeave(e) {
    if (this.keysToAbortLeave.indexOf(e) !== -1)
      return;
    this.currentlyTransitioningKeys[e] = !0;
    const i = this.refs[e];
    i.componentWillLeave ? i.componentWillLeave(this._handleDoneLeaving.bind(this, e)) : this._handleDoneLeaving(e);
  }
  _handleDoneLeaving(e) {
    if (this.keysToAbortLeave.indexOf(e) !== -1)
      return;
    const i = this.refs[e];
    i.componentDidLeave && i.componentDidLeave(), delete this.currentlyTransitioningKeys[e];
    const s = Bt(je(this.props.children) || []);
    if (s && s.hasOwnProperty(e))
      this.performEnter(e);
    else {
      const n = s0({}, this.state.children);
      delete n[e], this.setState({
        children: n
      });
    }
  }
  render(e, t) {
    let {
      childFactory: i,
      transitionLeave: s,
      transitionName: n,
      transitionAppear: a,
      transitionEnter: o,
      transitionLeaveTimeout: d,
      transitionEnterTimeout: l,
      transitionAppearTimeout: u,
      component: c,
      ...h
    } = e, {
      children: p
    } = t;
    const f = Object.entries(p).map((v) => {
      let [y, _] = v;
      if (!_)
        return;
      const g = o0(this, y);
      return na(i(_), {
        ref: g,
        key: y
      });
    }).filter(Boolean);
    return m(c, h, f);
  }
}
da.defaultProps = {
  component: "span",
  childFactory: u0
};
const d0 = {
  version: "3.0.1"
};
class ca extends yt {
  constructor(e, t) {
    super(e, t), this.render = (s) => m("div", {
      className: "uppy uppy-Informer"
    }, m(da, null, s.info.map((n) => m(n0, {
      key: n.message
    }, m("p", {
      role: "alert"
    }, n.message, " ", n.details && m("span", {
      "aria-label": n.details,
      "data-microtip-position": "top-left",
      "data-microtip-size": "medium",
      role: "tooltip",
      onClick: () => alert(`${n.message} 

 ${n.details}`)
    }, "?")))))), this.type = "progressindicator", this.id = this.opts.id || "Informer", this.title = "Informer";
    const i = {};
    this.opts = {
      ...i,
      ...t
    };
  }
  install() {
    const {
      target: e
    } = this.opts;
    e && this.mount(e, this);
  }
}
ca.VERSION = d0.version;
const c0 = /^data:([^/]+\/[^,;]+(?:[^,]*?))(;base64)?,([\s\S]*)$/;
function h0(r, e, t) {
  var i, s;
  const n = c0.exec(r), a = (i = (s = e.mimeType) != null ? s : n == null ? void 0 : n[1]) != null ? i : "plain/text";
  let o;
  if (n[2] != null) {
    const d = atob(decodeURIComponent(n[3])), l = new Uint8Array(d.length);
    for (let u = 0; u < d.length; u++)
      l[u] = d.charCodeAt(u);
    o = [l];
  } else
    o = [decodeURIComponent(n[3])];
  return t ? new File(o, e.name || "", {
    type: a
  }) : new Blob(o, {
    type: a
  });
}
function kn(r) {
  return r.startsWith("blob:");
}
function An(r) {
  return r ? /^[^/]+\/(jpe?g|gif|png|svg|svg\+xml|bmp|webp|avif)$/.test(r) : !1;
}
function W(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
var ha = typeof self < "u" ? self : global;
const Qt = typeof navigator < "u", f0 = Qt && typeof HTMLImageElement > "u", En = !(typeof global > "u" || typeof process > "u" || !process.versions || !process.versions.node), fa = ha.Buffer, pa = !!fa, p0 = (r) => r !== void 0;
function ma(r) {
  return r === void 0 || (r instanceof Map ? r.size === 0 : Object.values(r).filter(p0).length === 0);
}
function re(r) {
  let e = new Error(r);
  throw delete e.stack, e;
}
function Un(r) {
  let e = function(t) {
    let i = 0;
    return t.ifd0.enabled && (i += 1024), t.exif.enabled && (i += 2048), t.makerNote && (i += 2048), t.userComment && (i += 1024), t.gps.enabled && (i += 512), t.interop.enabled && (i += 100), t.ifd1.enabled && (i += 1024), i + 2048;
  }(r);
  return r.jfif.enabled && (e += 50), r.xmp.enabled && (e += 2e4), r.iptc.enabled && (e += 14e3), r.icc.enabled && (e += 6e3), e;
}
const Gr = (r) => String.fromCharCode.apply(null, r), Tn = typeof TextDecoder < "u" ? new TextDecoder("utf-8") : void 0;
let Zt = class ft {
  static from(e, t) {
    return e instanceof this && e.le === t ? e : new ft(e, void 0, void 0, t);
  }
  constructor(e, t = 0, i, s) {
    if (typeof s == "boolean" && (this.le = s), Array.isArray(e) && (e = new Uint8Array(e)), e === 0)
      this.byteOffset = 0, this.byteLength = 0;
    else if (e instanceof ArrayBuffer) {
      i === void 0 && (i = e.byteLength - t);
      let n = new DataView(e, t, i);
      this._swapDataView(n);
    } else if (e instanceof Uint8Array || e instanceof DataView || e instanceof ft) {
      i === void 0 && (i = e.byteLength - t), (t += e.byteOffset) + i > e.byteOffset + e.byteLength && re("Creating view outside of available memory in ArrayBuffer");
      let n = new DataView(e.buffer, t, i);
      this._swapDataView(n);
    } else if (typeof e == "number") {
      let n = new DataView(new ArrayBuffer(e));
      this._swapDataView(n);
    } else
      re("Invalid input argument for BufferView: " + e);
  }
  _swapArrayBuffer(e) {
    this._swapDataView(new DataView(e));
  }
  _swapBuffer(e) {
    this._swapDataView(new DataView(e.buffer, e.byteOffset, e.byteLength));
  }
  _swapDataView(e) {
    this.dataView = e, this.buffer = e.buffer, this.byteOffset = e.byteOffset, this.byteLength = e.byteLength;
  }
  _lengthToEnd(e) {
    return this.byteLength - e;
  }
  set(e, t, i = ft) {
    return e instanceof DataView || e instanceof ft ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Uint8Array || re("BufferView.set(): Invalid data argument."), this.toUint8().set(e, t), new i(this, t, e.byteLength);
  }
  subarray(e, t) {
    return t = t || this._lengthToEnd(e), new ft(this, e, t);
  }
  toUint8() {
    return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
  }
  getUint8Array(e, t) {
    return new Uint8Array(this.buffer, this.byteOffset + e, t);
  }
  getString(e = 0, t = this.byteLength) {
    return s = this.getUint8Array(e, t), Tn ? Tn.decode(s) : pa ? Buffer.from(s).toString("utf8") : decodeURIComponent(escape(Gr(s)));
    var s;
  }
  getLatin1String(e = 0, t = this.byteLength) {
    let i = this.getUint8Array(e, t);
    return Gr(i);
  }
  getUnicodeString(e = 0, t = this.byteLength) {
    const i = [];
    for (let s = 0; s < t && e + s < this.byteLength; s += 2)
      i.push(this.getUint16(e + s));
    return Gr(i);
  }
  getInt8(e) {
    return this.dataView.getInt8(e);
  }
  getUint8(e) {
    return this.dataView.getUint8(e);
  }
  getInt16(e, t = this.le) {
    return this.dataView.getInt16(e, t);
  }
  getInt32(e, t = this.le) {
    return this.dataView.getInt32(e, t);
  }
  getUint16(e, t = this.le) {
    return this.dataView.getUint16(e, t);
  }
  getUint32(e, t = this.le) {
    return this.dataView.getUint32(e, t);
  }
  getFloat32(e, t = this.le) {
    return this.dataView.getFloat32(e, t);
  }
  getFloat64(e, t = this.le) {
    return this.dataView.getFloat64(e, t);
  }
  getFloat(e, t = this.le) {
    return this.dataView.getFloat32(e, t);
  }
  getDouble(e, t = this.le) {
    return this.dataView.getFloat64(e, t);
  }
  getUintBytes(e, t, i) {
    switch (t) {
      case 1:
        return this.getUint8(e, i);
      case 2:
        return this.getUint16(e, i);
      case 4:
        return this.getUint32(e, i);
      case 8:
        return this.getUint64 && this.getUint64(e, i);
    }
  }
  getUint(e, t, i) {
    switch (t) {
      case 8:
        return this.getUint8(e, i);
      case 16:
        return this.getUint16(e, i);
      case 32:
        return this.getUint32(e, i);
      case 64:
        return this.getUint64 && this.getUint64(e, i);
    }
  }
  toString(e) {
    return this.dataView.toString(e, this.constructor.name);
  }
  ensureChunk() {
  }
};
function hi(r, e) {
  re(`${r} '${e}' was not loaded, try using full build of exifr.`);
}
let Ni = class extends Map {
  constructor(e) {
    super(), this.kind = e;
  }
  get(e, t) {
    return this.has(e) || hi(this.kind, e), t && (e in t || function(i, s) {
      re(`Unknown ${i} '${s}'.`);
    }(this.kind, e), t[e].enabled || hi(this.kind, e)), super.get(e);
  }
  keyList() {
    return Array.from(this.keys());
  }
};
var ga = new Ni("file parser"), Se = new Ni("segment parser"), Ii = new Ni("file reader");
let m0 = ha.fetch;
function On(r, e) {
  return (t = r).startsWith("data:") || t.length > 1e4 ? pi(r, e, "base64") : En && r.includes("://") ? fi(r, e, "url", Bn) : En ? pi(r, e, "fs") : Qt ? fi(r, e, "url", Bn) : void re("Invalid input argument");
  var t;
}
async function fi(r, e, t, i) {
  return Ii.has(t) ? pi(r, e, t) : i ? async function(s, n) {
    let a = await n(s);
    return new Zt(a);
  }(r, i) : void re(`Parser ${t} is not loaded`);
}
async function pi(r, e, t) {
  let i = new (Ii.get(t))(r, e);
  return await i.read(), i;
}
const Bn = (r) => m0(r).then((e) => e.arrayBuffer()), mi = (r) => new Promise((e, t) => {
  let i = new FileReader();
  i.onloadend = () => e(i.result || new ArrayBuffer()), i.onerror = t, i.readAsArrayBuffer(r);
}), $i = /* @__PURE__ */ new Map(), g0 = /* @__PURE__ */ new Map(), v0 = /* @__PURE__ */ new Map(), dr = ["chunked", "firstChunkSize", "firstChunkSizeNode", "firstChunkSizeBrowser", "chunkSize", "chunkLimit"], va = ["jfif", "xmp", "icc", "iptc", "ihdr"], gi = ["tiff", ...va], te = ["ifd0", "ifd1", "exif", "gps", "interop"], cr = [...gi, ...te], hr = ["makerNote", "userComment"], ya = ["translateKeys", "translateValues", "reviveValues", "multiSegment"], fr = [...ya, "sanitize", "mergeOutput", "silentErrors"];
class xa {
  get translate() {
    return this.translateKeys || this.translateValues || this.reviveValues;
  }
}
class Rt extends xa {
  get needed() {
    return this.enabled || this.deps.size > 0;
  }
  constructor(e, t, i, s) {
    if (super(), W(this, "enabled", !1), W(this, "skip", /* @__PURE__ */ new Set()), W(this, "pick", /* @__PURE__ */ new Set()), W(this, "deps", /* @__PURE__ */ new Set()), W(this, "translateKeys", !1), W(this, "translateValues", !1), W(this, "reviveValues", !1), this.key = e, this.enabled = t, this.parse = this.enabled, this.applyInheritables(s), this.canBeFiltered = te.includes(e), this.canBeFiltered && (this.dict = $i.get(e)), i !== void 0)
      if (Array.isArray(i))
        this.parse = this.enabled = !0, this.canBeFiltered && i.length > 0 && this.translateTagSet(i, this.pick);
      else if (typeof i == "object") {
        if (this.enabled = !0, this.parse = i.parse !== !1, this.canBeFiltered) {
          let { pick: n, skip: a } = i;
          n && n.length > 0 && this.translateTagSet(n, this.pick), a && a.length > 0 && this.translateTagSet(a, this.skip);
        }
        this.applyInheritables(i);
      } else
        i === !0 || i === !1 ? this.parse = this.enabled = i : re(`Invalid options argument: ${i}`);
  }
  applyInheritables(e) {
    let t, i;
    for (t of ya)
      i = e[t], i !== void 0 && (this[t] = i);
  }
  translateTagSet(e, t) {
    if (this.dict) {
      let i, s, { tagKeys: n, tagValues: a } = this.dict;
      for (i of e)
        typeof i == "string" ? (s = a.indexOf(i), s === -1 && (s = n.indexOf(Number(i))), s !== -1 && t.add(Number(n[s]))) : t.add(i);
    } else
      for (let i of e)
        t.add(i);
  }
  finalizeFilters() {
    !this.enabled && this.deps.size > 0 ? (this.enabled = !0, Ar(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && Ar(this.pick, this.deps);
  }
}
var ae = { jfif: !1, tiff: !0, xmp: !1, icc: !1, iptc: !1, ifd0: !0, ifd1: !1, exif: !0, gps: !0, interop: !1, ihdr: void 0, makerNote: !1, userComment: !1, multiSegment: !1, skip: [], pick: [], translateKeys: !0, translateValues: !0, reviveValues: !0, sanitize: !0, mergeOutput: !0, silentErrors: !0, chunked: !0, firstChunkSize: void 0, firstChunkSizeNode: 512, firstChunkSizeBrowser: 65536, chunkSize: 65536, chunkLimit: 5 }, Rn = /* @__PURE__ */ new Map();
class zi extends xa {
  static useCached(e) {
    let t = Rn.get(e);
    return t !== void 0 || (t = new this(e), Rn.set(e, t)), t;
  }
  constructor(e) {
    super(), e === !0 ? this.setupFromTrue() : e === void 0 ? this.setupFromUndefined() : Array.isArray(e) ? this.setupFromArray(e) : typeof e == "object" ? this.setupFromObject(e) : re(`Invalid options argument ${e}`), this.firstChunkSize === void 0 && (this.firstChunkSize = Qt ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = !1), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
  }
  setupFromUndefined() {
    let e;
    for (e of dr)
      this[e] = ae[e];
    for (e of fr)
      this[e] = ae[e];
    for (e of hr)
      this[e] = ae[e];
    for (e of cr)
      this[e] = new Rt(e, ae[e], void 0, this);
  }
  setupFromTrue() {
    let e;
    for (e of dr)
      this[e] = ae[e];
    for (e of fr)
      this[e] = ae[e];
    for (e of hr)
      this[e] = !0;
    for (e of cr)
      this[e] = new Rt(e, !0, void 0, this);
  }
  setupFromArray(e) {
    let t;
    for (t of dr)
      this[t] = ae[t];
    for (t of fr)
      this[t] = ae[t];
    for (t of hr)
      this[t] = ae[t];
    for (t of cr)
      this[t] = new Rt(t, !1, void 0, this);
    this.setupGlobalFilters(e, void 0, te);
  }
  setupFromObject(e) {
    let t;
    for (t of (te.ifd0 = te.ifd0 || te.image, te.ifd1 = te.ifd1 || te.thumbnail, Object.assign(this, e), dr))
      this[t] = Kr(e[t], ae[t]);
    for (t of fr)
      this[t] = Kr(e[t], ae[t]);
    for (t of hr)
      this[t] = Kr(e[t], ae[t]);
    for (t of gi)
      this[t] = new Rt(t, ae[t], e[t], this);
    for (t of te)
      this[t] = new Rt(t, ae[t], e[t], this.tiff);
    this.setupGlobalFilters(e.pick, e.skip, te, cr), e.tiff === !0 ? this.batchEnableWithBool(te, !0) : e.tiff === !1 ? this.batchEnableWithUserValue(te, e) : Array.isArray(e.tiff) ? this.setupGlobalFilters(e.tiff, void 0, te) : typeof e.tiff == "object" && this.setupGlobalFilters(e.tiff.pick, e.tiff.skip, te);
  }
  batchEnableWithBool(e, t) {
    for (let i of e)
      this[i].enabled = t;
  }
  batchEnableWithUserValue(e, t) {
    for (let i of e) {
      let s = t[i];
      this[i].enabled = s !== !1 && s !== void 0;
    }
  }
  setupGlobalFilters(e, t, i, s = i) {
    if (e && e.length) {
      for (let a of s)
        this[a].enabled = !1;
      let n = Dn(e, i);
      for (let [a, o] of n)
        Ar(this[a].pick, o), this[a].enabled = !0;
    } else if (t && t.length) {
      let n = Dn(t, i);
      for (let [a, o] of n)
        Ar(this[a].skip, o);
    }
  }
  filterNestedSegmentTags() {
    let { ifd0: e, exif: t, xmp: i, iptc: s, icc: n } = this;
    this.makerNote ? t.deps.add(37500) : t.skip.add(37500), this.userComment ? t.deps.add(37510) : t.skip.add(37510), i.enabled || e.skip.add(700), s.enabled || e.skip.add(33723), n.enabled || e.skip.add(34675);
  }
  traverseTiffDependencyTree() {
    let { ifd0: e, exif: t, gps: i, interop: s } = this;
    s.needed && (t.deps.add(40965), e.deps.add(40965)), t.needed && e.deps.add(34665), i.needed && e.deps.add(34853), this.tiff.enabled = te.some((n) => this[n].enabled === !0) || this.makerNote || this.userComment;
    for (let n of te)
      this[n].finalizeFilters();
  }
  get onlyTiff() {
    return !va.map((e) => this[e].enabled).some((e) => e === !0) && this.tiff.enabled;
  }
  checkLoadedPlugins() {
    for (let e of gi)
      this[e].enabled && !Se.has(e) && hi("segment parser", e);
  }
}
function Dn(r, e) {
  let t, i, s, n, a = [];
  for (s of e) {
    for (n of (t = $i.get(s), i = [], t))
      (r.includes(n[0]) || r.includes(n[1])) && i.push(n[0]);
    i.length && a.push([s, i]);
  }
  return a;
}
function Kr(r, e) {
  return r !== void 0 ? r : e !== void 0 ? e : void 0;
}
function Ar(r, e) {
  for (let t of e)
    r.add(t);
}
W(zi, "default", ae);
class y0 {
  constructor(e) {
    W(this, "parsers", {}), W(this, "output", {}), W(this, "errors", []), W(this, "pushToErrors", (t) => this.errors.push(t)), this.options = zi.useCached(e);
  }
  async read(e) {
    this.file = await function(t, i) {
      return typeof t == "string" ? On(t, i) : Qt && !f0 && t instanceof HTMLImageElement ? On(t.src, i) : t instanceof Uint8Array || t instanceof ArrayBuffer || t instanceof DataView ? new Zt(t) : Qt && t instanceof Blob ? fi(t, i, "blob", mi) : void re("Invalid input argument");
    }(e, this.options);
  }
  setup() {
    if (this.fileParser)
      return;
    let { file: e } = this, t = e.getUint16(0);
    for (let [i, s] of ga)
      if (s.canHandle(e, t))
        return this.fileParser = new s(this.options, this.file, this.parsers), e[i] = !0;
    this.file.close && this.file.close(), re("Unknown file format");
  }
  async parse() {
    let { output: e, errors: t } = this;
    return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t.length > 0 && (e.errors = t), ma(i = e) ? void 0 : i;
    var i;
  }
  async executeParsers() {
    let { output: e } = this;
    await this.fileParser.parse();
    let t = Object.values(this.parsers).map(async (i) => {
      let s = await i.parse();
      i.assignToOutput(e, s);
    });
    this.options.silentErrors && (t = t.map((i) => i.catch(this.pushToErrors))), await Promise.all(t);
  }
  async extractThumbnail() {
    this.setup();
    let { options: e, file: t } = this, i = Se.get("tiff", e);
    var s;
    if (t.tiff ? s = { start: 0, type: "tiff" } : t.jpeg && (s = await this.fileParser.getOrFindSegment("tiff")), s === void 0)
      return;
    let n = await this.fileParser.ensureSegmentChunk(s), a = this.parsers.tiff = new i(n, e, t), o = await a.extractThumbnail();
    return t.close && t.close(), o;
  }
}
class mt {
  static findPosition(e, t) {
    let i = e.getUint16(t + 2) + 2, s = typeof this.headerLength == "function" ? this.headerLength(e, t, i) : this.headerLength, n = t + s, a = i - s;
    return { offset: t, length: i, headerLength: s, start: n, size: a, end: n + a };
  }
  static parse(e, t = {}) {
    return new this(e, new zi({ [this.type]: t }), e).parse();
  }
  normalizeInput(e) {
    return e instanceof Zt ? e : new Zt(e);
  }
  constructor(e, t = {}, i) {
    W(this, "errors", []), W(this, "raw", /* @__PURE__ */ new Map()), W(this, "handleError", (s) => {
      if (!this.options.silentErrors)
        throw s;
      this.errors.push(s.message);
    }), this.chunk = this.normalizeInput(e), this.file = i, this.type = this.constructor.type, this.globalOptions = this.options = t, this.localOptions = t[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
  }
  translate() {
    this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
  }
  get output() {
    return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
  }
  translateBlock(e, t) {
    let i = v0.get(t), s = g0.get(t), n = $i.get(t), a = this.options[t], o = a.reviveValues && !!i, d = a.translateValues && !!s, l = a.translateKeys && !!n, u = {};
    for (let [c, h] of e)
      o && i.has(c) ? h = i.get(c)(h) : d && s.has(c) && (h = this.translateValue(h, s.get(c))), l && n.has(c) && (c = n.get(c) || c), u[c] = h;
    return u;
  }
  translateValue(e, t) {
    return t[e] || t.DEFAULT || e;
  }
  assignToOutput(e, t) {
    this.assignObjectToOutput(e, this.constructor.type, t);
  }
  assignObjectToOutput(e, t, i) {
    if (this.globalOptions.mergeOutput)
      return Object.assign(e, i);
    e[t] ? Object.assign(e[t], i) : e[t] = i;
  }
}
W(mt, "headerLength", 4), W(mt, "type", void 0), W(mt, "multiSegment", !1), W(mt, "canHandle", () => !1);
function x0(r) {
  return r === 192 || r === 194 || r === 196 || r === 219 || r === 221 || r === 218 || r === 254;
}
function b0(r) {
  return r >= 224 && r <= 239;
}
function _0(r, e, t) {
  for (let [i, s] of Se)
    if (s.canHandle(r, e, t))
      return i;
}
class Nn extends class {
  constructor(e, t, i) {
    W(this, "errors", []), W(this, "ensureSegmentChunk", async (s) => {
      let n = s.start, a = s.size || 65536;
      if (this.file.chunked)
        if (this.file.available(n, a))
          s.chunk = this.file.subarray(n, a);
        else
          try {
            s.chunk = await this.file.readChunk(n, a);
          } catch (o) {
            re(`Couldn't read segment: ${JSON.stringify(s)}. ${o.message}`);
          }
      else
        this.file.byteLength > n + a ? s.chunk = this.file.subarray(n, a) : s.size === void 0 ? s.chunk = this.file.subarray(n) : re("Segment unreachable: " + JSON.stringify(s));
      return s.chunk;
    }), this.extendOptions && this.extendOptions(e), this.options = e, this.file = t, this.parsers = i;
  }
  injectSegment(e, t) {
    this.options[e].enabled && this.createParser(e, t);
  }
  createParser(e, t) {
    let i = new (Se.get(e))(t, this.options, this.file);
    return this.parsers[e] = i;
  }
  createParsers(e) {
    for (let t of e) {
      let { type: i, chunk: s } = t, n = this.options[i];
      if (n && n.enabled) {
        let a = this.parsers[i];
        a && a.append || a || this.createParser(i, s);
      }
    }
  }
  async readSegments(e) {
    let t = e.map(this.ensureSegmentChunk);
    await Promise.all(t);
  }
} {
  constructor(...e) {
    super(...e), W(this, "appSegments", []), W(this, "jpegSegments", []), W(this, "unknownSegments", []);
  }
  static canHandle(e, t) {
    return t === 65496;
  }
  async parse() {
    await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
  }
  setupSegmentFinderArgs(e) {
    e === !0 ? (this.findAll = !0, this.wanted = new Set(Se.keyList())) : (e = e === void 0 ? Se.keyList().filter((t) => this.options[t].enabled) : e.filter((t) => this.options[t].enabled && Se.has(t)), this.findAll = !1, this.remaining = new Set(e), this.wanted = new Set(e)), this.unfinishedMultiSegment = !1;
  }
  async findAppSegments(e = 0, t) {
    this.setupSegmentFinderArgs(t);
    let { file: i, findAll: s, wanted: n, remaining: a } = this;
    if (!s && this.file.chunked && (s = Array.from(n).some((o) => {
      let d = Se.get(o), l = this.options[o];
      return d.multiSegment && l.multiSegment;
    }), s && await this.file.readWhole()), e = this.findAppSegmentsInRange(e, i.byteLength), !this.options.onlyTiff && i.chunked) {
      let o = !1;
      for (; a.size > 0 && !o && (i.canReadNextChunk || this.unfinishedMultiSegment); ) {
        let { nextChunkOffset: d } = i, l = this.appSegments.some((u) => !this.file.available(u.offset || u.start, u.length || u.size));
        if (o = e > d && !l ? !await i.readNextChunk(e) : !await i.readNextChunk(d), (e = this.findAppSegmentsInRange(e, i.byteLength)) === void 0)
          return;
      }
    }
  }
  findAppSegmentsInRange(e, t) {
    t -= 2;
    let i, s, n, a, o, d, { file: l, findAll: u, wanted: c, remaining: h, options: p } = this;
    for (; e < t; e++)
      if (l.getUint8(e) === 255) {
        if (i = l.getUint8(e + 1), b0(i)) {
          if (s = l.getUint16(e + 2), n = _0(l, e, s), n && c.has(n) && (a = Se.get(n), o = a.findPosition(l, e), d = p[n], o.type = n, this.appSegments.push(o), !u && (a.multiSegment && d.multiSegment ? (this.unfinishedMultiSegment = o.chunkNumber < o.chunkCount, this.unfinishedMultiSegment || h.delete(n)) : h.delete(n), h.size === 0)))
            break;
          p.recordUnknownSegments && (o = mt.findPosition(l, e), o.marker = i, this.unknownSegments.push(o)), e += s + 1;
        } else if (x0(i)) {
          if (s = l.getUint16(e + 2), i === 218 && p.stopAfterSos !== !1)
            return;
          p.recordJpegSegments && this.jpegSegments.push({ offset: e, length: s, marker: i }), e += s + 1;
        }
      }
    return e;
  }
  mergeMultiSegments() {
    if (!this.appSegments.some((t) => t.multiSegment))
      return;
    let e = function(t, i) {
      let s, n, a, o = /* @__PURE__ */ new Map();
      for (let d = 0; d < t.length; d++)
        s = t[d], n = s[i], o.has(n) ? a = o.get(n) : o.set(n, a = []), a.push(s);
      return Array.from(o);
    }(this.appSegments, "type");
    this.mergedAppSegments = e.map(([t, i]) => {
      let s = Se.get(t, this.options);
      return s.handleMultiSegments ? { type: t, chunk: s.handleMultiSegments(i) } : i[0];
    });
  }
  getSegment(e) {
    return this.appSegments.find((t) => t.type === e);
  }
  async getOrFindSegment(e) {
    let t = this.getSegment(e);
    return t === void 0 && (await this.findAppSegments(0, [e]), t = this.getSegment(e)), t;
  }
}
W(Nn, "type", "jpeg"), ga.set("jpeg", Nn);
const w0 = [void 0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4];
class S0 extends mt {
  parseHeader() {
    var e = this.chunk.getUint16();
    e === 18761 ? this.le = !0 : e === 19789 && (this.le = !1), this.chunk.le = this.le, this.headerParsed = !0;
  }
  parseTags(e, t, i = /* @__PURE__ */ new Map()) {
    let { pick: s, skip: n } = this.options[t];
    s = new Set(s);
    let a = s.size > 0, o = n.size === 0, d = this.chunk.getUint16(e);
    e += 2;
    for (let l = 0; l < d; l++) {
      let u = this.chunk.getUint16(e);
      if (a) {
        if (s.has(u) && (i.set(u, this.parseTag(e, u, t)), s.delete(u), s.size === 0))
          break;
      } else
        !o && n.has(u) || i.set(u, this.parseTag(e, u, t));
      e += 12;
    }
    return i;
  }
  parseTag(e, t, i) {
    let { chunk: s } = this, n = s.getUint16(e + 2), a = s.getUint32(e + 4), o = w0[n];
    if (o * a <= 4 ? e += 8 : e = s.getUint32(e + 8), (n < 1 || n > 13) && re(`Invalid TIFF value type. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${n}, offset ${e}`), e > s.byteLength && re(`Invalid TIFF value offset. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${n}, offset ${e} is outside of chunk size ${s.byteLength}`), n === 1)
      return s.getUint8Array(e, a);
    if (n === 2)
      return (d = function(l) {
        for (; l.endsWith("\0"); )
          l = l.slice(0, -1);
        return l;
      }(d = s.getString(e, a)).trim()) === "" ? void 0 : d;
    var d;
    if (n === 7)
      return s.getUint8Array(e, a);
    if (a === 1)
      return this.parseTagValue(n, e);
    {
      let l = new (function(c) {
        switch (c) {
          case 1:
            return Uint8Array;
          case 3:
            return Uint16Array;
          case 4:
            return Uint32Array;
          case 5:
            return Array;
          case 6:
            return Int8Array;
          case 8:
            return Int16Array;
          case 9:
            return Int32Array;
          case 10:
            return Array;
          case 11:
            return Float32Array;
          case 12:
            return Float64Array;
          default:
            return Array;
        }
      }(n))(a), u = o;
      for (let c = 0; c < a; c++)
        l[c] = this.parseTagValue(n, e), e += u;
      return l;
    }
  }
  parseTagValue(e, t) {
    let { chunk: i } = this;
    switch (e) {
      case 1:
        return i.getUint8(t);
      case 3:
        return i.getUint16(t);
      case 4:
        return i.getUint32(t);
      case 5:
        return i.getUint32(t) / i.getUint32(t + 4);
      case 6:
        return i.getInt8(t);
      case 8:
        return i.getInt16(t);
      case 9:
        return i.getInt32(t);
      case 10:
        return i.getInt32(t) / i.getInt32(t + 4);
      case 11:
        return i.getFloat(t);
      case 12:
        return i.getDouble(t);
      case 13:
        return i.getUint32(t);
      default:
        re(`Invalid tiff type ${e}`);
    }
  }
}
class Xr extends S0 {
  static canHandle(e, t) {
    return e.getUint8(t + 1) === 225 && e.getUint32(t + 4) === 1165519206 && e.getUint16(t + 8) === 0;
  }
  async parse() {
    this.parseHeader();
    let { options: e } = this;
    return e.ifd0.enabled && await this.parseIfd0Block(), e.exif.enabled && await this.safeParse("parseExifBlock"), e.gps.enabled && await this.safeParse("parseGpsBlock"), e.interop.enabled && await this.safeParse("parseInteropBlock"), e.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
  }
  safeParse(e) {
    let t = this[e]();
    return t.catch !== void 0 && (t = t.catch(this.handleError)), t;
  }
  findIfd0Offset() {
    this.ifd0Offset === void 0 && (this.ifd0Offset = this.chunk.getUint32(4));
  }
  findIfd1Offset() {
    if (this.ifd1Offset === void 0) {
      this.findIfd0Offset();
      let e = this.chunk.getUint16(this.ifd0Offset), t = this.ifd0Offset + 2 + 12 * e;
      this.ifd1Offset = this.chunk.getUint32(t);
    }
  }
  parseBlock(e, t) {
    let i = /* @__PURE__ */ new Map();
    return this[t] = i, this.parseTags(e, t, i), i;
  }
  async parseIfd0Block() {
    if (this.ifd0)
      return;
    let { file: e } = this;
    this.findIfd0Offset(), this.ifd0Offset < 8 && re("Malformed EXIF data"), !e.chunked && this.ifd0Offset > e.byteLength && re(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`), e.tiff && await e.ensureChunk(this.ifd0Offset, Un(this.options));
    let t = this.parseBlock(this.ifd0Offset, "ifd0");
    return t.size !== 0 ? (this.exifOffset = t.get(34665), this.interopOffset = t.get(40965), this.gpsOffset = t.get(34853), this.xmp = t.get(700), this.iptc = t.get(33723), this.icc = t.get(34675), this.options.sanitize && (t.delete(34665), t.delete(40965), t.delete(34853), t.delete(700), t.delete(33723), t.delete(34675)), t) : void 0;
  }
  async parseExifBlock() {
    if (this.exif || (this.ifd0 || await this.parseIfd0Block(), this.exifOffset === void 0))
      return;
    this.file.tiff && await this.file.ensureChunk(this.exifOffset, Un(this.options));
    let e = this.parseBlock(this.exifOffset, "exif");
    return this.interopOffset || (this.interopOffset = e.get(40965)), this.makerNote = e.get(37500), this.userComment = e.get(37510), this.options.sanitize && (e.delete(40965), e.delete(37500), e.delete(37510)), this.unpack(e, 41728), this.unpack(e, 41729), e;
  }
  unpack(e, t) {
    let i = e.get(t);
    i && i.length === 1 && e.set(t, i[0]);
  }
  async parseGpsBlock() {
    if (this.gps || (this.ifd0 || await this.parseIfd0Block(), this.gpsOffset === void 0))
      return;
    let e = this.parseBlock(this.gpsOffset, "gps");
    return e && e.has(2) && e.has(4) && (e.set("latitude", In(...e.get(2), e.get(1))), e.set("longitude", In(...e.get(4), e.get(3)))), e;
  }
  async parseInteropBlock() {
    if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), this.interopOffset !== void 0 || this.exif || await this.parseExifBlock(), this.interopOffset !== void 0))
      return this.parseBlock(this.interopOffset, "interop");
  }
  async parseThumbnailBlock(e = !1) {
    if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e))
      return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = !0), this.ifd1;
  }
  async extractThumbnail() {
    if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(!0), this.ifd1 === void 0)
      return;
    let e = this.ifd1.get(513), t = this.ifd1.get(514);
    return this.chunk.getUint8Array(e, t);
  }
  get image() {
    return this.ifd0;
  }
  get thumbnail() {
    return this.ifd1;
  }
  createOutput() {
    let e, t, i, s = {};
    for (t of te)
      if (e = this[t], !ma(e))
        if (i = this.canTranslate ? this.translateBlock(e, t) : Object.fromEntries(e), this.options.mergeOutput) {
          if (t === "ifd1")
            continue;
          Object.assign(s, i);
        } else
          s[t] = i;
    return this.makerNote && (s.makerNote = this.makerNote), this.userComment && (s.userComment = this.userComment), s;
  }
  assignToOutput(e, t) {
    if (this.globalOptions.mergeOutput)
      Object.assign(e, t);
    else
      for (let [i, s] of Object.entries(t))
        this.assignObjectToOutput(e, i, s);
  }
}
function In(r, e, t, i) {
  var s = r + e / 60 + t / 3600;
  return i !== "S" && i !== "W" || (s *= -1), s;
}
W(Xr, "type", "tiff"), W(Xr, "headerLength", 10), Se.set("tiff", Xr);
const Li = { ifd0: !1, ifd1: !1, exif: !1, gps: !1, interop: !1, sanitize: !1, reviveValues: !0, translateKeys: !1, translateValues: !1, mergeOutput: !1 };
Object.assign({}, Li, { firstChunkSize: 4e4, gps: [1, 2, 3, 4] });
Object.assign({}, Li, { tiff: !1, ifd1: !0, mergeOutput: !1 });
const P0 = Object.assign({}, Li, { firstChunkSize: 4e4, ifd0: [274] });
async function F0(r) {
  let e = new y0(P0);
  await e.read(r);
  let t = await e.parse();
  if (t && t.ifd0)
    return t.ifd0[274];
}
const C0 = Object.freeze({ 1: { dimensionSwapped: !1, scaleX: 1, scaleY: 1, deg: 0, rad: 0 }, 2: { dimensionSwapped: !1, scaleX: -1, scaleY: 1, deg: 0, rad: 0 }, 3: { dimensionSwapped: !1, scaleX: 1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 4: { dimensionSwapped: !1, scaleX: -1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 5: { dimensionSwapped: !0, scaleX: 1, scaleY: -1, deg: 90, rad: 90 * Math.PI / 180 }, 6: { dimensionSwapped: !0, scaleX: 1, scaleY: 1, deg: 90, rad: 90 * Math.PI / 180 }, 7: { dimensionSwapped: !0, scaleX: 1, scaleY: -1, deg: 270, rad: 270 * Math.PI / 180 }, 8: { dimensionSwapped: !0, scaleX: 1, scaleY: 1, deg: 270, rad: 270 * Math.PI / 180 } });
let Ht = !0, jt = !0;
if (typeof navigator == "object") {
  let r = navigator.userAgent;
  if (r.includes("iPad") || r.includes("iPhone")) {
    let e = r.match(/OS (\d+)_(\d+)/);
    if (e) {
      let [, t, i] = e;
      Ht = Number(t) + 0.1 * Number(i) < 13.4, jt = !1;
    }
  } else if (r.includes("OS X 10")) {
    let [, e] = r.match(/OS X 10[_.](\d+)/);
    Ht = jt = Number(e) < 15;
  }
  if (r.includes("Chrome/")) {
    let [, e] = r.match(/Chrome\/(\d+)/);
    Ht = jt = Number(e) < 81;
  } else if (r.includes("Firefox/")) {
    let [, e] = r.match(/Firefox\/(\d+)/);
    Ht = jt = Number(e) < 77;
  }
}
async function k0(r) {
  let e = await F0(r);
  return Object.assign({ canvas: Ht, css: jt }, C0[e]);
}
class A0 extends Zt {
  constructor(...e) {
    super(...e), W(this, "ranges", new E0()), this.byteLength !== 0 && this.ranges.add(0, this.byteLength);
  }
  _tryExtend(e, t, i) {
    if (e === 0 && this.byteLength === 0 && i) {
      let s = new DataView(i.buffer || i, i.byteOffset, i.byteLength);
      this._swapDataView(s);
    } else {
      let s = e + t;
      if (s > this.byteLength) {
        let { dataView: n } = this._extend(s);
        this._swapDataView(n);
      }
    }
  }
  _extend(e) {
    let t;
    t = pa ? fa.allocUnsafe(e) : new Uint8Array(e);
    let i = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return t.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), { uintView: t, dataView: i };
  }
  subarray(e, t, i = !1) {
    return t = t || this._lengthToEnd(e), i && this._tryExtend(e, t), this.ranges.add(e, t), super.subarray(e, t);
  }
  set(e, t, i = !1) {
    i && this._tryExtend(t, e.byteLength, e);
    let s = super.set(e, t);
    return this.ranges.add(t, s.byteLength), s;
  }
  async ensureChunk(e, t) {
    this.chunked && (this.ranges.available(e, t) || await this.readChunk(e, t));
  }
  available(e, t) {
    return this.ranges.available(e, t);
  }
}
class E0 {
  constructor() {
    W(this, "list", []);
  }
  get length() {
    return this.list.length;
  }
  add(e, t, i = 0) {
    let s = e + t, n = this.list.filter((a) => $n(e, a.offset, s) || $n(e, a.end, s));
    if (n.length > 0) {
      e = Math.min(e, ...n.map((o) => o.offset)), s = Math.max(s, ...n.map((o) => o.end)), t = s - e;
      let a = n.shift();
      a.offset = e, a.length = t, a.end = s, this.list = this.list.filter((o) => !n.includes(o));
    } else
      this.list.push({ offset: e, length: t, end: s });
  }
  available(e, t) {
    let i = e + t;
    return this.list.some((s) => s.offset <= e && i <= s.end);
  }
}
function $n(r, e, t) {
  return r <= e && e <= t;
}
class U0 extends A0 {
  constructor(e, t) {
    super(0), W(this, "chunksRead", 0), this.input = e, this.options = t;
  }
  async readWhole() {
    this.chunked = !1, await this.readChunk(this.nextChunkOffset);
  }
  async readChunked() {
    this.chunked = !0, await this.readChunk(0, this.options.firstChunkSize);
  }
  async readNextChunk(e = this.nextChunkOffset) {
    if (this.fullyRead)
      return this.chunksRead++, !1;
    let t = this.options.chunkSize, i = await this.readChunk(e, t);
    return !!i && i.byteLength === t;
  }
  async readChunk(e, t) {
    if (this.chunksRead++, (t = this.safeWrapAddress(e, t)) !== 0)
      return this._readChunk(e, t);
  }
  safeWrapAddress(e, t) {
    return this.size !== void 0 && e + t > this.size ? Math.max(0, this.size - e) : t;
  }
  get nextChunkOffset() {
    if (this.ranges.list.length !== 0)
      return this.ranges.list[0].length;
  }
  get canReadNextChunk() {
    return this.chunksRead < this.options.chunkLimit;
  }
  get fullyRead() {
    return this.size !== void 0 && this.nextChunkOffset === this.size;
  }
  read() {
    return this.options.chunked ? this.readChunked() : this.readWhole();
  }
  close() {
  }
}
Ii.set("blob", class extends U0 {
  async readWhole() {
    this.chunked = !1;
    let r = await mi(this.input);
    this._swapArrayBuffer(r);
  }
  readChunked() {
    return this.chunked = !0, this.size = this.input.size, super.readChunked();
  }
  async _readChunk(r, e) {
    let t = e ? r + e : void 0, i = this.input.slice(r, t), s = await mi(i);
    return this.set(s, r, !0);
  }
});
const T0 = {
  strings: {
    generatingThumbnails: "Generating thumbnails..."
  }
}, O0 = {
  version: "3.0.2"
};
function B0(r, e, t) {
  try {
    r.getContext("2d").getImageData(0, 0, 1, 1);
  } catch (i) {
    if (i.code === 18)
      return Promise.reject(new Error("cannot read image, probably an svg with external resources"));
  }
  return r.toBlob ? new Promise((i) => {
    r.toBlob(i, e, t);
  }).then((i) => {
    if (i === null)
      throw new Error("cannot read image, probably an svg with external resources");
    return i;
  }) : Promise.resolve().then(() => h0(r.toDataURL(e, t), {})).then((i) => {
    if (i === null)
      throw new Error("could not extract blob, probably an old browser");
    return i;
  });
}
function R0(r, e) {
  let t = r.width, i = r.height;
  (e.deg === 90 || e.deg === 270) && (t = r.height, i = r.width);
  const s = document.createElement("canvas");
  s.width = t, s.height = i;
  const n = s.getContext("2d");
  return n.translate(t / 2, i / 2), e.canvas && (n.rotate(e.rad), n.scale(e.scaleX, e.scaleY)), n.drawImage(r, -r.width / 2, -r.height / 2, r.width, r.height), s;
}
function D0(r) {
  const e = r.width / r.height, t = 5e6, i = 4096;
  let s = Math.floor(Math.sqrt(t * e)), n = Math.floor(t / Math.sqrt(t * e));
  if (s > i && (s = i, n = Math.round(s / e)), n > i && (n = i, s = Math.round(e * n)), r.width > s) {
    const a = document.createElement("canvas");
    return a.width = s, a.height = n, a.getContext("2d").drawImage(r, 0, 0, s, n), a;
  }
  return r;
}
class ba extends yt {
  constructor(e, t) {
    super(e, t), this.onFileAdded = (s) => {
      !s.preview && s.data && An(s.type) && !s.isRemote && this.addToQueue(s.id);
    }, this.onCancelRequest = (s) => {
      const n = this.queue.indexOf(s.id);
      n !== -1 && this.queue.splice(n, 1);
    }, this.onFileRemoved = (s) => {
      const n = this.queue.indexOf(s.id);
      n !== -1 && this.queue.splice(n, 1), s.preview && kn(s.preview) && URL.revokeObjectURL(s.preview);
    }, this.onRestored = () => {
      this.uppy.getFiles().filter((n) => n.isRestored).forEach((n) => {
        (!n.preview || kn(n.preview)) && this.addToQueue(n.id);
      });
    }, this.onAllFilesRemoved = () => {
      this.queue = [];
    }, this.waitUntilAllProcessed = (s) => {
      s.forEach((a) => {
        const o = this.uppy.getFile(a);
        this.uppy.emit("preprocess-progress", o, {
          mode: "indeterminate",
          message: this.i18n("generatingThumbnails")
        });
      });
      const n = () => {
        s.forEach((a) => {
          const o = this.uppy.getFile(a);
          this.uppy.emit("preprocess-complete", o);
        });
      };
      return new Promise((a) => {
        this.queueProcessing ? this.uppy.once("thumbnail:all-generated", () => {
          n(), a();
        }) : (n(), a());
      });
    }, this.type = "modifier", this.id = this.opts.id || "ThumbnailGenerator", this.title = "Thumbnail Generator", this.queue = [], this.queueProcessing = !1, this.defaultThumbnailDimension = 200, this.thumbnailType = this.opts.thumbnailType || "image/jpeg", this.defaultLocale = T0;
    const i = {
      thumbnailWidth: null,
      thumbnailHeight: null,
      waitForThumbnailsBeforeUpload: !1,
      lazy: !1
    };
    if (this.opts = {
      ...i,
      ...t
    }, this.i18nInit(), this.opts.lazy && this.opts.waitForThumbnailsBeforeUpload)
      throw new Error("ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.");
  }
  /**
   * Create a thumbnail for the given Uppy file object.
   *
   * @param {{data: Blob}} file
   * @param {number} targetWidth
   * @param {number} targetHeight
   * @returns {Promise}
   */
  createThumbnail(e, t, i) {
    const s = URL.createObjectURL(e.data), n = new Promise((o, d) => {
      const l = new Image();
      l.src = s, l.addEventListener("load", () => {
        URL.revokeObjectURL(s), o(l);
      }), l.addEventListener("error", (u) => {
        URL.revokeObjectURL(s), d(u.error || new Error("Could not create thumbnail"));
      });
    }), a = k0(e.data).catch(() => 1);
    return Promise.all([n, a]).then((o) => {
      let [d, l] = o;
      const u = this.getProportionalDimensions(d, t, i, l.deg), c = R0(d, l), h = this.resizeImage(c, u.width, u.height);
      return B0(h, this.thumbnailType, 80);
    }).then((o) => URL.createObjectURL(o));
  }
  /**
   * Get the new calculated dimensions for the given image and a target width
   * or height. If both width and height are given, only width is taken into
   * account. If neither width nor height are given, the default dimension
   * is used.
   */
  getProportionalDimensions(e, t, i, s) {
    let n = e.width / e.height;
    return (s === 90 || s === 270) && (n = e.height / e.width), t != null ? {
      width: t,
      height: Math.round(t / n)
    } : i != null ? {
      width: Math.round(i * n),
      height: i
    } : {
      width: this.defaultThumbnailDimension,
      height: Math.round(this.defaultThumbnailDimension / n)
    };
  }
  /**
   * Resize an image to the target `width` and `height`.
   *
   * Returns a Canvas with the resized image on it.
   */
  // eslint-disable-next-line class-methods-use-this
  resizeImage(e, t, i) {
    let s = D0(e), n = Math.ceil(Math.log2(s.width / t));
    n < 1 && (n = 1);
    let a = t * 2 ** (n - 1), o = i * 2 ** (n - 1);
    const d = 2;
    for (; n--; ) {
      const l = document.createElement("canvas");
      l.width = a, l.height = o, l.getContext("2d").drawImage(s, 0, 0, a, o), s = l, a = Math.round(a / d), o = Math.round(o / d);
    }
    return s;
  }
  /**
   * Set the preview URL for a file.
   */
  setPreviewURL(e, t) {
    this.uppy.setFileState(e, {
      preview: t
    });
  }
  addToQueue(e) {
    this.queue.push(e), this.queueProcessing === !1 && this.processQueue();
  }
  processQueue() {
    if (this.queueProcessing = !0, this.queue.length > 0) {
      const e = this.uppy.getFile(this.queue.shift());
      return e ? this.requestThumbnail(e).catch(() => {
      }).then(() => this.processQueue()) : (this.uppy.log("[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug", "error"), Promise.resolve());
    }
    return this.queueProcessing = !1, this.uppy.log("[ThumbnailGenerator] Emptied thumbnail queue"), this.uppy.emit("thumbnail:all-generated"), Promise.resolve();
  }
  requestThumbnail(e) {
    return An(e.type) && !e.isRemote ? this.createThumbnail(e, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then((t) => {
      this.setPreviewURL(e.id, t), this.uppy.log(`[ThumbnailGenerator] Generated thumbnail for ${e.id}`), this.uppy.emit("thumbnail:generated", this.uppy.getFile(e.id), t);
    }).catch((t) => {
      this.uppy.log(`[ThumbnailGenerator] Failed thumbnail for ${e.id}:`, "warning"), this.uppy.log(t, "warning"), this.uppy.emit("thumbnail:error", this.uppy.getFile(e.id), t);
    }) : Promise.resolve();
  }
  install() {
    this.uppy.on("file-removed", this.onFileRemoved), this.uppy.on("cancel-all", this.onAllFilesRemoved), this.opts.lazy ? (this.uppy.on("thumbnail:request", this.onFileAdded), this.uppy.on("thumbnail:cancel", this.onCancelRequest)) : (this.uppy.on("file-added", this.onFileAdded), this.uppy.on("restored", this.onRestored)), this.opts.waitForThumbnailsBeforeUpload && this.uppy.addPreProcessor(this.waitUntilAllProcessed);
  }
  uninstall() {
    this.uppy.off("file-removed", this.onFileRemoved), this.uppy.off("cancel-all", this.onAllFilesRemoved), this.opts.lazy ? (this.uppy.off("thumbnail:request", this.onFileAdded), this.uppy.off("thumbnail:cancel", this.onCancelRequest)) : (this.uppy.off("file-added", this.onFileAdded), this.uppy.off("restored", this.onRestored)), this.opts.waitForThumbnailsBeforeUpload && this.uppy.removePreProcessor(this.waitUntilAllProcessed);
  }
}
ba.VERSION = O0.version;
function zn(r) {
  if (typeof r == "string") {
    const e = document.querySelectorAll(r);
    return e.length === 0 ? null : Array.from(e);
  }
  return typeof r == "object" && sa(r) ? [r] : null;
}
const Kt = Array.from;
function _a(r, e, t, i) {
  let {
    onSuccess: s
  } = i;
  r.readEntries(
    (n) => {
      const a = [...e, ...n];
      n.length ? queueMicrotask(() => {
        _a(r, a, t, {
          onSuccess: s
        });
      }) : s(a);
    },
    // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!
    (n) => {
      t(n), s(e);
    }
  );
}
function wa(r, e) {
  return r == null ? r : {
    // eslint-disable-next-line no-nested-ternary
    kind: r.isFile ? "file" : r.isDirectory ? "directory" : void 0,
    name: r.name,
    getFile() {
      return new Promise((t, i) => r.file(t, i));
    },
    async *values() {
      const t = r.createReader();
      yield* await new Promise((s) => {
        _a(t, [], e, {
          onSuccess: (n) => s(n.map((a) => wa(a, e)))
        });
      });
    }
  };
}
async function* Sa(r, e, t) {
  if (t === void 0 && (t = void 0), r.kind === "file") {
    const i = await r.getFile();
    i != null ? (i.relativePath = e ? `${e}/${r.name}` : null, yield i) : t != null && (yield t);
  } else if (r.kind === "directory")
    for await (const i of r.values())
      yield* Sa(i, `${e}/${r.name}`);
  else
    t != null && (yield t);
}
async function* N0(r, e) {
  const t = await Promise.all(Array.from(r.items, async (i) => {
    var s;
    let n;
    const a = () => typeof i.getAsEntry == "function" ? i.getAsEntry() : i.webkitGetAsEntry();
    return (s = n) != null || (n = wa(a(), e)), {
      fileSystemHandle: n,
      lastResortFile: i.getAsFile()
      // can be used as a fallback in case other methods fail
    };
  }));
  for (const {
    lastResortFile: i,
    fileSystemHandle: s
  } of t)
    if (s != null)
      try {
        yield* Sa(s, "", i);
      } catch (n) {
        i != null ? yield i : e(n);
      }
    else
      i != null && (yield i);
}
function I0(r) {
  const e = Kt(r.files);
  return Promise.resolve(e);
}
async function $0(r, e) {
  let {
    logDropError: t = () => {
    }
  } = e === void 0 ? {} : e;
  try {
    const i = [];
    for await (const s of N0(r, t))
      i.push(s);
    return i;
  } catch {
    return I0(r);
  }
}
var Ln = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function z0(r, e) {
  return !!(r === e || Ln(r) && Ln(e));
}
function L0(r, e) {
  if (r.length !== e.length)
    return !1;
  for (var t = 0; t < r.length; t++)
    if (!z0(r[t], e[t]))
      return !1;
  return !0;
}
function Mn(r, e) {
  e === void 0 && (e = L0);
  var t = null;
  function i() {
    for (var s = [], n = 0; n < arguments.length; n++)
      s[n] = arguments[n];
    if (t && t.lastThis === this && e(s, t.lastArgs))
      return t.lastResult;
    var a = r.apply(this, s);
    return t = {
      lastResult: a,
      lastArgs: s,
      lastThis: this
    }, a;
  }
  return i.clear = function() {
    t = null;
  }, i;
}
const Pa = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', "input:not([disabled]):not([inert]):not([aria-hidden])", "select:not([disabled]):not([inert]):not([aria-hidden])", "textarea:not([disabled]):not([inert]):not([aria-hidden])", "button:not([disabled]):not([inert]):not([aria-hidden])", 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];
function Fa(r, e) {
  if (e) {
    const t = r.querySelector(`[data-uppy-paneltype="${e}"]`);
    if (t)
      return t;
  }
  return r;
}
function Hn(r, e) {
  const t = e[0];
  t && (t.focus(), r.preventDefault());
}
function M0(r, e) {
  const t = e[e.length - 1];
  t && (t.focus(), r.preventDefault());
}
function H0(r) {
  return r.contains(document.activeElement);
}
function Ca(r, e, t) {
  const i = Fa(t, e), s = Kt(i.querySelectorAll(Pa)), n = s.indexOf(document.activeElement);
  H0(i) ? r.shiftKey && n === 0 ? M0(r, s) : !r.shiftKey && n === s.length - 1 && Hn(r, s) : Hn(r, s);
}
function j0(r, e, t) {
  e === null || Ca(r, e, t);
}
var q0 = "Expected a function", jn = 0 / 0, W0 = "[object Symbol]", V0 = /^\s+|\s+$/g, G0 = /^[-+]0x[0-9a-f]+$/i, K0 = /^0b[01]+$/i, X0 = /^0o[0-7]+$/i, Y0 = parseInt, J0 = typeof le == "object" && le && le.Object === Object && le, Q0 = typeof self == "object" && self && self.Object === Object && self, Z0 = J0 || Q0 || Function("return this")(), eu = Object.prototype, tu = eu.toString, ru = Math.max, iu = Math.min, Yr = function() {
  return Z0.Date.now();
};
function nu(r, e, t) {
  var i, s, n, a, o, d, l = 0, u = !1, c = !1, h = !0;
  if (typeof r != "function")
    throw new TypeError(q0);
  e = qn(e) || 0, vi(t) && (u = !!t.leading, c = "maxWait" in t, n = c ? ru(qn(t.maxWait) || 0, e) : n, h = "trailing" in t ? !!t.trailing : h);
  function p(w) {
    var F = i, P = s;
    return i = s = void 0, l = w, a = r.apply(P, F), a;
  }
  function f(w) {
    return l = w, o = setTimeout(_, e), u ? p(w) : a;
  }
  function v(w) {
    var F = w - d, P = w - l, A = e - F;
    return c ? iu(A, n - P) : A;
  }
  function y(w) {
    var F = w - d, P = w - l;
    return d === void 0 || F >= e || F < 0 || c && P >= n;
  }
  function _() {
    var w = Yr();
    if (y(w))
      return g(w);
    o = setTimeout(_, v(w));
  }
  function g(w) {
    return o = void 0, h && i ? p(w) : (i = s = void 0, a);
  }
  function x() {
    o !== void 0 && clearTimeout(o), l = 0, i = d = s = o = void 0;
  }
  function b() {
    return o === void 0 ? a : g(Yr());
  }
  function C() {
    var w = Yr(), F = y(w);
    if (i = arguments, s = this, d = w, F) {
      if (o === void 0)
        return f(d);
      if (c)
        return o = setTimeout(_, e), p(d);
    }
    return o === void 0 && (o = setTimeout(_, e)), a;
  }
  return C.cancel = x, C.flush = b, C;
}
function vi(r) {
  var e = typeof r;
  return !!r && (e == "object" || e == "function");
}
function su(r) {
  return !!r && typeof r == "object";
}
function au(r) {
  return typeof r == "symbol" || su(r) && tu.call(r) == W0;
}
function qn(r) {
  if (typeof r == "number")
    return r;
  if (au(r))
    return jn;
  if (vi(r)) {
    var e = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = vi(e) ? e + "" : e;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = r.replace(V0, "");
  var t = K0.test(r);
  return t || X0.test(r) ? Y0(r.slice(2), t ? 2 : 8) : G0.test(r) ? jn : +r;
}
var ou = nu;
function lu() {
  let r = !1;
  return ou((t, i) => {
    const s = Fa(t, i), n = s.contains(document.activeElement);
    if (n && r)
      return;
    const a = s.querySelector("[data-uppy-super-focusable]");
    if (!(n && !a))
      if (a)
        a.focus({
          preventScroll: !0
        }), r = !0;
      else {
        const o = s.querySelector(Pa);
        o == null || o.focus({
          preventScroll: !0
        }), r = !1;
      }
  }, 260);
}
function uu() {
  const r = document.body;
  return !(!("draggable" in r) || !("ondragstart" in r && "ondrop" in r) || !("FormData" in window) || !("FileReader" in window));
}
var du = function(e, t) {
  if (e === t)
    return !0;
  for (var i in e)
    if (!(i in t))
      return !1;
  for (var i in t)
    if (e[i] !== t[i])
      return !1;
  return !0;
};
function cu() {
  return m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, m("g", {
    fill: "#686DE0",
    fillRule: "evenodd"
  }, m("path", {
    d: "M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
    fillRule: "nonzero"
  }), m("path", {
    d: "M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z",
    fillRule: "nonzero"
  }), m("circle", {
    cx: "7.5",
    cy: "9.5",
    r: "1.5"
  })));
}
function hu() {
  return m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, m("path", {
    d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",
    fill: "#049BCF",
    fillRule: "nonzero"
  }));
}
function fu() {
  return m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, m("path", {
    d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",
    fill: "#19AF67",
    fillRule: "nonzero"
  }));
}
function pu() {
  return m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, m("path", {
    d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",
    fill: "#E2514A",
    fillRule: "nonzero"
  }));
}
function mu() {
  return m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, m("path", {
    d: "M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",
    fill: "#00C469",
    fillRule: "nonzero"
  }));
}
function gu() {
  return m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, m("g", {
    fill: "#A7AFB7",
    fillRule: "nonzero"
  }, m("path", {
    d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z"
  }), m("path", {
    d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z"
  })));
}
function vu() {
  return m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, m("path", {
    d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",
    fill: "#5A5E69",
    fillRule: "nonzero"
  }));
}
function Mi(r) {
  const e = {
    color: "#838999",
    icon: gu()
  };
  if (!r)
    return e;
  const t = r.split("/")[0], i = r.split("/")[1];
  return t === "text" ? {
    color: "#5a5e69",
    icon: vu()
  } : t === "image" ? {
    color: "#686de0",
    icon: cu()
  } : t === "audio" ? {
    color: "#068dbb",
    icon: hu()
  } : t === "video" ? {
    color: "#19af67",
    icon: fu()
  } : t === "application" && i === "pdf" ? {
    color: "#e25149",
    icon: pu()
  } : t === "application" && ["zip", "x-7z-compressed", "x-rar-compressed", "x-tar", "x-gzip", "x-apple-diskimage"].indexOf(i) !== -1 ? {
    color: "#00C469",
    icon: mu()
  } : e;
}
function ka(r) {
  const {
    file: e
  } = r;
  if (e.preview)
    return m("img", {
      className: "uppy-Dashboard-Item-previewImg",
      alt: e.name,
      src: e.preview
    });
  const {
    color: t,
    icon: i
  } = Mi(e.type);
  return m("div", {
    className: "uppy-Dashboard-Item-previewIconWrap"
  }, m("span", {
    className: "uppy-Dashboard-Item-previewIcon",
    style: {
      color: t
    }
  }, i), m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-Dashboard-Item-previewIconBg",
    width: "58",
    height: "76",
    viewBox: "0 0 58 76"
  }, m("rect", {
    fill: "#FFF",
    width: "58",
    height: "76",
    rx: "3",
    fillRule: "evenodd"
  })));
}
const yu = (r, e) => (typeof e == "function" ? e() : e).filter((s) => s.id === r)[0].name;
function Aa(r) {
  const {
    file: e,
    toggleFileCard: t,
    i18n: i,
    metaFields: s
  } = r, {
    missingRequiredMetaFields: n
  } = e;
  if (!(n != null && n.length))
    return null;
  const a = n.map((o) => yu(o, s)).join(", ");
  return m("div", {
    className: "uppy-Dashboard-Item-errorMessage"
  }, i("missingRequiredMetaFields", {
    smart_count: n.length,
    fields: a
  }), " ", m("button", {
    type: "button",
    class: "uppy-u-reset uppy-Dashboard-Item-errorMessageBtn",
    onClick: () => t(!0, e.id)
  }, i("editFile")));
}
function xu(r) {
  return m("div", {
    className: "uppy-Dashboard-Item-previewInnerWrap",
    style: {
      backgroundColor: Mi(r.file.type).color
    }
  }, r.showLinkToFileUploadResult && r.file.uploadURL && m("a", {
    className: "uppy-Dashboard-Item-previewLink",
    href: r.file.uploadURL,
    rel: "noreferrer noopener",
    target: "_blank",
    "aria-label": r.file.meta.name
  }, m("span", {
    hidden: !0
  }, r.file.meta.name)), m(ka, {
    file: r.file
  }), m(Aa, {
    file: r.file,
    i18n: r.i18n,
    toggleFileCard: r.toggleFileCard,
    metaFields: r.metaFields
  }));
}
function bu(r) {
  if (!r.isUploaded) {
    if (r.error && !r.hideRetryButton) {
      r.uppy.retryUpload(r.file.id);
      return;
    }
    r.resumableUploads && !r.hidePauseResumeButton ? r.uppy.pauseResume(r.file.id) : r.individualCancellation && !r.hideCancelButton && r.uppy.removeFile(r.file.id);
  }
}
function Wn(r) {
  return r.isUploaded ? r.i18n("uploadComplete") : r.error ? r.i18n("retryUpload") : r.resumableUploads ? r.file.isPaused ? r.i18n("resumeUpload") : r.i18n("pauseUpload") : r.individualCancellation ? r.i18n("cancelUpload") : "";
}
function Jr(r) {
  return m("div", {
    className: "uppy-Dashboard-Item-progress"
  }, m("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-progressIndicator",
    type: "button",
    "aria-label": Wn(r),
    title: Wn(r),
    onClick: () => bu(r)
  }, r.children));
}
function pr(r) {
  let {
    children: e
  } = r;
  return m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "70",
    height: "70",
    viewBox: "0 0 36 36",
    className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--circle"
  }, e);
}
function Qr(r) {
  let {
    progress: e
  } = r;
  const t = 2 * Math.PI * 15;
  return m("g", null, m("circle", {
    className: "uppy-Dashboard-Item-progressIcon--bg",
    r: "15",
    cx: "18",
    cy: "18",
    "stroke-width": "2",
    fill: "none"
  }), m("circle", {
    className: "uppy-Dashboard-Item-progressIcon--progress",
    r: "15",
    cx: "18",
    cy: "18",
    transform: "rotate(-90, 18, 18)",
    fill: "none",
    "stroke-width": "2",
    "stroke-dasharray": t,
    "stroke-dashoffset": t - t / 100 * e
  }));
}
function _u(r) {
  if (!r.file.progress.uploadStarted)
    return null;
  if (r.isUploaded)
    return m("div", {
      className: "uppy-Dashboard-Item-progress"
    }, m("div", {
      className: "uppy-Dashboard-Item-progressIndicator"
    }, m(pr, null, m("circle", {
      r: "15",
      cx: "18",
      cy: "18",
      fill: "#1bb240"
    }), m("polygon", {
      className: "uppy-Dashboard-Item-progressIcon--check",
      transform: "translate(2, 3)",
      points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"
    }))));
  if (!r.recoveredState)
    return r.error && !r.hideRetryButton ? (
      // eslint-disable-next-line react/jsx-props-no-spreading
      m(Jr, r, m("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--retry",
        width: "28",
        height: "31",
        viewBox: "0 0 16 19"
      }, m("path", {
        d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"
      }), m("path", {
        d: "M7.9 3H10v2H7.9z"
      }), m("path", {
        d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"
      }), m("path", {
        d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"
      })))
    ) : r.resumableUploads && !r.hidePauseResumeButton ? (
      // eslint-disable-next-line react/jsx-props-no-spreading
      m(Jr, r, m(pr, null, m(Qr, {
        progress: r.file.progress.percentage
      }), r.file.isPaused ? m("polygon", {
        className: "uppy-Dashboard-Item-progressIcon--play",
        transform: "translate(3, 3)",
        points: "12 20 12 10 20 15"
      }) : m("g", {
        className: "uppy-Dashboard-Item-progressIcon--pause",
        transform: "translate(14.5, 13)"
      }, m("rect", {
        x: "0",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
      }), m("rect", {
        x: "5",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
      }))))
    ) : !r.resumableUploads && r.individualCancellation && !r.hideCancelButton ? (
      // eslint-disable-next-line react/jsx-props-no-spreading
      m(Jr, r, m(pr, null, m(Qr, {
        progress: r.file.progress.percentage
      }), m("polygon", {
        className: "cancel",
        transform: "translate(2, 2)",
        points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"
      })))
    ) : m("div", {
      className: "uppy-Dashboard-Item-progress"
    }, m("div", {
      className: "uppy-Dashboard-Item-progressIndicator"
    }, m(pr, null, m(Qr, {
      progress: r.file.progress.percentage
    }))));
}
var wu = function(e) {
  if (typeof e != "number" || isNaN(e))
    throw new TypeError("Expected a number, got " + typeof e);
  var t = e < 0, i = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  if (t && (e = -e), e < 1)
    return (t ? "-" : "") + e + " B";
  var s = Math.min(Math.floor(Math.log(e) / Math.log(1024)), i.length - 1);
  e = Number(e / Math.pow(1024, s));
  var n = i[s];
  return e >= 10 || e % 1 === 0 ? (t ? "-" : "") + e.toFixed(0) + " " + n : (t ? "-" : "") + e.toFixed(1) + " " + n;
};
const Zr = "...";
function Ea(r, e) {
  if (e === 0)
    return "";
  if (r.length <= e)
    return r;
  if (e <= Zr.length + 1)
    return `${r.slice(0, e - 1)}…`;
  const t = e - Zr.length, i = Math.ceil(t / 2), s = Math.floor(t / 2);
  return r.slice(0, i) + Zr + r.slice(-s);
}
const Su = (r) => {
  const {
    author: e,
    name: t
  } = r.file.meta;
  function i() {
    return r.singleFile ? 200 : r.containerWidth <= 352 ? 35 : r.containerWidth <= 576 ? 60 : e ? 20 : 30;
  }
  return m("div", {
    className: "uppy-Dashboard-Item-name",
    title: t
  }, Ea(t, i()));
}, Pu = (r) => {
  const {
    author: e
  } = r.file.meta, {
    providerName: t
  } = r.file.remote, i = "·";
  return e ? m("div", {
    className: "uppy-Dashboard-Item-author"
  }, m("a", {
    href: `${e.url}?utm_source=Companion&utm_medium=referral`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, Ea(e.name, 13)), t ? m(Ve, null, ` ${i} `, t, ` ${i} `) : null) : null;
}, Fu = (r) => r.file.size && m("div", {
  className: "uppy-Dashboard-Item-statusSize"
}, wu(r.file.size)), Cu = (r) => r.file.isGhost && m("span", null, " • ", m("button", {
  className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-reSelect",
  type: "button",
  onClick: r.toggleAddFilesPanel
}, r.i18n("reSelect"))), ku = (r) => {
  let {
    file: e,
    onClick: t
  } = r;
  return e.error ? m("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-errorDetails",
    "aria-label": e.error,
    "data-microtip-position": "bottom",
    "data-microtip-size": "medium",
    onClick: t,
    type: "button"
  }, "?") : null;
};
function Au(r) {
  const {
    file: e
  } = r;
  return m("div", {
    className: "uppy-Dashboard-Item-fileInfo",
    "data-uppy-file-source": e.source
  }, m("div", {
    className: "uppy-Dashboard-Item-fileName"
  }, Su(r), m(ku, {
    file: r.file,
    onClick: () => alert(r.file.error)
    // TODO: move to a custom alert implementation
  })), m("div", {
    className: "uppy-Dashboard-Item-status"
  }, Pu(r), Fu(r), Cu(r)), m(Aa, {
    file: r.file,
    i18n: r.i18n,
    toggleFileCard: r.toggleFileCard,
    metaFields: r.metaFields
  }));
}
function Eu(r, e) {
  return e === void 0 && (e = "Copy the URL below"), new Promise((t) => {
    const i = document.createElement("textarea");
    i.setAttribute("style", {
      position: "fixed",
      top: 0,
      left: 0,
      width: "2em",
      height: "2em",
      padding: 0,
      border: "none",
      outline: "none",
      boxShadow: "none",
      background: "transparent"
    }), i.value = r, document.body.appendChild(i), i.select();
    const s = () => {
      document.body.removeChild(i), window.prompt(e, r), t();
    };
    try {
      return document.execCommand("copy") ? (document.body.removeChild(i), t()) : s("copy command unavailable");
    } catch {
      return document.body.removeChild(i), s();
    }
  });
}
function Uu(r) {
  let {
    file: e,
    uploadInProgressOrComplete: t,
    metaFields: i,
    canEditFile: s,
    i18n: n,
    onClick: a
  } = r;
  return !t && i && i.length > 0 || !t && s(e) ? m("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-action uppy-Dashboard-Item-action--edit",
    type: "button",
    "aria-label": n("editFileWithFilename", {
      file: e.meta.name
    }),
    title: n("editFileWithFilename", {
      file: e.meta.name
    }),
    onClick: () => a()
  }, m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, m("g", {
    fillRule: "evenodd"
  }, m("path", {
    d: "M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z",
    fillRule: "nonzero"
  }), m("rect", {
    x: "1",
    y: "12.293",
    width: "11",
    height: "1",
    rx: ".5"
  }), m("path", {
    fillRule: "nonzero",
    d: "M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z"
  })))) : null;
}
function Tu(r) {
  let {
    i18n: e,
    onClick: t,
    file: i
  } = r;
  return m("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--remove",
    type: "button",
    "aria-label": e("removeFile", {
      file: i.meta.name
    }),
    title: e("removeFile", {
      file: i.meta.name
    }),
    onClick: () => t()
  }, m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  }, m("path", {
    d: "M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"
  }), m("path", {
    fill: "#FFF",
    d: "M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z"
  })));
}
const Ou = (r, e) => {
  Eu(e.file.uploadURL, e.i18n("copyLinkToClipboardFallback")).then(() => {
    e.uppy.log("Link copied to clipboard."), e.uppy.info(e.i18n("copyLinkToClipboardSuccess"), "info", 3e3);
  }).catch(e.uppy.log).then(() => r.target.focus({
    preventScroll: !0
  }));
};
function Bu(r) {
  const {
    i18n: e
  } = r;
  return m("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--copyLink",
    type: "button",
    "aria-label": e("copyLink"),
    title: e("copyLink"),
    onClick: (t) => Ou(t, r)
  }, m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "14",
    height: "14",
    viewBox: "0 0 14 12"
  }, m("path", {
    d: "M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z"
  })));
}
function Ru(r) {
  const {
    uppy: e,
    file: t,
    uploadInProgressOrComplete: i,
    canEditFile: s,
    metaFields: n,
    showLinkToFileUploadResult: a,
    showRemoveButton: o,
    i18n: d,
    toggleFileCard: l,
    openFileEditor: u
  } = r;
  return m("div", {
    className: "uppy-Dashboard-Item-actionWrapper"
  }, m(Uu, {
    i18n: d,
    file: t,
    uploadInProgressOrComplete: i,
    canEditFile: s,
    metaFields: n,
    onClick: () => {
      n && n.length > 0 ? l(!0, t.id) : u(t);
    }
  }), a && t.uploadURL ? m(Bu, {
    file: t,
    uppy: e,
    i18n: d
  }) : null, o ? m(Tu, {
    i18n: d,
    file: t,
    uppy: e,
    onClick: () => r.uppy.removeFile(t.id, "removed-by-user")
  }) : null);
}
class Du extends ke {
  componentDidMount() {
    const {
      file: e
    } = this.props;
    e.preview || this.props.handleRequestThumbnail(e);
  }
  shouldComponentUpdate(e) {
    return !du(this.props, e);
  }
  // VirtualList mounts FileItems again and they emit `thumbnail:request`
  // Otherwise thumbnails are broken or missing after Golden Retriever restores files
  componentDidUpdate() {
    const {
      file: e
    } = this.props;
    e.preview || this.props.handleRequestThumbnail(e);
  }
  componentWillUnmount() {
    const {
      file: e
    } = this.props;
    e.preview || this.props.handleCancelThumbnail(e);
  }
  render() {
    const {
      file: e
    } = this.props, t = e.progress.preprocess || e.progress.postprocess, i = e.progress.uploadComplete && !t && !e.error, s = e.progress.uploadStarted || t, n = e.progress.uploadStarted && !e.progress.uploadComplete || t, a = e.error || !1, {
      isGhost: o
    } = e;
    let d = (this.props.individualCancellation || !n) && !i;
    i && this.props.showRemoveButtonAfterComplete && (d = !0);
    const l = me({
      "uppy-Dashboard-Item": !0,
      "is-inprogress": n && !this.props.recoveredState,
      "is-processing": t,
      "is-complete": i,
      "is-error": !!a,
      "is-resumable": this.props.resumableUploads,
      "is-noIndividualCancellation": !this.props.individualCancellation,
      "is-ghost": o
    });
    return m("div", {
      className: l,
      id: `uppy_${e.id}`,
      role: this.props.role
    }, m("div", {
      className: "uppy-Dashboard-Item-preview"
    }, m(xu, {
      file: e,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      i18n: this.props.i18n,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields
    }), m(_u, {
      uppy: this.props.uppy,
      file: e,
      error: a,
      isUploaded: i,
      hideRetryButton: this.props.hideRetryButton,
      hideCancelButton: this.props.hideCancelButton,
      hidePauseResumeButton: this.props.hidePauseResumeButton,
      recoveredState: this.props.recoveredState,
      showRemoveButtonAfterComplete: this.props.showRemoveButtonAfterComplete,
      resumableUploads: this.props.resumableUploads,
      individualCancellation: this.props.individualCancellation,
      i18n: this.props.i18n
    })), m("div", {
      className: "uppy-Dashboard-Item-fileInfoAndButtons"
    }, m(Au, {
      file: e,
      id: this.props.id,
      acquirers: this.props.acquirers,
      containerWidth: this.props.containerWidth,
      i18n: this.props.i18n,
      toggleAddFilesPanel: this.props.toggleAddFilesPanel,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields,
      singleFile: this.props.singleFile
    }), m(Ru, {
      file: e,
      metaFields: this.props.metaFields,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      showRemoveButton: d,
      canEditFile: this.props.canEditFile,
      uploadInProgressOrComplete: s,
      toggleFileCard: this.props.toggleFileCard,
      openFileEditor: this.props.openFileEditor,
      uppy: this.props.uppy,
      i18n: this.props.i18n
    })));
  }
}
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, yi.apply(this, arguments);
}
const Nu = {
  position: "relative",
  // Disabled for our use case: the wrapper elements around FileList already deal with overflow,
  // and this additional property would hide things that we want to show.
  //
  // overflow: 'hidden',
  width: "100%",
  minHeight: "100%"
}, Iu = {
  position: "absolute",
  top: 0,
  left: 0,
  // Because the `top` value gets set to some offset, this `height` being 100% would make the scrollbar
  // stretch far beyond the content. For our use case, the content div actually can get its height from
  // the elements inside it, so we don't need to specify a `height` property at all.
  //
  // height: '100%',
  width: "100%",
  overflow: "visible"
};
class $u extends ke {
  constructor(e) {
    super(e), this.handleScroll = () => {
      this.setState({
        offset: this.base.scrollTop
      });
    }, this.handleResize = () => {
      this.resize();
    }, this.focusElement = null, this.state = {
      offset: 0,
      height: 0
    };
  }
  componentDidMount() {
    this.resize(), window.addEventListener("resize", this.handleResize);
  }
  // TODO: refactor to stable lifecycle method
  // eslint-disable-next-line
  componentWillUpdate() {
    this.base.contains(document.activeElement) && (this.focusElement = document.activeElement);
  }
  componentDidUpdate() {
    this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement && this.focusElement.focus(), this.focusElement = null, this.resize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  resize() {
    const {
      height: e
    } = this.state;
    e !== this.base.offsetHeight && this.setState({
      height: this.base.offsetHeight
    });
  }
  render(e) {
    let {
      data: t,
      rowHeight: i,
      renderRow: s,
      overscanCount: n = 10,
      ...a
    } = e;
    const {
      offset: o,
      height: d
    } = this.state;
    let l = Math.floor(o / i), u = Math.floor(d / i);
    n && (l = Math.max(0, l - l % n), u += n);
    const c = l + u + 4, h = t.slice(l, c), p = {
      ...Nu,
      height: t.length * i
    }, f = {
      ...Iu,
      top: l * i
    };
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      m("div", yi({
        onScroll: this.handleScroll
      }, a), m("div", {
        role: "presentation",
        style: p
      }, m("div", {
        role: "presentation",
        style: f
      }, h.map(s))))
    );
  }
}
function xi() {
  return xi = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, xi.apply(this, arguments);
}
function zu(r, e) {
  const t = [];
  let i = [];
  return r.forEach((s) => {
    i.length < e ? i.push(s) : (t.push(i), i = [s]);
  }), i.length && t.push(i), t;
}
const Lu = (r) => {
  const e = r.itemsPerRow === 1 ? 71 : 200, t = {
    // FIXME This is confusing, it's actually the Dashboard's plugin ID
    id: r.id,
    error: r.error,
    // TODO move this to context
    i18n: r.i18n,
    uppy: r.uppy,
    // features
    acquirers: r.acquirers,
    resumableUploads: r.resumableUploads,
    individualCancellation: r.individualCancellation,
    // visual options
    hideRetryButton: r.hideRetryButton,
    hidePauseResumeButton: r.hidePauseResumeButton,
    hideCancelButton: r.hideCancelButton,
    showLinkToFileUploadResult: r.showLinkToFileUploadResult,
    showRemoveButtonAfterComplete: r.showRemoveButtonAfterComplete,
    isWide: r.isWide,
    metaFields: r.metaFields,
    recoveredState: r.recoveredState,
    singleFile: r.singleFile,
    // callbacks
    toggleFileCard: r.toggleFileCard,
    handleRequestThumbnail: r.handleRequestThumbnail,
    handleCancelThumbnail: r.handleCancelThumbnail
  }, i = (o, d) => r.files[d].isGhost - r.files[o].isGhost, s = Object.keys(r.files);
  r.recoveredState && s.sort(i);
  const n = zu(s, r.itemsPerRow), a = (o) => (
    // The `role="presentation` attribute ensures that the list items are properly
    // associated with the `VirtualList` element.
    // We use the first file ID as the key—this should not change across scroll rerenders
    m("div", {
      class: "uppy-Dashboard-filesInner",
      role: "presentation",
      key: o[0]
    }, o.map((d) => m(Du, xi({
      key: d,
      uppy: r.uppy
    }, t, {
      // eslint-disable-line react/jsx-props-no-spreading
      role: "listitem",
      openFileEditor: r.openFileEditor,
      canEditFile: r.canEditFile,
      toggleAddFilesPanel: r.toggleAddFilesPanel,
      file: r.files[d]
    }))))
  );
  return r.singleFile ? m("div", {
    class: "uppy-Dashboard-files"
  }, a(n[0])) : m($u, {
    class: "uppy-Dashboard-files",
    role: "list",
    data: n,
    renderRow: a,
    rowHeight: e
  });
};
let Ua;
Ua = Symbol.for("uppy test: disable unused locale key warning");
class Ta extends ke {
  constructor() {
    super(...arguments), this.triggerFileInputClick = () => {
      this.fileInput.click();
    }, this.triggerFolderInputClick = () => {
      this.folderInput.click();
    }, this.triggerVideoCameraInputClick = () => {
      this.mobileVideoFileInput.click();
    }, this.triggerPhotoCameraInputClick = () => {
      this.mobilePhotoFileInput.click();
    }, this.onFileInputChange = (e) => {
      this.props.handleInputChange(e), e.target.value = null;
    }, this.renderHiddenInput = (e, t) => m("input", {
      className: "uppy-Dashboard-input",
      hidden: !0,
      "aria-hidden": "true",
      tabIndex: -1,
      webkitdirectory: e,
      type: "file",
      name: "files[]",
      multiple: this.props.maxNumberOfFiles !== 1,
      onChange: this.onFileInputChange,
      accept: this.props.allowedFileTypes,
      ref: t
    }), this.renderHiddenCameraInput = (e, t, i) => {
      const n = {
        photo: "image/*",
        video: "video/*"
      }[e];
      return m("input", {
        className: "uppy-Dashboard-input",
        hidden: !0,
        "aria-hidden": "true",
        tabIndex: -1,
        type: "file",
        name: `camera-${e}`,
        onChange: this.onFileInputChange,
        capture: t,
        accept: n,
        ref: i
      });
    }, this.renderMyDeviceAcquirer = () => m("div", {
      className: "uppy-DashboardTab",
      role: "presentation",
      "data-uppy-acquirer-id": "MyDevice"
    }, m("button", {
      type: "button",
      className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
      role: "tab",
      tabIndex: 0,
      "data-uppy-super-focusable": !0,
      onClick: this.triggerFileInputClick
    }, m("div", {
      className: "uppy-DashboardTab-inner"
    }, m("svg", {
      className: "uppy-DashboardTab-iconMyDevice",
      "aria-hidden": "true",
      focusable: "false",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32"
    }, m("path", {
      d: "M8.45 22.087l-1.305-6.674h17.678l-1.572 6.674H8.45zm4.975-12.412l1.083 1.765a.823.823 0 00.715.386h7.951V13.5H8.587V9.675h4.838zM26.043 13.5h-1.195v-2.598c0-.463-.336-.75-.798-.75h-8.356l-1.082-1.766A.823.823 0 0013.897 8H7.728c-.462 0-.815.256-.815.718V13.5h-.956a.97.97 0 00-.746.37.972.972 0 00-.19.81l1.724 8.565c.095.44.484.755.933.755H24c.44 0 .824-.3.929-.727l2.043-8.568a.972.972 0 00-.176-.825.967.967 0 00-.753-.38z",
      fill: "currentcolor",
      "fill-rule": "evenodd"
    }))), m("div", {
      className: "uppy-DashboardTab-name"
    }, this.props.i18n("myDevice")))), this.renderPhotoCamera = () => m("div", {
      className: "uppy-DashboardTab",
      role: "presentation",
      "data-uppy-acquirer-id": "MobilePhotoCamera"
    }, m("button", {
      type: "button",
      className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
      role: "tab",
      tabIndex: 0,
      "data-uppy-super-focusable": !0,
      onClick: this.triggerPhotoCameraInputClick
    }, m("div", {
      className: "uppy-DashboardTab-inner"
    }, m("svg", {
      "aria-hidden": "true",
      focusable: "false",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32"
    }, m("path", {
      d: "M23.5 9.5c1.417 0 2.5 1.083 2.5 2.5v9.167c0 1.416-1.083 2.5-2.5 2.5h-15c-1.417 0-2.5-1.084-2.5-2.5V12c0-1.417 1.083-2.5 2.5-2.5h2.917l1.416-2.167C13 7.167 13.25 7 13.5 7h5c.25 0 .5.167.667.333L20.583 9.5H23.5zM16 11.417a4.706 4.706 0 00-4.75 4.75 4.704 4.704 0 004.75 4.75 4.703 4.703 0 004.75-4.75c0-2.663-2.09-4.75-4.75-4.75zm0 7.825c-1.744 0-3.076-1.332-3.076-3.074 0-1.745 1.333-3.077 3.076-3.077 1.744 0 3.074 1.333 3.074 3.076s-1.33 3.075-3.074 3.075z",
      fill: "#02B383",
      "fill-rule": "nonzero"
    }))), m("div", {
      className: "uppy-DashboardTab-name"
    }, this.props.i18n("takePictureBtn")))), this.renderVideoCamera = () => m("div", {
      className: "uppy-DashboardTab",
      role: "presentation",
      "data-uppy-acquirer-id": "MobileVideoCamera"
    }, m("button", {
      type: "button",
      className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
      role: "tab",
      tabIndex: 0,
      "data-uppy-super-focusable": !0,
      onClick: this.triggerVideoCameraInputClick
    }, m("div", {
      className: "uppy-DashboardTab-inner"
    }, m("svg", {
      "aria-hidden": "true",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32"
    }, m("path", {
      fill: "#FF675E",
      fillRule: "nonzero",
      d: "m21.254 14.277 2.941-2.588c.797-.313 1.243.818 1.09 1.554-.01 2.094.02 4.189-.017 6.282-.126.915-1.145 1.08-1.58.34l-2.434-2.142c-.192.287-.504 1.305-.738.468-.104-1.293-.028-2.596-.05-3.894.047-.312.381.823.426 1.069.063-.384.206-.744.362-1.09zm-12.939-3.73c3.858.013 7.717-.025 11.574.02.912.129 1.492 1.237 1.351 2.217-.019 2.412.04 4.83-.03 7.239-.17 1.025-1.166 1.59-2.029 1.429-3.705-.012-7.41.025-11.114-.019-.913-.129-1.492-1.237-1.352-2.217.018-2.404-.036-4.813.029-7.214.136-.82.83-1.473 1.571-1.454z "
    }))), m("div", {
      className: "uppy-DashboardTab-name"
    }, this.props.i18n("recordVideoBtn")))), this.renderBrowseButton = (e, t) => {
      const i = this.props.acquirers.length;
      return m("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-Dashboard-browse",
        onClick: t,
        "data-uppy-super-focusable": i === 0
      }, e);
    }, this.renderDropPasteBrowseTagline = (e) => {
      const t = this.renderBrowseButton(this.props.i18n("browseFiles"), this.triggerFileInputClick), i = this.renderBrowseButton(this.props.i18n("browseFolders"), this.triggerFolderInputClick), s = this.props.fileManagerSelectionType, n = s.charAt(0).toUpperCase() + s.slice(1);
      return m(
        "div",
        {
          class: "uppy-Dashboard-AddFiles-title"
        },
        // eslint-disable-next-line no-nested-ternary
        this.props.disableLocalFiles ? this.props.i18n("importFiles") : e > 0 ? this.props.i18nArray(`dropPasteImport${n}`, {
          browseFiles: t,
          browseFolders: i,
          browse: t
        }) : this.props.i18nArray(`dropPaste${n}`, {
          browseFiles: t,
          browseFolders: i,
          browse: t
        })
      );
    }, this.renderAcquirer = (e) => m("div", {
      className: "uppy-DashboardTab",
      role: "presentation",
      "data-uppy-acquirer-id": e.id
    }, m("button", {
      type: "button",
      className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
      role: "tab",
      tabIndex: 0,
      "data-cy": e.id,
      "aria-controls": `uppy-DashboardContent-panel--${e.id}`,
      "aria-selected": this.props.activePickerPanel.id === e.id,
      "data-uppy-super-focusable": !0,
      onClick: () => this.props.showPanel(e.id)
    }, m("div", {
      className: "uppy-DashboardTab-inner"
    }, e.icon()), m("div", {
      className: "uppy-DashboardTab-name"
    }, e.name))), this.renderAcquirers = (e) => {
      const t = [...e], i = t.splice(e.length - 2, e.length);
      return m(Ve, null, t.map((s) => this.renderAcquirer(s)), m("span", {
        role: "presentation",
        style: {
          "white-space": "nowrap"
        }
      }, i.map((s) => this.renderAcquirer(s))));
    }, this.renderSourcesList = (e, t) => {
      const {
        showNativePhotoCameraButton: i,
        showNativeVideoCameraButton: s
      } = this.props;
      let n = [];
      const a = "myDevice";
      t || (n.push({
        key: a,
        elements: this.renderMyDeviceAcquirer()
      }), i && n.push({
        key: "nativePhotoCameraButton",
        elements: this.renderPhotoCamera()
      }), s && n.push({
        key: "nativePhotoCameraButton",
        elements: this.renderVideoCamera()
      })), n.push(...e.map((c) => ({
        key: c.id,
        elements: this.renderAcquirer(c)
      }))), n.length === 1 && n[0].key === a && (n = []);
      const d = [...n], l = d.splice(n.length - 2, n.length), u = (c) => c.map((h) => {
        let {
          key: p,
          elements: f
        } = h;
        return m(Ve, {
          key: p
        }, f);
      });
      return m(Ve, null, this.renderDropPasteBrowseTagline(n.length), m("div", {
        className: "uppy-Dashboard-AddFiles-list",
        role: "tablist"
      }, u(d), m("span", {
        role: "presentation",
        style: {
          "white-space": "nowrap"
        }
      }, u(l))));
    };
  }
  [Ua]() {
    this.props.i18nArray("dropPasteBoth"), this.props.i18nArray("dropPasteFiles"), this.props.i18nArray("dropPasteFolders"), this.props.i18nArray("dropPasteImportBoth"), this.props.i18nArray("dropPasteImportFiles"), this.props.i18nArray("dropPasteImportFolders");
  }
  renderPoweredByUppy() {
    const {
      i18nArray: e
    } = this.props, t = m("span", null, m("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon uppy-Dashboard-poweredByIcon",
      width: "11",
      height: "11",
      viewBox: "0 0 11 11"
    }, m("path", {
      d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
      fillRule: "evenodd"
    })), m("span", {
      className: "uppy-Dashboard-poweredByUppy"
    }, "Uppy")), i = e("poweredBy", {
      uppy: t
    });
    return m("a", {
      tabIndex: "-1",
      href: "https://uppy.io",
      rel: "noreferrer noopener",
      target: "_blank",
      className: "uppy-Dashboard-poweredBy"
    }, i);
  }
  render() {
    const {
      showNativePhotoCameraButton: e,
      showNativeVideoCameraButton: t,
      nativeCameraFacingMode: i
    } = this.props;
    return m("div", {
      className: "uppy-Dashboard-AddFiles"
    }, this.renderHiddenInput(!1, (s) => {
      this.fileInput = s;
    }), this.renderHiddenInput(!0, (s) => {
      this.folderInput = s;
    }), e && this.renderHiddenCameraInput("photo", i, (s) => {
      this.mobilePhotoFileInput = s;
    }), t && this.renderHiddenCameraInput("video", i, (s) => {
      this.mobileVideoFileInput = s;
    }), this.renderSourcesList(this.props.acquirers, this.props.disableLocalFiles), m("div", {
      className: "uppy-Dashboard-AddFiles-info"
    }, this.props.note && m("div", {
      className: "uppy-Dashboard-note"
    }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy(this.props)));
  }
}
const Mu = (r) => m("div", {
  className: me("uppy-Dashboard-AddFilesPanel", r.className),
  "data-uppy-panelType": "AddFiles",
  "aria-hidden": r.showAddFilesPanel
}, m("div", {
  className: "uppy-DashboardContent-bar"
}, m("div", {
  className: "uppy-DashboardContent-title",
  role: "heading",
  "aria-level": "1"
}, r.i18n("addingMoreFiles")), m("button", {
  className: "uppy-DashboardContent-back",
  type: "button",
  onClick: () => r.toggleAddFilesPanel(!1)
}, r.i18n("back"))), m(Ta, r));
function We(r) {
  const {
    tagName: e
  } = r.target;
  if (e === "INPUT" || e === "TEXTAREA") {
    r.stopPropagation();
    return;
  }
  r.preventDefault(), r.stopPropagation();
}
function Hu(r) {
  let {
    activePickerPanel: e,
    className: t,
    hideAllPanels: i,
    i18n: s,
    state: n,
    uppy: a
  } = r;
  return m("div", {
    className: me("uppy-DashboardContent-panel", t),
    role: "tabpanel",
    "data-uppy-panelType": "PickerPanel",
    id: `uppy-DashboardContent-panel--${e.id}`,
    onDragOver: We,
    onDragLeave: We,
    onDrop: We,
    onPaste: We
  }, m("div", {
    className: "uppy-DashboardContent-bar"
  }, m("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, s("importFrom", {
    name: e.name
  })), m("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: i
  }, s("cancel"))), m("div", {
    className: "uppy-DashboardContent-panelBody"
  }, a.getPlugin(e.id).render(n)));
}
function ju(r) {
  const e = r.files[r.fileCardFor];
  return m("div", {
    className: me("uppy-DashboardContent-panel", r.className),
    role: "tabpanel",
    "data-uppy-panelType": "FileEditor",
    id: "uppy-DashboardContent-panel--editor"
  }, m("div", {
    className: "uppy-DashboardContent-bar"
  }, m("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, r.i18nArray("editing", {
    file: m("span", {
      className: "uppy-DashboardContent-titleFile"
    }, e.meta ? e.meta.name : e.name)
  })), m("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: r.hideAllPanels
  }, r.i18n("cancel")), m("button", {
    className: "uppy-DashboardContent-save",
    type: "button",
    onClick: r.saveFileEditor
  }, r.i18n("save"))), m("div", {
    className: "uppy-DashboardContent-panelBody"
  }, r.editors.map((t) => r.uppy.getPlugin(t.id).render(r.state))));
}
const Fe = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete",
  STATE_PAUSED: "paused"
};
function qu(r, e, t, i) {
  if (i === void 0 && (i = {}), r)
    return Fe.STATE_ERROR;
  if (e)
    return Fe.STATE_COMPLETE;
  if (t)
    return Fe.STATE_PAUSED;
  let s = Fe.STATE_WAITING;
  const n = Object.keys(i);
  for (let a = 0; a < n.length; a++) {
    const {
      progress: o
    } = i[n[a]];
    if (o.uploadStarted && !o.uploadComplete)
      return Fe.STATE_UPLOADING;
    o.preprocess && s !== Fe.STATE_UPLOADING && (s = Fe.STATE_PREPROCESSING), o.postprocess && s !== Fe.STATE_UPLOADING && s !== Fe.STATE_PREPROCESSING && (s = Fe.STATE_POSTPROCESSING);
  }
  return s;
}
function Wu(r) {
  let {
    files: e,
    i18n: t,
    isAllComplete: i,
    isAllErrored: s,
    isAllPaused: n,
    inProgressNotPausedFiles: a,
    newFiles: o,
    processingFiles: d
  } = r;
  switch (qu(s, i, n, e)) {
    case "uploading":
      return t("uploadingXFiles", {
        smart_count: a.length
      });
    case "preprocessing":
    case "postprocessing":
      return t("processingXFiles", {
        smart_count: d.length
      });
    case "paused":
      return t("uploadPaused");
    case "waiting":
      return t("xFilesSelected", {
        smart_count: o.length
      });
    case "complete":
      return t("uploadComplete");
    case "error":
      return t("error");
  }
}
function Vu(r) {
  const {
    i18n: e,
    isAllComplete: t,
    hideCancelButton: i,
    maxNumberOfFiles: s,
    toggleAddFilesPanel: n,
    uppy: a
  } = r;
  let {
    allowNewUpload: o
  } = r;
  return o && s && (o = r.totalFileCount < r.maxNumberOfFiles), m("div", {
    className: "uppy-DashboardContent-bar"
  }, !t && !i ? m("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: () => a.cancelAll()
  }, e("cancel")) : m("div", null), m("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, m(Wu, r)), o ? m("button", {
    className: "uppy-DashboardContent-addMore",
    type: "button",
    "aria-label": e("addMoreFiles"),
    title: e("addMoreFiles"),
    onClick: () => n(!0)
  }, m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15"
  }, m("path", {
    d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"
  })), m("span", {
    className: "uppy-DashboardContent-addMoreCaption"
  }, e("addMore"))) : m("div", null));
}
var Br, Y, ei, Vn, Er = 0, Oa = [], br = [], Gn = z.__b, Kn = z.__r, Xn = z.diffed, Yn = z.__c, Jn = z.unmount;
function Hi(r, e) {
  z.__h && z.__h(Y, r, Er || e), Er = 0;
  var t = Y.__H || (Y.__H = { __: [], __h: [] });
  return r >= t.__.length && t.__.push({ __V: br }), t.__[r];
}
function Qn(r) {
  return Er = 1, Gu(Ra, r);
}
function Gu(r, e, t) {
  var i = Hi(Br++, 2);
  if (i.t = r, !i.__c && (i.__ = [t ? t(e) : Ra(void 0, e), function(o) {
    var d = i.__N ? i.__N[0] : i.__[0], l = i.t(d, o);
    d !== l && (i.__N = [l, i.__[1]], i.__c.setState({}));
  }], i.__c = Y, !Y.u)) {
    var s = function(o, d, l) {
      if (!i.__c.__H)
        return !0;
      var u = i.__c.__H.__.filter(function(h) {
        return h.__c;
      });
      if (u.every(function(h) {
        return !h.__N;
      }))
        return !n || n.call(this, o, d, l);
      var c = !1;
      return u.forEach(function(h) {
        if (h.__N) {
          var p = h.__[0];
          h.__ = h.__N, h.__N = void 0, p !== h.__[0] && (c = !0);
        }
      }), !(!c && i.__c.props === o) && (!n || n.call(this, o, d, l));
    };
    Y.u = !0;
    var n = Y.shouldComponentUpdate, a = Y.componentWillUpdate;
    Y.componentWillUpdate = function(o, d, l) {
      if (this.__e) {
        var u = n;
        n = void 0, s(o, d, l), n = u;
      }
      a && a.call(this, o, d, l);
    }, Y.shouldComponentUpdate = s;
  }
  return i.__N || i.__;
}
function Ku(r, e) {
  var t = Hi(Br++, 3);
  !z.__s && Ba(t.__H, e) && (t.__ = r, t.i = e, Y.__H.__h.push(t));
}
function Xu(r, e) {
  var t = Hi(Br++, 7);
  return Ba(t.__H, e) ? (t.__V = r(), t.i = e, t.__h = r, t.__V) : t.__;
}
function Yu(r, e) {
  return Er = 8, Xu(function() {
    return r;
  }, e);
}
function Ju() {
  for (var r; r = Oa.shift(); )
    if (r.__P && r.__H)
      try {
        r.__H.__h.forEach(_r), r.__H.__h.forEach(bi), r.__H.__h = [];
      } catch (e) {
        r.__H.__h = [], z.__e(e, r.__v);
      }
}
z.__b = function(r) {
  Y = null, Gn && Gn(r);
}, z.__r = function(r) {
  Kn && Kn(r), Br = 0;
  var e = (Y = r.__c).__H;
  e && (ei === Y ? (e.__h = [], Y.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = br, t.__N = t.i = void 0;
  })) : (e.__h.forEach(_r), e.__h.forEach(bi), e.__h = [])), ei = Y;
}, z.diffed = function(r) {
  Xn && Xn(r);
  var e = r.__c;
  e && e.__H && (e.__H.__h.length && (Oa.push(e) !== 1 && Vn === z.requestAnimationFrame || ((Vn = z.requestAnimationFrame) || Qu)(Ju)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== br && (t.__ = t.__V), t.i = void 0, t.__V = br;
  })), ei = Y = null;
}, z.__c = function(r, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(_r), t.__h = t.__h.filter(function(i) {
        return !i.__ || bi(i);
      });
    } catch (i) {
      e.some(function(s) {
        s.__h && (s.__h = []);
      }), e = [], z.__e(i, t.__v);
    }
  }), Yn && Yn(r, e);
}, z.unmount = function(r) {
  Jn && Jn(r);
  var e, t = r.__c;
  t && t.__H && (t.__H.__.forEach(function(i) {
    try {
      _r(i);
    } catch (s) {
      e = s;
    }
  }), t.__H = void 0, e && z.__e(e, t.__v));
};
var Zn = typeof requestAnimationFrame == "function";
function Qu(r) {
  var e, t = function() {
    clearTimeout(i), Zn && cancelAnimationFrame(e), setTimeout(r);
  }, i = setTimeout(t, 100);
  Zn && (e = requestAnimationFrame(t));
}
function _r(r) {
  var e = Y, t = r.__c;
  typeof t == "function" && (r.__c = void 0, t()), Y = e;
}
function bi(r) {
  var e = Y;
  r.__c = r.__(), Y = e;
}
function Ba(r, e) {
  return !r || r.length !== e.length || e.some(function(t, i) {
    return t !== r[i];
  });
}
function Ra(r, e) {
  return typeof e == "function" ? e(r) : e;
}
function Zu(r) {
  const {
    computedMetaFields: e,
    requiredMetaFields: t,
    updateMeta: i,
    form: s,
    formState: n
  } = r, a = {
    text: "uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input"
  };
  return e.map((o) => {
    const d = `uppy-Dashboard-FileCard-input-${o.id}`, l = t.includes(o.id);
    return m("fieldset", {
      key: o.id,
      className: "uppy-Dashboard-FileCard-fieldset"
    }, m("label", {
      className: "uppy-Dashboard-FileCard-label",
      htmlFor: d
    }, o.name), o.render !== void 0 ? o.render({
      value: n[o.id],
      onChange: (u) => i(u, o.id),
      fieldCSSClasses: a,
      required: l,
      form: s.id
    }, m) : m("input", {
      className: a.text,
      id: d,
      form: s.id,
      type: o.type || "text",
      required: l,
      value: n[o.id],
      placeholder: o.placeholder,
      onInput: (u) => i(u.target.value, o.id),
      "data-uppy-super-focusable": !0
    }));
  });
}
function ed(r) {
  var e;
  const {
    uppy: t,
    files: i,
    fileCardFor: s,
    toggleFileCard: n,
    saveFileCard: a,
    metaFields: o,
    requiredMetaFields: d,
    openFileEditor: l,
    i18n: u,
    i18nArray: c,
    className: h,
    canEditFile: p
  } = r, f = () => typeof o == "function" ? o(i[s]) : o, v = i[s], y = (e = f()) != null ? e : [], _ = p(v), g = {};
  y.forEach((A) => {
    var S;
    g[A.id] = (S = v.meta[A.id]) != null ? S : "";
  });
  const [x, b] = Qn(g), C = Yu((A) => {
    A.preventDefault(), a(x, s);
  }, [a, x, s]), w = (A, S) => {
    b({
      [S]: A
    });
  }, F = () => {
    t.emit("file-editor:cancel", v), n(!1);
  }, [P] = Qn(() => {
    const A = document.createElement("form");
    return A.setAttribute("tabindex", "-1"), A.id = Oi(), A;
  });
  return Ku(() => (document.body.appendChild(P), P.addEventListener("submit", C), () => {
    P.removeEventListener("submit", C), document.body.removeChild(P);
  }), [P, C]), m("div", {
    className: me("uppy-Dashboard-FileCard", h),
    "data-uppy-panelType": "FileCard",
    onDragOver: We,
    onDragLeave: We,
    onDrop: We,
    onPaste: We
  }, m("div", {
    className: "uppy-DashboardContent-bar"
  }, m("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, c("editing", {
    file: m("span", {
      className: "uppy-DashboardContent-titleFile"
    }, v.meta ? v.meta.name : v.name)
  })), m("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    form: P.id,
    title: u("finishEditingFile"),
    onClick: F
  }, u("cancel"))), m("div", {
    className: "uppy-Dashboard-FileCard-inner"
  }, m("div", {
    className: "uppy-Dashboard-FileCard-preview",
    style: {
      backgroundColor: Mi(v.type).color
    }
  }, m(ka, {
    file: v
  }), _ && m("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-FileCard-edit",
    onClick: (A) => {
      C(A), l(v);
    }
  }, u("editFile"))), m("div", {
    className: "uppy-Dashboard-FileCard-info"
  }, m(Zu, {
    computedMetaFields: y,
    requiredMetaFields: d,
    updateMeta: w,
    form: P,
    formState: x
  })), m("div", {
    className: "uppy-Dashboard-FileCard-actions"
  }, m("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
    type: "submit",
    form: P.id
  }, u("saveChanges")), m("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
    type: "button",
    onClick: F,
    form: P.id
  }, u("cancel")))));
}
const ct = "uppy-transition-slideDownUp", es = 250;
class mr extends ke {
  constructor(e) {
    super(e), this.state = {
      cachedChildren: null,
      className: ""
    };
  }
  // TODO: refactor to stable lifecycle method
  // eslint-disable-next-line
  componentWillUpdate(e) {
    const {
      cachedChildren: t
    } = this.state, i = je(e.children)[0];
    if (t === i)
      return null;
    const s = {
      cachedChildren: i
    };
    i && !t && (s.className = `${ct}-enter`, cancelAnimationFrame(this.animationFrame), clearTimeout(this.leaveTimeout), this.leaveTimeout = void 0, this.animationFrame = requestAnimationFrame(() => {
      this.setState({
        className: `${ct}-enter ${ct}-enter-active`
      }), this.enterTimeout = setTimeout(() => {
        this.setState({
          className: ""
        });
      }, es);
    })), t && !i && this.leaveTimeout === void 0 && (s.cachedChildren = t, s.className = `${ct}-leave`, cancelAnimationFrame(this.animationFrame), clearTimeout(this.enterTimeout), this.enterTimeout = void 0, this.animationFrame = requestAnimationFrame(() => {
      this.setState({
        className: `${ct}-leave ${ct}-leave-active`
      }), this.leaveTimeout = setTimeout(() => {
        this.setState({
          cachedChildren: null,
          className: ""
        });
      }, es);
    })), this.setState(s);
  }
  render() {
    const {
      cachedChildren: e,
      className: t
    } = this.state;
    return e ? na(e, {
      className: me(t, e.props.className)
    }) : null;
  }
}
function qe() {
  return qe = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, qe.apply(this, arguments);
}
const ts = 900, rs = 700, ti = 576, td = 400;
function rd(r) {
  const e = r.totalFileCount === 0, t = r.totalFileCount === 1, i = r.containerWidth > ti, s = me({
    "uppy-Dashboard": !0,
    "uppy-Dashboard--isDisabled": r.disabled,
    "uppy-Dashboard--animateOpenClose": r.animateOpenClose,
    "uppy-Dashboard--isClosing": r.isClosing,
    "uppy-Dashboard--isDraggingOver": r.isDraggingOver,
    "uppy-Dashboard--modal": !r.inline,
    "uppy-size--md": r.containerWidth > ti,
    "uppy-size--lg": r.containerWidth > rs,
    "uppy-size--xl": r.containerWidth > ts,
    "uppy-size--height-md": r.containerHeight > td,
    "uppy-Dashboard--isAddFilesPanelVisible": r.showAddFilesPanel,
    "uppy-Dashboard--isInnerWrapVisible": r.areInsidesReadyToBeVisible,
    "uppy-Dashboard--singleFile": t
  });
  let n = 1;
  r.containerWidth > ts ? n = 5 : r.containerWidth > rs ? n = 4 : r.containerWidth > ti && (n = 3);
  const a = r.showSelectedFiles && !e, o = r.recoveredState ? Object.keys(r.recoveredState.files).length : null, d = r.files ? Object.keys(r.files).filter((c) => r.files[c].isGhost).length : null, l = () => d > 0 ? r.i18n("recoveredXFiles", {
    smart_count: d
  }) : r.i18n("recoveredAllFiles");
  return m("div", {
    className: s,
    "data-uppy-theme": r.theme,
    "data-uppy-num-acquirers": r.acquirers.length,
    "data-uppy-drag-drop-supported": !r.disableLocalFiles && uu(),
    "aria-hidden": r.inline ? "false" : r.isHidden,
    "aria-disabled": r.disabled,
    "aria-label": r.inline ? r.i18n("dashboardTitle") : r.i18n("dashboardWindowTitle"),
    onPaste: r.handlePaste,
    onDragOver: r.handleDragOver,
    onDragLeave: r.handleDragLeave,
    onDrop: r.handleDrop
  }, m("div", {
    "aria-hidden": "true",
    className: "uppy-Dashboard-overlay",
    tabIndex: -1,
    onClick: r.handleClickOutside
  }), m("div", {
    className: "uppy-Dashboard-inner",
    "aria-modal": !r.inline && "true",
    role: !r.inline && "dialog",
    style: {
      width: r.inline && r.width ? r.width : "",
      height: r.inline && r.height ? r.height : ""
    }
  }, r.inline ? null : m("button", {
    className: "uppy-u-reset uppy-Dashboard-close",
    type: "button",
    "aria-label": r.i18n("closeModal"),
    title: r.i18n("closeModal"),
    onClick: r.closeModal
  }, m("span", {
    "aria-hidden": "true"
  }, "×")), m("div", {
    className: "uppy-Dashboard-innerWrap"
  }, m("div", {
    className: "uppy-Dashboard-dropFilesHereHint"
  }, r.i18n("dropHint")), a && m(Vu, r), o && m("div", {
    className: "uppy-Dashboard-serviceMsg"
  }, m("svg", {
    className: "uppy-Dashboard-serviceMsg-icon",
    "aria-hidden": "true",
    focusable: "false",
    width: "21",
    height: "16",
    viewBox: "0 0 24 19"
  }, m("g", {
    transform: "translate(0 -1)",
    fill: "none",
    fillRule: "evenodd"
  }, m("path", {
    d: "M12.857 1.43l10.234 17.056A1 1 0 0122.234 20H1.766a1 1 0 01-.857-1.514L11.143 1.429a1 1 0 011.714 0z",
    fill: "#FFD300"
  }), m("path", {
    fill: "#000",
    d: "M11 6h2l-.3 8h-1.4z"
  }), m("circle", {
    fill: "#000",
    cx: "12",
    cy: "17",
    r: "1"
  }))), m("strong", {
    className: "uppy-Dashboard-serviceMsg-title"
  }, r.i18n("sessionRestored")), m("div", {
    className: "uppy-Dashboard-serviceMsg-text"
  }, l())), a ? m(
    Lu,
    qe({}, r, {
      singleFile: t,
      itemsPerRow: n
    })
  ) : (
    // eslint-disable-next-line react/jsx-props-no-spreading
    m(Ta, qe({}, r, {
      isSizeMD: i
    }))
  ), m(mr, null, r.showAddFilesPanel ? m(Mu, qe({
    key: "AddFiles"
  }, r, {
    isSizeMD: i
  })) : null), m(mr, null, r.fileCardFor ? m(ed, qe({
    key: "FileCard"
  }, r)) : null), m(mr, null, r.activePickerPanel ? m(Hu, qe({
    key: "Picker"
  }, r)) : null), m(mr, null, r.showFileEditor ? m(ju, qe({
    key: "Editor"
  }, r)) : null), m("div", {
    className: "uppy-Dashboard-progressindicators"
  }, r.progressindicators.map((c) => r.uppy.getPlugin(c.id).render(r.state))))));
}
const id = {
  strings: {
    // When `inline: false`, used as the screen reader label for the button that closes the modal.
    closeModal: "Close Modal",
    // Used as the screen reader label for the plus (+) button that shows the “Add more files” screen
    addMoreFiles: "Add more files",
    addingMoreFiles: "Adding more files",
    // Used as the header for import panels, e.g., “Import from Google Drive”.
    importFrom: "Import from %{name}",
    // When `inline: false`, used as the screen reader label for the dashboard modal.
    dashboardWindowTitle: "Uppy Dashboard Window (Press escape to close)",
    // When `inline: true`, used as the screen reader label for the dashboard area.
    dashboardTitle: "Uppy Dashboard",
    // Shown in the Informer when a link to a file was copied to the clipboard.
    copyLinkToClipboardSuccess: "Link copied to clipboard.",
    // Used when a link cannot be copied automatically — the user has to select the text from the
    // input element below this string.
    copyLinkToClipboardFallback: "Copy the URL below",
    // Used as the hover title and screen reader label for buttons that copy a file link.
    copyLink: "Copy link",
    back: "Back",
    // Used as the screen reader label for buttons that remove a file.
    removeFile: "Remove file",
    // Used as the screen reader label for buttons that open the metadata editor panel for a file.
    editFile: "Edit file",
    // Shown in the panel header for the metadata editor. Rendered as “Editing image.png”.
    editing: "Editing %{file}",
    // Shown on the main upload screen when an upload error occurs
    error: "Error",
    // Used as the screen reader label for the button that saves metadata edits and returns to the
    // file list view.
    finishEditingFile: "Finish editing file",
    saveChanges: "Save changes",
    // Used as the label for the tab button that opens the system file selection dialog.
    myDevice: "My Device",
    dropHint: "Drop your files here",
    // Used as the hover text and screen reader label for file progress indicators when
    // they have been fully uploaded.
    uploadComplete: "Upload complete",
    uploadPaused: "Upload paused",
    // Used as the hover text and screen reader label for the buttons to resume paused uploads.
    resumeUpload: "Resume upload",
    // Used as the hover text and screen reader label for the buttons to pause uploads.
    pauseUpload: "Pause upload",
    // Used as the hover text and screen reader label for the buttons to retry failed uploads.
    retryUpload: "Retry upload",
    // Used as the hover text and screen reader label for the buttons to cancel uploads.
    cancelUpload: "Cancel upload",
    // Used in a title, how many files are currently selected
    xFilesSelected: {
      0: "%{smart_count} file selected",
      1: "%{smart_count} files selected"
    },
    uploadingXFiles: {
      0: "Uploading %{smart_count} file",
      1: "Uploading %{smart_count} files"
    },
    processingXFiles: {
      0: "Processing %{smart_count} file",
      1: "Processing %{smart_count} files"
    },
    // The "powered by Uppy" link at the bottom of the Dashboard.
    poweredBy: "Powered by %{uppy}",
    addMore: "Add more",
    editFileWithFilename: "Edit file %{file}",
    save: "Save",
    cancel: "Cancel",
    dropPasteFiles: "Drop files here or %{browseFiles}",
    dropPasteFolders: "Drop files here or %{browseFolders}",
    dropPasteBoth: "Drop files here, %{browseFiles} or %{browseFolders}",
    dropPasteImportFiles: "Drop files here, %{browseFiles} or import from:",
    dropPasteImportFolders: "Drop files here, %{browseFolders} or import from:",
    dropPasteImportBoth: "Drop files here, %{browseFiles}, %{browseFolders} or import from:",
    importFiles: "Import files from:",
    browseFiles: "browse files",
    browseFolders: "browse folders",
    recoveredXFiles: {
      0: "We could not fully recover 1 file. Please re-select it and resume the upload.",
      1: "We could not fully recover %{smart_count} files. Please re-select them and resume the upload."
    },
    recoveredAllFiles: "We restored all files. You can now resume the upload.",
    sessionRestored: "Session restored",
    reSelect: "Re-select",
    missingRequiredMetaFields: {
      0: "Missing required meta field: %{fields}.",
      1: "Missing required meta fields: %{fields}."
    },
    // Used for native device camera buttons on mobile
    takePictureBtn: "Take Picture",
    recordVideoBtn: "Record Video"
  }
};
function Q(r, e) {
  if (!Object.prototype.hasOwnProperty.call(r, e))
    throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var nd = 0;
function Ge(r) {
  return "__private_" + nd++ + "_" + r;
}
const sd = {
  version: "3.3.2"
}, ri = Mn.default || Mn, is = 9, ad = 27;
function ns() {
  const r = {};
  return r.promise = new Promise((e, t) => {
    r.resolve = e, r.reject = t;
  }), r;
}
function od() {
  return m("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, m("path", {
    d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"
  }));
}
var Ke = /* @__PURE__ */ Ge("disabledNodes"), Be = /* @__PURE__ */ Ge("generateLargeThumbnailIfSingleFile"), Dt = /* @__PURE__ */ Ge("openFileEditorWhenFilesAdded"), Xe = /* @__PURE__ */ Ge("attachRenderFunctionToTarget"), ii = /* @__PURE__ */ Ge("isTargetSupported"), ni = /* @__PURE__ */ Ge("getAcquirers"), si = /* @__PURE__ */ Ge("getProgressIndicators"), Re = /* @__PURE__ */ Ge("getEditors");
class Da extends yt {
  constructor(e, t) {
    var i;
    super(e, t), i = this, Object.defineProperty(this, Ke, {
      writable: !0,
      value: null
    }), this.removeTarget = (n) => {
      const o = this.getPluginState().targets.filter((d) => d.id !== n.id);
      this.setPluginState({
        targets: o
      });
    }, this.addTarget = (n) => {
      const a = n.id || n.constructor.name, o = n.title || a, d = n.type;
      if (d !== "acquirer" && d !== "progressindicator" && d !== "editor") {
        const h = "Dashboard: can only be targeted by plugins of types: acquirer, progressindicator, editor";
        this.uppy.log(h, "error");
        return;
      }
      const l = {
        id: a,
        name: o,
        type: d
      }, c = this.getPluginState().targets.slice();
      return c.push(l), this.setPluginState({
        targets: c
      }), this.el;
    }, this.hideAllPanels = () => {
      const n = this.getPluginState(), a = {
        activePickerPanel: !1,
        showAddFilesPanel: !1,
        activeOverlayType: null,
        fileCardFor: null,
        showFileEditor: !1
      };
      n.activePickerPanel === a.activePickerPanel && n.showAddFilesPanel === a.showAddFilesPanel && n.showFileEditor === a.showFileEditor && n.activeOverlayType === a.activeOverlayType || this.setPluginState(a);
    }, this.showPanel = (n) => {
      const {
        targets: a
      } = this.getPluginState(), o = a.filter((d) => d.type === "acquirer" && d.id === n)[0];
      this.setPluginState({
        activePickerPanel: o,
        activeOverlayType: "PickerPanel"
      }), this.uppy.emit("dashboard:show-panel", n);
    }, this.canEditFile = (n) => {
      const {
        targets: a
      } = this.getPluginState();
      return Q(this, Re)[Re](a).some((d) => this.uppy.getPlugin(d.id).canEditFile(n));
    }, this.openFileEditor = (n) => {
      const {
        targets: a
      } = this.getPluginState(), o = Q(this, Re)[Re](a);
      this.setPluginState({
        showFileEditor: !0,
        fileCardFor: n.id || null,
        activeOverlayType: "FileEditor"
      }), o.forEach((d) => {
        this.uppy.getPlugin(d.id).selectFile(n);
      });
    }, this.saveFileEditor = () => {
      const {
        targets: n
      } = this.getPluginState();
      Q(this, Re)[Re](n).forEach((o) => {
        this.uppy.getPlugin(o.id).save();
      }), this.hideAllPanels();
    }, this.openModal = () => {
      const {
        promise: n,
        resolve: a
      } = ns();
      if (this.savedScrollPosition = window.pageYOffset, this.savedActiveElement = document.activeElement, this.opts.disablePageScrollWhenModalOpen && document.body.classList.add("uppy-Dashboard-isFixed"), this.opts.animateOpenClose && this.getPluginState().isClosing) {
        const o = () => {
          this.setPluginState({
            isHidden: !1
          }), this.el.removeEventListener("animationend", o, !1), a();
        };
        this.el.addEventListener("animationend", o, !1);
      } else
        this.setPluginState({
          isHidden: !1
        }), a();
      return this.opts.browserBackButtonClose && this.updateBrowserHistory(), document.addEventListener("keydown", this.handleKeyDownInModal), this.uppy.emit("dashboard:modal-open"), n;
    }, this.closeModal = function(n) {
      n === void 0 && (n = {});
      const {
        // Whether the modal is being closed by the user (`true`) or by other means (e.g. browser back button)
        manualClose: a = !0
      } = n, {
        isHidden: o,
        isClosing: d
      } = i.getPluginState();
      if (o || d)
        return;
      const {
        promise: l,
        resolve: u
      } = ns();
      if (i.opts.disablePageScrollWhenModalOpen && document.body.classList.remove("uppy-Dashboard-isFixed"), i.opts.animateOpenClose) {
        i.setPluginState({
          isClosing: !0
        });
        const h = () => {
          i.setPluginState({
            isHidden: !0,
            isClosing: !1
          }), i.superFocus.cancel(), i.savedActiveElement.focus(), i.el.removeEventListener("animationend", h, !1), u();
        };
        i.el.addEventListener("animationend", h, !1);
      } else
        i.setPluginState({
          isHidden: !0
        }), i.superFocus.cancel(), i.savedActiveElement.focus(), u();
      if (document.removeEventListener("keydown", i.handleKeyDownInModal), a && i.opts.browserBackButtonClose) {
        var c;
        (c = history.state) != null && c[i.modalName] && history.back();
      }
      return i.uppy.emit("dashboard:modal-closed"), l;
    }, this.isModalOpen = () => !this.getPluginState().isHidden || !1, this.requestCloseModal = () => this.opts.onRequestCloseModal ? this.opts.onRequestCloseModal() : this.closeModal(), this.setDarkModeCapability = (n) => {
      const {
        capabilities: a
      } = this.uppy.getState();
      this.uppy.setState({
        capabilities: {
          ...a,
          darkMode: n
        }
      });
    }, this.handleSystemDarkModeChange = (n) => {
      const a = n.matches;
      this.uppy.log(`[Dashboard] Dark mode is ${a ? "on" : "off"}`), this.setDarkModeCapability(a);
    }, this.toggleFileCard = (n, a) => {
      const o = this.uppy.getFile(a);
      n ? this.uppy.emit("dashboard:file-edit-start", o) : this.uppy.emit("dashboard:file-edit-complete", o), this.setPluginState({
        fileCardFor: n ? a : null,
        activeOverlayType: n ? "FileCard" : null
      });
    }, this.toggleAddFilesPanel = (n) => {
      this.setPluginState({
        showAddFilesPanel: n,
        activeOverlayType: n ? "AddFiles" : null
      });
    }, this.addFiles = (n) => {
      const a = n.map((o) => ({
        source: this.id,
        name: o.name,
        type: o.type,
        data: o,
        meta: {
          // path of the file relative to the ancestor directory the user selected.
          // e.g. 'docs/Old Prague/airbnb.pdf'
          relativePath: o.relativePath || o.webkitRelativePath || null
        }
      }));
      try {
        this.uppy.addFiles(a);
      } catch (o) {
        this.uppy.log(o);
      }
    }, this.startListeningToResize = () => {
      this.resizeObserver = new ResizeObserver((n) => {
        const a = n[0], {
          width: o,
          height: d
        } = a.contentRect;
        this.setPluginState({
          containerWidth: o,
          containerHeight: d,
          areInsidesReadyToBeVisible: !0
        });
      }), this.resizeObserver.observe(this.el.querySelector(".uppy-Dashboard-inner")), this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(() => {
        const n = this.getPluginState(), a = !this.opts.inline && n.isHidden;
        // if ResizeObserver hasn't yet fired,
        !n.areInsidesReadyToBeVisible && !a && (this.uppy.log("[Dashboard] resize event didn’t fire on time: defaulted to mobile layout", "warning"), this.setPluginState({
          areInsidesReadyToBeVisible: !0
        }));
      }, 1e3);
    }, this.stopListeningToResize = () => {
      this.resizeObserver.disconnect(), clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
    }, this.recordIfFocusedOnUppyRecently = (n) => {
      this.el.contains(n.target) ? this.ifFocusedOnUppyRecently = !0 : (this.ifFocusedOnUppyRecently = !1, this.superFocus.cancel());
    }, this.disableInteractiveElements = (n) => {
      var a;
      const o = ["a[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", '[role="button"]:not([disabled])'], d = (a = Q(this, Ke)[Ke]) != null ? a : Kt(this.el.querySelectorAll(o)).filter((l) => !l.classList.contains("uppy-Dashboard-close"));
      for (const l of d)
        l.tagName === "A" ? l.setAttribute("aria-disabled", n) : l.disabled = n;
      n ? Q(this, Ke)[Ke] = d : Q(this, Ke)[Ke] = null, this.dashboardIsDisabled = n;
    }, this.updateBrowserHistory = () => {
      var n;
      (n = history.state) != null && n[this.modalName] || history.pushState({
        // eslint-disable-next-line no-restricted-globals
        ...history.state,
        [this.modalName]: !0
      }, ""), window.addEventListener("popstate", this.handlePopState, !1);
    }, this.handlePopState = (n) => {
      var a;
      this.isModalOpen() && (!n.state || !n.state[this.modalName]) && this.closeModal({
        manualClose: !1
      }), !this.isModalOpen() && (a = n.state) != null && a[this.modalName] && history.back();
    }, this.handleKeyDownInModal = (n) => {
      n.keyCode === ad && this.requestCloseModal(n), n.keyCode === is && Ca(n, this.getPluginState().activeOverlayType, this.el);
    }, this.handleClickOutside = () => {
      this.opts.closeModalOnClickOutside && this.requestCloseModal();
    }, this.handlePaste = (n) => {
      this.uppy.iteratePlugins((o) => {
        o.type === "acquirer" && (o.handleRootPaste == null || o.handleRootPaste(n));
      });
      const a = Kt(n.clipboardData.files);
      a.length > 0 && (this.uppy.log("[Dashboard] Files pasted"), this.addFiles(a));
    }, this.handleInputChange = (n) => {
      n.preventDefault();
      const a = Kt(n.target.files);
      a.length > 0 && (this.uppy.log("[Dashboard] Files selected through input"), this.addFiles(a));
    }, this.handleDragOver = (n) => {
      var a, o;
      n.preventDefault(), n.stopPropagation();
      const d = () => {
        let h = !0;
        return this.uppy.iteratePlugins((p) => {
          p.canHandleRootDrop != null && p.canHandleRootDrop(n) && (h = !0);
        }), h;
      }, l = () => {
        const {
          types: h
        } = n.dataTransfer;
        return h.some((p) => p === "Files");
      }, u = d(), c = l();
      if (!u && !c || this.opts.disabled || this.opts.disableLocalFiles && (c || !u) || !this.uppy.getState().allowNewUpload) {
        n.dataTransfer.dropEffect = "none", clearTimeout(this.removeDragOverClassTimeout);
        return;
      }
      n.dataTransfer.dropEffect = "copy", clearTimeout(this.removeDragOverClassTimeout), this.setPluginState({
        isDraggingOver: !0
      }), (a = (o = this.opts).onDragOver) == null || a.call(o, n);
    }, this.handleDragLeave = (n) => {
      var a, o;
      n.preventDefault(), n.stopPropagation(), clearTimeout(this.removeDragOverClassTimeout), this.removeDragOverClassTimeout = setTimeout(() => {
        this.setPluginState({
          isDraggingOver: !1
        });
      }, 50), (a = (o = this.opts).onDragLeave) == null || a.call(o, n);
    }, this.handleDrop = async (n) => {
      var a, o;
      n.preventDefault(), n.stopPropagation(), clearTimeout(this.removeDragOverClassTimeout), this.setPluginState({
        isDraggingOver: !1
      }), this.uppy.iteratePlugins((c) => {
        c.type === "acquirer" && (c.handleRootDrop == null || c.handleRootDrop(n));
      });
      let d = !1;
      const l = (c) => {
        this.uppy.log(c, "error"), d || (this.uppy.info(c.message, "error"), d = !0);
      }, u = await $0(n.dataTransfer, {
        logDropError: l
      });
      u.length > 0 && (this.uppy.log("[Dashboard] Files dropped"), this.addFiles(u)), (a = (o = this.opts).onDrop) == null || a.call(o, n);
    }, this.handleRequestThumbnail = (n) => {
      this.opts.waitForThumbnailsBeforeUpload || this.uppy.emit("thumbnail:request", n);
    }, this.handleCancelThumbnail = (n) => {
      this.opts.waitForThumbnailsBeforeUpload || this.uppy.emit("thumbnail:cancel", n);
    }, this.handleKeyDownInInline = (n) => {
      n.keyCode === is && j0(n, this.getPluginState().activeOverlayType, this.el);
    }, this.handlePasteOnBody = (n) => {
      this.el.contains(document.activeElement) && this.handlePaste(n);
    }, this.handleComplete = (n) => {
      let {
        failed: a
      } = n;
      this.opts.closeAfterFinish && a.length === 0 && this.requestCloseModal();
    }, this.handleCancelRestore = () => {
      this.uppy.emit("restore-canceled");
    }, Object.defineProperty(this, Be, {
      writable: !0,
      value: () => {
        if (this.opts.disableThumbnailGenerator)
          return;
        const n = 600, a = this.uppy.getFiles();
        if (a.length === 1) {
          const o = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
          o == null || o.setOptions({
            thumbnailWidth: n
          });
          const d = {
            ...a[0],
            preview: void 0
          };
          o.requestThumbnail(d).then(() => {
            o == null || o.setOptions({
              thumbnailWidth: this.opts.thumbnailWidth
            });
          });
        }
      }
    }), Object.defineProperty(this, Dt, {
      writable: !0,
      value: (n) => {
        const a = n[0];
        this.canEditFile(a) && this.openFileEditor(a);
      }
    }), this.initEvents = () => {
      if (this.opts.trigger && !this.opts.inline) {
        const n = zn(this.opts.trigger);
        n ? n.forEach((a) => a.addEventListener("click", this.openModal)) : this.uppy.log("Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself", "warning");
      }
      this.startListeningToResize(), document.addEventListener("paste", this.handlePasteOnBody), this.uppy.on("plugin-remove", this.removeTarget), this.uppy.on("file-added", this.hideAllPanels), this.uppy.on("dashboard:modal-closed", this.hideAllPanels), this.uppy.on("file-editor:complete", this.hideAllPanels), this.uppy.on("complete", this.handleComplete), this.uppy.on("files-added", Q(this, Be)[Be]), this.uppy.on("file-removed", Q(this, Be)[Be]), document.addEventListener("focus", this.recordIfFocusedOnUppyRecently, !0), document.addEventListener("click", this.recordIfFocusedOnUppyRecently, !0), this.opts.inline && this.el.addEventListener("keydown", this.handleKeyDownInInline), this.opts.autoOpenFileEditor && this.uppy.on("files-added", Q(this, Dt)[Dt]);
    }, this.removeEvents = () => {
      const n = zn(this.opts.trigger);
      !this.opts.inline && n && n.forEach((a) => a.removeEventListener("click", this.openModal)), this.stopListeningToResize(), document.removeEventListener("paste", this.handlePasteOnBody), window.removeEventListener("popstate", this.handlePopState, !1), this.uppy.off("plugin-remove", this.removeTarget), this.uppy.off("file-added", this.hideAllPanels), this.uppy.off("dashboard:modal-closed", this.hideAllPanels), this.uppy.off("file-editor:complete", this.hideAllPanels), this.uppy.off("complete", this.handleComplete), this.uppy.off("files-added", Q(this, Be)[Be]), this.uppy.off("file-removed", Q(this, Be)[Be]), document.removeEventListener("focus", this.recordIfFocusedOnUppyRecently), document.removeEventListener("click", this.recordIfFocusedOnUppyRecently), this.opts.inline && this.el.removeEventListener("keydown", this.handleKeyDownInInline), this.opts.autoOpenFileEditor && this.uppy.off("files-added", Q(this, Dt)[Dt]);
    }, this.superFocusOnEachUpdate = () => {
      const n = this.el.contains(document.activeElement), a = document.activeElement === document.body || document.activeElement === null, o = this.uppy.getState().info.length === 0, d = !this.opts.inline;
      // If update is connected to showing the Informer - let the screen reader calmly read it.
      o && // If we are in a modal - always superfocus without concern for other elements
      // on the page (user is unlikely to want to interact with the rest of the page)
      (d || n || a && this.ifFocusedOnUppyRecently) ? this.superFocus(this.el, this.getPluginState().activeOverlayType) : this.superFocus.cancel();
    }, this.afterUpdate = () => {
      if (this.opts.disabled && !this.dashboardIsDisabled) {
        this.disableInteractiveElements(!0);
        return;
      }
      !this.opts.disabled && this.dashboardIsDisabled && this.disableInteractiveElements(!1), this.superFocusOnEachUpdate();
    }, this.saveFileCard = (n, a) => {
      this.uppy.setFileMeta(a, n), this.toggleFileCard(!1, a);
    }, Object.defineProperty(this, Xe, {
      writable: !0,
      value: (n) => {
        const a = this.uppy.getPlugin(n.id);
        return {
          ...n,
          icon: a.icon || this.opts.defaultPickerIcon,
          render: a.render
        };
      }
    }), Object.defineProperty(this, ii, {
      writable: !0,
      value: (n) => {
        const a = this.uppy.getPlugin(n.id);
        return typeof a.isSupported != "function" ? !0 : a.isSupported();
      }
    }), Object.defineProperty(this, ni, {
      writable: !0,
      value: ri((n) => n.filter((a) => a.type === "acquirer" && Q(this, ii)[ii](a)).map(Q(this, Xe)[Xe]))
    }), Object.defineProperty(this, si, {
      writable: !0,
      value: ri((n) => n.filter((a) => a.type === "progressindicator").map(Q(this, Xe)[Xe]))
    }), Object.defineProperty(this, Re, {
      writable: !0,
      value: ri((n) => n.filter((a) => a.type === "editor").map(Q(this, Xe)[Xe]))
    }), this.render = (n) => {
      const a = this.getPluginState(), {
        files: o,
        capabilities: d,
        allowNewUpload: l
      } = n, {
        newFiles: u,
        uploadStartedFiles: c,
        completeFiles: h,
        erroredFiles: p,
        inProgressFiles: f,
        inProgressNotPausedFiles: v,
        processingFiles: y,
        isUploadStarted: _,
        isAllComplete: g,
        isAllErrored: x,
        isAllPaused: b
      } = this.uppy.getObjectOfFilesPerState(), C = Q(this, ni)[ni](a.targets), w = Q(this, si)[si](a.targets), F = Q(this, Re)[Re](a.targets);
      let P;
      return this.opts.theme === "auto" ? P = d.darkMode ? "dark" : "light" : P = this.opts.theme, ["files", "folders", "both"].indexOf(this.opts.fileManagerSelectionType) < 0 && (this.opts.fileManagerSelectionType = "files", console.warn(`Unsupported option for "fileManagerSelectionType". Using default of "${this.opts.fileManagerSelectionType}".`)), rd({
        state: n,
        isHidden: a.isHidden,
        files: o,
        newFiles: u,
        uploadStartedFiles: c,
        completeFiles: h,
        erroredFiles: p,
        inProgressFiles: f,
        inProgressNotPausedFiles: v,
        processingFiles: y,
        isUploadStarted: _,
        isAllComplete: g,
        isAllErrored: x,
        isAllPaused: b,
        totalFileCount: Object.keys(o).length,
        totalProgress: n.totalProgress,
        allowNewUpload: l,
        acquirers: C,
        theme: P,
        disabled: this.opts.disabled,
        disableLocalFiles: this.opts.disableLocalFiles,
        direction: this.opts.direction,
        activePickerPanel: a.activePickerPanel,
        showFileEditor: a.showFileEditor,
        saveFileEditor: this.saveFileEditor,
        disableInteractiveElements: this.disableInteractiveElements,
        animateOpenClose: this.opts.animateOpenClose,
        isClosing: a.isClosing,
        progressindicators: w,
        editors: F,
        autoProceed: this.uppy.opts.autoProceed,
        id: this.id,
        closeModal: this.requestCloseModal,
        handleClickOutside: this.handleClickOutside,
        handleInputChange: this.handleInputChange,
        handlePaste: this.handlePaste,
        inline: this.opts.inline,
        showPanel: this.showPanel,
        hideAllPanels: this.hideAllPanels,
        i18n: this.i18n,
        i18nArray: this.i18nArray,
        uppy: this.uppy,
        note: this.opts.note,
        recoveredState: n.recoveredState,
        metaFields: a.metaFields,
        resumableUploads: d.resumableUploads || !1,
        individualCancellation: d.individualCancellation,
        isMobileDevice: d.isMobileDevice,
        fileCardFor: a.fileCardFor,
        toggleFileCard: this.toggleFileCard,
        toggleAddFilesPanel: this.toggleAddFilesPanel,
        showAddFilesPanel: a.showAddFilesPanel,
        saveFileCard: this.saveFileCard,
        openFileEditor: this.openFileEditor,
        canEditFile: this.canEditFile,
        width: this.opts.width,
        height: this.opts.height,
        showLinkToFileUploadResult: this.opts.showLinkToFileUploadResult,
        fileManagerSelectionType: this.opts.fileManagerSelectionType,
        proudlyDisplayPoweredByUppy: this.opts.proudlyDisplayPoweredByUppy,
        hideCancelButton: this.opts.hideCancelButton,
        hideRetryButton: this.opts.hideRetryButton,
        hidePauseResumeButton: this.opts.hidePauseResumeButton,
        showRemoveButtonAfterComplete: this.opts.showRemoveButtonAfterComplete,
        containerWidth: a.containerWidth,
        containerHeight: a.containerHeight,
        areInsidesReadyToBeVisible: a.areInsidesReadyToBeVisible,
        isTargetDOMEl: this.isTargetDOMEl,
        parentElement: this.el,
        allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
        maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
        requiredMetaFields: this.uppy.opts.restrictions.requiredMetaFields,
        showSelectedFiles: this.opts.showSelectedFiles,
        showNativePhotoCameraButton: this.opts.showNativePhotoCameraButton,
        showNativeVideoCameraButton: this.opts.showNativeVideoCameraButton,
        nativeCameraFacingMode: this.opts.nativeCameraFacingMode,
        handleCancelRestore: this.handleCancelRestore,
        handleRequestThumbnail: this.handleRequestThumbnail,
        handleCancelThumbnail: this.handleCancelThumbnail,
        // drag props
        isDraggingOver: a.isDraggingOver,
        handleDragOver: this.handleDragOver,
        handleDragLeave: this.handleDragLeave,
        handleDrop: this.handleDrop
      });
    }, this.discoverProviderPlugins = () => {
      this.uppy.iteratePlugins((n) => {
        n && !n.target && n.opts && n.opts.target === this.constructor && this.addTarget(n);
      });
    }, this.install = () => {
      this.setPluginState({
        isHidden: !0,
        fileCardFor: null,
        activeOverlayType: null,
        showAddFilesPanel: !1,
        activePickerPanel: !1,
        showFileEditor: !1,
        metaFields: this.opts.metaFields,
        targets: [],
        // We'll make them visible once .containerWidth is determined
        areInsidesReadyToBeVisible: !1,
        isDraggingOver: !1
      });
      const {
        inline: n,
        closeAfterFinish: a
      } = this.opts;
      if (n && a)
        throw new Error("[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.");
      const {
        allowMultipleUploads: o,
        allowMultipleUploadBatches: d
      } = this.uppy.opts;
      (o || d) && a && this.uppy.log("[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploadBatches` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true", "warning");
      const {
        target: l
      } = this.opts;
      l && this.mount(l, this), (this.opts.plugins || []).forEach((h) => {
        const p = this.uppy.getPlugin(h);
        p && p.mount(this, p);
      }), this.opts.disableStatusBar || this.uppy.use(ua, {
        id: `${this.id}:StatusBar`,
        target: this,
        hideUploadButton: this.opts.hideUploadButton,
        hideRetryButton: this.opts.hideRetryButton,
        hidePauseResumeButton: this.opts.hidePauseResumeButton,
        hideCancelButton: this.opts.hideCancelButton,
        showProgressDetails: this.opts.showProgressDetails,
        hideAfterFinish: this.opts.hideProgressAfterFinish,
        locale: this.opts.locale,
        doneButtonHandler: this.opts.doneButtonHandler
      }), this.opts.disableInformer || this.uppy.use(ca, {
        id: `${this.id}:Informer`,
        target: this
      }), this.opts.disableThumbnailGenerator || this.uppy.use(ba, {
        id: `${this.id}:ThumbnailGenerator`,
        thumbnailWidth: this.opts.thumbnailWidth,
        thumbnailHeight: this.opts.thumbnailHeight,
        thumbnailType: this.opts.thumbnailType,
        waitForThumbnailsBeforeUpload: this.opts.waitForThumbnailsBeforeUpload,
        // If we don't block on thumbnails, we can lazily generate them
        lazy: !this.opts.waitForThumbnailsBeforeUpload
      }), this.darkModeMediaQuery = typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
      const c = this.darkModeMediaQuery ? this.darkModeMediaQuery.matches : !1;
      this.uppy.log(`[Dashboard] Dark mode is ${c ? "on" : "off"}`), this.setDarkModeCapability(c), this.opts.theme === "auto" && this.darkModeMediaQuery.addListener(this.handleSystemDarkModeChange), this.discoverProviderPlugins(), this.initEvents();
    }, this.uninstall = () => {
      if (!this.opts.disableInformer) {
        const a = this.uppy.getPlugin(`${this.id}:Informer`);
        a && this.uppy.removePlugin(a);
      }
      if (!this.opts.disableStatusBar) {
        const a = this.uppy.getPlugin(`${this.id}:StatusBar`);
        a && this.uppy.removePlugin(a);
      }
      if (!this.opts.disableThumbnailGenerator) {
        const a = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
        a && this.uppy.removePlugin(a);
      }
      (this.opts.plugins || []).forEach((a) => {
        const o = this.uppy.getPlugin(a);
        o && o.unmount();
      }), this.opts.theme === "auto" && this.darkModeMediaQuery.removeListener(this.handleSystemDarkModeChange), this.unmount(), this.removeEvents();
    }, this.id = this.opts.id || "Dashboard", this.title = "Dashboard", this.type = "orchestrator", this.modalName = `uppy-Dashboard-${Oi()}`, this.defaultLocale = id;
    const s = {
      target: "body",
      metaFields: [],
      trigger: null,
      inline: !1,
      width: 750,
      height: 550,
      thumbnailWidth: 280,
      thumbnailType: "image/jpeg",
      waitForThumbnailsBeforeUpload: !1,
      defaultPickerIcon: od,
      showLinkToFileUploadResult: !1,
      showProgressDetails: !1,
      hideUploadButton: !1,
      hideCancelButton: !1,
      hideRetryButton: !1,
      hidePauseResumeButton: !1,
      hideProgressAfterFinish: !1,
      doneButtonHandler: () => {
        this.uppy.cancelAll(), this.requestCloseModal();
      },
      note: null,
      closeModalOnClickOutside: !1,
      closeAfterFinish: !1,
      disableStatusBar: !1,
      disableInformer: !1,
      disableThumbnailGenerator: !1,
      disablePageScrollWhenModalOpen: !0,
      animateOpenClose: !0,
      fileManagerSelectionType: "files",
      proudlyDisplayPoweredByUppy: !0,
      onRequestCloseModal: () => this.closeModal(),
      showSelectedFiles: !0,
      showRemoveButtonAfterComplete: !1,
      browserBackButtonClose: !1,
      showNativePhotoCameraButton: !1,
      showNativeVideoCameraButton: !1,
      theme: "light",
      autoOpenFileEditor: !1,
      disabled: !1,
      disableLocalFiles: !1
    };
    this.opts = {
      ...s,
      ...t
    }, this.i18nInit(), this.superFocus = lu(), this.ifFocusedOnUppyRecently = !1, this.makeDashboardInsidesVisibleAnywayTimeout = null, this.removeDragOverClassTimeout = null;
  }
}
Da.VERSION = sd.version;
const Na = "3.7.5", ld = Na, ud = typeof atob == "function", dd = typeof btoa == "function", xt = typeof Buffer == "function", ss = typeof TextDecoder == "function" ? new TextDecoder() : void 0, as = typeof TextEncoder == "function" ? new TextEncoder() : void 0, cd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", qt = Array.prototype.slice.call(cd), gr = ((r) => {
  let e = {};
  return r.forEach((t, i) => e[t] = i), e;
})(qt), hd = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, ne = String.fromCharCode.bind(String), os = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (r) => new Uint8Array(Array.prototype.slice.call(r, 0)), Ia = (r) => r.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), $a = (r) => r.replace(/[^A-Za-z0-9\+\/]/g, ""), za = (r) => {
  let e, t, i, s, n = "";
  const a = r.length % 3;
  for (let o = 0; o < r.length; ) {
    if ((t = r.charCodeAt(o++)) > 255 || (i = r.charCodeAt(o++)) > 255 || (s = r.charCodeAt(o++)) > 255)
      throw new TypeError("invalid character found");
    e = t << 16 | i << 8 | s, n += qt[e >> 18 & 63] + qt[e >> 12 & 63] + qt[e >> 6 & 63] + qt[e & 63];
  }
  return a ? n.slice(0, a - 3) + "===".substring(a) : n;
}, ji = dd ? (r) => btoa(r) : xt ? (r) => Buffer.from(r, "binary").toString("base64") : za, _i = xt ? (r) => Buffer.from(r).toString("base64") : (r) => {
  let t = [];
  for (let i = 0, s = r.length; i < s; i += 4096)
    t.push(ne.apply(null, r.subarray(i, i + 4096)));
  return ji(t.join(""));
}, wr = (r, e = !1) => e ? Ia(_i(r)) : _i(r), fd = (r) => {
  if (r.length < 2) {
    var e = r.charCodeAt(0);
    return e < 128 ? r : e < 2048 ? ne(192 | e >>> 6) + ne(128 | e & 63) : ne(224 | e >>> 12 & 15) + ne(128 | e >>> 6 & 63) + ne(128 | e & 63);
  } else {
    var e = 65536 + (r.charCodeAt(0) - 55296) * 1024 + (r.charCodeAt(1) - 56320);
    return ne(240 | e >>> 18 & 7) + ne(128 | e >>> 12 & 63) + ne(128 | e >>> 6 & 63) + ne(128 | e & 63);
  }
}, pd = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, La = (r) => r.replace(pd, fd), ls = xt ? (r) => Buffer.from(r, "utf8").toString("base64") : as ? (r) => _i(as.encode(r)) : (r) => ji(La(r)), vt = (r, e = !1) => e ? Ia(ls(r)) : ls(r), us = (r) => vt(r, !0), md = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, gd = (r) => {
  switch (r.length) {
    case 4:
      var e = (7 & r.charCodeAt(0)) << 18 | (63 & r.charCodeAt(1)) << 12 | (63 & r.charCodeAt(2)) << 6 | 63 & r.charCodeAt(3), t = e - 65536;
      return ne((t >>> 10) + 55296) + ne((t & 1023) + 56320);
    case 3:
      return ne((15 & r.charCodeAt(0)) << 12 | (63 & r.charCodeAt(1)) << 6 | 63 & r.charCodeAt(2));
    default:
      return ne((31 & r.charCodeAt(0)) << 6 | 63 & r.charCodeAt(1));
  }
}, Ma = (r) => r.replace(md, gd), Ha = (r) => {
  if (r = r.replace(/\s+/g, ""), !hd.test(r))
    throw new TypeError("malformed base64.");
  r += "==".slice(2 - (r.length & 3));
  let e, t = "", i, s;
  for (let n = 0; n < r.length; )
    e = gr[r.charAt(n++)] << 18 | gr[r.charAt(n++)] << 12 | (i = gr[r.charAt(n++)]) << 6 | (s = gr[r.charAt(n++)]), t += i === 64 ? ne(e >> 16 & 255) : s === 64 ? ne(e >> 16 & 255, e >> 8 & 255) : ne(e >> 16 & 255, e >> 8 & 255, e & 255);
  return t;
}, qi = ud ? (r) => atob($a(r)) : xt ? (r) => Buffer.from(r, "base64").toString("binary") : Ha, ja = xt ? (r) => os(Buffer.from(r, "base64")) : (r) => os(qi(r).split("").map((e) => e.charCodeAt(0))), qa = (r) => ja(Wa(r)), vd = xt ? (r) => Buffer.from(r, "base64").toString("utf8") : ss ? (r) => ss.decode(ja(r)) : (r) => Ma(qi(r)), Wa = (r) => $a(r.replace(/[-_]/g, (e) => e == "-" ? "+" : "/")), wi = (r) => vd(Wa(r)), yd = (r) => {
  if (typeof r != "string")
    return !1;
  const e = r.replace(/\s+/g, "").replace(/={0,2}$/, "");
  return !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e);
}, Va = (r) => ({
  value: r,
  enumerable: !1,
  writable: !0,
  configurable: !0
}), Ga = function() {
  const r = (e, t) => Object.defineProperty(String.prototype, e, Va(t));
  r("fromBase64", function() {
    return wi(this);
  }), r("toBase64", function(e) {
    return vt(this, e);
  }), r("toBase64URI", function() {
    return vt(this, !0);
  }), r("toBase64URL", function() {
    return vt(this, !0);
  }), r("toUint8Array", function() {
    return qa(this);
  });
}, Ka = function() {
  const r = (e, t) => Object.defineProperty(Uint8Array.prototype, e, Va(t));
  r("toBase64", function(e) {
    return wr(this, e);
  }), r("toBase64URI", function() {
    return wr(this, !0);
  }), r("toBase64URL", function() {
    return wr(this, !0);
  });
}, xd = () => {
  Ga(), Ka();
}, bd = {
  version: Na,
  VERSION: ld,
  atob: qi,
  atobPolyfill: Ha,
  btoa: ji,
  btoaPolyfill: za,
  fromBase64: wi,
  toBase64: vt,
  encode: vt,
  encodeURI: us,
  encodeURL: us,
  utob: La,
  btou: Ma,
  decode: wi,
  isValid: yd,
  fromUint8Array: wr,
  toUint8Array: qa,
  extendString: Ga,
  extendUint8Array: Ka,
  extendBuiltins: xd
};
var _d = function(e, t) {
  if (t = t.split(":")[0], e = +e, !e)
    return !1;
  switch (t) {
    case "http":
    case "ws":
      return e !== 80;
    case "https":
    case "wss":
      return e !== 443;
    case "ftp":
      return e !== 21;
    case "gopher":
      return e !== 70;
    case "file":
      return !1;
  }
  return e !== 0;
}, Wi = {}, wd = Object.prototype.hasOwnProperty, Sd;
function ds(r) {
  try {
    return decodeURIComponent(r.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function cs(r) {
  try {
    return encodeURIComponent(r);
  } catch {
    return null;
  }
}
function Pd(r) {
  for (var e = /([^=?#&]+)=?([^&]*)/g, t = {}, i; i = e.exec(r); ) {
    var s = ds(i[1]), n = ds(i[2]);
    s === null || n === null || s in t || (t[s] = n);
  }
  return t;
}
function Fd(r, e) {
  e = e || "";
  var t = [], i, s;
  typeof e != "string" && (e = "?");
  for (s in r)
    if (wd.call(r, s)) {
      if (i = r[s], !i && (i === null || i === Sd || isNaN(i)) && (i = ""), s = cs(s), i = cs(i), s === null || i === null)
        continue;
      t.push(s + "=" + i);
    }
  return t.length ? e + t.join("&") : "";
}
Wi.stringify = Fd;
Wi.parse = Pd;
var Xa = _d, Rr = Wi, Cd = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, Ya = /[\n\r\t]/g, kd = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, Ja = /:\d+$/, Ad = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, Ed = /^[a-zA-Z]:/;
function Vi(r) {
  return (r || "").toString().replace(Cd, "");
}
var Si = [
  ["#", "hash"],
  // Extract from the back.
  ["?", "query"],
  // Extract from the back.
  function(e, t) {
    return Ae(t.protocol) ? e.replace(/\\/g, "/") : e;
  },
  ["/", "pathname"],
  // Extract from the back.
  ["@", "auth", 1],
  // Extract from the front.
  [NaN, "host", void 0, 1, 1],
  // Set left over value.
  [/:(\d*)$/, "port", void 0, 1],
  // RegExp the back.
  [NaN, "hostname", void 0, 1, 1]
  // Set left over.
], hs = { hash: 1, query: 1 };
function Qa(r) {
  var e;
  typeof window < "u" ? e = window : typeof le < "u" ? e = le : typeof self < "u" ? e = self : e = {};
  var t = e.location || {};
  r = r || t;
  var i = {}, s = typeof r, n;
  if (r.protocol === "blob:")
    i = new Ee(unescape(r.pathname), {});
  else if (s === "string") {
    i = new Ee(r, {});
    for (n in hs)
      delete i[n];
  } else if (s === "object") {
    for (n in r)
      n in hs || (i[n] = r[n]);
    i.slashes === void 0 && (i.slashes = kd.test(r.href));
  }
  return i;
}
function Ae(r) {
  return r === "file:" || r === "ftp:" || r === "http:" || r === "https:" || r === "ws:" || r === "wss:";
}
function Za(r, e) {
  r = Vi(r), r = r.replace(Ya, ""), e = e || {};
  var t = Ad.exec(r), i = t[1] ? t[1].toLowerCase() : "", s = !!t[2], n = !!t[3], a = 0, o;
  return s ? n ? (o = t[2] + t[3] + t[4], a = t[2].length + t[3].length) : (o = t[2] + t[4], a = t[2].length) : n ? (o = t[3] + t[4], a = t[3].length) : o = t[4], i === "file:" ? a >= 2 && (o = o.slice(2)) : Ae(i) ? o = t[4] : i ? s && (o = o.slice(2)) : a >= 2 && Ae(e.protocol) && (o = t[4]), {
    protocol: i,
    slashes: s || Ae(i),
    slashesCount: a,
    rest: o
  };
}
function Ud(r, e) {
  if (r === "")
    return e;
  for (var t = (e || "/").split("/").slice(0, -1).concat(r.split("/")), i = t.length, s = t[i - 1], n = !1, a = 0; i--; )
    t[i] === "." ? t.splice(i, 1) : t[i] === ".." ? (t.splice(i, 1), a++) : a && (i === 0 && (n = !0), t.splice(i, 1), a--);
  return n && t.unshift(""), (s === "." || s === "..") && t.push(""), t.join("/");
}
function Ee(r, e, t) {
  if (r = Vi(r), r = r.replace(Ya, ""), !(this instanceof Ee))
    return new Ee(r, e, t);
  var i, s, n, a, o, d, l = Si.slice(), u = typeof e, c = this, h = 0;
  for (u !== "object" && u !== "string" && (t = e, e = null), t && typeof t != "function" && (t = Rr.parse), e = Qa(e), s = Za(r || "", e), i = !s.protocol && !s.slashes, c.slashes = s.slashes || i && e.slashes, c.protocol = s.protocol || e.protocol || "", r = s.rest, (s.protocol === "file:" && (s.slashesCount !== 2 || Ed.test(r)) || !s.slashes && (s.protocol || s.slashesCount < 2 || !Ae(c.protocol))) && (l[3] = [/(.*)/, "pathname"]); h < l.length; h++) {
    if (a = l[h], typeof a == "function") {
      r = a(r, c);
      continue;
    }
    n = a[0], d = a[1], n !== n ? c[d] = r : typeof n == "string" ? (o = n === "@" ? r.lastIndexOf(n) : r.indexOf(n), ~o && (typeof a[2] == "number" ? (c[d] = r.slice(0, o), r = r.slice(o + a[2])) : (c[d] = r.slice(o), r = r.slice(0, o)))) : (o = n.exec(r)) && (c[d] = o[1], r = r.slice(0, o.index)), c[d] = c[d] || i && a[3] && e[d] || "", a[4] && (c[d] = c[d].toLowerCase());
  }
  t && (c.query = t(c.query)), i && e.slashes && c.pathname.charAt(0) !== "/" && (c.pathname !== "" || e.pathname !== "") && (c.pathname = Ud(c.pathname, e.pathname)), c.pathname.charAt(0) !== "/" && Ae(c.protocol) && (c.pathname = "/" + c.pathname), Xa(c.port, c.protocol) || (c.host = c.hostname, c.port = ""), c.username = c.password = "", c.auth && (o = c.auth.indexOf(":"), ~o ? (c.username = c.auth.slice(0, o), c.username = encodeURIComponent(decodeURIComponent(c.username)), c.password = c.auth.slice(o + 1), c.password = encodeURIComponent(decodeURIComponent(c.password))) : c.username = encodeURIComponent(decodeURIComponent(c.auth)), c.auth = c.password ? c.username + ":" + c.password : c.username), c.origin = c.protocol !== "file:" && Ae(c.protocol) && c.host ? c.protocol + "//" + c.host : "null", c.href = c.toString();
}
function Td(r, e, t) {
  var i = this;
  switch (r) {
    case "query":
      typeof e == "string" && e.length && (e = (t || Rr.parse)(e)), i[r] = e;
      break;
    case "port":
      i[r] = e, Xa(e, i.protocol) ? e && (i.host = i.hostname + ":" + e) : (i.host = i.hostname, i[r] = "");
      break;
    case "hostname":
      i[r] = e, i.port && (e += ":" + i.port), i.host = e;
      break;
    case "host":
      i[r] = e, Ja.test(e) ? (e = e.split(":"), i.port = e.pop(), i.hostname = e.join(":")) : (i.hostname = e, i.port = "");
      break;
    case "protocol":
      i.protocol = e.toLowerCase(), i.slashes = !t;
      break;
    case "pathname":
    case "hash":
      if (e) {
        var s = r === "pathname" ? "/" : "#";
        i[r] = e.charAt(0) !== s ? s + e : e;
      } else
        i[r] = e;
      break;
    case "username":
    case "password":
      i[r] = encodeURIComponent(e);
      break;
    case "auth":
      var n = e.indexOf(":");
      ~n ? (i.username = e.slice(0, n), i.username = encodeURIComponent(decodeURIComponent(i.username)), i.password = e.slice(n + 1), i.password = encodeURIComponent(decodeURIComponent(i.password))) : i.username = encodeURIComponent(decodeURIComponent(e));
  }
  for (var a = 0; a < Si.length; a++) {
    var o = Si[a];
    o[4] && (i[o[1]] = i[o[1]].toLowerCase());
  }
  return i.auth = i.password ? i.username + ":" + i.password : i.username, i.origin = i.protocol !== "file:" && Ae(i.protocol) && i.host ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i;
}
function Od(r) {
  (!r || typeof r != "function") && (r = Rr.stringify);
  var e, t = this, i = t.host, s = t.protocol;
  s && s.charAt(s.length - 1) !== ":" && (s += ":");
  var n = s + (t.protocol && t.slashes || Ae(t.protocol) ? "//" : "");
  return t.username ? (n += t.username, t.password && (n += ":" + t.password), n += "@") : t.password ? (n += ":" + t.password, n += "@") : t.protocol !== "file:" && Ae(t.protocol) && !i && t.pathname !== "/" && (n += "@"), (i[i.length - 1] === ":" || Ja.test(t.hostname) && !t.port) && (i += ":"), n += i + t.pathname, e = typeof t.query == "object" ? r(t.query) : t.query, e && (n += e.charAt(0) !== "?" ? "?" + e : e), t.hash && (n += t.hash), n;
}
Ee.prototype = { set: Td, toString: Od };
Ee.extractProtocol = Za;
Ee.location = Qa;
Ee.trimLeft = Vi;
Ee.qs = Rr;
var Bd = Ee;
function Pi(r) {
  return Pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pi(r);
}
function fs(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
  }
}
function Rd(r, e, t) {
  return e && fs(r.prototype, e), t && fs(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Dd(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Nd(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && er(r, e);
}
function Id(r) {
  var e = eo();
  return function() {
    var i = tr(r), s;
    if (e) {
      var n = tr(this).constructor;
      s = Reflect.construct(i, arguments, n);
    } else
      s = i.apply(this, arguments);
    return $d(this, s);
  };
}
function $d(r, e) {
  if (e && (Pi(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zd(r);
}
function zd(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Fi(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Fi = function(i) {
    if (i === null || !Ld(i))
      return i;
    if (typeof i != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(i))
        return e.get(i);
      e.set(i, s);
    }
    function s() {
      return Sr(i, arguments, tr(this).constructor);
    }
    return s.prototype = Object.create(i.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), er(s, i);
  }, Fi(r);
}
function Sr(r, e, t) {
  return eo() ? Sr = Reflect.construct.bind() : Sr = function(s, n, a) {
    var o = [null];
    o.push.apply(o, n);
    var d = Function.bind.apply(s, o), l = new d();
    return a && er(l, a.prototype), l;
  }, Sr.apply(null, arguments);
}
function eo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ld(r) {
  return Function.toString.call(r).indexOf("[native code]") !== -1;
}
function er(r, e) {
  return er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, s) {
    return i.__proto__ = s, i;
  }, er(r, e);
}
function tr(r) {
  return tr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, tr(r);
}
var vr = /* @__PURE__ */ function(r) {
  Nd(t, r);
  var e = Id(t);
  function t(i) {
    var s, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    if (Dd(this, t), s = e.call(this, i), s.originalRequest = a, s.originalResponse = o, s.causingError = n, n != null && (i += ", caused by ".concat(n.toString())), a != null) {
      var d = a.getHeader("X-Request-ID") || "n/a", l = a.getMethod(), u = a.getURL(), c = o ? o.getStatus() : "n/a", h = o ? o.getBody() || "" : "n/a";
      i += ", originated from request (method: ".concat(l, ", url: ").concat(u, ", response code: ").concat(c, ", response text: ").concat(h, ", request id: ").concat(d, ")");
    }
    return s.message = i, s;
  }
  return Rd(t);
}(/* @__PURE__ */ Fi(Error));
function Md() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    var e = Math.random() * 16 | 0, t = r === "x" ? e : e & 3 | 8;
    return t.toString(16);
  });
}
function to(r, e) {
  return Wd(r) || qd(r, e) || jd(r, e) || Hd();
}
function Hd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jd(r, e) {
  if (r) {
    if (typeof r == "string")
      return ps(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set")
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ps(r, e);
  }
}
function ps(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, i = new Array(e); t < e; t++)
    i[t] = r[t];
  return i;
}
function qd(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var i = [], s = !0, n = !1, a, o;
    try {
      for (t = t.call(r); !(s = (a = t.next()).done) && (i.push(a.value), !(e && i.length === e)); s = !0)
        ;
    } catch (d) {
      n = !0, o = d;
    } finally {
      try {
        !s && t.return != null && t.return();
      } finally {
        if (n)
          throw o;
      }
    }
    return i;
  }
}
function Wd(r) {
  if (Array.isArray(r))
    return r;
}
function ms(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function ht(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ms(Object(t), !0).forEach(function(i) {
      Vd(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ms(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Vd(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Gd(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function gs(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
  }
}
function Kd(r, e, t) {
  return e && gs(r.prototype, e), t && gs(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
var Xd = {
  endpoint: null,
  uploadUrl: null,
  metadata: {},
  fingerprint: null,
  uploadSize: null,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  onUploadUrlAvailable: null,
  overridePatchMethod: !1,
  headers: {},
  addRequestId: !1,
  onBeforeRequest: null,
  onAfterResponse: null,
  onShouldRetry: null,
  chunkSize: 1 / 0,
  retryDelays: [0, 1e3, 3e3, 5e3],
  parallelUploads: 1,
  parallelUploadBoundaries: null,
  storeFingerprintForResuming: !0,
  removeFingerprintOnSuccess: !1,
  uploadLengthDeferred: !1,
  uploadDataDuringCreation: !1,
  urlStorage: null,
  fileReader: null,
  httpStack: null
}, Ur = /* @__PURE__ */ function() {
  function r(e, t) {
    Gd(this, r), "resume" in t && console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."), this.options = t, this.options.chunkSize = Number(this.options.chunkSize), this._urlStorage = this.options.urlStorage, this.file = e, this.url = null, this._req = null, this._fingerprint = null, this._urlStorageKey = null, this._offset = null, this._aborted = !1, this._size = null, this._source = null, this._retryAttempt = 0, this._retryTimeout = null, this._offsetBeforeRetry = 0, this._parallelUploads = null, this._parallelUploadUrls = null;
  }
  return Kd(r, [{
    key: "findPreviousUploads",
    value: function() {
      var t = this;
      return this.options.fingerprint(this.file, this.options).then(function(i) {
        return t._urlStorage.findUploadsByFingerprint(i);
      });
    }
  }, {
    key: "resumeFromPreviousUpload",
    value: function(t) {
      this.url = t.uploadUrl || null, this._parallelUploadUrls = t.parallelUploadUrls || null, this._urlStorageKey = t.urlStorageKey;
    }
  }, {
    key: "start",
    value: function() {
      var t = this, i = this.file;
      if (!i) {
        this._emitError(new Error("tus: no file or stream to upload provided"));
        return;
      }
      if (!this.options.endpoint && !this.options.uploadUrl && !this.url) {
        this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));
        return;
      }
      var s = this.options.retryDelays;
      if (s != null && Object.prototype.toString.call(s) !== "[object Array]") {
        this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));
        return;
      }
      if (this.options.parallelUploads > 1)
        for (var n = 0, a = ["uploadUrl", "uploadSize", "uploadLengthDeferred"]; n < a.length; n++) {
          var o = a[n];
          if (this.options[o]) {
            this._emitError(new Error("tus: cannot use the ".concat(o, " option when parallelUploads is enabled")));
            return;
          }
        }
      if (this.options.parallelUploadBoundaries) {
        if (this.options.parallelUploads <= 1) {
          this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));
          return;
        }
        if (this.options.parallelUploads !== this.options.parallelUploadBoundaries.length) {
          this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));
          return;
        }
      }
      this.options.fingerprint(i, this.options).then(function(d) {
        return t._fingerprint = d, t._source ? t._source : t.options.fileReader.openFile(i, t.options.chunkSize);
      }).then(function(d) {
        if (t._source = d, t.options.uploadLengthDeferred)
          t._size = null;
        else if (t.options.uploadSize != null) {
          if (t._size = Number(t.options.uploadSize), Number.isNaN(t._size)) {
            t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));
            return;
          }
        } else if (t._size = t._source.size, t._size == null) {
          t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));
          return;
        }
        t.options.parallelUploads > 1 || t._parallelUploadUrls != null ? t._startParallelUpload() : t._startSingleUpload();
      }).catch(function(d) {
        t._emitError(d);
      });
    }
    /**
     * Initiate the uploading procedure for a parallelized upload, where one file is split into
     * multiple request which are run in parallel.
     *
     * @api private
     */
  }, {
    key: "_startParallelUpload",
    value: function() {
      var t, i = this, s = this._size, n = 0;
      this._parallelUploads = [];
      var a = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads, o = (t = this.options.parallelUploadBoundaries) !== null && t !== void 0 ? t : Jd(this._source.size, a);
      this._parallelUploadUrls && o.forEach(function(u, c) {
        u.uploadUrl = i._parallelUploadUrls[c] || null;
      }), this._parallelUploadUrls = new Array(o.length);
      var d = o.map(function(u, c) {
        var h = 0;
        return i._source.slice(u.start, u.end).then(function(p) {
          var f = p.value;
          return new Promise(function(v, y) {
            var _ = ht(ht({}, i.options), {}, {
              // If available, the partial upload should be resumed from a previous URL.
              uploadUrl: u.uploadUrl || null,
              // We take manually care of resuming for partial uploads, so they should
              // not be stored in the URL storage.
              storeFingerprintForResuming: !1,
              removeFingerprintOnSuccess: !1,
              // Reset the parallelUploads option to not cause recursion.
              parallelUploads: 1,
              // Reset this option as we are not doing a parallel upload.
              parallelUploadBoundaries: null,
              metadata: {},
              // Add the header to indicate the this is a partial upload.
              headers: ht(ht({}, i.options.headers), {}, {
                "Upload-Concat": "partial"
              }),
              // Reject or resolve the promise if the upload errors or completes.
              onSuccess: v,
              onError: y,
              // Based in the progress for this partial upload, calculate the progress
              // for the entire final upload.
              onProgress: function(b) {
                n = n - h + b, h = b, i._emitProgress(n, s);
              },
              // Wait until every partial upload has an upload URL, so we can add
              // them to the URL storage.
              onUploadUrlAvailable: function() {
                i._parallelUploadUrls[c] = g.url, i._parallelUploadUrls.filter(function(b) {
                  return !!b;
                }).length === o.length && i._saveUploadInUrlStorage();
              }
            }), g = new r(f, _);
            g.start(), i._parallelUploads.push(g);
          });
        });
      }), l;
      Promise.all(d).then(function() {
        l = i._openRequest("POST", i.options.endpoint), l.setHeader("Upload-Concat", "final;".concat(i._parallelUploadUrls.join(" ")));
        var u = vs(i.options.metadata);
        return u !== "" && l.setHeader("Upload-Metadata", u), i._sendRequest(l, null);
      }).then(function(u) {
        if (!pt(u.getStatus(), 200)) {
          i._emitHttpError(l, u, "tus: unexpected response while creating upload");
          return;
        }
        var c = u.getHeader("Location");
        if (c == null) {
          i._emitHttpError(l, u, "tus: invalid or missing Location header");
          return;
        }
        i.url = _s(i.options.endpoint, c), "Created upload at ".concat(i.url), i._emitSuccess();
      }).catch(function(u) {
        i._emitError(u);
      });
    }
    /**
     * Initiate the uploading procedure for a non-parallel upload. Here the entire file is
     * uploaded in a sequential matter.
     *
     * @api private
     */
  }, {
    key: "_startSingleUpload",
    value: function() {
      if (this._aborted = !1, this.url != null) {
        "Resuming upload from previous URL: ".concat(this.url), this._resumeUpload();
        return;
      }
      if (this.options.uploadUrl != null) {
        "Resuming upload from provided URL: ".concat(this.options.uploadUrl), this.url = this.options.uploadUrl, this._resumeUpload();
        return;
      }
      this._createUpload();
    }
    /**
     * Abort any running request and stop the current upload. After abort is called, no event
     * handler will be invoked anymore. You can use the `start` method to resume the upload
     * again.
     * If `shouldTerminate` is true, the `terminate` function will be called to remove the
     * current upload from the server.
     *
     * @param {boolean} shouldTerminate True if the upload should be deleted from the server.
     * @return {Promise} The Promise will be resolved/rejected when the requests finish.
     */
  }, {
    key: "abort",
    value: function(t) {
      var i = this;
      return this._parallelUploads != null && this._parallelUploads.forEach(function(s) {
        s.abort(t);
      }), this._req !== null && this._req.abort(), this._aborted = !0, this._retryTimeout != null && (clearTimeout(this._retryTimeout), this._retryTimeout = null), !t || this.url == null ? Promise.resolve() : r.terminate(this.url, this.options).then(function() {
        return i._removeFromUrlStorage();
      });
    }
  }, {
    key: "_emitHttpError",
    value: function(t, i, s, n) {
      this._emitError(new vr(s, n, t, i));
    }
  }, {
    key: "_emitError",
    value: function(t) {
      var i = this;
      if (!this._aborted) {
        if (this.options.retryDelays != null) {
          var s = this._offset != null && this._offset > this._offsetBeforeRetry;
          if (s && (this._retryAttempt = 0), bs(t, this._retryAttempt, this.options)) {
            var n = this.options.retryDelays[this._retryAttempt++];
            this._offsetBeforeRetry = this._offset, this._retryTimeout = setTimeout(function() {
              i.start();
            }, n);
            return;
          }
        }
        if (typeof this.options.onError == "function")
          this.options.onError(t);
        else
          throw t;
      }
    }
    /**
     * Publishes notification if the upload has been successfully completed.
     *
     * @api private
     */
  }, {
    key: "_emitSuccess",
    value: function() {
      this.options.removeFingerprintOnSuccess && this._removeFromUrlStorage(), typeof this.options.onSuccess == "function" && this.options.onSuccess();
    }
    /**
     * Publishes notification when data has been sent to the server. This
     * data may not have been accepted by the server yet.
     *
     * @param {number} bytesSent  Number of bytes sent to the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */
  }, {
    key: "_emitProgress",
    value: function(t, i) {
      typeof this.options.onProgress == "function" && this.options.onProgress(t, i);
    }
    /**
     * Publishes notification when a chunk of data has been sent to the server
     * and accepted by the server.
     * @param {number} chunkSize  Size of the chunk that was accepted by the server.
     * @param {number} bytesAccepted Total number of bytes that have been
     *                                accepted by the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */
  }, {
    key: "_emitChunkComplete",
    value: function(t, i, s) {
      typeof this.options.onChunkComplete == "function" && this.options.onChunkComplete(t, i, s);
    }
    /**
     * Create a new upload using the creation extension by sending a POST
     * request to the endpoint. After successful creation the file will be
     * uploaded
     *
     * @api private
     */
  }, {
    key: "_createUpload",
    value: function() {
      var t = this;
      if (!this.options.endpoint) {
        this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));
        return;
      }
      var i = this._openRequest("POST", this.options.endpoint);
      this.options.uploadLengthDeferred ? i.setHeader("Upload-Defer-Length", 1) : i.setHeader("Upload-Length", this._size);
      var s = vs(this.options.metadata);
      s !== "" && i.setHeader("Upload-Metadata", s);
      var n;
      this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred ? (this._offset = 0, n = this._addChunkToRequest(i)) : n = this._sendRequest(i, null), n.then(function(a) {
        if (!pt(a.getStatus(), 200)) {
          t._emitHttpError(i, a, "tus: unexpected response while creating upload");
          return;
        }
        var o = a.getHeader("Location");
        if (o == null) {
          t._emitHttpError(i, a, "tus: invalid or missing Location header");
          return;
        }
        if (t.url = _s(t.options.endpoint, o), "Created upload at ".concat(t.url), typeof t.options.onUploadUrlAvailable == "function" && t.options.onUploadUrlAvailable(), t._size === 0) {
          t._emitSuccess(), t._source.close();
          return;
        }
        t._saveUploadInUrlStorage().then(function() {
          t.options.uploadDataDuringCreation ? t._handleUploadResponse(i, a) : (t._offset = 0, t._performUpload());
        });
      }).catch(function(a) {
        t._emitHttpError(i, null, "tus: failed to create upload", a);
      });
    }
    /*
     * Try to resume an existing upload. First a HEAD request will be sent
     * to retrieve the offset. If the request fails a new upload will be
     * created. In the case of a successful response the file will be uploaded.
     *
     * @api private
     */
  }, {
    key: "_resumeUpload",
    value: function() {
      var t = this, i = this._openRequest("HEAD", this.url), s = this._sendRequest(i, null);
      s.then(function(n) {
        var a = n.getStatus();
        if (!pt(a, 200)) {
          if (a === 423) {
            t._emitHttpError(i, n, "tus: upload is currently locked; retry later");
            return;
          }
          if (pt(a, 400) && t._removeFromUrlStorage(), !t.options.endpoint) {
            t._emitHttpError(i, n, "tus: unable to resume upload (new upload cannot be created without an endpoint)");
            return;
          }
          t.url = null, t._createUpload();
          return;
        }
        var o = parseInt(n.getHeader("Upload-Offset"), 10);
        if (Number.isNaN(o)) {
          t._emitHttpError(i, n, "tus: invalid or missing offset value");
          return;
        }
        var d = parseInt(n.getHeader("Upload-Length"), 10);
        if (Number.isNaN(d) && !t.options.uploadLengthDeferred) {
          t._emitHttpError(i, n, "tus: invalid or missing length value");
          return;
        }
        typeof t.options.onUploadUrlAvailable == "function" && t.options.onUploadUrlAvailable(), t._saveUploadInUrlStorage().then(function() {
          if (o === d) {
            t._emitProgress(d, d), t._emitSuccess();
            return;
          }
          t._offset = o, t._performUpload();
        });
      }).catch(function(n) {
        t._emitHttpError(i, null, "tus: failed to resume upload", n);
      });
    }
    /**
     * Start uploading the file using PATCH requests. The file will be divided
     * into chunks as specified in the chunkSize option. During the upload
     * the onProgress event handler may be invoked multiple times.
     *
     * @api private
     */
  }, {
    key: "_performUpload",
    value: function() {
      var t = this;
      if (!this._aborted) {
        var i;
        this.options.overridePatchMethod ? (i = this._openRequest("POST", this.url), i.setHeader("X-HTTP-Method-Override", "PATCH")) : i = this._openRequest("PATCH", this.url), i.setHeader("Upload-Offset", this._offset);
        var s = this._addChunkToRequest(i);
        s.then(function(n) {
          if (!pt(n.getStatus(), 200)) {
            t._emitHttpError(i, n, "tus: unexpected response while uploading chunk");
            return;
          }
          t._handleUploadResponse(i, n);
        }).catch(function(n) {
          t._aborted || t._emitHttpError(i, null, "tus: failed to upload chunk at offset ".concat(t._offset), n);
        });
      }
    }
    /**
     * _addChunktoRequest reads a chunk from the source and sends it using the
     * supplied request object. It will not handle the response.
     *
     * @api private
     */
  }, {
    key: "_addChunkToRequest",
    value: function(t) {
      var i = this, s = this._offset, n = this._offset + this.options.chunkSize;
      return t.setProgressHandler(function(a) {
        i._emitProgress(s + a, i._size);
      }), t.setHeader("Content-Type", "application/offset+octet-stream"), (n === 1 / 0 || n > this._size) && !this.options.uploadLengthDeferred && (n = this._size), this._source.slice(s, n).then(function(a) {
        var o = a.value, d = a.done;
        return i.options.uploadLengthDeferred && d && (i._size = i._offset + (o && o.size ? o.size : 0), t.setHeader("Upload-Length", i._size)), o === null ? i._sendRequest(t) : (i._emitProgress(i._offset, i._size), i._sendRequest(t, o));
      });
    }
    /**
     * _handleUploadResponse is used by requests that haven been sent using _addChunkToRequest
     * and already have received a response.
     *
     * @api private
     */
  }, {
    key: "_handleUploadResponse",
    value: function(t, i) {
      var s = parseInt(i.getHeader("Upload-Offset"), 10);
      if (Number.isNaN(s)) {
        this._emitHttpError(t, i, "tus: invalid or missing offset value");
        return;
      }
      if (this._emitProgress(s, this._size), this._emitChunkComplete(s - this._offset, s, this._size), this._offset = s, s === this._size) {
        this._emitSuccess(), this._source.close();
        return;
      }
      this._performUpload();
    }
    /**
     * Create a new HTTP request object with the given method and URL.
     *
     * @api private
     */
  }, {
    key: "_openRequest",
    value: function(t, i) {
      var s = ys(t, i, this.options);
      return this._req = s, s;
    }
    /**
     * Remove the entry in the URL storage, if it has been saved before.
     *
     * @api private
     */
  }, {
    key: "_removeFromUrlStorage",
    value: function() {
      var t = this;
      this._urlStorageKey && (this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i) {
        t._emitError(i);
      }), this._urlStorageKey = null);
    }
    /**
     * Add the upload URL to the URL storage, if possible.
     *
     * @api private
     */
  }, {
    key: "_saveUploadInUrlStorage",
    value: function() {
      var t = this;
      if (!this.options.storeFingerprintForResuming || !this._fingerprint || this._urlStorageKey !== null)
        return Promise.resolve();
      var i = {
        size: this._size,
        metadata: this.options.metadata,
        creationTime: (/* @__PURE__ */ new Date()).toString()
      };
      return this._parallelUploads ? i.parallelUploadUrls = this._parallelUploadUrls : i.uploadUrl = this.url, this._urlStorage.addUpload(this._fingerprint, i).then(function(s) {
        t._urlStorageKey = s;
      });
    }
    /**
     * Send a request with the provided body.
     *
     * @api private
     */
  }, {
    key: "_sendRequest",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return xs(t, i, this.options);
    }
  }], [{
    key: "terminate",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = ys("DELETE", t, i);
      return xs(s, null, i).then(function(n) {
        if (n.getStatus() !== 204)
          throw new vr("tus: unexpected response while terminating upload", null, s, n);
      }).catch(function(n) {
        if (n instanceof vr || (n = new vr("tus: failed to terminate upload", n, s, null)), !bs(n, 0, i))
          throw n;
        var a = i.retryDelays[0], o = i.retryDelays.slice(1), d = ht(ht({}, i), {}, {
          retryDelays: o
        });
        return new Promise(function(l) {
          return setTimeout(l, a);
        }).then(function() {
          return r.terminate(t, d);
        });
      });
    }
  }]), r;
}();
function vs(r) {
  return Object.entries(r).map(function(e) {
    var t = to(e, 2), i = t[0], s = t[1];
    return "".concat(i, " ").concat(bd.encode(String(s)));
  }).join(",");
}
function pt(r, e) {
  return r >= e && r < e + 100;
}
function ys(r, e, t) {
  var i = t.httpStack.createRequest(r, e);
  i.setHeader("Tus-Resumable", "1.0.0");
  var s = t.headers || {};
  if (Object.entries(s).forEach(function(a) {
    var o = to(a, 2), d = o[0], l = o[1];
    i.setHeader(d, l);
  }), t.addRequestId) {
    var n = Md();
    i.setHeader("X-Request-ID", n);
  }
  return i;
}
function xs(r, e, t) {
  var i = typeof t.onBeforeRequest == "function" ? Promise.resolve(t.onBeforeRequest(r)) : Promise.resolve();
  return i.then(function() {
    return r.send(e).then(function(s) {
      var n = typeof t.onAfterResponse == "function" ? Promise.resolve(t.onAfterResponse(r, s)) : Promise.resolve();
      return n.then(function() {
        return s;
      });
    });
  });
}
function Yd() {
  var r = !0;
  return typeof window < "u" && "navigator" in window && window.navigator.onLine === !1 && (r = !1), r;
}
function bs(r, e, t) {
  if (t.retryDelays == null || e >= t.retryDelays.length || r.originalRequest == null)
    return !1;
  if (t && typeof t.onShouldRetry == "function")
    return t.onShouldRetry(r, e, t);
  var i = r.originalResponse ? r.originalResponse.getStatus() : 0;
  return (!pt(i, 400) || i === 409 || i === 423) && Yd();
}
function _s(r, e) {
  return new Bd(e, r).toString();
}
function Jd(r, e) {
  for (var t = Math.floor(r / e), i = [], s = 0; s < e; s++)
    i.push({
      start: t * s,
      end: t * (s + 1)
    });
  return i[e - 1].end = r, i;
}
Ur.defaultOptions = Xd;
function Qd(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ws(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
  }
}
function Zd(r, e, t) {
  return e && ws(r.prototype, e), t && ws(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
var ec = /* @__PURE__ */ function() {
  function r() {
    Qd(this, r);
  }
  return Zd(r, [{
    key: "listAllUploads",
    value: function() {
      return Promise.resolve([]);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function(t) {
      return Promise.resolve([]);
    }
  }, {
    key: "removeUpload",
    value: function(t) {
      return Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function(t, i) {
      return Promise.resolve(null);
    }
  }]), r;
}();
function tc(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ss(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
  }
}
function rc(r, e, t) {
  return e && Ss(r.prototype, e), t && Ss(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
var Ci = !1;
try {
  Ci = "localStorage" in window;
  var ai = "tusSupport", Ps = localStorage.getItem(ai);
  localStorage.setItem(ai, Ps), Ps === null && localStorage.removeItem(ai);
} catch (r) {
  if (r.code === r.SECURITY_ERR || r.code === r.QUOTA_EXCEEDED_ERR)
    Ci = !1;
  else
    throw r;
}
var ic = Ci, nc = /* @__PURE__ */ function() {
  function r() {
    tc(this, r);
  }
  return rc(r, [{
    key: "findAllUploads",
    value: function() {
      var t = this._findEntries("tus::");
      return Promise.resolve(t);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function(t) {
      var i = this._findEntries("tus::".concat(t, "::"));
      return Promise.resolve(i);
    }
  }, {
    key: "removeUpload",
    value: function(t) {
      return localStorage.removeItem(t), Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function(t, i) {
      var s = Math.round(Math.random() * 1e12), n = "tus::".concat(t, "::").concat(s);
      return localStorage.setItem(n, JSON.stringify(i)), Promise.resolve(n);
    }
  }, {
    key: "_findEntries",
    value: function(t) {
      for (var i = [], s = 0; s < localStorage.length; s++) {
        var n = localStorage.key(s);
        if (n.indexOf(t) === 0)
          try {
            var a = JSON.parse(localStorage.getItem(n));
            a.urlStorageKey = n, i.push(a);
          } catch {
          }
      }
      return i;
    }
  }]), r;
}();
function Gi(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Fs(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
  }
}
function Ki(r, e, t) {
  return e && Fs(r.prototype, e), t && Fs(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
var sc = /* @__PURE__ */ function() {
  function r() {
    Gi(this, r);
  }
  return Ki(r, [{
    key: "createRequest",
    value: function(t, i) {
      return new ac(t, i);
    }
  }, {
    key: "getName",
    value: function() {
      return "XHRHttpStack";
    }
  }]), r;
}(), ac = /* @__PURE__ */ function() {
  function r(e, t) {
    Gi(this, r), this._xhr = new XMLHttpRequest(), this._xhr.open(e, t, !0), this._method = e, this._url = t, this._headers = {};
  }
  return Ki(r, [{
    key: "getMethod",
    value: function() {
      return this._method;
    }
  }, {
    key: "getURL",
    value: function() {
      return this._url;
    }
  }, {
    key: "setHeader",
    value: function(t, i) {
      this._xhr.setRequestHeader(t, i), this._headers[t] = i;
    }
  }, {
    key: "getHeader",
    value: function(t) {
      return this._headers[t];
    }
  }, {
    key: "setProgressHandler",
    value: function(t) {
      "upload" in this._xhr && (this._xhr.upload.onprogress = function(i) {
        i.lengthComputable && t(i.loaded);
      });
    }
  }, {
    key: "send",
    value: function() {
      var t = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return new Promise(function(s, n) {
        t._xhr.onload = function() {
          s(new oc(t._xhr));
        }, t._xhr.onerror = function(a) {
          n(a);
        }, t._xhr.send(i);
      });
    }
  }, {
    key: "abort",
    value: function() {
      return this._xhr.abort(), Promise.resolve();
    }
  }, {
    key: "getUnderlyingObject",
    value: function() {
      return this._xhr;
    }
  }]), r;
}(), oc = /* @__PURE__ */ function() {
  function r(e) {
    Gi(this, r), this._xhr = e;
  }
  return Ki(r, [{
    key: "getStatus",
    value: function() {
      return this._xhr.status;
    }
  }, {
    key: "getHeader",
    value: function(t) {
      return this._xhr.getResponseHeader(t);
    }
  }, {
    key: "getBody",
    value: function() {
      return this._xhr.responseText;
    }
  }, {
    key: "getUnderlyingObject",
    value: function() {
      return this._xhr;
    }
  }]), r;
}(), ro = function() {
  return typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
};
function lc(r) {
  return new Promise(function(e, t) {
    var i = new XMLHttpRequest();
    i.responseType = "blob", i.onload = function() {
      var s = i.response;
      e(s);
    }, i.onerror = function(s) {
      t(s);
    }, i.open("GET", r), i.send();
  });
}
var uc = function() {
  return typeof window < "u" && (typeof window.PhoneGap < "u" || typeof window.Cordova < "u" || typeof window.cordova < "u");
};
function dc(r) {
  return new Promise(function(e, t) {
    var i = new FileReader();
    i.onload = function() {
      var s = new Uint8Array(i.result);
      e({
        value: s
      });
    }, i.onerror = function(s) {
      t(s);
    }, i.readAsArrayBuffer(r);
  });
}
function cc(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Cs(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
  }
}
function hc(r, e, t) {
  return e && Cs(r.prototype, e), t && Cs(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
var ks = /* @__PURE__ */ function() {
  function r(e) {
    cc(this, r), this._file = e, this.size = e.size;
  }
  return hc(r, [{
    key: "slice",
    value: function(t, i) {
      if (uc())
        return dc(this._file.slice(t, i));
      var s = this._file.slice(t, i);
      return Promise.resolve({
        value: s
      });
    }
  }, {
    key: "close",
    value: function() {
    }
  }]), r;
}();
function fc(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function As(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
  }
}
function pc(r, e, t) {
  return e && As(r.prototype, e), t && As(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Es(r) {
  return r === void 0 ? 0 : r.size !== void 0 ? r.size : r.length;
}
function mc(r, e) {
  if (r.concat)
    return r.concat(e);
  if (r instanceof Blob)
    return new Blob([r, e], {
      type: r.type
    });
  if (r.set) {
    var t = new r.constructor(r.length + e.length);
    return t.set(r), t.set(e, r.length), t;
  }
  throw new Error("Unknown data type");
}
var gc = /* @__PURE__ */ function() {
  function r(e) {
    fc(this, r), this._buffer = void 0, this._bufferOffset = 0, this._reader = e, this._done = !1;
  }
  return pc(r, [{
    key: "slice",
    value: function(t, i) {
      return t < this._bufferOffset ? Promise.reject(new Error("Requested data is before the reader's current offset")) : this._readUntilEnoughDataOrDone(t, i);
    }
  }, {
    key: "_readUntilEnoughDataOrDone",
    value: function(t, i) {
      var s = this, n = i <= this._bufferOffset + Es(this._buffer);
      if (this._done || n) {
        var a = this._getDataFromBuffer(t, i), o = a == null ? this._done : !1;
        return Promise.resolve({
          value: a,
          done: o
        });
      }
      return this._reader.read().then(function(d) {
        var l = d.value, u = d.done;
        return u ? s._done = !0 : s._buffer === void 0 ? s._buffer = l : s._buffer = mc(s._buffer, l), s._readUntilEnoughDataOrDone(t, i);
      });
    }
  }, {
    key: "_getDataFromBuffer",
    value: function(t, i) {
      t > this._bufferOffset && (this._buffer = this._buffer.slice(t - this._bufferOffset), this._bufferOffset = t);
      var s = Es(this._buffer) === 0;
      return this._done && s ? null : this._buffer.slice(0, i - t);
    }
  }, {
    key: "close",
    value: function() {
      this._reader.cancel && this._reader.cancel();
    }
  }]), r;
}();
function vc(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Us(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
  }
}
function yc(r, e, t) {
  return e && Us(r.prototype, e), t && Us(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
var xc = /* @__PURE__ */ function() {
  function r() {
    vc(this, r);
  }
  return yc(r, [{
    key: "openFile",
    value: function(t, i) {
      return ro() && t && typeof t.uri < "u" ? lc(t.uri).then(function(s) {
        return new ks(s);
      }).catch(function(s) {
        throw new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(s));
      }) : typeof t.slice == "function" && typeof t.size < "u" ? Promise.resolve(new ks(t)) : typeof t.read == "function" ? (i = Number(i), Number.isFinite(i) ? Promise.resolve(new gc(t, i)) : Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option"))) : Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment"));
    }
  }]), r;
}();
function bc(r, e) {
  return ro() ? Promise.resolve(_c(r, e)) : Promise.resolve(["tus-br", r.name, r.type, r.size, r.lastModified, e.endpoint].join("-"));
}
function _c(r, e) {
  var t = r.exif ? wc(JSON.stringify(r.exif)) : "noexif";
  return ["tus-rn", r.name || "noname", r.size || "nosize", t, e.endpoint].join("/");
}
function wc(r) {
  var e = 0;
  if (r.length === 0)
    return e;
  for (var t = 0; t < r.length; t++) {
    var i = r.charCodeAt(t);
    e = (e << 5) - e + i, e &= e;
  }
  return e;
}
function ki(r) {
  return ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ki(r);
}
function Sc(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ts(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
  }
}
function Pc(r, e, t) {
  return e && Ts(r.prototype, e), t && Ts(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Fc(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Ai(r, e);
}
function Ai(r, e) {
  return Ai = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, s) {
    return i.__proto__ = s, i;
  }, Ai(r, e);
}
function Cc(r) {
  var e = Ec();
  return function() {
    var i = Tr(r), s;
    if (e) {
      var n = Tr(this).constructor;
      s = Reflect.construct(i, arguments, n);
    } else
      s = i.apply(this, arguments);
    return kc(this, s);
  };
}
function kc(r, e) {
  if (e && (ki(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ac(r);
}
function Ac(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ec() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Tr(r) {
  return Tr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Tr(r);
}
function Os(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function gt(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Os(Object(t), !0).forEach(function(i) {
      Uc(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Os(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Uc(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
var Ei = gt(gt({}, Ur.defaultOptions), {}, {
  httpStack: new sc(),
  fileReader: new xc(),
  urlStorage: ic ? new nc() : new ec(),
  fingerprint: bc
}), Tc = /* @__PURE__ */ function(r) {
  Fc(t, r);
  var e = Cc(t);
  function t() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Sc(this, t), s = gt(gt({}, Ei), s), e.call(this, i, s);
  }
  return Pc(t, null, [{
    key: "terminate",
    value: function(s) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return n = gt(gt({}, Ei), n), Ur.terminate(s, n);
    }
  }]), t;
}(Ur);
class io extends Error {
  constructor(e, t) {
    t === void 0 && (t = null), super("This looks like a network error, the endpoint might be blocked by an internet provider or a firewall."), this.cause = e, this.isNetworkError = !0, this.request = t;
  }
}
function Oc() {
  return fetch(...arguments).catch((r) => {
    throw r.name === "AbortError" ? r : new io(r);
  });
}
class Bc extends Error {
  constructor(e, t) {
    t === void 0 && (t = {}), super(e), this.cause = t.cause, this.cause && Wt(this.cause, "isNetworkError") && (this.isNetworkError = this.cause.isNetworkError);
  }
}
class Rc extends Error {
  constructor() {
    super("Authorization required"), this.name = "AuthError", this.isAuthError = !0;
  }
}
let no;
function Ce(r, e) {
  if (!Object.prototype.hasOwnProperty.call(r, e))
    throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var Dc = 0;
function Xi(r) {
  return "__private_" + Dc++ + "_" + r;
}
const Nc = {
  version: "3.1.2"
};
function Ic(r) {
  return r.replace(/\/$/, "");
}
async function $c(r) {
  if (r.status === 401)
    throw new Rc();
  const e = r.json();
  if (r.ok)
    return e;
  let t = `Failed request with status: ${r.status}. ${r.statusText}`;
  try {
    const i = await e;
    t = i.message ? `${t} message: ${i.message}` : t, t = i.requestId ? `${t} request-Id: ${i.requestId}` : t;
  } catch {
  }
  throw new Error(t);
}
const Nt = /* @__PURE__ */ new Map();
var De = /* @__PURE__ */ Xi("companionHeaders"), ot = /* @__PURE__ */ Xi("getUrl"), Ye = /* @__PURE__ */ Xi("request");
no = Symbol.for("uppy test: getCompanionHeaders");
class ir {
  constructor(e, t) {
    Object.defineProperty(this, Ye, {
      value: Lc
    }), Object.defineProperty(this, ot, {
      value: zc
    }), Object.defineProperty(this, De, {
      writable: !0,
      value: void 0
    }), this.uppy = e, this.opts = t, this.onReceiveResponse = this.onReceiveResponse.bind(this), Ce(this, De)[De] = t == null ? void 0 : t.companionHeaders;
  }
  setCompanionHeaders(e) {
    Ce(this, De)[De] = e;
  }
  [no]() {
    return Ce(this, De)[De];
  }
  get hostname() {
    const {
      companion: e
    } = this.uppy.getState(), t = this.opts.companionUrl;
    return Ic(e && e[t] ? e[t] : t);
  }
  async headers() {
    return {
      ...{
        Accept: "application/json",
        "Content-Type": "application/json",
        "Uppy-Versions": `@uppy/companion-client=${ir.VERSION}`
      },
      ...Ce(this, De)[De]
    };
  }
  onReceiveResponse(e) {
    let {
      headers: t
    } = e;
    const s = this.uppy.getState().companion || {}, n = this.opts.companionUrl;
    t.has("i-am") && t.get("i-am") !== s[n] && this.uppy.setState({
      companion: {
        ...s,
        [n]: t.get("i-am")
      }
    });
  }
  /*
    Preflight was added to avoid breaking change between older Companion-client versions and
    newer Companion versions and vice-versa. Usually the break will manifest via CORS errors because a
    version of companion-client could be sending certain headers to a version of Companion server that
    does not support those headers. In which case, the default preflight would lead to CORS.
    So to avoid those errors, we do preflight ourselves, to see what headers the Companion server
    we are communicating with allows. And based on that, companion-client knows what headers to
    send and what headers to not send.
     The preflight only happens once throughout the life-cycle of a certain
    Companion-client <-> Companion-server pair (allowedHeadersCache).
    Subsequent requests use the cached result of the preflight.
    However if there is an error retrieving the allowed headers, we will try again next time
  */
  async preflight(e) {
    const t = Nt.get(this.hostname);
    if (t != null)
      return t;
    const i = ["accept", "content-type", "uppy-auth-token"], s = (async () => {
      try {
        const a = (await fetch(Ce(this, ot)[ot](e), {
          method: "OPTIONS"
        })).headers.get("access-control-allow-headers");
        if (a == null || a === "*")
          return Nt.set(this.hostname, i), i;
        this.uppy.log(`[CompanionClient] adding allowed preflight headers to companion cache: ${this.hostname} ${a}`);
        const o = a.split(",").map((d) => d.trim().toLowerCase());
        return Nt.set(this.hostname, o), o;
      } catch (n) {
        return this.uppy.log(`[CompanionClient] unable to make preflight request ${n}`, "warning"), Nt.delete(this.hostname), i;
      }
    })();
    return Nt.set(this.hostname, s), s;
  }
  async preflightAndHeaders(e) {
    const [t, i] = await Promise.all([this.preflight(e), this.headers()]);
    return Object.fromEntries(Object.entries(i).filter((s) => {
      let [n] = s;
      return t.includes(n.toLowerCase()) ? !0 : (this.uppy.log(`[CompanionClient] excluding disallowed header ${n}`), !1);
    }));
  }
  async get(e, t) {
    return t === void 0 && (t = void 0), typeof t == "boolean" && (t = {
      skipPostResponse: t
    }), Ce(this, Ye)[Ye]({
      ...t,
      path: e
    });
  }
  async post(e, t, i) {
    return i === void 0 && (i = void 0), typeof i == "boolean" && (i = {
      skipPostResponse: i
    }), Ce(this, Ye)[Ye]({
      ...i,
      path: e,
      method: "POST",
      data: t
    });
  }
  async delete(e, t, i) {
    return t === void 0 && (t = void 0), typeof i == "boolean" && (i = {
      skipPostResponse: i
    }), Ce(this, Ye)[Ye]({
      ...i,
      path: e,
      method: "DELETE",
      data: t
    });
  }
}
function zc(r) {
  return /^(https?:|)\/\//.test(r) ? r : `${this.hostname}/${r}`;
}
async function Lc(r) {
  let {
    path: e,
    method: t = "GET",
    data: i,
    skipPostResponse: s,
    signal: n
  } = r;
  try {
    const a = await this.preflightAndHeaders(e), o = await Oc(Ce(this, ot)[ot](e), {
      method: t,
      signal: n,
      headers: a,
      credentials: this.opts.companionCookiesRule || "same-origin",
      body: i ? JSON.stringify(i) : null
    });
    return s || this.onReceiveResponse(o), $c(o);
  } catch (a) {
    throw a != null && a.isAuthError ? a : new Bc(`Could not ${t} ${Ce(this, ot)[ot](e)}`, {
      cause: a
    });
  }
}
ir.VERSION = Nc.version;
function Mc(r, e) {
  return new Promise((t) => {
    localStorage.setItem(r, e), t();
  });
}
function Hc(r) {
  return Promise.resolve(localStorage.getItem(r));
}
function jc(r) {
  return new Promise((e) => {
    localStorage.removeItem(r), e();
  });
}
const qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItem: Hc,
  removeItem: jc,
  setItem: Mc
}, Symbol.toStringTag, { value: "Module" })), Wc = (r) => r.split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
class Vc extends ir {
  constructor(e, t) {
    super(e, t), this.provider = t.provider, this.id = this.provider, this.name = this.opts.name || Wc(this.id), this.pluginId = this.opts.pluginId, this.tokenKey = `companion-${this.pluginId}-auth-token`, this.companionKeysParams = this.opts.companionKeysParams, this.preAuthToken = null;
  }
  async headers() {
    const [e, t] = await Promise.all([super.headers(), this.getAuthToken()]), i = {};
    return t && (i["uppy-auth-token"] = t), this.companionKeysParams && (i["uppy-credentials-params"] = btoa(JSON.stringify({
      params: this.companionKeysParams
    }))), {
      ...e,
      ...i
    };
  }
  onReceiveResponse(e) {
    super.onReceiveResponse(e);
    const t = this.uppy.getPlugin(this.pluginId), s = t.getPluginState().authenticated ? e.status !== 401 : e.status < 400;
    return t.setPluginState({
      authenticated: s
    }), e;
  }
  setAuthToken(e) {
    return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, e);
  }
  getAuthToken() {
    return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
  }
  /**
   * Ensure we have a preauth token if necessary. Attempts to fetch one if we don't,
   * or rejects if loading one fails.
   */
  async ensurePreAuth() {
    if (this.companionKeysParams && !this.preAuthToken && (await this.fetchPreAuthToken(), !this.preAuthToken))
      throw new Error("Could not load authentication data required for third-party login. Please try again later.");
  }
  authUrl(e) {
    e === void 0 && (e = {});
    const t = new URLSearchParams(e);
    return this.preAuthToken && t.set("uppyPreAuthToken", this.preAuthToken), `${this.hostname}/${this.id}/connect?${t}`;
  }
  fileUrl(e) {
    return `${this.hostname}/${this.id}/get/${e}`;
  }
  async fetchPreAuthToken() {
    if (this.companionKeysParams)
      try {
        const e = await this.post(`${this.id}/preauth/`, {
          params: this.companionKeysParams
        });
        this.preAuthToken = e.token;
      } catch (e) {
        this.uppy.log(`[CompanionClient] unable to fetch preAuthToken ${e}`, "warning");
      }
  }
  list(e) {
    return this.get(`${this.id}/list/${e || ""}`);
  }
  logout() {
    return this.get(`${this.id}/logout`).then((e) => Promise.all([e, this.uppy.getPlugin(this.pluginId).storage.removeItem(this.tokenKey)])).then((e) => {
      let [t] = e;
      return t;
    });
  }
  static initPlugin(e, t, i) {
    if (e.type = "acquirer", e.files = [], i && (e.opts = {
      ...i,
      ...t
    }), t.serverUrl || t.serverPattern)
      throw new Error("`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`");
    if (t.companionAllowedHosts) {
      const s = t.companionAllowedHosts;
      if (typeof s != "string" && !Array.isArray(s) && !(s instanceof RegExp))
        throw new TypeError(`${e.id}: the option "companionAllowedHosts" must be one of string, Array, RegExp`);
      e.opts.companionAllowedHosts = s;
    } else
      /^(?!https?:\/\/).*$/i.test(t.companionUrl) ? e.opts.companionAllowedHosts = `https://${t.companionUrl.replace(/^\/\//, "")}` : e.opts.companionAllowedHosts = new URL(t.companionUrl).origin;
    e.storage = e.opts.storage || qc;
  }
}
let so, ao;
function X(r, e) {
  if (!Object.prototype.hasOwnProperty.call(r, e))
    throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var Gc = 0;
function nr(r) {
  return "__private_" + Gc++ + "_" + r;
}
var Ne = /* @__PURE__ */ nr("queued"), Je = /* @__PURE__ */ nr("emitter"), be = /* @__PURE__ */ nr("isOpen"), Z = /* @__PURE__ */ nr("socket"), oi = /* @__PURE__ */ nr("handleMessage");
so = Symbol.for("uppy test: getSocket");
ao = Symbol.for("uppy test: getQueued");
class Kc {
  constructor(e) {
    Object.defineProperty(this, Ne, {
      writable: !0,
      value: []
    }), Object.defineProperty(this, Je, {
      writable: !0,
      value: Ns()
    }), Object.defineProperty(this, be, {
      writable: !0,
      value: !1
    }), Object.defineProperty(this, Z, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, oi, {
      writable: !0,
      value: (t) => {
        try {
          const i = JSON.parse(t.data);
          this.emit(i.action, i.payload);
        } catch (i) {
          console.log(i);
        }
      }
    }), this.opts = e, (!e || e.autoOpen !== !1) && this.open();
  }
  get isOpen() {
    return X(this, be)[be];
  }
  [so]() {
    return X(this, Z)[Z];
  }
  [ao]() {
    return X(this, Ne)[Ne];
  }
  open() {
    X(this, Z)[Z] == null && (X(this, Z)[Z] = new WebSocket(this.opts.target), X(this, Z)[Z].onopen = () => {
      for (X(this, be)[be] = !0; X(this, Ne)[Ne].length > 0 && X(this, be)[be]; ) {
        const e = X(this, Ne)[Ne].shift();
        this.send(e.action, e.payload);
      }
    }, X(this, Z)[Z].onclose = () => {
      X(this, be)[be] = !1, X(this, Z)[Z] = null;
    }, X(this, Z)[Z].onmessage = X(this, oi)[oi]);
  }
  close() {
    var e;
    (e = X(this, Z)[Z]) == null || e.close();
  }
  send(e, t) {
    if (!X(this, be)[be]) {
      X(this, Ne)[Ne].push({
        action: e,
        payload: t
      });
      return;
    }
    X(this, Z)[Z].send(JSON.stringify({
      action: e,
      payload: t
    }));
  }
  on(e, t) {
    X(this, Je)[Je].on(e, t);
  }
  emit(e, t) {
    X(this, Je)[Je].emit(e, t);
  }
  once(e, t) {
    X(this, Je)[Je].once(e, t);
  }
}
function Xc(r, e, t) {
  const {
    progress: i,
    bytesUploaded: s,
    bytesTotal: n
  } = e;
  i && (r.uppy.log(`Upload progress: ${i}`), r.uppy.emit("upload-progress", t, {
    uploader: r,
    bytesUploaded: s,
    bytesTotal: n
  }));
}
const Yc = Bi(Xc, 300, {
  leading: !0,
  trailing: !0
});
function Jc(r) {
  const t = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(r)[1];
  return `${/^http:\/\//i.test(r) ? "ws" : "wss"}://${t}`;
}
function Qc(r) {
  const e = [], t = [];
  function i(a) {
    e.push(a);
  }
  function s(a) {
    t.push(a);
  }
  return Promise.all(r.map((a) => a.then(i, s))).then(() => ({
    successful: e,
    failed: t
  }));
}
function It(r, e) {
  if (!Object.prototype.hasOwnProperty.call(r, e))
    throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var Zc = 0;
function oo(r) {
  return "__private_" + Zc++ + "_" + r;
}
var Qe = /* @__PURE__ */ oo("emitter"), $t = /* @__PURE__ */ oo("events");
class Bs {
  constructor(e) {
    Object.defineProperty(this, Qe, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, $t, {
      writable: !0,
      value: []
    }), It(this, Qe)[Qe] = e;
  }
  on(e, t) {
    return It(this, $t)[$t].push([e, t]), It(this, Qe)[Qe].on(e, t);
  }
  remove() {
    for (const [e, t] of It(this, $t)[$t].splice(0))
      It(this, Qe)[Qe].off(e, t);
  }
}
function eh(r) {
  return r ? r.readyState !== 0 && r.readyState !== 4 || r.status === 0 : !1;
}
function I(r, e) {
  if (!Object.prototype.hasOwnProperty.call(r, e))
    throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var th = 0;
function ue(r) {
  return "__private_" + th++ + "_" + r;
}
function rh(r) {
  return new Error("Cancelled", {
    cause: r
  });
}
function ih(r) {
  if (r != null) {
    const e = () => this.abort(r.reason);
    r.addEventListener("abort", e, {
      once: !0
    });
    const t = () => {
      r.removeEventListener("abort", e);
    };
    this.then(t, t);
  }
  return this;
}
var fe = /* @__PURE__ */ ue("activeRequests"), oe = /* @__PURE__ */ ue("queuedHandlers"), he = /* @__PURE__ */ ue("paused"), Ze = /* @__PURE__ */ ue("pauseTimer"), se = /* @__PURE__ */ ue("downLimit"), et = /* @__PURE__ */ ue("upperLimit"), Ie = /* @__PURE__ */ ue("rateLimitingTimer"), Xt = /* @__PURE__ */ ue("call"), ze = /* @__PURE__ */ ue("queueNext"), Ui = /* @__PURE__ */ ue("next"), li = /* @__PURE__ */ ue("queue"), Ti = /* @__PURE__ */ ue("dequeue"), ui = /* @__PURE__ */ ue("resume"), tt = /* @__PURE__ */ ue("increaseLimit");
class nh {
  constructor(e) {
    Object.defineProperty(this, Ti, {
      value: uh
    }), Object.defineProperty(this, li, {
      value: lh
    }), Object.defineProperty(this, Ui, {
      value: oh
    }), Object.defineProperty(this, ze, {
      value: ah
    }), Object.defineProperty(this, Xt, {
      value: sh
    }), Object.defineProperty(this, fe, {
      writable: !0,
      value: 0
    }), Object.defineProperty(this, oe, {
      writable: !0,
      value: []
    }), Object.defineProperty(this, he, {
      writable: !0,
      value: !1
    }), Object.defineProperty(this, Ze, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, se, {
      writable: !0,
      value: 1
    }), Object.defineProperty(this, et, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Ie, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, ui, {
      writable: !0,
      value: () => this.resume()
    }), Object.defineProperty(this, tt, {
      writable: !0,
      value: () => {
        if (I(this, he)[he]) {
          I(this, Ie)[Ie] = setTimeout(I(this, tt)[tt], 0);
          return;
        }
        I(this, se)[se] = this.limit, this.limit = Math.ceil((I(this, et)[et] + I(this, se)[se]) / 2);
        for (let t = I(this, se)[se]; t <= this.limit; t++)
          I(this, ze)[ze]();
        I(this, et)[et] - I(this, se)[se] > 3 ? I(this, Ie)[Ie] = setTimeout(I(this, tt)[tt], 2e3) : I(this, se)[se] = Math.floor(I(this, se)[se] / 2);
      }
    }), typeof e != "number" || e === 0 ? this.limit = 1 / 0 : this.limit = e;
  }
  run(e, t) {
    return !I(this, he)[he] && I(this, fe)[fe] < this.limit ? I(this, Xt)[Xt](e) : I(this, li)[li](e, t);
  }
  wrapPromiseFunction(e, t) {
    var i = this;
    return function() {
      for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
        n[a] = arguments[a];
      let o;
      const d = new Promise((l, u) => {
        o = i.run(() => {
          let c, h;
          try {
            h = Promise.resolve(e(...n));
          } catch (p) {
            h = Promise.reject(p);
          }
          return h.then((p) => {
            c ? u(c) : (o.done(), l(p));
          }, (p) => {
            c ? u(c) : (o.done(), u(p));
          }), (p) => {
            c = rh(p);
          };
        }, t);
      });
      return d.abort = (l) => {
        o.abort(l);
      }, d.abortOn = ih, d;
    };
  }
  resume() {
    I(this, he)[he] = !1, clearTimeout(I(this, Ze)[Ze]);
    for (let e = 0; e < this.limit; e++)
      I(this, ze)[ze]();
  }
  /**
   * Freezes the queue for a while or indefinitely.
   *
   * @param {number | null } [duration] Duration for the pause to happen, in milliseconds.
   *                                    If omitted, the queue won't resume automatically.
   */
  pause(e) {
    e === void 0 && (e = null), I(this, he)[he] = !0, clearTimeout(I(this, Ze)[Ze]), e != null && (I(this, Ze)[Ze] = setTimeout(I(this, ui)[ui], e));
  }
  /**
   * Pauses the queue for a duration, and lower the limit of concurrent requests
   * when the queue resumes. When the queue resumes, it tries to progressively
   * increase the limit in `this.#increaseLimit` until another call is made to
   * `this.rateLimit`.
   * Call this function when using the RateLimitedQueue for network requests and
   * the remote server responds with 429 HTTP code.
   *
   * @param {number} duration in milliseconds.
   */
  rateLimit(e) {
    clearTimeout(I(this, Ie)[Ie]), this.pause(e), this.limit > 1 && Number.isFinite(this.limit) && (I(this, et)[et] = this.limit - 1, this.limit = I(this, se)[se], I(this, Ie)[Ie] = setTimeout(I(this, tt)[tt], e));
  }
  get isPaused() {
    return I(this, he)[he];
  }
}
function sh(r) {
  I(this, fe)[fe] += 1;
  let e = !1, t;
  try {
    t = r();
  } catch (i) {
    throw I(this, fe)[fe] -= 1, i;
  }
  return {
    abort: (i) => {
      e || (e = !0, I(this, fe)[fe] -= 1, t(i), I(this, ze)[ze]());
    },
    done: () => {
      e || (e = !0, I(this, fe)[fe] -= 1, I(this, ze)[ze]());
    }
  };
}
function ah() {
  queueMicrotask(() => I(this, Ui)[Ui]());
}
function oh() {
  if (I(this, he)[he] || I(this, fe)[fe] >= this.limit || I(this, oe)[oe].length === 0)
    return;
  const r = I(this, oe)[oe].shift(), e = I(this, Xt)[Xt](r.fn);
  r.abort = e.abort, r.done = e.done;
}
function lh(r, e) {
  e === void 0 && (e = {});
  const t = {
    fn: r,
    priority: e.priority || 0,
    abort: () => {
      I(this, Ti)[Ti](t);
    },
    done: () => {
      throw new Error("Cannot mark a queued request as done: this indicates a bug");
    }
  }, i = I(this, oe)[oe].findIndex((s) => t.priority > s.priority);
  return i === -1 ? I(this, oe)[oe].push(t) : I(this, oe)[oe].splice(i, 0, t), t;
}
function uh(r) {
  const e = I(this, oe)[oe].indexOf(r);
  e !== -1 && I(this, oe)[oe].splice(e, 1);
}
function dh() {
  return typeof window < "u" && (typeof window.PhoneGap < "u" || typeof window.Cordova < "u" || typeof window.cordova < "u");
}
function ch() {
  return typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
}
function hh(r) {
  return (e, t) => {
    if (dh() || ch())
      return Ei.fingerprint(e, t);
    const i = ["tus", r.id, t.endpoint].join("-");
    return Promise.resolve(i);
  };
}
function zt(r, e) {
  if (!Object.prototype.hasOwnProperty.call(r, e))
    throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var fh = 0;
function Yi(r) {
  return "__private_" + fh++ + "_" + r;
}
const ph = {
  version: "3.0.6"
}, Rs = {
  endpoint: "",
  uploadUrl: null,
  metadata: {},
  uploadSize: null,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  overridePatchMethod: !1,
  headers: {},
  addRequestId: !1,
  chunkSize: 1 / 0,
  retryDelays: [100, 1e3, 3e3, 5e3],
  parallelUploads: 1,
  removeFingerprintOnSuccess: !1,
  uploadLengthDeferred: !1,
  uploadDataDuringCreation: !1
};
var Lt = /* @__PURE__ */ Yi("retryDelayIterator"), Mt = /* @__PURE__ */ Yi("queueRequestSocketToken"), di = /* @__PURE__ */ Yi("requestSocketToken");
class lo extends Di {
  /**
   * @param {Uppy} uppy
   * @param {TusOptions} opts
   */
  constructor(e, t) {
    var i, s;
    super(e, t), Object.defineProperty(this, Lt, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Mt, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, di, {
      writable: !0,
      value: async (a) => {
        const o = a.remote.providerOptions.provider ? Vc : ir, d = new o(this.uppy, a.remote.providerOptions), l = {
          ...this.opts
        };
        return a.tus && Object.assign(l, a.tus), (await d.post(a.remote.url, {
          ...a.remote.body,
          endpoint: l.endpoint,
          uploadUrl: l.uploadUrl,
          protocol: "tus",
          size: a.data.size,
          headers: l.headers,
          metadata: a.meta
        })).token;
      }
    }), this.type = "uploader", this.id = this.opts.id || "Tus", this.title = "Tus";
    const n = {
      useFastRemoteRetry: !0,
      limit: 20,
      retryDelays: Rs.retryDelays,
      withCredentials: !1
    };
    if (this.opts = {
      ...n,
      ...t
    }, (t == null ? void 0 : t.allowedMetaFields) === void 0 && "metaFields" in this.opts)
      throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.");
    if ("autoRetry" in t)
      throw new Error("The `autoRetry` option was deprecated and has been removed.");
    this.requests = (i = this.opts.rateLimitedQueue) != null ? i : new nh(this.opts.limit), zt(this, Lt)[Lt] = (s = this.opts.retryDelays) == null ? void 0 : s.values(), this.uploaders = /* @__PURE__ */ Object.create(null), this.uploaderEvents = /* @__PURE__ */ Object.create(null), this.uploaderSockets = /* @__PURE__ */ Object.create(null), this.handleResetProgress = this.handleResetProgress.bind(this), this.handleUpload = this.handleUpload.bind(this), zt(this, Mt)[Mt] = this.requests.wrapPromiseFunction(zt(this, di)[di], {
      priority: -1
    });
  }
  handleResetProgress() {
    const e = {
      ...this.uppy.getState().files
    };
    Object.keys(e).forEach((t) => {
      if (e[t].tus && e[t].tus.uploadUrl) {
        const i = {
          ...e[t].tus
        };
        delete i.uploadUrl, e[t] = {
          ...e[t],
          tus: i
        };
      }
    }), this.uppy.setState({
      files: e
    });
  }
  /**
   * Clean up all references for a file's upload: the tus.Upload instance,
   * any events related to the file, and the Companion WebSocket connection.
   *
   * @param {string} fileID
   */
  resetUploaderReferences(e, t) {
    if (t === void 0 && (t = {}), this.uploaders[e]) {
      const i = this.uploaders[e];
      i.abort(), t.abort && i.abort(!0), this.uploaders[e] = null;
    }
    this.uploaderEvents[e] && (this.uploaderEvents[e].remove(), this.uploaderEvents[e] = null), this.uploaderSockets[e] && (this.uploaderSockets[e].close(), this.uploaderSockets[e] = null);
  }
  /**
   * Create a new Tus upload.
   *
   * A lot can happen during an upload, so this is quite hard to follow!
   * - First, the upload is started. If the file was already paused by the time the upload starts, nothing should happen.
   *   If the `limit` option is used, the upload must be queued onto the `this.requests` queue.
   *   When an upload starts, we store the tus.Upload instance, and an EventTracker instance that manages the event listeners
   *   for pausing, cancellation, removal, etc.
   * - While the upload is in progress, it may be paused or cancelled.
   *   Pausing aborts the underlying tus.Upload, and removes the upload from the `this.requests` queue. All other state is
   *   maintained.
   *   Cancelling removes the upload from the `this.requests` queue, and completely aborts the upload-- the `tus.Upload`
   *   instance is aborted and discarded, the EventTracker instance is destroyed (removing all listeners).
   *   Resuming the upload uses the `this.requests` queue as well, to prevent selectively pausing and resuming uploads from
   *   bypassing the limit.
   * - After completing an upload, the tus.Upload and EventTracker instances are cleaned up, and the upload is marked as done
   *   in the `this.requests` queue.
   * - When an upload completed with an error, the same happens as on successful completion, but the `upload()` promise is
   *   rejected.
   *
   * When working on this function, keep in mind:
   *  - When an upload is completed or cancelled for any reason, the tus.Upload and EventTracker instances need to be cleaned
   *    up using this.resetUploaderReferences().
   *  - When an upload is cancelled or paused, for any reason, it needs to be removed from the `this.requests` queue using
   *    `queuedRequest.abort()`.
   *  - When an upload is completed for any reason, including errors, it needs to be marked as such using
   *    `queuedRequest.done()`.
   *  - When an upload is started or resumed, it needs to go through the `this.requests` queue. The `queuedRequest` variable
   *    must be updated so the other uses of it are valid.
   *  - Before replacing the `queuedRequest` variable, the previous `queuedRequest` must be aborted, else it will keep taking
   *    up a spot in the queue.
   *
   * @param {UppyFile} file for use with upload
   * @returns {Promise<void>}
   */
  upload(e) {
    var t = this;
    return this.resetUploaderReferences(e.id), new Promise((i, s) => {
      let n, a, o;
      this.uppy.emit("upload-started", e);
      const d = {
        ...this.opts,
        ...e.tus || {}
      };
      typeof d.headers == "function" && (d.headers = d.headers(e));
      const l = {
        ...Rs,
        ...d
      };
      l.fingerprint = hh(e), l.onBeforeRequest = (f) => {
        const v = f.getUnderlyingObject();
        v.withCredentials = !!d.withCredentials;
        let y;
        if (typeof d.onBeforeRequest == "function" && (y = d.onBeforeRequest(f, e)), Wt(n, "shouldBeRequeued")) {
          if (!n.shouldBeRequeued)
            return Promise.reject();
          let _;
          const g = new Promise((x) => {
            _ = x;
          });
          return n = this.requests.run(() => (e.isPaused && n.abort(), _(), () => {
          })), Promise.all([g, y]);
        }
        return y;
      }, l.onError = (f) => {
        var v;
        this.uppy.log(f);
        const y = f.originalRequest ? f.originalRequest.getUnderlyingObject() : null;
        eh(y) && (f = new io(f, y)), this.resetUploaderReferences(e.id), (v = n) == null || v.abort(), this.uppy.emit("upload-error", e, f), s(f);
      }, l.onProgress = (f, v) => {
        this.onReceiveUploadUrl(e, o.url), this.uppy.emit("upload-progress", e, {
          uploader: this,
          bytesUploaded: f,
          bytesTotal: v
        });
      }, l.onSuccess = () => {
        const f = {
          uploadURL: o.url
        };
        this.resetUploaderReferences(e.id), n.done(), this.uppy.emit("upload-success", e, f), o.url && this.uppy.log(`Download ${o.file.name} from ${o.url}`), i(o);
      };
      const u = (f) => {
        var v;
        const y = f == null || (v = f.originalResponse) == null ? void 0 : v.getStatus();
        if (y === 429) {
          if (!this.requests.isPaused) {
            var _;
            const g = (_ = zt(this, Lt)[Lt]) == null ? void 0 : _.next();
            if (g == null || g.done)
              return !1;
            this.requests.rateLimit(g.value);
          }
        } else {
          if (y > 400 && y < 500 && y !== 409)
            return !1;
          typeof navigator < "u" && navigator.onLine === !1 && (this.requests.isPaused || (this.requests.pause(), window.addEventListener("online", () => {
            this.requests.resume();
          }, {
            once: !0
          })));
        }
        return n.abort(), n = {
          shouldBeRequeued: !0,
          abort() {
            this.shouldBeRequeued = !1;
          },
          done() {
            throw new Error("Cannot mark a queued request as done: this indicates a bug");
          },
          fn() {
            throw new Error("Cannot run a queued request: this indicates a bug");
          }
        }, !0;
      };
      d.onShouldRetry != null ? l.onShouldRetry = function() {
        for (var f = arguments.length, v = new Array(f), y = 0; y < f; y++)
          v[y] = arguments[y];
        return d.onShouldRetry(...v, u);
      } : l.onShouldRetry = u;
      const c = (f, v, y) => {
        Wt(f, v) && !Wt(f, y) && (f[y] = f[v]);
      }, h = {};
      (Array.isArray(d.allowedMetaFields) ? d.allowedMetaFields : Object.keys(e.meta)).forEach((f) => {
        h[f] = e.meta[f];
      }), c(h, "type", "filetype"), c(h, "name", "filename"), l.metadata = h, o = new Tc(e.data, l), this.uploaders[e.id] = o, this.uploaderEvents[e.id] = new Bs(this.uppy), a = () => (e.isPaused || o.start(), () => {
      }), o.findPreviousUploads().then((f) => {
        const v = f[0];
        v && (this.uppy.log(`[Tus] Resuming upload of ${e.id} started at ${v.creationTime}`), o.resumeFromPreviousUpload(v));
      }), n = this.requests.run(a), this.onFileRemove(e.id, (f) => {
        n.abort(), this.resetUploaderReferences(e.id, {
          abort: !!o.url
        }), i(`upload ${f} was removed`);
      }), this.onPause(e.id, (f) => {
        n.abort(), f ? o.abort() : n = this.requests.run(a);
      }), this.onPauseAll(e.id, () => {
        n.abort(), o.abort();
      }), this.onCancelAll(e.id, function(f) {
        let {
          reason: v
        } = f === void 0 ? {} : f;
        v === "user" && (n.abort(), t.resetUploaderReferences(e.id, {
          abort: !!o.url
        })), i(`upload ${e.id} was canceled`);
      }), this.onResumeAll(e.id, () => {
        n.abort(), e.error && o.abort(), n = this.requests.run(a);
      });
    }).catch((i) => {
      throw this.uppy.emit("upload-error", e, i), i;
    });
  }
  // NOTE! Keep this duplicated code in sync with other plugins
  // TODO we should probably abstract this into a common function
  /**
   * @param {UppyFile} file for use with upload
   * @returns {Promise<void>}
   */
  async uploadRemote(e) {
    this.resetUploaderReferences(e.id), (!e.progress.uploadStarted || !e.isRestored) && this.uppy.emit("upload-started", e);
    try {
      if (e.serverToken)
        return await this.connectToServerSocket(e);
      const t = await zt(this, Mt)[Mt](e);
      return this.uppy.getState().files[e.id] ? (this.uppy.setFileState(e.id, {
        serverToken: t
      }), await this.connectToServerSocket(this.uppy.getFile(e.id))) : void 0;
    } catch (t) {
      throw this.uppy.setFileState(e.id, {
        serverToken: void 0
      }), this.uppy.emit("upload-error", e, t), t;
    }
  }
  /**
   * See the comment on the upload() method.
   *
   * Additionally, when an upload is removed, completed, or cancelled, we need to close the WebSocket connection. This is
   * handled by the resetUploaderReferences() function, so the same guidelines apply as in upload().
   *
   * @param {UppyFile} file
   */
  async connectToServerSocket(e) {
    var t = this;
    return new Promise((i, s) => {
      const n = e.serverToken, a = Jc(e.remote.companionUrl), o = new Kc({
        target: `${a}/api/${n}`,
        autoOpen: !1
      });
      this.uploaderSockets[e.id] = o, this.uploaderEvents[e.id] = new Bs(this.uppy);
      let d;
      this.onFileRemove(e.id, () => {
        d.abort(), o.send("cancel", {}), this.resetUploaderReferences(e.id), i(`upload ${e.id} was removed`);
      }), this.onPause(e.id, (l) => {
        l ? (d.abort(), o.send("pause", {})) : (d.abort(), d = this.requests.run(() => (o.open(), o.send("resume", {}), () => o.close())));
      }), this.onPauseAll(e.id, () => {
        d.abort(), o.send("pause", {});
      }), this.onCancelAll(e.id, function(l) {
        let {
          reason: u
        } = l === void 0 ? {} : l;
        u === "user" && (d.abort(), o.send("cancel", {}), t.resetUploaderReferences(e.id)), i(`upload ${e.id} was canceled`);
      }), this.onResumeAll(e.id, () => {
        d.abort(), e.error && o.send("pause", {}), d = this.requests.run(() => (o.open(), o.send("resume", {}), () => o.close()));
      }), this.onRetry(e.id, () => {
        o.isOpen && (o.send("pause", {}), o.send("resume", {}));
      }), this.onRetryAll(e.id, () => {
        o.isOpen && (o.send("pause", {}), o.send("resume", {}));
      }), o.on("progress", (l) => Yc(this, l, e)), o.on("error", (l) => {
        const {
          message: u
        } = l.error, c = Object.assign(new Error(u), {
          cause: l.error
        });
        this.opts.useFastRemoteRetry ? o.close() : (this.resetUploaderReferences(e.id), this.uppy.setFileState(e.id, {
          serverToken: null
        })), this.uppy.emit("upload-error", e, c), d.done(), s(c);
      }), o.on("success", (l) => {
        const u = {
          uploadURL: l.url
        };
        this.uppy.emit("upload-success", e, u), this.resetUploaderReferences(e.id), d.done(), i();
      }), d = this.requests.run(() => (e.isPaused ? o.send("pause", {}) : o.open(), () => o.close()));
    });
  }
  /**
   * Store the uploadUrl on the file options, so that when Golden Retriever
   * restores state, we will continue uploading to the correct URL.
   *
   * @param {UppyFile} file
   * @param {string} uploadURL
   */
  onReceiveUploadUrl(e, t) {
    const i = this.uppy.getFile(e.id);
    i && (!i.tus || i.tus.uploadUrl !== t) && (this.uppy.log("[Tus] Storing upload url"), this.uppy.setFileState(i.id, {
      tus: {
        ...i.tus,
        uploadUrl: t
      }
    }));
  }
  /**
   * @param {string} fileID
   * @param {function(string): void} cb
   */
  onFileRemove(e, t) {
    this.uploaderEvents[e].on("file-removed", (i) => {
      e === i.id && t(i.id);
    });
  }
  /**
   * @param {string} fileID
   * @param {function(boolean): void} cb
   */
  onPause(e, t) {
    this.uploaderEvents[e].on("upload-pause", (i, s) => {
      e === i && t(s);
    });
  }
  /**
   * @param {string} fileID
   * @param {function(): void} cb
   */
  onRetry(e, t) {
    this.uploaderEvents[e].on("upload-retry", (i) => {
      e === i && t();
    });
  }
  /**
   * @param {string} fileID
   * @param {function(): void} cb
   */
  onRetryAll(e, t) {
    this.uploaderEvents[e].on("retry-all", () => {
      this.uppy.getFile(e) && t();
    });
  }
  /**
   * @param {string} fileID
   * @param {function(): void} cb
   */
  onPauseAll(e, t) {
    this.uploaderEvents[e].on("pause-all", () => {
      this.uppy.getFile(e) && t();
    });
  }
  /**
   * @param {string} fileID
   * @param {function(): void} eventHandler
   */
  onCancelAll(e, t) {
    var i = this;
    this.uploaderEvents[e].on("cancel-all", function() {
      i.uppy.getFile(e) && t(...arguments);
    });
  }
  /**
   * @param {string} fileID
   * @param {function(): void} cb
   */
  onResumeAll(e, t) {
    this.uploaderEvents[e].on("resume-all", () => {
      this.uppy.getFile(e) && t();
    });
  }
  /**
   * @param {(UppyFile | FailedUppyFile)[]} files
   */
  uploadFiles(e) {
    const t = e.map((i, s) => {
      const n = s + 1, a = e.length;
      return "error" in i && i.error ? Promise.reject(new Error(i.error)) : i.isRemote ? ((!i.progress.uploadStarted || !i.isRestored) && this.uppy.emit("upload-started", i), this.uploadRemote(i, n, a)) : ((!i.progress.uploadStarted || !i.isRestored) && this.uppy.emit("upload-started", i), this.upload(i, n, a));
    });
    return Qc(t);
  }
  /**
   * @param {string[]} fileIDs
   */
  handleUpload(e) {
    if (e.length === 0)
      return this.uppy.log("[Tus] No files to upload"), Promise.resolve();
    this.opts.limit === 0 && this.uppy.log("[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0", "warning"), this.uppy.log("[Tus] Uploading...");
    const t = e.map((i) => this.uppy.getFile(i));
    return this.uploadFiles(t).then(() => null);
  }
  install() {
    this.uppy.setState({
      capabilities: {
        ...this.uppy.getState().capabilities,
        resumableUploads: !0
      }
    }), this.uppy.addUploader(this.handleUpload), this.uppy.on("reset-progress", this.handleResetProgress);
  }
  uninstall() {
    this.uppy.setState({
      capabilities: {
        ...this.uppy.getState().capabilities,
        resumableUploads: !1
      }
    }), this.uppy.removeUploader(this.handleUpload);
  }
}
lo.VERSION = ph.version;
function mh(r) {
  throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Or = {}, gh = {
  get exports() {
    return Or;
  },
  set exports(r) {
    Or = r;
  }
};
const vh = {}, yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vh
}, Symbol.toStringTag, { value: "Module" })), xh = /* @__PURE__ */ Eo(yh);
(function(r, e) {
  (function(t, i) {
    r.exports = i();
  })(le, function() {
    var t = t || function(i, s) {
      var n;
      if (typeof window < "u" && window.crypto && (n = window.crypto), typeof self < "u" && self.crypto && (n = self.crypto), typeof globalThis < "u" && globalThis.crypto && (n = globalThis.crypto), !n && typeof window < "u" && window.msCrypto && (n = window.msCrypto), !n && typeof le < "u" && le.crypto && (n = le.crypto), !n && typeof mh == "function")
        try {
          n = xh;
        } catch {
        }
      var a = function() {
        if (n) {
          if (typeof n.getRandomValues == "function")
            try {
              return n.getRandomValues(new Uint32Array(1))[0];
            } catch {
            }
          if (typeof n.randomBytes == "function")
            try {
              return n.randomBytes(4).readInt32LE();
            } catch {
            }
        }
        throw new Error("Native crypto module could not be used to get secure random number.");
      }, o = Object.create || function() {
        function g() {
        }
        return function(x) {
          var b;
          return g.prototype = x, b = new g(), g.prototype = null, b;
        };
      }(), d = {}, l = d.lib = {}, u = l.Base = function() {
        return {
          /**
           * Creates a new object that inherits from this object.
           *
           * @param {Object} overrides Properties to copy into the new object.
           *
           * @return {Object} The new object.
           *
           * @static
           *
           * @example
           *
           *     var MyType = CryptoJS.lib.Base.extend({
           *         field: 'value',
           *
           *         method: function () {
           *         }
           *     });
           */
          extend: function(g) {
            var x = o(this);
            return g && x.mixIn(g), (!x.hasOwnProperty("init") || this.init === x.init) && (x.init = function() {
              x.$super.init.apply(this, arguments);
            }), x.init.prototype = x, x.$super = this, x;
          },
          /**
           * Extends this object and runs the init method.
           * Arguments to create() will be passed to init().
           *
           * @return {Object} The new object.
           *
           * @static
           *
           * @example
           *
           *     var instance = MyType.create();
           */
          create: function() {
            var g = this.extend();
            return g.init.apply(g, arguments), g;
          },
          /**
           * Initializes a newly created object.
           * Override this method to add some logic when your objects are created.
           *
           * @example
           *
           *     var MyType = CryptoJS.lib.Base.extend({
           *         init: function () {
           *             // ...
           *         }
           *     });
           */
          init: function() {
          },
          /**
           * Copies properties into this object.
           *
           * @param {Object} properties The properties to mix in.
           *
           * @example
           *
           *     MyType.mixIn({
           *         field: 'value'
           *     });
           */
          mixIn: function(g) {
            for (var x in g)
              g.hasOwnProperty(x) && (this[x] = g[x]);
            g.hasOwnProperty("toString") && (this.toString = g.toString);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = instance.clone();
           */
          clone: function() {
            return this.init.prototype.extend(this);
          }
        };
      }(), c = l.WordArray = u.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of 32-bit words.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.create();
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
         */
        init: function(g, x) {
          g = this.words = g || [], x != s ? this.sigBytes = x : this.sigBytes = g.length * 4;
        },
        /**
         * Converts this word array to a string.
         *
         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {string} The stringified word array.
         *
         * @example
         *
         *     var string = wordArray + '';
         *     var string = wordArray.toString();
         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
         */
        toString: function(g) {
          return (g || p).stringify(this);
        },
        /**
         * Concatenates a word array to this word array.
         *
         * @param {WordArray} wordArray The word array to append.
         *
         * @return {WordArray} This word array.
         *
         * @example
         *
         *     wordArray1.concat(wordArray2);
         */
        concat: function(g) {
          var x = this.words, b = g.words, C = this.sigBytes, w = g.sigBytes;
          if (this.clamp(), C % 4)
            for (var F = 0; F < w; F++) {
              var P = b[F >>> 2] >>> 24 - F % 4 * 8 & 255;
              x[C + F >>> 2] |= P << 24 - (C + F) % 4 * 8;
            }
          else
            for (var A = 0; A < w; A += 4)
              x[C + A >>> 2] = b[A >>> 2];
          return this.sigBytes += w, this;
        },
        /**
         * Removes insignificant bits.
         *
         * @example
         *
         *     wordArray.clamp();
         */
        clamp: function() {
          var g = this.words, x = this.sigBytes;
          g[x >>> 2] &= 4294967295 << 32 - x % 4 * 8, g.length = i.ceil(x / 4);
        },
        /**
         * Creates a copy of this word array.
         *
         * @return {WordArray} The clone.
         *
         * @example
         *
         *     var clone = wordArray.clone();
         */
        clone: function() {
          var g = u.clone.call(this);
          return g.words = this.words.slice(0), g;
        },
        /**
         * Creates a word array filled with random bytes.
         *
         * @param {number} nBytes The number of random bytes to generate.
         *
         * @return {WordArray} The random word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.random(16);
         */
        random: function(g) {
          for (var x = [], b = 0; b < g; b += 4)
            x.push(a());
          return new c.init(x, g);
        }
      }), h = d.enc = {}, p = h.Hex = {
        /**
         * Converts a word array to a hex string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The hex string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
         */
        stringify: function(g) {
          for (var x = g.words, b = g.sigBytes, C = [], w = 0; w < b; w++) {
            var F = x[w >>> 2] >>> 24 - w % 4 * 8 & 255;
            C.push((F >>> 4).toString(16)), C.push((F & 15).toString(16));
          }
          return C.join("");
        },
        /**
         * Converts a hex string to a word array.
         *
         * @param {string} hexStr The hex string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
         */
        parse: function(g) {
          for (var x = g.length, b = [], C = 0; C < x; C += 2)
            b[C >>> 3] |= parseInt(g.substr(C, 2), 16) << 24 - C % 8 * 4;
          return new c.init(b, x / 2);
        }
      }, f = h.Latin1 = {
        /**
         * Converts a word array to a Latin1 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Latin1 string.
         *
         * @static
         *
         * @example
         *
         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
         */
        stringify: function(g) {
          for (var x = g.words, b = g.sigBytes, C = [], w = 0; w < b; w++) {
            var F = x[w >>> 2] >>> 24 - w % 4 * 8 & 255;
            C.push(String.fromCharCode(F));
          }
          return C.join("");
        },
        /**
         * Converts a Latin1 string to a word array.
         *
         * @param {string} latin1Str The Latin1 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
         */
        parse: function(g) {
          for (var x = g.length, b = [], C = 0; C < x; C++)
            b[C >>> 2] |= (g.charCodeAt(C) & 255) << 24 - C % 4 * 8;
          return new c.init(b, x);
        }
      }, v = h.Utf8 = {
        /**
         * Converts a word array to a UTF-8 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-8 string.
         *
         * @static
         *
         * @example
         *
         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
         */
        stringify: function(g) {
          try {
            return decodeURIComponent(escape(f.stringify(g)));
          } catch {
            throw new Error("Malformed UTF-8 data");
          }
        },
        /**
         * Converts a UTF-8 string to a word array.
         *
         * @param {string} utf8Str The UTF-8 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
         */
        parse: function(g) {
          return f.parse(unescape(encodeURIComponent(g)));
        }
      }, y = l.BufferedBlockAlgorithm = u.extend({
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *
         *     bufferedBlockAlgorithm.reset();
         */
        reset: function() {
          this._data = new c.init(), this._nDataBytes = 0;
        },
        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         */
        _append: function(g) {
          typeof g == "string" && (g = v.parse(g)), this._data.concat(g), this._nDataBytes += g.sigBytes;
        },
        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {WordArray} The processed data.
         *
         * @example
         *
         *     var processedData = bufferedBlockAlgorithm._process();
         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
         */
        _process: function(g) {
          var x, b = this._data, C = b.words, w = b.sigBytes, F = this.blockSize, P = F * 4, A = w / P;
          g ? A = i.ceil(A) : A = i.max((A | 0) - this._minBufferSize, 0);
          var S = A * F, k = i.min(S * 4, w);
          if (S) {
            for (var U = 0; U < S; U += F)
              this._doProcessBlock(C, U);
            x = C.splice(0, S), b.sigBytes -= k;
          }
          return new c.init(x, k);
        },
        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = bufferedBlockAlgorithm.clone();
         */
        clone: function() {
          var g = u.clone.call(this);
          return g._data = this._data.clone(), g;
        },
        _minBufferSize: 0
      });
      l.Hasher = y.extend({
        /**
         * Configuration options.
         */
        cfg: u.extend(),
        /**
         * Initializes a newly created hasher.
         *
         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
         *
         * @example
         *
         *     var hasher = CryptoJS.algo.SHA256.create();
         */
        init: function(g) {
          this.cfg = this.cfg.extend(g), this.reset();
        },
        /**
         * Resets this hasher to its initial state.
         *
         * @example
         *
         *     hasher.reset();
         */
        reset: function() {
          y.reset.call(this), this._doReset();
        },
        /**
         * Updates this hasher with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {Hasher} This hasher.
         *
         * @example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         */
        update: function(g) {
          return this._append(g), this._process(), this;
        },
        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The hash.
         *
         * @example
         *
         *     var hash = hasher.finalize();
         *     var hash = hasher.finalize('message');
         *     var hash = hasher.finalize(wordArray);
         */
        finalize: function(g) {
          g && this._append(g);
          var x = this._doFinalize();
          return x;
        },
        blockSize: 16,
        /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * @param {Hasher} hasher The hasher to create a helper for.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
         */
        _createHelper: function(g) {
          return function(x, b) {
            return new g.init(b).finalize(x);
          };
        },
        /**
         * Creates a shortcut function to the HMAC's object interface.
         *
         * @param {Hasher} hasher The hasher to use in this HMAC helper.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
         */
        _createHmacHelper: function(g) {
          return function(x, b) {
            return new _.HMAC.init(g, b).finalize(x);
          };
        }
      });
      var _ = d.algo = {};
      return d;
    }(Math);
    (function(i) {
      var s = t, n = s.lib, a = n.Base, o = n.WordArray, d = s.x64 = {};
      d.Word = a.extend({
        /**
         * Initializes a newly created 64-bit word.
         *
         * @param {number} high The high 32 bits.
         * @param {number} low The low 32 bits.
         *
         * @example
         *
         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
         */
        init: function(l, u) {
          this.high = l, this.low = u;
        }
        /**
         * Bitwise NOTs this word.
         *
         * @return {X64Word} A new x64-Word object after negating.
         *
         * @example
         *
         *     var negated = x64Word.not();
         */
        // not: function () {
        // var high = ~this.high;
        // var low = ~this.low;
        // return X64Word.create(high, low);
        // },
        /**
         * Bitwise ANDs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to AND with this word.
         *
         * @return {X64Word} A new x64-Word object after ANDing.
         *
         * @example
         *
         *     var anded = x64Word.and(anotherX64Word);
         */
        // and: function (word) {
        // var high = this.high & word.high;
        // var low = this.low & word.low;
        // return X64Word.create(high, low);
        // },
        /**
         * Bitwise ORs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to OR with this word.
         *
         * @return {X64Word} A new x64-Word object after ORing.
         *
         * @example
         *
         *     var ored = x64Word.or(anotherX64Word);
         */
        // or: function (word) {
        // var high = this.high | word.high;
        // var low = this.low | word.low;
        // return X64Word.create(high, low);
        // },
        /**
         * Bitwise XORs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to XOR with this word.
         *
         * @return {X64Word} A new x64-Word object after XORing.
         *
         * @example
         *
         *     var xored = x64Word.xor(anotherX64Word);
         */
        // xor: function (word) {
        // var high = this.high ^ word.high;
        // var low = this.low ^ word.low;
        // return X64Word.create(high, low);
        // },
        /**
         * Shifts this word n bits to the left.
         *
         * @param {number} n The number of bits to shift.
         *
         * @return {X64Word} A new x64-Word object after shifting.
         *
         * @example
         *
         *     var shifted = x64Word.shiftL(25);
         */
        // shiftL: function (n) {
        // if (n < 32) {
        // var high = (this.high << n) | (this.low >>> (32 - n));
        // var low = this.low << n;
        // } else {
        // var high = this.low << (n - 32);
        // var low = 0;
        // }
        // return X64Word.create(high, low);
        // },
        /**
         * Shifts this word n bits to the right.
         *
         * @param {number} n The number of bits to shift.
         *
         * @return {X64Word} A new x64-Word object after shifting.
         *
         * @example
         *
         *     var shifted = x64Word.shiftR(7);
         */
        // shiftR: function (n) {
        // if (n < 32) {
        // var low = (this.low >>> n) | (this.high << (32 - n));
        // var high = this.high >>> n;
        // } else {
        // var low = this.high >>> (n - 32);
        // var high = 0;
        // }
        // return X64Word.create(high, low);
        // },
        /**
         * Rotates this word n bits to the left.
         *
         * @param {number} n The number of bits to rotate.
         *
         * @return {X64Word} A new x64-Word object after rotating.
         *
         * @example
         *
         *     var rotated = x64Word.rotL(25);
         */
        // rotL: function (n) {
        // return this.shiftL(n).or(this.shiftR(64 - n));
        // },
        /**
         * Rotates this word n bits to the right.
         *
         * @param {number} n The number of bits to rotate.
         *
         * @return {X64Word} A new x64-Word object after rotating.
         *
         * @example
         *
         *     var rotated = x64Word.rotR(7);
         */
        // rotR: function (n) {
        // return this.shiftR(n).or(this.shiftL(64 - n));
        // },
        /**
         * Adds this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to add with this word.
         *
         * @return {X64Word} A new x64-Word object after adding.
         *
         * @example
         *
         *     var added = x64Word.add(anotherX64Word);
         */
        // add: function (word) {
        // var low = (this.low + word.low) | 0;
        // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
        // var high = (this.high + word.high + carry) | 0;
        // return X64Word.create(high, low);
        // }
      }), d.WordArray = a.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.x64.WordArray.create();
         *
         *     var wordArray = CryptoJS.x64.WordArray.create([
         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
         *     ]);
         *
         *     var wordArray = CryptoJS.x64.WordArray.create([
         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
         *     ], 10);
         */
        init: function(l, u) {
          l = this.words = l || [], u != i ? this.sigBytes = u : this.sigBytes = l.length * 8;
        },
        /**
         * Converts this 64-bit word array to a 32-bit word array.
         *
         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
         *
         * @example
         *
         *     var x32WordArray = x64WordArray.toX32();
         */
        toX32: function() {
          for (var l = this.words, u = l.length, c = [], h = 0; h < u; h++) {
            var p = l[h];
            c.push(p.high), c.push(p.low);
          }
          return o.create(c, this.sigBytes);
        },
        /**
         * Creates a copy of this word array.
         *
         * @return {X64WordArray} The clone.
         *
         * @example
         *
         *     var clone = x64WordArray.clone();
         */
        clone: function() {
          for (var l = a.clone.call(this), u = l.words = this.words.slice(0), c = u.length, h = 0; h < c; h++)
            u[h] = u[h].clone();
          return l;
        }
      });
    })(), function() {
      if (typeof ArrayBuffer == "function") {
        var i = t, s = i.lib, n = s.WordArray, a = n.init, o = n.init = function(d) {
          if (d instanceof ArrayBuffer && (d = new Uint8Array(d)), (d instanceof Int8Array || typeof Uint8ClampedArray < "u" && d instanceof Uint8ClampedArray || d instanceof Int16Array || d instanceof Uint16Array || d instanceof Int32Array || d instanceof Uint32Array || d instanceof Float32Array || d instanceof Float64Array) && (d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength)), d instanceof Uint8Array) {
            for (var l = d.byteLength, u = [], c = 0; c < l; c++)
              u[c >>> 2] |= d[c] << 24 - c % 4 * 8;
            a.call(this, u, l);
          } else
            a.apply(this, arguments);
        };
        o.prototype = n;
      }
    }(), function() {
      var i = t, s = i.lib, n = s.WordArray, a = i.enc;
      a.Utf16 = a.Utf16BE = {
        /**
         * Converts a word array to a UTF-16 BE string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-16 BE string.
         *
         * @static
         *
         * @example
         *
         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
         */
        stringify: function(d) {
          for (var l = d.words, u = d.sigBytes, c = [], h = 0; h < u; h += 2) {
            var p = l[h >>> 2] >>> 16 - h % 4 * 8 & 65535;
            c.push(String.fromCharCode(p));
          }
          return c.join("");
        },
        /**
         * Converts a UTF-16 BE string to a word array.
         *
         * @param {string} utf16Str The UTF-16 BE string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
         */
        parse: function(d) {
          for (var l = d.length, u = [], c = 0; c < l; c++)
            u[c >>> 1] |= d.charCodeAt(c) << 16 - c % 2 * 16;
          return n.create(u, l * 2);
        }
      }, a.Utf16LE = {
        /**
         * Converts a word array to a UTF-16 LE string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-16 LE string.
         *
         * @static
         *
         * @example
         *
         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
         */
        stringify: function(d) {
          for (var l = d.words, u = d.sigBytes, c = [], h = 0; h < u; h += 2) {
            var p = o(l[h >>> 2] >>> 16 - h % 4 * 8 & 65535);
            c.push(String.fromCharCode(p));
          }
          return c.join("");
        },
        /**
         * Converts a UTF-16 LE string to a word array.
         *
         * @param {string} utf16Str The UTF-16 LE string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
         */
        parse: function(d) {
          for (var l = d.length, u = [], c = 0; c < l; c++)
            u[c >>> 1] |= o(d.charCodeAt(c) << 16 - c % 2 * 16);
          return n.create(u, l * 2);
        }
      };
      function o(d) {
        return d << 8 & 4278255360 | d >>> 8 & 16711935;
      }
    }(), function() {
      var i = t, s = i.lib, n = s.WordArray, a = i.enc;
      a.Base64 = {
        /**
         * Converts a word array to a Base64 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Base64 string.
         *
         * @static
         *
         * @example
         *
         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
         */
        stringify: function(d) {
          var l = d.words, u = d.sigBytes, c = this._map;
          d.clamp();
          for (var h = [], p = 0; p < u; p += 3)
            for (var f = l[p >>> 2] >>> 24 - p % 4 * 8 & 255, v = l[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, y = l[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, _ = f << 16 | v << 8 | y, g = 0; g < 4 && p + g * 0.75 < u; g++)
              h.push(c.charAt(_ >>> 6 * (3 - g) & 63));
          var x = c.charAt(64);
          if (x)
            for (; h.length % 4; )
              h.push(x);
          return h.join("");
        },
        /**
         * Converts a Base64 string to a word array.
         *
         * @param {string} base64Str The Base64 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
         */
        parse: function(d) {
          var l = d.length, u = this._map, c = this._reverseMap;
          if (!c) {
            c = this._reverseMap = [];
            for (var h = 0; h < u.length; h++)
              c[u.charCodeAt(h)] = h;
          }
          var p = u.charAt(64);
          if (p) {
            var f = d.indexOf(p);
            f !== -1 && (l = f);
          }
          return o(d, l, c);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
      function o(d, l, u) {
        for (var c = [], h = 0, p = 0; p < l; p++)
          if (p % 4) {
            var f = u[d.charCodeAt(p - 1)] << p % 4 * 2, v = u[d.charCodeAt(p)] >>> 6 - p % 4 * 2, y = f | v;
            c[h >>> 2] |= y << 24 - h % 4 * 8, h++;
          }
        return n.create(c, h);
      }
    }(), function() {
      var i = t, s = i.lib, n = s.WordArray, a = i.enc;
      a.Base64url = {
        /**
         * Converts a word array to a Base64url string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @param {boolean} urlSafe Whether to use url safe
         *
         * @return {string} The Base64url string.
         *
         * @static
         *
         * @example
         *
         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
         */
        stringify: function(d, l = !0) {
          var u = d.words, c = d.sigBytes, h = l ? this._safe_map : this._map;
          d.clamp();
          for (var p = [], f = 0; f < c; f += 3)
            for (var v = u[f >>> 2] >>> 24 - f % 4 * 8 & 255, y = u[f + 1 >>> 2] >>> 24 - (f + 1) % 4 * 8 & 255, _ = u[f + 2 >>> 2] >>> 24 - (f + 2) % 4 * 8 & 255, g = v << 16 | y << 8 | _, x = 0; x < 4 && f + x * 0.75 < c; x++)
              p.push(h.charAt(g >>> 6 * (3 - x) & 63));
          var b = h.charAt(64);
          if (b)
            for (; p.length % 4; )
              p.push(b);
          return p.join("");
        },
        /**
         * Converts a Base64url string to a word array.
         *
         * @param {string} base64Str The Base64url string.
         *
         * @param {boolean} urlSafe Whether to use url safe
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
         */
        parse: function(d, l = !0) {
          var u = d.length, c = l ? this._safe_map : this._map, h = this._reverseMap;
          if (!h) {
            h = this._reverseMap = [];
            for (var p = 0; p < c.length; p++)
              h[c.charCodeAt(p)] = p;
          }
          var f = c.charAt(64);
          if (f) {
            var v = d.indexOf(f);
            v !== -1 && (u = v);
          }
          return o(d, u, h);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
      };
      function o(d, l, u) {
        for (var c = [], h = 0, p = 0; p < l; p++)
          if (p % 4) {
            var f = u[d.charCodeAt(p - 1)] << p % 4 * 2, v = u[d.charCodeAt(p)] >>> 6 - p % 4 * 2, y = f | v;
            c[h >>> 2] |= y << 24 - h % 4 * 8, h++;
          }
        return n.create(c, h);
      }
    }(), function(i) {
      var s = t, n = s.lib, a = n.WordArray, o = n.Hasher, d = s.algo, l = [];
      (function() {
        for (var v = 0; v < 64; v++)
          l[v] = i.abs(i.sin(v + 1)) * 4294967296 | 0;
      })();
      var u = d.MD5 = o.extend({
        _doReset: function() {
          this._hash = new a.init([
            1732584193,
            4023233417,
            2562383102,
            271733878
          ]);
        },
        _doProcessBlock: function(v, y) {
          for (var _ = 0; _ < 16; _++) {
            var g = y + _, x = v[g];
            v[g] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360;
          }
          var b = this._hash.words, C = v[y + 0], w = v[y + 1], F = v[y + 2], P = v[y + 3], A = v[y + 4], S = v[y + 5], k = v[y + 6], U = v[y + 7], O = v[y + 8], N = v[y + 9], $ = v[y + 10], L = v[y + 11], V = v[y + 12], H = v[y + 13], j = v[y + 14], q = v[y + 15], E = b[0], B = b[1], R = b[2], T = b[3];
          E = c(E, B, R, T, C, 7, l[0]), T = c(T, E, B, R, w, 12, l[1]), R = c(R, T, E, B, F, 17, l[2]), B = c(B, R, T, E, P, 22, l[3]), E = c(E, B, R, T, A, 7, l[4]), T = c(T, E, B, R, S, 12, l[5]), R = c(R, T, E, B, k, 17, l[6]), B = c(B, R, T, E, U, 22, l[7]), E = c(E, B, R, T, O, 7, l[8]), T = c(T, E, B, R, N, 12, l[9]), R = c(R, T, E, B, $, 17, l[10]), B = c(B, R, T, E, L, 22, l[11]), E = c(E, B, R, T, V, 7, l[12]), T = c(T, E, B, R, H, 12, l[13]), R = c(R, T, E, B, j, 17, l[14]), B = c(B, R, T, E, q, 22, l[15]), E = h(E, B, R, T, w, 5, l[16]), T = h(T, E, B, R, k, 9, l[17]), R = h(R, T, E, B, L, 14, l[18]), B = h(B, R, T, E, C, 20, l[19]), E = h(E, B, R, T, S, 5, l[20]), T = h(T, E, B, R, $, 9, l[21]), R = h(R, T, E, B, q, 14, l[22]), B = h(B, R, T, E, A, 20, l[23]), E = h(E, B, R, T, N, 5, l[24]), T = h(T, E, B, R, j, 9, l[25]), R = h(R, T, E, B, P, 14, l[26]), B = h(B, R, T, E, O, 20, l[27]), E = h(E, B, R, T, H, 5, l[28]), T = h(T, E, B, R, F, 9, l[29]), R = h(R, T, E, B, U, 14, l[30]), B = h(B, R, T, E, V, 20, l[31]), E = p(E, B, R, T, S, 4, l[32]), T = p(T, E, B, R, O, 11, l[33]), R = p(R, T, E, B, L, 16, l[34]), B = p(B, R, T, E, j, 23, l[35]), E = p(E, B, R, T, w, 4, l[36]), T = p(T, E, B, R, A, 11, l[37]), R = p(R, T, E, B, U, 16, l[38]), B = p(B, R, T, E, $, 23, l[39]), E = p(E, B, R, T, H, 4, l[40]), T = p(T, E, B, R, C, 11, l[41]), R = p(R, T, E, B, P, 16, l[42]), B = p(B, R, T, E, k, 23, l[43]), E = p(E, B, R, T, N, 4, l[44]), T = p(T, E, B, R, V, 11, l[45]), R = p(R, T, E, B, q, 16, l[46]), B = p(B, R, T, E, F, 23, l[47]), E = f(E, B, R, T, C, 6, l[48]), T = f(T, E, B, R, U, 10, l[49]), R = f(R, T, E, B, j, 15, l[50]), B = f(B, R, T, E, S, 21, l[51]), E = f(E, B, R, T, V, 6, l[52]), T = f(T, E, B, R, P, 10, l[53]), R = f(R, T, E, B, $, 15, l[54]), B = f(B, R, T, E, w, 21, l[55]), E = f(E, B, R, T, O, 6, l[56]), T = f(T, E, B, R, q, 10, l[57]), R = f(R, T, E, B, k, 15, l[58]), B = f(B, R, T, E, H, 21, l[59]), E = f(E, B, R, T, A, 6, l[60]), T = f(T, E, B, R, L, 10, l[61]), R = f(R, T, E, B, F, 15, l[62]), B = f(B, R, T, E, N, 21, l[63]), b[0] = b[0] + E | 0, b[1] = b[1] + B | 0, b[2] = b[2] + R | 0, b[3] = b[3] + T | 0;
        },
        _doFinalize: function() {
          var v = this._data, y = v.words, _ = this._nDataBytes * 8, g = v.sigBytes * 8;
          y[g >>> 5] |= 128 << 24 - g % 32;
          var x = i.floor(_ / 4294967296), b = _;
          y[(g + 64 >>> 9 << 4) + 15] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, y[(g + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, v.sigBytes = (y.length + 1) * 4, this._process();
          for (var C = this._hash, w = C.words, F = 0; F < 4; F++) {
            var P = w[F];
            w[F] = (P << 8 | P >>> 24) & 16711935 | (P << 24 | P >>> 8) & 4278255360;
          }
          return C;
        },
        clone: function() {
          var v = o.clone.call(this);
          return v._hash = this._hash.clone(), v;
        }
      });
      function c(v, y, _, g, x, b, C) {
        var w = v + (y & _ | ~y & g) + x + C;
        return (w << b | w >>> 32 - b) + y;
      }
      function h(v, y, _, g, x, b, C) {
        var w = v + (y & g | _ & ~g) + x + C;
        return (w << b | w >>> 32 - b) + y;
      }
      function p(v, y, _, g, x, b, C) {
        var w = v + (y ^ _ ^ g) + x + C;
        return (w << b | w >>> 32 - b) + y;
      }
      function f(v, y, _, g, x, b, C) {
        var w = v + (_ ^ (y | ~g)) + x + C;
        return (w << b | w >>> 32 - b) + y;
      }
      s.MD5 = o._createHelper(u), s.HmacMD5 = o._createHmacHelper(u);
    }(Math), function() {
      var i = t, s = i.lib, n = s.WordArray, a = s.Hasher, o = i.algo, d = [], l = o.SHA1 = a.extend({
        _doReset: function() {
          this._hash = new n.init([
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
          ]);
        },
        _doProcessBlock: function(u, c) {
          for (var h = this._hash.words, p = h[0], f = h[1], v = h[2], y = h[3], _ = h[4], g = 0; g < 80; g++) {
            if (g < 16)
              d[g] = u[c + g] | 0;
            else {
              var x = d[g - 3] ^ d[g - 8] ^ d[g - 14] ^ d[g - 16];
              d[g] = x << 1 | x >>> 31;
            }
            var b = (p << 5 | p >>> 27) + _ + d[g];
            g < 20 ? b += (f & v | ~f & y) + 1518500249 : g < 40 ? b += (f ^ v ^ y) + 1859775393 : g < 60 ? b += (f & v | f & y | v & y) - 1894007588 : b += (f ^ v ^ y) - 899497514, _ = y, y = v, v = f << 30 | f >>> 2, f = p, p = b;
          }
          h[0] = h[0] + p | 0, h[1] = h[1] + f | 0, h[2] = h[2] + v | 0, h[3] = h[3] + y | 0, h[4] = h[4] + _ | 0;
        },
        _doFinalize: function() {
          var u = this._data, c = u.words, h = this._nDataBytes * 8, p = u.sigBytes * 8;
          return c[p >>> 5] |= 128 << 24 - p % 32, c[(p + 64 >>> 9 << 4) + 14] = Math.floor(h / 4294967296), c[(p + 64 >>> 9 << 4) + 15] = h, u.sigBytes = c.length * 4, this._process(), this._hash;
        },
        clone: function() {
          var u = a.clone.call(this);
          return u._hash = this._hash.clone(), u;
        }
      });
      i.SHA1 = a._createHelper(l), i.HmacSHA1 = a._createHmacHelper(l);
    }(), function(i) {
      var s = t, n = s.lib, a = n.WordArray, o = n.Hasher, d = s.algo, l = [], u = [];
      (function() {
        function p(_) {
          for (var g = i.sqrt(_), x = 2; x <= g; x++)
            if (!(_ % x))
              return !1;
          return !0;
        }
        function f(_) {
          return (_ - (_ | 0)) * 4294967296 | 0;
        }
        for (var v = 2, y = 0; y < 64; )
          p(v) && (y < 8 && (l[y] = f(i.pow(v, 1 / 2))), u[y] = f(i.pow(v, 1 / 3)), y++), v++;
      })();
      var c = [], h = d.SHA256 = o.extend({
        _doReset: function() {
          this._hash = new a.init(l.slice(0));
        },
        _doProcessBlock: function(p, f) {
          for (var v = this._hash.words, y = v[0], _ = v[1], g = v[2], x = v[3], b = v[4], C = v[5], w = v[6], F = v[7], P = 0; P < 64; P++) {
            if (P < 16)
              c[P] = p[f + P] | 0;
            else {
              var A = c[P - 15], S = (A << 25 | A >>> 7) ^ (A << 14 | A >>> 18) ^ A >>> 3, k = c[P - 2], U = (k << 15 | k >>> 17) ^ (k << 13 | k >>> 19) ^ k >>> 10;
              c[P] = S + c[P - 7] + U + c[P - 16];
            }
            var O = b & C ^ ~b & w, N = y & _ ^ y & g ^ _ & g, $ = (y << 30 | y >>> 2) ^ (y << 19 | y >>> 13) ^ (y << 10 | y >>> 22), L = (b << 26 | b >>> 6) ^ (b << 21 | b >>> 11) ^ (b << 7 | b >>> 25), V = F + L + O + u[P] + c[P], H = $ + N;
            F = w, w = C, C = b, b = x + V | 0, x = g, g = _, _ = y, y = V + H | 0;
          }
          v[0] = v[0] + y | 0, v[1] = v[1] + _ | 0, v[2] = v[2] + g | 0, v[3] = v[3] + x | 0, v[4] = v[4] + b | 0, v[5] = v[5] + C | 0, v[6] = v[6] + w | 0, v[7] = v[7] + F | 0;
        },
        _doFinalize: function() {
          var p = this._data, f = p.words, v = this._nDataBytes * 8, y = p.sigBytes * 8;
          return f[y >>> 5] |= 128 << 24 - y % 32, f[(y + 64 >>> 9 << 4) + 14] = i.floor(v / 4294967296), f[(y + 64 >>> 9 << 4) + 15] = v, p.sigBytes = f.length * 4, this._process(), this._hash;
        },
        clone: function() {
          var p = o.clone.call(this);
          return p._hash = this._hash.clone(), p;
        }
      });
      s.SHA256 = o._createHelper(h), s.HmacSHA256 = o._createHmacHelper(h);
    }(Math), function() {
      var i = t, s = i.lib, n = s.WordArray, a = i.algo, o = a.SHA256, d = a.SHA224 = o.extend({
        _doReset: function() {
          this._hash = new n.init([
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428
          ]);
        },
        _doFinalize: function() {
          var l = o._doFinalize.call(this);
          return l.sigBytes -= 4, l;
        }
      });
      i.SHA224 = o._createHelper(d), i.HmacSHA224 = o._createHmacHelper(d);
    }(), function() {
      var i = t, s = i.lib, n = s.Hasher, a = i.x64, o = a.Word, d = a.WordArray, l = i.algo;
      function u() {
        return o.create.apply(o, arguments);
      }
      var c = [
        u(1116352408, 3609767458),
        u(1899447441, 602891725),
        u(3049323471, 3964484399),
        u(3921009573, 2173295548),
        u(961987163, 4081628472),
        u(1508970993, 3053834265),
        u(2453635748, 2937671579),
        u(2870763221, 3664609560),
        u(3624381080, 2734883394),
        u(310598401, 1164996542),
        u(607225278, 1323610764),
        u(1426881987, 3590304994),
        u(1925078388, 4068182383),
        u(2162078206, 991336113),
        u(2614888103, 633803317),
        u(3248222580, 3479774868),
        u(3835390401, 2666613458),
        u(4022224774, 944711139),
        u(264347078, 2341262773),
        u(604807628, 2007800933),
        u(770255983, 1495990901),
        u(1249150122, 1856431235),
        u(1555081692, 3175218132),
        u(1996064986, 2198950837),
        u(2554220882, 3999719339),
        u(2821834349, 766784016),
        u(2952996808, 2566594879),
        u(3210313671, 3203337956),
        u(3336571891, 1034457026),
        u(3584528711, 2466948901),
        u(113926993, 3758326383),
        u(338241895, 168717936),
        u(666307205, 1188179964),
        u(773529912, 1546045734),
        u(1294757372, 1522805485),
        u(1396182291, 2643833823),
        u(1695183700, 2343527390),
        u(1986661051, 1014477480),
        u(2177026350, 1206759142),
        u(2456956037, 344077627),
        u(2730485921, 1290863460),
        u(2820302411, 3158454273),
        u(3259730800, 3505952657),
        u(3345764771, 106217008),
        u(3516065817, 3606008344),
        u(3600352804, 1432725776),
        u(4094571909, 1467031594),
        u(275423344, 851169720),
        u(430227734, 3100823752),
        u(506948616, 1363258195),
        u(659060556, 3750685593),
        u(883997877, 3785050280),
        u(958139571, 3318307427),
        u(1322822218, 3812723403),
        u(1537002063, 2003034995),
        u(1747873779, 3602036899),
        u(1955562222, 1575990012),
        u(2024104815, 1125592928),
        u(2227730452, 2716904306),
        u(2361852424, 442776044),
        u(2428436474, 593698344),
        u(2756734187, 3733110249),
        u(3204031479, 2999351573),
        u(3329325298, 3815920427),
        u(3391569614, 3928383900),
        u(3515267271, 566280711),
        u(3940187606, 3454069534),
        u(4118630271, 4000239992),
        u(116418474, 1914138554),
        u(174292421, 2731055270),
        u(289380356, 3203993006),
        u(460393269, 320620315),
        u(685471733, 587496836),
        u(852142971, 1086792851),
        u(1017036298, 365543100),
        u(1126000580, 2618297676),
        u(1288033470, 3409855158),
        u(1501505948, 4234509866),
        u(1607167915, 987167468),
        u(1816402316, 1246189591)
      ], h = [];
      (function() {
        for (var f = 0; f < 80; f++)
          h[f] = u();
      })();
      var p = l.SHA512 = n.extend({
        _doReset: function() {
          this._hash = new d.init([
            new o.init(1779033703, 4089235720),
            new o.init(3144134277, 2227873595),
            new o.init(1013904242, 4271175723),
            new o.init(2773480762, 1595750129),
            new o.init(1359893119, 2917565137),
            new o.init(2600822924, 725511199),
            new o.init(528734635, 4215389547),
            new o.init(1541459225, 327033209)
          ]);
        },
        _doProcessBlock: function(f, v) {
          for (var y = this._hash.words, _ = y[0], g = y[1], x = y[2], b = y[3], C = y[4], w = y[5], F = y[6], P = y[7], A = _.high, S = _.low, k = g.high, U = g.low, O = x.high, N = x.low, $ = b.high, L = b.low, V = C.high, H = C.low, j = w.high, q = w.low, E = F.high, B = F.low, R = P.high, T = P.low, K = A, G = S, J = k, M = U, bt = O, lt = N, Dr = $, _t = L, ye = V, de = H, sr = j, wt = q, ar = E, St = B, Nr = R, Pt = T, xe = 0; xe < 80; xe++) {
            var ge, Me, or = h[xe];
            if (xe < 16)
              Me = or.high = f[v + xe * 2] | 0, ge = or.low = f[v + xe * 2 + 1] | 0;
            else {
              var Ji = h[xe - 15], ut = Ji.high, Ft = Ji.low, uo = (ut >>> 1 | Ft << 31) ^ (ut >>> 8 | Ft << 24) ^ ut >>> 7, Qi = (Ft >>> 1 | ut << 31) ^ (Ft >>> 8 | ut << 24) ^ (Ft >>> 7 | ut << 25), Zi = h[xe - 2], dt = Zi.high, Ct = Zi.low, co = (dt >>> 19 | Ct << 13) ^ (dt << 3 | Ct >>> 29) ^ dt >>> 6, en = (Ct >>> 19 | dt << 13) ^ (Ct << 3 | dt >>> 29) ^ (Ct >>> 6 | dt << 26), tn = h[xe - 7], ho = tn.high, fo = tn.low, rn = h[xe - 16], po = rn.high, nn = rn.low;
              ge = Qi + fo, Me = uo + ho + (ge >>> 0 < Qi >>> 0 ? 1 : 0), ge = ge + en, Me = Me + co + (ge >>> 0 < en >>> 0 ? 1 : 0), ge = ge + nn, Me = Me + po + (ge >>> 0 < nn >>> 0 ? 1 : 0), or.high = Me, or.low = ge;
            }
            var mo = ye & sr ^ ~ye & ar, sn = de & wt ^ ~de & St, go = K & J ^ K & bt ^ J & bt, vo = G & M ^ G & lt ^ M & lt, yo = (K >>> 28 | G << 4) ^ (K << 30 | G >>> 2) ^ (K << 25 | G >>> 7), an = (G >>> 28 | K << 4) ^ (G << 30 | K >>> 2) ^ (G << 25 | K >>> 7), xo = (ye >>> 14 | de << 18) ^ (ye >>> 18 | de << 14) ^ (ye << 23 | de >>> 9), bo = (de >>> 14 | ye << 18) ^ (de >>> 18 | ye << 14) ^ (de << 23 | ye >>> 9), on = c[xe], _o = on.high, ln = on.low, ce = Pt + bo, He = Nr + xo + (ce >>> 0 < Pt >>> 0 ? 1 : 0), ce = ce + sn, He = He + mo + (ce >>> 0 < sn >>> 0 ? 1 : 0), ce = ce + ln, He = He + _o + (ce >>> 0 < ln >>> 0 ? 1 : 0), ce = ce + ge, He = He + Me + (ce >>> 0 < ge >>> 0 ? 1 : 0), un = an + vo, wo = yo + go + (un >>> 0 < an >>> 0 ? 1 : 0);
            Nr = ar, Pt = St, ar = sr, St = wt, sr = ye, wt = de, de = _t + ce | 0, ye = Dr + He + (de >>> 0 < _t >>> 0 ? 1 : 0) | 0, Dr = bt, _t = lt, bt = J, lt = M, J = K, M = G, G = ce + un | 0, K = He + wo + (G >>> 0 < ce >>> 0 ? 1 : 0) | 0;
          }
          S = _.low = S + G, _.high = A + K + (S >>> 0 < G >>> 0 ? 1 : 0), U = g.low = U + M, g.high = k + J + (U >>> 0 < M >>> 0 ? 1 : 0), N = x.low = N + lt, x.high = O + bt + (N >>> 0 < lt >>> 0 ? 1 : 0), L = b.low = L + _t, b.high = $ + Dr + (L >>> 0 < _t >>> 0 ? 1 : 0), H = C.low = H + de, C.high = V + ye + (H >>> 0 < de >>> 0 ? 1 : 0), q = w.low = q + wt, w.high = j + sr + (q >>> 0 < wt >>> 0 ? 1 : 0), B = F.low = B + St, F.high = E + ar + (B >>> 0 < St >>> 0 ? 1 : 0), T = P.low = T + Pt, P.high = R + Nr + (T >>> 0 < Pt >>> 0 ? 1 : 0);
        },
        _doFinalize: function() {
          var f = this._data, v = f.words, y = this._nDataBytes * 8, _ = f.sigBytes * 8;
          v[_ >>> 5] |= 128 << 24 - _ % 32, v[(_ + 128 >>> 10 << 5) + 30] = Math.floor(y / 4294967296), v[(_ + 128 >>> 10 << 5) + 31] = y, f.sigBytes = v.length * 4, this._process();
          var g = this._hash.toX32();
          return g;
        },
        clone: function() {
          var f = n.clone.call(this);
          return f._hash = this._hash.clone(), f;
        },
        blockSize: 1024 / 32
      });
      i.SHA512 = n._createHelper(p), i.HmacSHA512 = n._createHmacHelper(p);
    }(), function() {
      var i = t, s = i.x64, n = s.Word, a = s.WordArray, o = i.algo, d = o.SHA512, l = o.SHA384 = d.extend({
        _doReset: function() {
          this._hash = new a.init([
            new n.init(3418070365, 3238371032),
            new n.init(1654270250, 914150663),
            new n.init(2438529370, 812702999),
            new n.init(355462360, 4144912697),
            new n.init(1731405415, 4290775857),
            new n.init(2394180231, 1750603025),
            new n.init(3675008525, 1694076839),
            new n.init(1203062813, 3204075428)
          ]);
        },
        _doFinalize: function() {
          var u = d._doFinalize.call(this);
          return u.sigBytes -= 16, u;
        }
      });
      i.SHA384 = d._createHelper(l), i.HmacSHA384 = d._createHmacHelper(l);
    }(), function(i) {
      var s = t, n = s.lib, a = n.WordArray, o = n.Hasher, d = s.x64, l = d.Word, u = s.algo, c = [], h = [], p = [];
      (function() {
        for (var y = 1, _ = 0, g = 0; g < 24; g++) {
          c[y + 5 * _] = (g + 1) * (g + 2) / 2 % 64;
          var x = _ % 5, b = (2 * y + 3 * _) % 5;
          y = x, _ = b;
        }
        for (var y = 0; y < 5; y++)
          for (var _ = 0; _ < 5; _++)
            h[y + 5 * _] = _ + (2 * y + 3 * _) % 5 * 5;
        for (var C = 1, w = 0; w < 24; w++) {
          for (var F = 0, P = 0, A = 0; A < 7; A++) {
            if (C & 1) {
              var S = (1 << A) - 1;
              S < 32 ? P ^= 1 << S : F ^= 1 << S - 32;
            }
            C & 128 ? C = C << 1 ^ 113 : C <<= 1;
          }
          p[w] = l.create(F, P);
        }
      })();
      var f = [];
      (function() {
        for (var y = 0; y < 25; y++)
          f[y] = l.create();
      })();
      var v = u.SHA3 = o.extend({
        /**
         * Configuration options.
         *
         * @property {number} outputLength
         *   The desired number of bits in the output hash.
         *   Only values permitted are: 224, 256, 384, 512.
         *   Default: 512
         */
        cfg: o.cfg.extend({
          outputLength: 512
        }),
        _doReset: function() {
          for (var y = this._state = [], _ = 0; _ < 25; _++)
            y[_] = new l.init();
          this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
        },
        _doProcessBlock: function(y, _) {
          for (var g = this._state, x = this.blockSize / 2, b = 0; b < x; b++) {
            var C = y[_ + 2 * b], w = y[_ + 2 * b + 1];
            C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
            var F = g[b];
            F.high ^= w, F.low ^= C;
          }
          for (var P = 0; P < 24; P++) {
            for (var A = 0; A < 5; A++) {
              for (var S = 0, k = 0, U = 0; U < 5; U++) {
                var F = g[A + 5 * U];
                S ^= F.high, k ^= F.low;
              }
              var O = f[A];
              O.high = S, O.low = k;
            }
            for (var A = 0; A < 5; A++)
              for (var N = f[(A + 4) % 5], $ = f[(A + 1) % 5], L = $.high, V = $.low, S = N.high ^ (L << 1 | V >>> 31), k = N.low ^ (V << 1 | L >>> 31), U = 0; U < 5; U++) {
                var F = g[A + 5 * U];
                F.high ^= S, F.low ^= k;
              }
            for (var H = 1; H < 25; H++) {
              var S, k, F = g[H], j = F.high, q = F.low, E = c[H];
              E < 32 ? (S = j << E | q >>> 32 - E, k = q << E | j >>> 32 - E) : (S = q << E - 32 | j >>> 64 - E, k = j << E - 32 | q >>> 64 - E);
              var B = f[h[H]];
              B.high = S, B.low = k;
            }
            var R = f[0], T = g[0];
            R.high = T.high, R.low = T.low;
            for (var A = 0; A < 5; A++)
              for (var U = 0; U < 5; U++) {
                var H = A + 5 * U, F = g[H], K = f[H], G = f[(A + 1) % 5 + 5 * U], J = f[(A + 2) % 5 + 5 * U];
                F.high = K.high ^ ~G.high & J.high, F.low = K.low ^ ~G.low & J.low;
              }
            var F = g[0], M = p[P];
            F.high ^= M.high, F.low ^= M.low;
          }
        },
        _doFinalize: function() {
          var y = this._data, _ = y.words;
          this._nDataBytes * 8;
          var g = y.sigBytes * 8, x = this.blockSize * 32;
          _[g >>> 5] |= 1 << 24 - g % 32, _[(i.ceil((g + 1) / x) * x >>> 5) - 1] |= 128, y.sigBytes = _.length * 4, this._process();
          for (var b = this._state, C = this.cfg.outputLength / 8, w = C / 8, F = [], P = 0; P < w; P++) {
            var A = b[P], S = A.high, k = A.low;
            S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, k = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360, F.push(k), F.push(S);
          }
          return new a.init(F, C);
        },
        clone: function() {
          for (var y = o.clone.call(this), _ = y._state = this._state.slice(0), g = 0; g < 25; g++)
            _[g] = _[g].clone();
          return y;
        }
      });
      s.SHA3 = o._createHelper(v), s.HmacSHA3 = o._createHmacHelper(v);
    }(Math);
    /** @preserve
    		(c) 2012 by Cédric Mesnil. All rights reserved.
    
    		Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    
    		    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    		    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    		THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    		*/
    (function(i) {
      var s = t, n = s.lib, a = n.WordArray, o = n.Hasher, d = s.algo, l = a.create([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        7,
        4,
        13,
        1,
        10,
        6,
        15,
        3,
        12,
        0,
        9,
        5,
        2,
        14,
        11,
        8,
        3,
        10,
        14,
        4,
        9,
        15,
        8,
        1,
        2,
        7,
        0,
        6,
        13,
        11,
        5,
        12,
        1,
        9,
        11,
        10,
        0,
        8,
        12,
        4,
        13,
        3,
        7,
        15,
        14,
        5,
        6,
        2,
        4,
        0,
        5,
        9,
        7,
        12,
        2,
        10,
        14,
        1,
        3,
        8,
        11,
        6,
        15,
        13
      ]), u = a.create([
        5,
        14,
        7,
        0,
        9,
        2,
        11,
        4,
        13,
        6,
        15,
        8,
        1,
        10,
        3,
        12,
        6,
        11,
        3,
        7,
        0,
        13,
        5,
        10,
        14,
        15,
        8,
        12,
        4,
        9,
        1,
        2,
        15,
        5,
        1,
        3,
        7,
        14,
        6,
        9,
        11,
        8,
        12,
        2,
        10,
        0,
        4,
        13,
        8,
        6,
        4,
        1,
        3,
        11,
        15,
        0,
        5,
        12,
        2,
        13,
        9,
        7,
        10,
        14,
        12,
        15,
        10,
        4,
        1,
        5,
        8,
        7,
        6,
        2,
        13,
        14,
        0,
        3,
        9,
        11
      ]), c = a.create([
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8,
        7,
        6,
        8,
        13,
        11,
        9,
        7,
        15,
        7,
        12,
        15,
        9,
        11,
        7,
        13,
        12,
        11,
        13,
        6,
        7,
        14,
        9,
        13,
        15,
        14,
        8,
        13,
        6,
        5,
        12,
        7,
        5,
        11,
        12,
        14,
        15,
        14,
        15,
        9,
        8,
        9,
        14,
        5,
        6,
        8,
        6,
        5,
        12,
        9,
        15,
        5,
        11,
        6,
        8,
        13,
        12,
        5,
        12,
        13,
        14,
        11,
        8,
        5,
        6
      ]), h = a.create([
        8,
        9,
        9,
        11,
        13,
        15,
        15,
        5,
        7,
        7,
        8,
        11,
        14,
        14,
        12,
        6,
        9,
        13,
        15,
        7,
        12,
        8,
        9,
        11,
        7,
        7,
        12,
        7,
        6,
        15,
        13,
        11,
        9,
        7,
        15,
        11,
        8,
        6,
        6,
        14,
        12,
        13,
        5,
        14,
        13,
        13,
        7,
        5,
        15,
        5,
        8,
        11,
        14,
        14,
        6,
        14,
        6,
        9,
        12,
        9,
        12,
        5,
        15,
        8,
        8,
        5,
        12,
        9,
        12,
        5,
        14,
        6,
        8,
        13,
        6,
        5,
        15,
        13,
        11,
        11
      ]), p = a.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), f = a.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), v = d.RIPEMD160 = o.extend({
        _doReset: function() {
          this._hash = a.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        },
        _doProcessBlock: function(w, F) {
          for (var P = 0; P < 16; P++) {
            var A = F + P, S = w[A];
            w[A] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
          }
          var k = this._hash.words, U = p.words, O = f.words, N = l.words, $ = u.words, L = c.words, V = h.words, H, j, q, E, B, R, T, K, G, J;
          R = H = k[0], T = j = k[1], K = q = k[2], G = E = k[3], J = B = k[4];
          for (var M, P = 0; P < 80; P += 1)
            M = H + w[F + N[P]] | 0, P < 16 ? M += y(j, q, E) + U[0] : P < 32 ? M += _(j, q, E) + U[1] : P < 48 ? M += g(j, q, E) + U[2] : P < 64 ? M += x(j, q, E) + U[3] : M += b(j, q, E) + U[4], M = M | 0, M = C(M, L[P]), M = M + B | 0, H = B, B = E, E = C(q, 10), q = j, j = M, M = R + w[F + $[P]] | 0, P < 16 ? M += b(T, K, G) + O[0] : P < 32 ? M += x(T, K, G) + O[1] : P < 48 ? M += g(T, K, G) + O[2] : P < 64 ? M += _(T, K, G) + O[3] : M += y(T, K, G) + O[4], M = M | 0, M = C(M, V[P]), M = M + J | 0, R = J, J = G, G = C(K, 10), K = T, T = M;
          M = k[1] + q + G | 0, k[1] = k[2] + E + J | 0, k[2] = k[3] + B + R | 0, k[3] = k[4] + H + T | 0, k[4] = k[0] + j + K | 0, k[0] = M;
        },
        _doFinalize: function() {
          var w = this._data, F = w.words, P = this._nDataBytes * 8, A = w.sigBytes * 8;
          F[A >>> 5] |= 128 << 24 - A % 32, F[(A + 64 >>> 9 << 4) + 14] = (P << 8 | P >>> 24) & 16711935 | (P << 24 | P >>> 8) & 4278255360, w.sigBytes = (F.length + 1) * 4, this._process();
          for (var S = this._hash, k = S.words, U = 0; U < 5; U++) {
            var O = k[U];
            k[U] = (O << 8 | O >>> 24) & 16711935 | (O << 24 | O >>> 8) & 4278255360;
          }
          return S;
        },
        clone: function() {
          var w = o.clone.call(this);
          return w._hash = this._hash.clone(), w;
        }
      });
      function y(w, F, P) {
        return w ^ F ^ P;
      }
      function _(w, F, P) {
        return w & F | ~w & P;
      }
      function g(w, F, P) {
        return (w | ~F) ^ P;
      }
      function x(w, F, P) {
        return w & P | F & ~P;
      }
      function b(w, F, P) {
        return w ^ (F | ~P);
      }
      function C(w, F) {
        return w << F | w >>> 32 - F;
      }
      s.RIPEMD160 = o._createHelper(v), s.HmacRIPEMD160 = o._createHmacHelper(v);
    })(), function() {
      var i = t, s = i.lib, n = s.Base, a = i.enc, o = a.Utf8, d = i.algo;
      d.HMAC = n.extend({
        /**
         * Initializes a newly created HMAC.
         *
         * @param {Hasher} hasher The hash algorithm to use.
         * @param {WordArray|string} key The secret key.
         *
         * @example
         *
         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
         */
        init: function(l, u) {
          l = this._hasher = new l.init(), typeof u == "string" && (u = o.parse(u));
          var c = l.blockSize, h = c * 4;
          u.sigBytes > h && (u = l.finalize(u)), u.clamp();
          for (var p = this._oKey = u.clone(), f = this._iKey = u.clone(), v = p.words, y = f.words, _ = 0; _ < c; _++)
            v[_] ^= 1549556828, y[_] ^= 909522486;
          p.sigBytes = f.sigBytes = h, this.reset();
        },
        /**
         * Resets this HMAC to its initial state.
         *
         * @example
         *
         *     hmacHasher.reset();
         */
        reset: function() {
          var l = this._hasher;
          l.reset(), l.update(this._iKey);
        },
        /**
         * Updates this HMAC with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {HMAC} This HMAC instance.
         *
         * @example
         *
         *     hmacHasher.update('message');
         *     hmacHasher.update(wordArray);
         */
        update: function(l) {
          return this._hasher.update(l), this;
        },
        /**
         * Finalizes the HMAC computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The HMAC.
         *
         * @example
         *
         *     var hmac = hmacHasher.finalize();
         *     var hmac = hmacHasher.finalize('message');
         *     var hmac = hmacHasher.finalize(wordArray);
         */
        finalize: function(l) {
          var u = this._hasher, c = u.finalize(l);
          u.reset();
          var h = u.finalize(this._oKey.clone().concat(c));
          return h;
        }
      });
    }(), function() {
      var i = t, s = i.lib, n = s.Base, a = s.WordArray, o = i.algo, d = o.SHA1, l = o.HMAC, u = o.PBKDF2 = n.extend({
        /**
         * Configuration options.
         *
         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
         * @property {Hasher} hasher The hasher to use. Default: SHA1
         * @property {number} iterations The number of iterations to perform. Default: 1
         */
        cfg: n.extend({
          keySize: 128 / 32,
          hasher: d,
          iterations: 1
        }),
        /**
         * Initializes a newly created key derivation function.
         *
         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
         *
         * @example
         *
         *     var kdf = CryptoJS.algo.PBKDF2.create();
         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
         */
        init: function(c) {
          this.cfg = this.cfg.extend(c);
        },
        /**
         * Computes the Password-Based Key Derivation Function 2.
         *
         * @param {WordArray|string} password The password.
         * @param {WordArray|string} salt A salt.
         *
         * @return {WordArray} The derived key.
         *
         * @example
         *
         *     var key = kdf.compute(password, salt);
         */
        compute: function(c, h) {
          for (var p = this.cfg, f = l.create(p.hasher, c), v = a.create(), y = a.create([1]), _ = v.words, g = y.words, x = p.keySize, b = p.iterations; _.length < x; ) {
            var C = f.update(h).finalize(y);
            f.reset();
            for (var w = C.words, F = w.length, P = C, A = 1; A < b; A++) {
              P = f.finalize(P), f.reset();
              for (var S = P.words, k = 0; k < F; k++)
                w[k] ^= S[k];
            }
            v.concat(C), g[0]++;
          }
          return v.sigBytes = x * 4, v;
        }
      });
      i.PBKDF2 = function(c, h, p) {
        return u.create(p).compute(c, h);
      };
    }(), function() {
      var i = t, s = i.lib, n = s.Base, a = s.WordArray, o = i.algo, d = o.MD5, l = o.EvpKDF = n.extend({
        /**
         * Configuration options.
         *
         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
         * @property {number} iterations The number of iterations to perform. Default: 1
         */
        cfg: n.extend({
          keySize: 128 / 32,
          hasher: d,
          iterations: 1
        }),
        /**
         * Initializes a newly created key derivation function.
         *
         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
         *
         * @example
         *
         *     var kdf = CryptoJS.algo.EvpKDF.create();
         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
         */
        init: function(u) {
          this.cfg = this.cfg.extend(u);
        },
        /**
         * Derives a key from a password.
         *
         * @param {WordArray|string} password The password.
         * @param {WordArray|string} salt A salt.
         *
         * @return {WordArray} The derived key.
         *
         * @example
         *
         *     var key = kdf.compute(password, salt);
         */
        compute: function(u, c) {
          for (var h, p = this.cfg, f = p.hasher.create(), v = a.create(), y = v.words, _ = p.keySize, g = p.iterations; y.length < _; ) {
            h && f.update(h), h = f.update(u).finalize(c), f.reset();
            for (var x = 1; x < g; x++)
              h = f.finalize(h), f.reset();
            v.concat(h);
          }
          return v.sigBytes = _ * 4, v;
        }
      });
      i.EvpKDF = function(u, c, h) {
        return l.create(h).compute(u, c);
      };
    }(), t.lib.Cipher || function(i) {
      var s = t, n = s.lib, a = n.Base, o = n.WordArray, d = n.BufferedBlockAlgorithm, l = s.enc;
      l.Utf8;
      var u = l.Base64, c = s.algo, h = c.EvpKDF, p = n.Cipher = d.extend({
        /**
         * Configuration options.
         *
         * @property {WordArray} iv The IV to use for this operation.
         */
        cfg: a.extend(),
        /**
         * Creates this cipher in encryption mode.
         *
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {Cipher} A cipher instance.
         *
         * @static
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
         */
        createEncryptor: function(S, k) {
          return this.create(this._ENC_XFORM_MODE, S, k);
        },
        /**
         * Creates this cipher in decryption mode.
         *
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {Cipher} A cipher instance.
         *
         * @static
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
         */
        createDecryptor: function(S, k) {
          return this.create(this._DEC_XFORM_MODE, S, k);
        },
        /**
         * Initializes a newly created cipher.
         *
         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
         */
        init: function(S, k, U) {
          this.cfg = this.cfg.extend(U), this._xformMode = S, this._key = k, this.reset();
        },
        /**
         * Resets this cipher to its initial state.
         *
         * @example
         *
         *     cipher.reset();
         */
        reset: function() {
          d.reset.call(this), this._doReset();
        },
        /**
         * Adds data to be encrypted or decrypted.
         *
         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
         *
         * @return {WordArray} The data after processing.
         *
         * @example
         *
         *     var encrypted = cipher.process('data');
         *     var encrypted = cipher.process(wordArray);
         */
        process: function(S) {
          return this._append(S), this._process();
        },
        /**
         * Finalizes the encryption or decryption process.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
         *
         * @return {WordArray} The data after final processing.
         *
         * @example
         *
         *     var encrypted = cipher.finalize();
         *     var encrypted = cipher.finalize('data');
         *     var encrypted = cipher.finalize(wordArray);
         */
        finalize: function(S) {
          S && this._append(S);
          var k = this._doFinalize();
          return k;
        },
        keySize: 128 / 32,
        ivSize: 128 / 32,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        /**
         * Creates shortcut functions to a cipher's object interface.
         *
         * @param {Cipher} cipher The cipher to create a helper for.
         *
         * @return {Object} An object with encrypt and decrypt shortcut functions.
         *
         * @static
         *
         * @example
         *
         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
         */
        _createHelper: function() {
          function S(k) {
            return typeof k == "string" ? A : w;
          }
          return function(k) {
            return {
              encrypt: function(U, O, N) {
                return S(O).encrypt(k, U, O, N);
              },
              decrypt: function(U, O, N) {
                return S(O).decrypt(k, U, O, N);
              }
            };
          };
        }()
      });
      n.StreamCipher = p.extend({
        _doFinalize: function() {
          var S = this._process(!0);
          return S;
        },
        blockSize: 1
      });
      var f = s.mode = {}, v = n.BlockCipherMode = a.extend({
        /**
         * Creates this mode for encryption.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @static
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
         */
        createEncryptor: function(S, k) {
          return this.Encryptor.create(S, k);
        },
        /**
         * Creates this mode for decryption.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @static
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
         */
        createDecryptor: function(S, k) {
          return this.Decryptor.create(S, k);
        },
        /**
         * Initializes a newly created mode.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
         */
        init: function(S, k) {
          this._cipher = S, this._iv = k;
        }
      }), y = f.CBC = function() {
        var S = v.extend();
        S.Encryptor = S.extend({
          /**
           * Processes the data block at offset.
           *
           * @param {Array} words The data words to operate on.
           * @param {number} offset The offset where the block starts.
           *
           * @example
           *
           *     mode.processBlock(data.words, offset);
           */
          processBlock: function(U, O) {
            var N = this._cipher, $ = N.blockSize;
            k.call(this, U, O, $), N.encryptBlock(U, O), this._prevBlock = U.slice(O, O + $);
          }
        }), S.Decryptor = S.extend({
          /**
           * Processes the data block at offset.
           *
           * @param {Array} words The data words to operate on.
           * @param {number} offset The offset where the block starts.
           *
           * @example
           *
           *     mode.processBlock(data.words, offset);
           */
          processBlock: function(U, O) {
            var N = this._cipher, $ = N.blockSize, L = U.slice(O, O + $);
            N.decryptBlock(U, O), k.call(this, U, O, $), this._prevBlock = L;
          }
        });
        function k(U, O, N) {
          var $, L = this._iv;
          L ? ($ = L, this._iv = i) : $ = this._prevBlock;
          for (var V = 0; V < N; V++)
            U[O + V] ^= $[V];
        }
        return S;
      }(), _ = s.pad = {}, g = _.Pkcs7 = {
        /**
         * Pads data using the algorithm defined in PKCS #5/7.
         *
         * @param {WordArray} data The data to pad.
         * @param {number} blockSize The multiple that the data should be padded to.
         *
         * @static
         *
         * @example
         *
         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
         */
        pad: function(S, k) {
          for (var U = k * 4, O = U - S.sigBytes % U, N = O << 24 | O << 16 | O << 8 | O, $ = [], L = 0; L < O; L += 4)
            $.push(N);
          var V = o.create($, O);
          S.concat(V);
        },
        /**
         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
         *
         * @param {WordArray} data The data to unpad.
         *
         * @static
         *
         * @example
         *
         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
         */
        unpad: function(S) {
          var k = S.words[S.sigBytes - 1 >>> 2] & 255;
          S.sigBytes -= k;
        }
      };
      n.BlockCipher = p.extend({
        /**
         * Configuration options.
         *
         * @property {Mode} mode The block mode to use. Default: CBC
         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
         */
        cfg: p.cfg.extend({
          mode: y,
          padding: g
        }),
        reset: function() {
          var S;
          p.reset.call(this);
          var k = this.cfg, U = k.iv, O = k.mode;
          this._xformMode == this._ENC_XFORM_MODE ? S = O.createEncryptor : (S = O.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == S ? this._mode.init(this, U && U.words) : (this._mode = S.call(O, this, U && U.words), this._mode.__creator = S);
        },
        _doProcessBlock: function(S, k) {
          this._mode.processBlock(S, k);
        },
        _doFinalize: function() {
          var S, k = this.cfg.padding;
          return this._xformMode == this._ENC_XFORM_MODE ? (k.pad(this._data, this.blockSize), S = this._process(!0)) : (S = this._process(!0), k.unpad(S)), S;
        },
        blockSize: 128 / 32
      });
      var x = n.CipherParams = a.extend({
        /**
         * Initializes a newly created cipher params object.
         *
         * @param {Object} cipherParams An object with any of the possible cipher parameters.
         *
         * @example
         *
         *     var cipherParams = CryptoJS.lib.CipherParams.create({
         *         ciphertext: ciphertextWordArray,
         *         key: keyWordArray,
         *         iv: ivWordArray,
         *         salt: saltWordArray,
         *         algorithm: CryptoJS.algo.AES,
         *         mode: CryptoJS.mode.CBC,
         *         padding: CryptoJS.pad.PKCS7,
         *         blockSize: 4,
         *         formatter: CryptoJS.format.OpenSSL
         *     });
         */
        init: function(S) {
          this.mixIn(S);
        },
        /**
         * Converts this cipher params object to a string.
         *
         * @param {Format} formatter (Optional) The formatting strategy to use.
         *
         * @return {string} The stringified cipher params.
         *
         * @throws Error If neither the formatter nor the default formatter is set.
         *
         * @example
         *
         *     var string = cipherParams + '';
         *     var string = cipherParams.toString();
         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
         */
        toString: function(S) {
          return (S || this.formatter).stringify(this);
        }
      }), b = s.format = {}, C = b.OpenSSL = {
        /**
         * Converts a cipher params object to an OpenSSL-compatible string.
         *
         * @param {CipherParams} cipherParams The cipher params object.
         *
         * @return {string} The OpenSSL-compatible string.
         *
         * @static
         *
         * @example
         *
         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
         */
        stringify: function(S) {
          var k, U = S.ciphertext, O = S.salt;
          return O ? k = o.create([1398893684, 1701076831]).concat(O).concat(U) : k = U, k.toString(u);
        },
        /**
         * Converts an OpenSSL-compatible string to a cipher params object.
         *
         * @param {string} openSSLStr The OpenSSL-compatible string.
         *
         * @return {CipherParams} The cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
         */
        parse: function(S) {
          var k, U = u.parse(S), O = U.words;
          return O[0] == 1398893684 && O[1] == 1701076831 && (k = o.create(O.slice(2, 4)), O.splice(0, 4), U.sigBytes -= 16), x.create({ ciphertext: U, salt: k });
        }
      }, w = n.SerializableCipher = a.extend({
        /**
         * Configuration options.
         *
         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
         */
        cfg: a.extend({
          format: C
        }),
        /**
         * Encrypts a message.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {WordArray|string} message The message to encrypt.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {CipherParams} A cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         */
        encrypt: function(S, k, U, O) {
          O = this.cfg.extend(O);
          var N = S.createEncryptor(U, O), $ = N.finalize(k), L = N.cfg;
          return x.create({
            ciphertext: $,
            key: U,
            iv: L.iv,
            algorithm: S,
            mode: L.mode,
            padding: L.padding,
            blockSize: S.blockSize,
            formatter: O.format
          });
        },
        /**
         * Decrypts serialized ciphertext.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {WordArray} The plaintext.
         *
         * @static
         *
         * @example
         *
         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         */
        decrypt: function(S, k, U, O) {
          O = this.cfg.extend(O), k = this._parse(k, O.format);
          var N = S.createDecryptor(U, O).finalize(k.ciphertext);
          return N;
        },
        /**
         * Converts serialized ciphertext to CipherParams,
         * else assumed CipherParams already and returns ciphertext unchanged.
         *
         * @param {CipherParams|string} ciphertext The ciphertext.
         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
         *
         * @return {CipherParams} The unserialized ciphertext.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
         */
        _parse: function(S, k) {
          return typeof S == "string" ? k.parse(S, this) : S;
        }
      }), F = s.kdf = {}, P = F.OpenSSL = {
        /**
         * Derives a key and IV from a password.
         *
         * @param {string} password The password to derive from.
         * @param {number} keySize The size in words of the key to generate.
         * @param {number} ivSize The size in words of the IV to generate.
         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
         *
         * @return {CipherParams} A cipher params object with the key, IV, and salt.
         *
         * @static
         *
         * @example
         *
         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
         */
        execute: function(S, k, U, O) {
          O || (O = o.random(64 / 8));
          var N = h.create({ keySize: k + U }).compute(S, O), $ = o.create(N.words.slice(k), U * 4);
          return N.sigBytes = k * 4, x.create({ key: N, iv: $, salt: O });
        }
      }, A = n.PasswordBasedCipher = w.extend({
        /**
         * Configuration options.
         *
         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
         */
        cfg: w.cfg.extend({
          kdf: P
        }),
        /**
         * Encrypts a message using a password.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {WordArray|string} message The message to encrypt.
         * @param {string} password The password.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {CipherParams} A cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
         */
        encrypt: function(S, k, U, O) {
          O = this.cfg.extend(O);
          var N = O.kdf.execute(U, S.keySize, S.ivSize);
          O.iv = N.iv;
          var $ = w.encrypt.call(this, S, k, N.key, O);
          return $.mixIn(N), $;
        },
        /**
         * Decrypts serialized ciphertext using a password.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
         * @param {string} password The password.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {WordArray} The plaintext.
         *
         * @static
         *
         * @example
         *
         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
         */
        decrypt: function(S, k, U, O) {
          O = this.cfg.extend(O), k = this._parse(k, O.format);
          var N = O.kdf.execute(U, S.keySize, S.ivSize, k.salt);
          O.iv = N.iv;
          var $ = w.decrypt.call(this, S, k, N.key, O);
          return $;
        }
      });
    }(), t.mode.CFB = function() {
      var i = t.lib.BlockCipherMode.extend();
      i.Encryptor = i.extend({
        processBlock: function(n, a) {
          var o = this._cipher, d = o.blockSize;
          s.call(this, n, a, d, o), this._prevBlock = n.slice(a, a + d);
        }
      }), i.Decryptor = i.extend({
        processBlock: function(n, a) {
          var o = this._cipher, d = o.blockSize, l = n.slice(a, a + d);
          s.call(this, n, a, d, o), this._prevBlock = l;
        }
      });
      function s(n, a, o, d) {
        var l, u = this._iv;
        u ? (l = u.slice(0), this._iv = void 0) : l = this._prevBlock, d.encryptBlock(l, 0);
        for (var c = 0; c < o; c++)
          n[a + c] ^= l[c];
      }
      return i;
    }(), t.mode.CTR = function() {
      var i = t.lib.BlockCipherMode.extend(), s = i.Encryptor = i.extend({
        processBlock: function(n, a) {
          var o = this._cipher, d = o.blockSize, l = this._iv, u = this._counter;
          l && (u = this._counter = l.slice(0), this._iv = void 0);
          var c = u.slice(0);
          o.encryptBlock(c, 0), u[d - 1] = u[d - 1] + 1 | 0;
          for (var h = 0; h < d; h++)
            n[a + h] ^= c[h];
        }
      });
      return i.Decryptor = s, i;
    }();
    /** @preserve
     * Counter block mode compatible with  Dr Brian Gladman fileenc.c
     * derived from CryptoJS.mode.CTR
     * Jan Hruby jhruby.web@gmail.com
     */
    return t.mode.CTRGladman = function() {
      var i = t.lib.BlockCipherMode.extend();
      function s(o) {
        if ((o >> 24 & 255) === 255) {
          var d = o >> 16 & 255, l = o >> 8 & 255, u = o & 255;
          d === 255 ? (d = 0, l === 255 ? (l = 0, u === 255 ? u = 0 : ++u) : ++l) : ++d, o = 0, o += d << 16, o += l << 8, o += u;
        } else
          o += 1 << 24;
        return o;
      }
      function n(o) {
        return (o[0] = s(o[0])) === 0 && (o[1] = s(o[1])), o;
      }
      var a = i.Encryptor = i.extend({
        processBlock: function(o, d) {
          var l = this._cipher, u = l.blockSize, c = this._iv, h = this._counter;
          c && (h = this._counter = c.slice(0), this._iv = void 0), n(h);
          var p = h.slice(0);
          l.encryptBlock(p, 0);
          for (var f = 0; f < u; f++)
            o[d + f] ^= p[f];
        }
      });
      return i.Decryptor = a, i;
    }(), t.mode.OFB = function() {
      var i = t.lib.BlockCipherMode.extend(), s = i.Encryptor = i.extend({
        processBlock: function(n, a) {
          var o = this._cipher, d = o.blockSize, l = this._iv, u = this._keystream;
          l && (u = this._keystream = l.slice(0), this._iv = void 0), o.encryptBlock(u, 0);
          for (var c = 0; c < d; c++)
            n[a + c] ^= u[c];
        }
      });
      return i.Decryptor = s, i;
    }(), t.mode.ECB = function() {
      var i = t.lib.BlockCipherMode.extend();
      return i.Encryptor = i.extend({
        processBlock: function(s, n) {
          this._cipher.encryptBlock(s, n);
        }
      }), i.Decryptor = i.extend({
        processBlock: function(s, n) {
          this._cipher.decryptBlock(s, n);
        }
      }), i;
    }(), t.pad.AnsiX923 = {
      pad: function(i, s) {
        var n = i.sigBytes, a = s * 4, o = a - n % a, d = n + o - 1;
        i.clamp(), i.words[d >>> 2] |= o << 24 - d % 4 * 8, i.sigBytes += o;
      },
      unpad: function(i) {
        var s = i.words[i.sigBytes - 1 >>> 2] & 255;
        i.sigBytes -= s;
      }
    }, t.pad.Iso10126 = {
      pad: function(i, s) {
        var n = s * 4, a = n - i.sigBytes % n;
        i.concat(t.lib.WordArray.random(a - 1)).concat(t.lib.WordArray.create([a << 24], 1));
      },
      unpad: function(i) {
        var s = i.words[i.sigBytes - 1 >>> 2] & 255;
        i.sigBytes -= s;
      }
    }, t.pad.Iso97971 = {
      pad: function(i, s) {
        i.concat(t.lib.WordArray.create([2147483648], 1)), t.pad.ZeroPadding.pad(i, s);
      },
      unpad: function(i) {
        t.pad.ZeroPadding.unpad(i), i.sigBytes--;
      }
    }, t.pad.ZeroPadding = {
      pad: function(i, s) {
        var n = s * 4;
        i.clamp(), i.sigBytes += n - (i.sigBytes % n || n);
      },
      unpad: function(i) {
        for (var s = i.words, n = i.sigBytes - 1, n = i.sigBytes - 1; n >= 0; n--)
          if (s[n >>> 2] >>> 24 - n % 4 * 8 & 255) {
            i.sigBytes = n + 1;
            break;
          }
      }
    }, t.pad.NoPadding = {
      pad: function() {
      },
      unpad: function() {
      }
    }, function(i) {
      var s = t, n = s.lib, a = n.CipherParams, o = s.enc, d = o.Hex, l = s.format;
      l.Hex = {
        /**
         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
         *
         * @param {CipherParams} cipherParams The cipher params object.
         *
         * @return {string} The hexadecimally encoded string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
         */
        stringify: function(u) {
          return u.ciphertext.toString(d);
        },
        /**
         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
         *
         * @param {string} input The hexadecimally encoded string.
         *
         * @return {CipherParams} The cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
         */
        parse: function(u) {
          var c = d.parse(u);
          return a.create({ ciphertext: c });
        }
      };
    }(), function() {
      var i = t, s = i.lib, n = s.BlockCipher, a = i.algo, o = [], d = [], l = [], u = [], c = [], h = [], p = [], f = [], v = [], y = [];
      (function() {
        for (var x = [], b = 0; b < 256; b++)
          b < 128 ? x[b] = b << 1 : x[b] = b << 1 ^ 283;
        for (var C = 0, w = 0, b = 0; b < 256; b++) {
          var F = w ^ w << 1 ^ w << 2 ^ w << 3 ^ w << 4;
          F = F >>> 8 ^ F & 255 ^ 99, o[C] = F, d[F] = C;
          var P = x[C], A = x[P], S = x[A], k = x[F] * 257 ^ F * 16843008;
          l[C] = k << 24 | k >>> 8, u[C] = k << 16 | k >>> 16, c[C] = k << 8 | k >>> 24, h[C] = k;
          var k = S * 16843009 ^ A * 65537 ^ P * 257 ^ C * 16843008;
          p[F] = k << 24 | k >>> 8, f[F] = k << 16 | k >>> 16, v[F] = k << 8 | k >>> 24, y[F] = k, C ? (C = P ^ x[x[x[S ^ P]]], w ^= x[x[w]]) : C = w = 1;
        }
      })();
      var _ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], g = a.AES = n.extend({
        _doReset: function() {
          var x;
          if (!(this._nRounds && this._keyPriorReset === this._key)) {
            for (var b = this._keyPriorReset = this._key, C = b.words, w = b.sigBytes / 4, F = this._nRounds = w + 6, P = (F + 1) * 4, A = this._keySchedule = [], S = 0; S < P; S++)
              S < w ? A[S] = C[S] : (x = A[S - 1], S % w ? w > 6 && S % w == 4 && (x = o[x >>> 24] << 24 | o[x >>> 16 & 255] << 16 | o[x >>> 8 & 255] << 8 | o[x & 255]) : (x = x << 8 | x >>> 24, x = o[x >>> 24] << 24 | o[x >>> 16 & 255] << 16 | o[x >>> 8 & 255] << 8 | o[x & 255], x ^= _[S / w | 0] << 24), A[S] = A[S - w] ^ x);
            for (var k = this._invKeySchedule = [], U = 0; U < P; U++) {
              var S = P - U;
              if (U % 4)
                var x = A[S];
              else
                var x = A[S - 4];
              U < 4 || S <= 4 ? k[U] = x : k[U] = p[o[x >>> 24]] ^ f[o[x >>> 16 & 255]] ^ v[o[x >>> 8 & 255]] ^ y[o[x & 255]];
            }
          }
        },
        encryptBlock: function(x, b) {
          this._doCryptBlock(x, b, this._keySchedule, l, u, c, h, o);
        },
        decryptBlock: function(x, b) {
          var C = x[b + 1];
          x[b + 1] = x[b + 3], x[b + 3] = C, this._doCryptBlock(x, b, this._invKeySchedule, p, f, v, y, d);
          var C = x[b + 1];
          x[b + 1] = x[b + 3], x[b + 3] = C;
        },
        _doCryptBlock: function(x, b, C, w, F, P, A, S) {
          for (var k = this._nRounds, U = x[b] ^ C[0], O = x[b + 1] ^ C[1], N = x[b + 2] ^ C[2], $ = x[b + 3] ^ C[3], L = 4, V = 1; V < k; V++) {
            var H = w[U >>> 24] ^ F[O >>> 16 & 255] ^ P[N >>> 8 & 255] ^ A[$ & 255] ^ C[L++], j = w[O >>> 24] ^ F[N >>> 16 & 255] ^ P[$ >>> 8 & 255] ^ A[U & 255] ^ C[L++], q = w[N >>> 24] ^ F[$ >>> 16 & 255] ^ P[U >>> 8 & 255] ^ A[O & 255] ^ C[L++], E = w[$ >>> 24] ^ F[U >>> 16 & 255] ^ P[O >>> 8 & 255] ^ A[N & 255] ^ C[L++];
            U = H, O = j, N = q, $ = E;
          }
          var H = (S[U >>> 24] << 24 | S[O >>> 16 & 255] << 16 | S[N >>> 8 & 255] << 8 | S[$ & 255]) ^ C[L++], j = (S[O >>> 24] << 24 | S[N >>> 16 & 255] << 16 | S[$ >>> 8 & 255] << 8 | S[U & 255]) ^ C[L++], q = (S[N >>> 24] << 24 | S[$ >>> 16 & 255] << 16 | S[U >>> 8 & 255] << 8 | S[O & 255]) ^ C[L++], E = (S[$ >>> 24] << 24 | S[U >>> 16 & 255] << 16 | S[O >>> 8 & 255] << 8 | S[N & 255]) ^ C[L++];
          x[b] = H, x[b + 1] = j, x[b + 2] = q, x[b + 3] = E;
        },
        keySize: 256 / 32
      });
      i.AES = n._createHelper(g);
    }(), function() {
      var i = t, s = i.lib, n = s.WordArray, a = s.BlockCipher, o = i.algo, d = [
        57,
        49,
        41,
        33,
        25,
        17,
        9,
        1,
        58,
        50,
        42,
        34,
        26,
        18,
        10,
        2,
        59,
        51,
        43,
        35,
        27,
        19,
        11,
        3,
        60,
        52,
        44,
        36,
        63,
        55,
        47,
        39,
        31,
        23,
        15,
        7,
        62,
        54,
        46,
        38,
        30,
        22,
        14,
        6,
        61,
        53,
        45,
        37,
        29,
        21,
        13,
        5,
        28,
        20,
        12,
        4
      ], l = [
        14,
        17,
        11,
        24,
        1,
        5,
        3,
        28,
        15,
        6,
        21,
        10,
        23,
        19,
        12,
        4,
        26,
        8,
        16,
        7,
        27,
        20,
        13,
        2,
        41,
        52,
        31,
        37,
        47,
        55,
        30,
        40,
        51,
        45,
        33,
        48,
        44,
        49,
        39,
        56,
        34,
        53,
        46,
        42,
        50,
        36,
        29,
        32
      ], u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], c = [
        {
          0: 8421888,
          268435456: 32768,
          536870912: 8421378,
          805306368: 2,
          1073741824: 512,
          1342177280: 8421890,
          1610612736: 8389122,
          1879048192: 8388608,
          2147483648: 514,
          2415919104: 8389120,
          2684354560: 33280,
          2952790016: 8421376,
          3221225472: 32770,
          3489660928: 8388610,
          3758096384: 0,
          4026531840: 33282,
          134217728: 0,
          402653184: 8421890,
          671088640: 33282,
          939524096: 32768,
          1207959552: 8421888,
          1476395008: 512,
          1744830464: 8421378,
          2013265920: 2,
          2281701376: 8389120,
          2550136832: 33280,
          2818572288: 8421376,
          3087007744: 8389122,
          3355443200: 8388610,
          3623878656: 32770,
          3892314112: 514,
          4160749568: 8388608,
          1: 32768,
          268435457: 2,
          536870913: 8421888,
          805306369: 8388608,
          1073741825: 8421378,
          1342177281: 33280,
          1610612737: 512,
          1879048193: 8389122,
          2147483649: 8421890,
          2415919105: 8421376,
          2684354561: 8388610,
          2952790017: 33282,
          3221225473: 514,
          3489660929: 8389120,
          3758096385: 32770,
          4026531841: 0,
          134217729: 8421890,
          402653185: 8421376,
          671088641: 8388608,
          939524097: 512,
          1207959553: 32768,
          1476395009: 8388610,
          1744830465: 2,
          2013265921: 33282,
          2281701377: 32770,
          2550136833: 8389122,
          2818572289: 514,
          3087007745: 8421888,
          3355443201: 8389120,
          3623878657: 0,
          3892314113: 33280,
          4160749569: 8421378
        },
        {
          0: 1074282512,
          16777216: 16384,
          33554432: 524288,
          50331648: 1074266128,
          67108864: 1073741840,
          83886080: 1074282496,
          100663296: 1073758208,
          117440512: 16,
          134217728: 540672,
          150994944: 1073758224,
          167772160: 1073741824,
          184549376: 540688,
          201326592: 524304,
          218103808: 0,
          234881024: 16400,
          251658240: 1074266112,
          8388608: 1073758208,
          25165824: 540688,
          41943040: 16,
          58720256: 1073758224,
          75497472: 1074282512,
          92274688: 1073741824,
          109051904: 524288,
          125829120: 1074266128,
          142606336: 524304,
          159383552: 0,
          176160768: 16384,
          192937984: 1074266112,
          209715200: 1073741840,
          226492416: 540672,
          243269632: 1074282496,
          260046848: 16400,
          268435456: 0,
          285212672: 1074266128,
          301989888: 1073758224,
          318767104: 1074282496,
          335544320: 1074266112,
          352321536: 16,
          369098752: 540688,
          385875968: 16384,
          402653184: 16400,
          419430400: 524288,
          436207616: 524304,
          452984832: 1073741840,
          469762048: 540672,
          486539264: 1073758208,
          503316480: 1073741824,
          520093696: 1074282512,
          276824064: 540688,
          293601280: 524288,
          310378496: 1074266112,
          327155712: 16384,
          343932928: 1073758208,
          360710144: 1074282512,
          377487360: 16,
          394264576: 1073741824,
          411041792: 1074282496,
          427819008: 1073741840,
          444596224: 1073758224,
          461373440: 524304,
          478150656: 0,
          494927872: 16400,
          511705088: 1074266128,
          528482304: 540672
        },
        {
          0: 260,
          1048576: 0,
          2097152: 67109120,
          3145728: 65796,
          4194304: 65540,
          5242880: 67108868,
          6291456: 67174660,
          7340032: 67174400,
          8388608: 67108864,
          9437184: 67174656,
          10485760: 65792,
          11534336: 67174404,
          12582912: 67109124,
          13631488: 65536,
          14680064: 4,
          15728640: 256,
          524288: 67174656,
          1572864: 67174404,
          2621440: 0,
          3670016: 67109120,
          4718592: 67108868,
          5767168: 65536,
          6815744: 65540,
          7864320: 260,
          8912896: 4,
          9961472: 256,
          11010048: 67174400,
          12058624: 65796,
          13107200: 65792,
          14155776: 67109124,
          15204352: 67174660,
          16252928: 67108864,
          16777216: 67174656,
          17825792: 65540,
          18874368: 65536,
          19922944: 67109120,
          20971520: 256,
          22020096: 67174660,
          23068672: 67108868,
          24117248: 0,
          25165824: 67109124,
          26214400: 67108864,
          27262976: 4,
          28311552: 65792,
          29360128: 67174400,
          30408704: 260,
          31457280: 65796,
          32505856: 67174404,
          17301504: 67108864,
          18350080: 260,
          19398656: 67174656,
          20447232: 0,
          21495808: 65540,
          22544384: 67109120,
          23592960: 256,
          24641536: 67174404,
          25690112: 65536,
          26738688: 67174660,
          27787264: 65796,
          28835840: 67108868,
          29884416: 67109124,
          30932992: 67174400,
          31981568: 4,
          33030144: 65792
        },
        {
          0: 2151682048,
          65536: 2147487808,
          131072: 4198464,
          196608: 2151677952,
          262144: 0,
          327680: 4198400,
          393216: 2147483712,
          458752: 4194368,
          524288: 2147483648,
          589824: 4194304,
          655360: 64,
          720896: 2147487744,
          786432: 2151678016,
          851968: 4160,
          917504: 4096,
          983040: 2151682112,
          32768: 2147487808,
          98304: 64,
          163840: 2151678016,
          229376: 2147487744,
          294912: 4198400,
          360448: 2151682112,
          425984: 0,
          491520: 2151677952,
          557056: 4096,
          622592: 2151682048,
          688128: 4194304,
          753664: 4160,
          819200: 2147483648,
          884736: 4194368,
          950272: 4198464,
          1015808: 2147483712,
          1048576: 4194368,
          1114112: 4198400,
          1179648: 2147483712,
          1245184: 0,
          1310720: 4160,
          1376256: 2151678016,
          1441792: 2151682048,
          1507328: 2147487808,
          1572864: 2151682112,
          1638400: 2147483648,
          1703936: 2151677952,
          1769472: 4198464,
          1835008: 2147487744,
          1900544: 4194304,
          1966080: 64,
          2031616: 4096,
          1081344: 2151677952,
          1146880: 2151682112,
          1212416: 0,
          1277952: 4198400,
          1343488: 4194368,
          1409024: 2147483648,
          1474560: 2147487808,
          1540096: 64,
          1605632: 2147483712,
          1671168: 4096,
          1736704: 2147487744,
          1802240: 2151678016,
          1867776: 4160,
          1933312: 2151682048,
          1998848: 4194304,
          2064384: 4198464
        },
        {
          0: 128,
          4096: 17039360,
          8192: 262144,
          12288: 536870912,
          16384: 537133184,
          20480: 16777344,
          24576: 553648256,
          28672: 262272,
          32768: 16777216,
          36864: 537133056,
          40960: 536871040,
          45056: 553910400,
          49152: 553910272,
          53248: 0,
          57344: 17039488,
          61440: 553648128,
          2048: 17039488,
          6144: 553648256,
          10240: 128,
          14336: 17039360,
          18432: 262144,
          22528: 537133184,
          26624: 553910272,
          30720: 536870912,
          34816: 537133056,
          38912: 0,
          43008: 553910400,
          47104: 16777344,
          51200: 536871040,
          55296: 553648128,
          59392: 16777216,
          63488: 262272,
          65536: 262144,
          69632: 128,
          73728: 536870912,
          77824: 553648256,
          81920: 16777344,
          86016: 553910272,
          90112: 537133184,
          94208: 16777216,
          98304: 553910400,
          102400: 553648128,
          106496: 17039360,
          110592: 537133056,
          114688: 262272,
          118784: 536871040,
          122880: 0,
          126976: 17039488,
          67584: 553648256,
          71680: 16777216,
          75776: 17039360,
          79872: 537133184,
          83968: 536870912,
          88064: 17039488,
          92160: 128,
          96256: 553910272,
          100352: 262272,
          104448: 553910400,
          108544: 0,
          112640: 553648128,
          116736: 16777344,
          120832: 262144,
          124928: 537133056,
          129024: 536871040
        },
        {
          0: 268435464,
          256: 8192,
          512: 270532608,
          768: 270540808,
          1024: 268443648,
          1280: 2097152,
          1536: 2097160,
          1792: 268435456,
          2048: 0,
          2304: 268443656,
          2560: 2105344,
          2816: 8,
          3072: 270532616,
          3328: 2105352,
          3584: 8200,
          3840: 270540800,
          128: 270532608,
          384: 270540808,
          640: 8,
          896: 2097152,
          1152: 2105352,
          1408: 268435464,
          1664: 268443648,
          1920: 8200,
          2176: 2097160,
          2432: 8192,
          2688: 268443656,
          2944: 270532616,
          3200: 0,
          3456: 270540800,
          3712: 2105344,
          3968: 268435456,
          4096: 268443648,
          4352: 270532616,
          4608: 270540808,
          4864: 8200,
          5120: 2097152,
          5376: 268435456,
          5632: 268435464,
          5888: 2105344,
          6144: 2105352,
          6400: 0,
          6656: 8,
          6912: 270532608,
          7168: 8192,
          7424: 268443656,
          7680: 270540800,
          7936: 2097160,
          4224: 8,
          4480: 2105344,
          4736: 2097152,
          4992: 268435464,
          5248: 268443648,
          5504: 8200,
          5760: 270540808,
          6016: 270532608,
          6272: 270540800,
          6528: 270532616,
          6784: 8192,
          7040: 2105352,
          7296: 2097160,
          7552: 0,
          7808: 268435456,
          8064: 268443656
        },
        {
          0: 1048576,
          16: 33555457,
          32: 1024,
          48: 1049601,
          64: 34604033,
          80: 0,
          96: 1,
          112: 34603009,
          128: 33555456,
          144: 1048577,
          160: 33554433,
          176: 34604032,
          192: 34603008,
          208: 1025,
          224: 1049600,
          240: 33554432,
          8: 34603009,
          24: 0,
          40: 33555457,
          56: 34604032,
          72: 1048576,
          88: 33554433,
          104: 33554432,
          120: 1025,
          136: 1049601,
          152: 33555456,
          168: 34603008,
          184: 1048577,
          200: 1024,
          216: 34604033,
          232: 1,
          248: 1049600,
          256: 33554432,
          272: 1048576,
          288: 33555457,
          304: 34603009,
          320: 1048577,
          336: 33555456,
          352: 34604032,
          368: 1049601,
          384: 1025,
          400: 34604033,
          416: 1049600,
          432: 1,
          448: 0,
          464: 34603008,
          480: 33554433,
          496: 1024,
          264: 1049600,
          280: 33555457,
          296: 34603009,
          312: 1,
          328: 33554432,
          344: 1048576,
          360: 1025,
          376: 34604032,
          392: 33554433,
          408: 34603008,
          424: 0,
          440: 34604033,
          456: 1049601,
          472: 1024,
          488: 33555456,
          504: 1048577
        },
        {
          0: 134219808,
          1: 131072,
          2: 134217728,
          3: 32,
          4: 131104,
          5: 134350880,
          6: 134350848,
          7: 2048,
          8: 134348800,
          9: 134219776,
          10: 133120,
          11: 134348832,
          12: 2080,
          13: 0,
          14: 134217760,
          15: 133152,
          2147483648: 2048,
          2147483649: 134350880,
          2147483650: 134219808,
          2147483651: 134217728,
          2147483652: 134348800,
          2147483653: 133120,
          2147483654: 133152,
          2147483655: 32,
          2147483656: 134217760,
          2147483657: 2080,
          2147483658: 131104,
          2147483659: 134350848,
          2147483660: 0,
          2147483661: 134348832,
          2147483662: 134219776,
          2147483663: 131072,
          16: 133152,
          17: 134350848,
          18: 32,
          19: 2048,
          20: 134219776,
          21: 134217760,
          22: 134348832,
          23: 131072,
          24: 0,
          25: 131104,
          26: 134348800,
          27: 134219808,
          28: 134350880,
          29: 133120,
          30: 2080,
          31: 134217728,
          2147483664: 131072,
          2147483665: 2048,
          2147483666: 134348832,
          2147483667: 133152,
          2147483668: 32,
          2147483669: 134348800,
          2147483670: 134217728,
          2147483671: 134219808,
          2147483672: 134350880,
          2147483673: 134217760,
          2147483674: 134219776,
          2147483675: 0,
          2147483676: 133120,
          2147483677: 2080,
          2147483678: 131104,
          2147483679: 134350848
        }
      ], h = [
        4160749569,
        528482304,
        33030144,
        2064384,
        129024,
        8064,
        504,
        2147483679
      ], p = o.DES = a.extend({
        _doReset: function() {
          for (var _ = this._key, g = _.words, x = [], b = 0; b < 56; b++) {
            var C = d[b] - 1;
            x[b] = g[C >>> 5] >>> 31 - C % 32 & 1;
          }
          for (var w = this._subKeys = [], F = 0; F < 16; F++) {
            for (var P = w[F] = [], A = u[F], b = 0; b < 24; b++)
              P[b / 6 | 0] |= x[(l[b] - 1 + A) % 28] << 31 - b % 6, P[4 + (b / 6 | 0)] |= x[28 + (l[b + 24] - 1 + A) % 28] << 31 - b % 6;
            P[0] = P[0] << 1 | P[0] >>> 31;
            for (var b = 1; b < 7; b++)
              P[b] = P[b] >>> (b - 1) * 4 + 3;
            P[7] = P[7] << 5 | P[7] >>> 27;
          }
          for (var S = this._invSubKeys = [], b = 0; b < 16; b++)
            S[b] = w[15 - b];
        },
        encryptBlock: function(_, g) {
          this._doCryptBlock(_, g, this._subKeys);
        },
        decryptBlock: function(_, g) {
          this._doCryptBlock(_, g, this._invSubKeys);
        },
        _doCryptBlock: function(_, g, x) {
          this._lBlock = _[g], this._rBlock = _[g + 1], f.call(this, 4, 252645135), f.call(this, 16, 65535), v.call(this, 2, 858993459), v.call(this, 8, 16711935), f.call(this, 1, 1431655765);
          for (var b = 0; b < 16; b++) {
            for (var C = x[b], w = this._lBlock, F = this._rBlock, P = 0, A = 0; A < 8; A++)
              P |= c[A][((F ^ C[A]) & h[A]) >>> 0];
            this._lBlock = F, this._rBlock = w ^ P;
          }
          var S = this._lBlock;
          this._lBlock = this._rBlock, this._rBlock = S, f.call(this, 1, 1431655765), v.call(this, 8, 16711935), v.call(this, 2, 858993459), f.call(this, 16, 65535), f.call(this, 4, 252645135), _[g] = this._lBlock, _[g + 1] = this._rBlock;
        },
        keySize: 64 / 32,
        ivSize: 64 / 32,
        blockSize: 64 / 32
      });
      function f(_, g) {
        var x = (this._lBlock >>> _ ^ this._rBlock) & g;
        this._rBlock ^= x, this._lBlock ^= x << _;
      }
      function v(_, g) {
        var x = (this._rBlock >>> _ ^ this._lBlock) & g;
        this._lBlock ^= x, this._rBlock ^= x << _;
      }
      i.DES = a._createHelper(p);
      var y = o.TripleDES = a.extend({
        _doReset: function() {
          var _ = this._key, g = _.words;
          if (g.length !== 2 && g.length !== 4 && g.length < 6)
            throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
          var x = g.slice(0, 2), b = g.length < 4 ? g.slice(0, 2) : g.slice(2, 4), C = g.length < 6 ? g.slice(0, 2) : g.slice(4, 6);
          this._des1 = p.createEncryptor(n.create(x)), this._des2 = p.createEncryptor(n.create(b)), this._des3 = p.createEncryptor(n.create(C));
        },
        encryptBlock: function(_, g) {
          this._des1.encryptBlock(_, g), this._des2.decryptBlock(_, g), this._des3.encryptBlock(_, g);
        },
        decryptBlock: function(_, g) {
          this._des3.decryptBlock(_, g), this._des2.encryptBlock(_, g), this._des1.decryptBlock(_, g);
        },
        keySize: 192 / 32,
        ivSize: 64 / 32,
        blockSize: 64 / 32
      });
      i.TripleDES = a._createHelper(y);
    }(), function() {
      var i = t, s = i.lib, n = s.StreamCipher, a = i.algo, o = a.RC4 = n.extend({
        _doReset: function() {
          for (var u = this._key, c = u.words, h = u.sigBytes, p = this._S = [], f = 0; f < 256; f++)
            p[f] = f;
          for (var f = 0, v = 0; f < 256; f++) {
            var y = f % h, _ = c[y >>> 2] >>> 24 - y % 4 * 8 & 255;
            v = (v + p[f] + _) % 256;
            var g = p[f];
            p[f] = p[v], p[v] = g;
          }
          this._i = this._j = 0;
        },
        _doProcessBlock: function(u, c) {
          u[c] ^= d.call(this);
        },
        keySize: 256 / 32,
        ivSize: 0
      });
      function d() {
        for (var u = this._S, c = this._i, h = this._j, p = 0, f = 0; f < 4; f++) {
          c = (c + 1) % 256, h = (h + u[c]) % 256;
          var v = u[c];
          u[c] = u[h], u[h] = v, p |= u[(u[c] + u[h]) % 256] << 24 - f * 8;
        }
        return this._i = c, this._j = h, p;
      }
      i.RC4 = n._createHelper(o);
      var l = a.RC4Drop = o.extend({
        /**
         * Configuration options.
         *
         * @property {number} drop The number of keystream words to drop. Default 192
         */
        cfg: o.cfg.extend({
          drop: 192
        }),
        _doReset: function() {
          o._doReset.call(this);
          for (var u = this.cfg.drop; u > 0; u--)
            d.call(this);
        }
      });
      i.RC4Drop = n._createHelper(l);
    }(), function() {
      var i = t, s = i.lib, n = s.StreamCipher, a = i.algo, o = [], d = [], l = [], u = a.Rabbit = n.extend({
        _doReset: function() {
          for (var h = this._key.words, p = this.cfg.iv, f = 0; f < 4; f++)
            h[f] = (h[f] << 8 | h[f] >>> 24) & 16711935 | (h[f] << 24 | h[f] >>> 8) & 4278255360;
          var v = this._X = [
            h[0],
            h[3] << 16 | h[2] >>> 16,
            h[1],
            h[0] << 16 | h[3] >>> 16,
            h[2],
            h[1] << 16 | h[0] >>> 16,
            h[3],
            h[2] << 16 | h[1] >>> 16
          ], y = this._C = [
            h[2] << 16 | h[2] >>> 16,
            h[0] & 4294901760 | h[1] & 65535,
            h[3] << 16 | h[3] >>> 16,
            h[1] & 4294901760 | h[2] & 65535,
            h[0] << 16 | h[0] >>> 16,
            h[2] & 4294901760 | h[3] & 65535,
            h[1] << 16 | h[1] >>> 16,
            h[3] & 4294901760 | h[0] & 65535
          ];
          this._b = 0;
          for (var f = 0; f < 4; f++)
            c.call(this);
          for (var f = 0; f < 8; f++)
            y[f] ^= v[f + 4 & 7];
          if (p) {
            var _ = p.words, g = _[0], x = _[1], b = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, C = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, w = b >>> 16 | C & 4294901760, F = C << 16 | b & 65535;
            y[0] ^= b, y[1] ^= w, y[2] ^= C, y[3] ^= F, y[4] ^= b, y[5] ^= w, y[6] ^= C, y[7] ^= F;
            for (var f = 0; f < 4; f++)
              c.call(this);
          }
        },
        _doProcessBlock: function(h, p) {
          var f = this._X;
          c.call(this), o[0] = f[0] ^ f[5] >>> 16 ^ f[3] << 16, o[1] = f[2] ^ f[7] >>> 16 ^ f[5] << 16, o[2] = f[4] ^ f[1] >>> 16 ^ f[7] << 16, o[3] = f[6] ^ f[3] >>> 16 ^ f[1] << 16;
          for (var v = 0; v < 4; v++)
            o[v] = (o[v] << 8 | o[v] >>> 24) & 16711935 | (o[v] << 24 | o[v] >>> 8) & 4278255360, h[p + v] ^= o[v];
        },
        blockSize: 128 / 32,
        ivSize: 64 / 32
      });
      function c() {
        for (var h = this._X, p = this._C, f = 0; f < 8; f++)
          d[f] = p[f];
        p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
        for (var f = 0; f < 8; f++) {
          var v = h[f] + p[f], y = v & 65535, _ = v >>> 16, g = ((y * y >>> 17) + y * _ >>> 15) + _ * _, x = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
          l[f] = g ^ x;
        }
        h[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, h[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, h[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, h[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, h[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, h[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, h[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, h[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
      }
      i.Rabbit = n._createHelper(u);
    }(), function() {
      var i = t, s = i.lib, n = s.StreamCipher, a = i.algo, o = [], d = [], l = [], u = a.RabbitLegacy = n.extend({
        _doReset: function() {
          var h = this._key.words, p = this.cfg.iv, f = this._X = [
            h[0],
            h[3] << 16 | h[2] >>> 16,
            h[1],
            h[0] << 16 | h[3] >>> 16,
            h[2],
            h[1] << 16 | h[0] >>> 16,
            h[3],
            h[2] << 16 | h[1] >>> 16
          ], v = this._C = [
            h[2] << 16 | h[2] >>> 16,
            h[0] & 4294901760 | h[1] & 65535,
            h[3] << 16 | h[3] >>> 16,
            h[1] & 4294901760 | h[2] & 65535,
            h[0] << 16 | h[0] >>> 16,
            h[2] & 4294901760 | h[3] & 65535,
            h[1] << 16 | h[1] >>> 16,
            h[3] & 4294901760 | h[0] & 65535
          ];
          this._b = 0;
          for (var y = 0; y < 4; y++)
            c.call(this);
          for (var y = 0; y < 8; y++)
            v[y] ^= f[y + 4 & 7];
          if (p) {
            var _ = p.words, g = _[0], x = _[1], b = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, C = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, w = b >>> 16 | C & 4294901760, F = C << 16 | b & 65535;
            v[0] ^= b, v[1] ^= w, v[2] ^= C, v[3] ^= F, v[4] ^= b, v[5] ^= w, v[6] ^= C, v[7] ^= F;
            for (var y = 0; y < 4; y++)
              c.call(this);
          }
        },
        _doProcessBlock: function(h, p) {
          var f = this._X;
          c.call(this), o[0] = f[0] ^ f[5] >>> 16 ^ f[3] << 16, o[1] = f[2] ^ f[7] >>> 16 ^ f[5] << 16, o[2] = f[4] ^ f[1] >>> 16 ^ f[7] << 16, o[3] = f[6] ^ f[3] >>> 16 ^ f[1] << 16;
          for (var v = 0; v < 4; v++)
            o[v] = (o[v] << 8 | o[v] >>> 24) & 16711935 | (o[v] << 24 | o[v] >>> 8) & 4278255360, h[p + v] ^= o[v];
        },
        blockSize: 128 / 32,
        ivSize: 64 / 32
      });
      function c() {
        for (var h = this._X, p = this._C, f = 0; f < 8; f++)
          d[f] = p[f];
        p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
        for (var f = 0; f < 8; f++) {
          var v = h[f] + p[f], y = v & 65535, _ = v >>> 16, g = ((y * y >>> 17) + y * _ >>> 15) + _ * _, x = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
          l[f] = g ^ x;
        }
        h[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, h[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, h[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, h[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, h[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, h[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, h[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, h[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
      }
      i.RabbitLegacy = n._createHelper(u);
    }(), t;
  });
})(gh);
var bh = 1024 * 1024;
function _h(r, e, t, i) {
  var s = 0, n, a = 0;
  r.size === 0 && i();
  var o = 0, d = [];
  function l(c, h, p, f, v) {
    if (o !== c.offset) {
      d.push({ offset: c.offset, size: c.size, result: c.result });
      return;
    }
    function y(g, x, b) {
      o = g + x, f(b), g + x >= h.size && (o = 0, v());
    }
    y(c.offset, c.size, c.result);
    for (var _ = [{}]; _.length > 0; )
      _ = d.filter(function(g) {
        return g.offset === o;
      }), _.forEach(function(g) {
        y(g.offset, g.size, g.result), d.remove(g);
      });
  }
  for (Array.prototype.remove = Array.prototype.remove || function(c) {
    for (var h = this.length; h--; )
      this[h] === c && this.splice(h, 1);
  }; s < r.size; ) {
    n = r.slice(s, s + e);
    var u = new FileReader();
    u.size = e, u.offset = s, u.index = a, u.onload = function(c) {
      l(this, r, c, t, i);
    }, u.readAsArrayBuffer(n), s += e, a += 1;
  }
}
class wh extends Di {
  constructor(t, i) {
    super(t, i);
    Ir(this, "hashFile", (t, i) => {
      var s = t.data;
      if (s === void 0)
        return;
      var n = Or.algo.SHA256.create(), a = 0, o = this.uppy;
      const d = this.model_type;
      var l = new Promise((u, c) => {
        _h(
          s,
          bh,
          function(h) {
            var p = Or.lib.WordArray.create(h);
            n.update(p), a += h.byteLength, o.emit("preprocess-progress", t, {
              mode: "determinate",
              message: "Calculating sha256 of the model file.",
              value: a / s.size
            });
          },
          async function(h) {
            var p = n.finalize().toString();
            const v = await (await fetch(`${i}?` + new URLSearchParams({
              model_type: d,
              hash_str: p,
              is_public: !0
            }), {
              method: "GET",
              // *GET, POST, PUT, DELETE, etc.
              mode: "cors",
              // no-cors, *cors, same-origin
              cache: "no-cache",
              // *default, no-cache, reload, force-cache, only-if-cached
              credentials: "same-origin",
              // include, *same-origin, omit
              redirect: "follow",
              // manual, *follow, error
              referrerPolicy: "no-referrer"
            })).json();
            u(v.model_exists);
          }
        );
      });
      return l;
    });
    Ir(this, "prepareUpload", (t) => {
      const i = t.map((n) => {
        const a = this.uppy.getFile(n);
        return this.hashFile(a, this.verification_endpoint).then((o) => {
          o && (this.uppy.removeFile(n), this.uppy.info(`${a.name} exists, skipped.`));
        });
      }), s = () => {
        var n = this.uppy.getFiles();
        n.forEach((a) => {
          this.uppy.emit("preprocess-complete", a);
        });
      };
      return Promise.all(i).then(s);
    });
    this.id = i.id || "HashModel", this.type = "sha256", this.model_type = i.model_type, this.verification_endpoint = i.verification_endpoint;
  }
  install() {
    this.uppy.addPreProcessor(this.prepareUpload);
  }
  uninstall() {
    this.uppy.removePreProcessor(this.prepareUpload);
  }
}
function Fh(r, e, t, i = null) {
  const s = r.getAttribute("model_type"), n = r.getAttribute("max_model_size_mb"), a = r.getAttribute("min_model_size_mb"), o = r.getAttribute("uppy_dashboard_title"), d = new Ws({
    id: r.id,
    restrictions: { allowedFileTypes: [".ckpt", ".safetensors", ".bin", ".pt"] },
    onBeforeFileAdded: (l, u) => a && l.size / 1e6 < a ? (d.info(`File size is too small. It's probably not ${s}`, "warning"), !1) : n && l.size / 1e6 > n ? (d.info(`File size is too big. It's probably not ${s}`, "warning"), !1) : !0,
    autoProceed: !1
  }).use(Da, { trigger: `#${r.id}`, theme: "dark", note: o, closeModalOnClickOutside: !0 }).use(wh, { model_type: s, verification_endpoint: t }).use(lo, { endpoint: e, headers: { "model-type": s } });
  return d.on("complete", (l) => {
    l.successful.length > 0 && typeof i == "function" && i(l.successful);
  }), d;
}
export {
  Fh as setup_uppy_for_upload_button
};
