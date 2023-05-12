function openWorkSpaceDialog() {
    popup(initDomPage(), 'gallery');
    initalTab();
    initLoadMore();
    getPageDataAndUpdateList({tabname: currentModelTab, model_type: currentModelType.personal, page: 1, loading: false, model_workspace: 'personal'});
    getPageDataAndUpdateList({tabname: currentModelTab, model_type: currentModelType.public, page: 1, loading: false, model_workspace: 'public'});
}


async function handleModelData({response, model_type, model_workspace}) {
    const cardsParentNode = model_workspace === 'personal' ? gradioApp().querySelector(`#${model_workspace}-${model_type}`)
         : gradioApp().querySelector(`#${model_workspace}-${model_type}-cards`);
    const { model_list, page: resPage, total_count: totalCount, allow_negative_prompt } = await response.json();

    // remove child node
    const cards = cardsParentNode.querySelectorAll(".card");
    cards.forEach(card => {
        cardsParentNode.removeChild(card);
    })

    if (model_list.length  === 0) {
        const cardNode = document.createElement('div');
        cardNode.className = 'card card-no-model';
        cardsParentNode.appendChild(cardNode);
    }

    const operateButtonName = model_workspace === 'personal' ? "Remove from workspace" : "Add to workspace";
    
    // add new child
    model_list.forEach(item => {
        const cardNode = document.createElement('div');
        cardNode.className = 'card';
        
        cardNode.setAttribute('filename', item.name);
        if (item.preview) {
            cardNode.style.backgroundImage = `url(${item.preview})`;
        }

        cardNode.innerHTML = `
            <div class="metadata-button" title="Show metadata" onclick="extraNetworksRequestMetadata(event, '${model_type}', '${item.name}')"></div>
            <div class="operation-button" onclick="handleModelAddOrRemoved('${item.name}', '${model_type}', '${model_workspace}')">${operateButtonName}</div>
            <div class="actions">
                <span class="name">${item.name}</span>
                <span class="description"></span>
            </div>

        `
        cardsParentNode.appendChild(cardNode);
    })
}

async function getPageDataAndUpdateList({tabname, model_type, page, need_refresh = false, loading=true, model_workspace}) {
    const searchValue = gradioApp().querySelector('#'+tabname+'_extra_tabs textarea').value.toLowerCase();

    const promise = fetch(`/sd_extra_networks/update_page?model_type=${model_type}&page=${page}&search_value=${searchValue}&page_size=${pageSize}&need_refresh=${need_refresh}`, {
        method: "GET", cache: "no-cache"});
    
    // loading
    if (loading) {
        notifier.asyncBlock(promise, (response) => {
            handleModelData({response, tabname, model_type, model_workspace })
        });
    } else {
        const response = await promise;
        handleModelData({ response, tabname, model_type, model_workspace })
    }
}

