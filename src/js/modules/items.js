import images from "../../json/items/images.json";
import videos from "../../json/items/videos.json";
import interior from "../../json/items/interior.json";
import content from "../../json/items/content.json";

// model of items
const itemsModel = [images, videos, interior, content];

// flat array of items
const items = itemsModel.flat();

// set id for items
items.forEach((item, index) => {
    item.id = index + 1;
});

function createTabs(items, tabsList) {
    const categories = [...new Set(items.map(item => item.type))];

    const categoryItems = categories.map(category => items.find(item => item.type === category));

    categoryItems.forEach((item) => {
        const parentItem = document.createElement("div");
        parentItem.className = "swiper-slide";
        parentItem.setAttribute("swiper-item-type", item.type);

        const tabElement = document.createElement("div");
        tabElement.className = item.type !== "content" ? `tab` : `tab tab-type-content`;
        tabElement.innerHTML = `
            ${item.typeName}
        `;

        parentItem.appendChild(tabElement);
        tabsList.appendChild(parentItem);
    });
}

function createGalleryItems(items, itemsList) {
    items.forEach((item) => {
        const parentItem = document.createElement("div");

        parentItem.className = "swiper-slide";
        parentItem.innerHTML = `
            <div class="${item.type != "video" ? `card-photo` : `card-video`}" item-id="${item.id}">
                ${item.type != "video" ? `<img data-src="${item.link}" class="lazyload" />` : `<iframe data-src="${item.link}" class="lazyload" width="100%" height="100%" autoplay="false" encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>`}
            </div>
        `;

        itemsList.appendChild(parentItem);
    });
}

function createPreviewItems(items, previewList) {
    items.forEach((item) => {
        const parentItem = document.createElement("div");

        parentItem.className = "swiper-slide";
        parentItem.innerHTML = `
            <div class="${item.type != "video" ? `preview-item` : `preview-item preview-item-video`}" item-id="${item.id}">
                <div class="preview-item-inner">
                    ${item.type != "video" ? `<img data-src="${item.link}" class="lazyload" />` : `<iframe data-src="${item.link}" class="lazyload" width="100%" height="100%" autoplay="false" encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>`}
                </div>
            </div>
        `;

        previewList.appendChild(parentItem);

        parentItem.setAttribute('swiper-slide-type', item.type);
    });
}

window.addEventListener('load', () => {
    const tabsList = document.querySelector("[tabs-list]");
    const itemsList = document.querySelector("[items-list]");
    const previewList = document.querySelector("[preview-list]");

    createTabs(items, tabsList);
    createGalleryItems(items, itemsList);
    createPreviewItems(items, previewList);
});