function initDomPage() {
    const fragment = new DocumentFragment();

    const galleryContainerNode = document.createElement('div');
    galleryContainerNode.className = 'gallery-container';

    galleryContainerNode.innerHTML = `
        <div class="personal-workspace">
            <div class="personal-workspace-top">
                <span>Personal Workspace</span>
                <div class="personal-workspace-top-mature">
                    <span>Mature Level</span>
                    <select>
                        <option value="0">None</option>
                        <option value="1">Soft</option>
                        <option value="2">Mature</option>
                    </select>
                </div>
            </div>
            <div class="personal-workspace-model-list">
                <ul personal-data-tabs>
                    <li><a data-tabby-default href="#personal-checkpoints">Checkpoints</a></li>
                    <li><a href="#personal-textual_inversion">Textual Inversion</a></li>
                    <li><a href="#personal-hypernetworks">Hypernetworks</a></li>
                    <li><a href="#personal-lora">Lora</a></li>
                </ul>
                <div class="gallery-cards">
                    <div id="personal-checkpoints" class="extra-network-cards" id="personal-checkpoints-cards"><div class="card"></div></div>
                    <div id="personal-textual_inversion" class="extra-network-cards" id="personal-textual_inversion-cards"><div class="card"></div></div>
                    <div id="personal-hypernetworks" class="extra-network-cards" id="personal-hypernetworks-cards"><div class="card"></div></div>
                    <div id="personal-lora" class="extra-network-cards" id="personal-lora-cards"><div class="card"></div></div>
                </div>
            </div>
        </div>
        <div class="public-workspace">
            <div class="public-workspace-top">
                <input id="gallery-search" class="scroll-hide search" placeholder="Search with model names, hashes, tags, trigger words"></input>
                <div class="search-btn"><button class="upload-btn" onclick="uploadModel()">Upload Models</button></div>
            </div>
            <div class="public-workspace-model-list">
                <ul public-data-tabs>
                    <li><a data-tabby-default href="#public-checkpoints">Checkpoints</a></li>
                    <li><a href="#public-textual_inversion">Textual Inversion</a></li>
                    <li><a href="#public-hypernetworks">Hypernetworks</a></li>
                    <li><a href="#public-lora">Lora</a></li>
                </ul>
                <div class="gallery-cards">
                    <p>Public Models</p>
                    <div id="public-checkpoints" class="scrollload-container"><div id="public-checkpoints-cards" class="extra-network-cards scrollload-content"><div class="card"></div></div></div>
                    <div id="public-textual_inversion" class="scrollload-container"><div id="public-textual_inversion-cards" class="scrollload-content"><div class="card"></div></div></div>
                    <div id="public-hypernetworks" class="scrollload-container"><div id="public-hypernetworks-cards" class="extra-network-cards scrollload-content"><div class="card"></div></div></div>
                    <div id="public-lora" class="scrollload-container"><div id="public-lora-cards" class="extra-network-cards scrollload-content"><div class="card"></div></div></div>
                </div>
            </div>
        </div>
    `
    fragment.appendChild(galleryContainerNode);

    return fragment;
}

function handleModelAddOrRemoved(model_name, model_type, model_workspace) {
    if (model_workspace === 'personal') {
        console.log('remove')
    } else {
        console.log('add');
    }
}

function uploadModel() {
    gradioApp().querySelector(`#${currentModelTab}_${currentModelType.public}_upload_button-card`).click();
}

let currentModelTab = 'txt2img';

const currentModelType = {
    personal: 'checkpoints',
    public: 'checkpoints'
}

function initalTab () {
    currentModelTab = gradioApp().querySelector("#tabs > div.tab-nav > button.selected").textContent.trim();
    new Tabby('[personal-data-tabs]', {
        default: '[data-tabby-default]' // The selector to use for the default tab
    });

    new Tabby('[public-data-tabs]', {
        default: '[data-tabby-default]' // The selector to use for the default tab
    });

    document.addEventListener('tabby', function (event) {
        const content = event.detail.content;
        const [type, modelType] = content.id.split('-');
        currentModelType[type] = modelType;

        if (type === 'public') {
            gallertModelScrollloads.forEach((scrollload, index) => {
                index === defaultModelType.findIndex(item => item === modelType) ? scrollload.unLock() : scrollload.lock()
            })
        }
        
        getPageDataAndUpdateList({tabname: currentModelTab, model_type: currentModelType[type], page: 1, model_workspace: type});
    }, false);

    const gallerySearchBtn = gradioApp().querySelector('#gallery-search');

    gallerySearchBtn.addEventListener("input", function(evt){
        console.log(33333)
        // fetchPageDataAndUpdateList({tabname, model_type, page: 1, loading: false});
    });
}

const gallertModelPages = [1, 1, 1];
const gallertModelScrollloads = [];
const defaultModelType = ['checkpoints', 'textual_inversion', 'hypernetworks', 'lora'];

function initLoadMore() {
    const scrollerContainerList = gradioApp().querySelectorAll('.scrollload-container');
    Array.prototype.slice.call(scrollerContainerList).forEach((container, index) => {
        gallertModelScrollloads.push(
            new Scrollload({
                useLocalScrollFix: true,
                container: container,
                loadMore: function(sl) {
                    console.log(111111)
                    if (gallertModelPages[index] === 1) {
                      // call noMoreData when on the last page
                      sl.noMoreData()
                      return
                    }
                    // success: function(data) {
                    //     $(sl.contentDom).append(getData(data))

                    //     sl.unLock()
                    // },
                    // error: function(xhr, type) {
                    //     sl.throwException()
                    // }
                },
                isInitLock: index === 0 ? false : true,
                enablePullRefresh: false,
            })
        )
    })
    console.log(gallertModelScrollloads, 'gallertModelScrollloads')
}