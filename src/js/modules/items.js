// vendor libs
import Swiper from "swiper/bundle";

// vendor styles
import "../../../node_modules/swiper/swiper.css";

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

class Items {
  constructor() {
    window.addEventListener("load", () => {
      this.init();
    });
  }

  init() {
    const tabsList = document.querySelector("[tabs-list]");
    const itemsList = document.querySelector("[items-list]");
    const previewList = document.querySelector("[preview-list]");

    this.createTabs(items, tabsList);
    this.createGalleryItems(items, itemsList);
    this.createPreviewItems(items, previewList);
  }

  createTabs(items, tabsList) {
    const categories = [...new Set(items.map((item) => item.type))];

    const categoryItems = categories.map((category) =>
      items.find((item) => item.type === category)
    );

    categoryItems.forEach((item) => {
      const parentItem = document.createElement("div");
      parentItem.className = "tab";
      parentItem.setAttribute("swiper-item-type", item.type);

      const tabElement = document.createElement("div");
      tabElement.className =
        item.type !== "content" ? `swiper-tab` : `swiper-tab swiper-tab-green`;
      tabElement.innerHTML = `
                  <div class="swiper-tab-content">
                      <div class="swiper-tab-icon">
                          ${
                            item.type == "image"
                              ? `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.44999 2.40001C3.00817 2.40001 2.64999 2.75818 2.64999 3.20001V12.5333C2.64999 12.9073 2.90663 13.2214 3.25341 13.309L10.4062 6.15622C10.6145 5.94794 10.9522 5.94794 11.1605 6.15622L13.5833 8.5791V3.20001C13.5833 2.75818 13.2252 2.40001 12.7833 2.40001H3.44999ZM14.65 9.86585V3.20001C14.65 2.16908 13.8143 1.33334 12.7833 1.33334H3.44999C2.41906 1.33334 1.58333 2.16908 1.58333 3.20001V12.5333C1.58333 13.5643 2.41906 14.4 3.44999 14.4H12.7833C13.8143 14.4 14.65 13.5643 14.65 12.5333V9.8675C14.65 9.86695 14.65 9.8664 14.65 9.86585ZM13.5833 10.0876L10.7833 7.28759L4.73758 13.3333H12.7833C13.2252 13.3333 13.5833 12.9752 13.5833 12.5333V10.0876ZM5.78333 5.06668C5.5256 5.06668 5.31666 5.27561 5.31666 5.53334C5.31666 5.79108 5.5256 6.00001 5.78333 6.00001C6.04106 6.00001 6.25 5.79108 6.25 5.53334C6.25 5.27561 6.04106 5.06668 5.78333 5.06668ZM4.24999 5.53334C4.24999 4.68651 4.93649 4.00001 5.78333 4.00001C6.63017 4.00001 7.31666 4.68651 7.31666 5.53334C7.31666 6.38018 6.63017 7.06668 5.78333 7.06668C4.93649 7.06668 4.24999 6.38018 4.24999 5.53334Z" fill="currentColor"/></svg>`
                              : ``
                          }
                            ${
                              item.type == "video"
                                ? `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.55774 2.59975C3.16672 2.59975 2.84974 2.91673 2.84974 3.30775V4.39998H4.64973V2.59975H3.55774ZM3.55774 1.39975C2.50398 1.39975 1.64974 2.25399 1.64974 3.30775V12.6917C1.64974 13.7455 2.50398 14.5997 3.55774 14.5997H12.9417C13.9955 14.5997 14.8497 13.7455 14.8497 12.6917V8.0055C14.8497 8.00351 14.8497 8.00151 14.8497 7.99952C14.8497 7.99752 14.8497 7.99552 14.8497 7.99353V5.0061C14.8497 5.00406 14.8497 5.00203 14.8497 4.99998C14.8497 4.99794 14.8497 4.99591 14.8497 4.99387V3.30775C14.8497 2.25399 13.9955 1.39975 12.9417 1.39975H3.55774ZM5.84973 2.59975V4.994C5.84975 4.99599 5.84976 4.99799 5.84976 4.99998C5.84976 5.00198 5.84975 5.00398 5.84973 5.00597V7.39952H10.6497V2.59975H5.84973ZM11.8497 2.59975V4.39998H13.6497V3.30775C13.6497 2.91673 13.3327 2.59975 12.9417 2.59975H11.8497ZM13.6497 5.59998H11.8497V7.39952H13.6497V5.59998ZM13.6497 8.59952H11.8497V10.3997H13.6497V8.59952ZM13.6497 11.5998H11.8497V13.3997H12.9417C13.3327 13.3997 13.6497 13.0828 13.6497 12.6917V11.5998ZM10.6497 13.3997V8.59952H5.84973V13.3997H10.6497ZM4.64973 13.3997V11.5998H2.84974V12.6917C2.84974 13.0828 3.16672 13.3997 3.55774 13.3997H4.64973ZM2.84974 10.3997H4.64973V8.59952H2.84974V10.3997ZM2.84974 7.39952H4.64973V5.59998H2.84974V7.39952Z" fill="currentColor" /></svg>`
                                : ``
                            }
                            ${
                              item.type == "interior"
                                ? `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.38137 0.860764C8.59804 0.692245 8.90144 0.692245 9.1181 0.860764L15.1181 5.52743C15.2643 5.6411 15.3497 5.81589 15.3497 6.00104V13.3344C15.3497 13.8471 15.146 14.3389 14.7835 14.7014C14.4209 15.064 13.9292 15.2677 13.4164 15.2677H4.08307C3.57032 15.2677 3.07857 15.064 2.716 14.7014C2.35343 14.3389 2.14974 13.8471 2.14974 13.3344V6.00104C2.14974 5.81589 2.23522 5.6411 2.38137 5.52743L8.38137 0.860764ZM3.34974 6.29449V13.3344C3.34974 13.5289 3.427 13.7154 3.56453 13.8529C3.70205 13.9904 3.88858 14.0677 4.08307 14.0677H6.14974V8.00078C6.14974 7.66941 6.41837 7.40078 6.74974 7.40078H10.7497C11.0811 7.40078 11.3497 7.66941 11.3497 8.00078V14.0677H13.4164C13.6109 14.0677 13.7974 13.9904 13.935 13.8529C14.0725 13.7154 14.1497 13.5289 14.1497 13.3344V6.29449L8.74974 2.09449L3.34974 6.29449ZM10.1497 14.0677V8.60078H7.34974V14.0677H10.1497Z" fill="currentColor" /></svg>`
                                : ``
                            }
                          ${
                            item.type == "content"
                              ? `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.92922 3.20185C5.80157 3.29049 5.79803 3.32264 5.79803 4.39304C5.79803 5.3844 5.80871 5.50267 5.90597 5.58997C5.96534 5.64325 6.05959 5.68687 6.11542 5.68687C6.23629 5.68687 8.68988 4.47021 8.68988 4.41025C8.68988 4.35504 6.25281 3.11069 6.14469 3.11069C6.09831 3.11069 6.00134 3.15173 5.92922 3.20185ZM10.0329 3.74132C9.35956 4.08683 8.80845 4.38695 8.80827 4.4082C8.80768 4.47015 11.2651 5.68687 11.3907 5.68687C11.4533 5.68687 11.5484 5.63868 11.6021 5.57978C11.6856 5.48821 11.6998 5.31484 11.6998 4.38285C11.6998 3.32299 11.6962 3.29049 11.5686 3.20185C11.4965 3.15173 11.3969 3.11127 11.3473 3.11192C11.2977 3.11262 10.7062 3.39588 10.0329 3.74132ZM1.32296 4.53426C1.20528 4.65856 1.19466 4.73075 1.19466 5.40507V6.14028L2.1832 6.1706C3.3423 6.20614 3.83085 6.31183 4.64718 6.70352C6.56608 7.62427 7.64061 9.4156 7.91664 12.1541C7.9861 12.8434 8.03709 12.8885 8.7489 12.8885C9.46071 12.8885 9.5117 12.8434 9.58117 12.1541C9.85814 9.4064 10.9465 7.60419 12.8839 6.68531C13.673 6.31107 14.1708 6.20568 15.3146 6.1706L16.3031 6.14028V5.39681C16.3031 4.31938 16.4619 4.39878 14.3075 4.39878H12.585L12.5847 4.94036C12.5843 5.64547 12.5141 5.87745 12.2098 6.17933C11.9226 6.46429 11.5322 6.60188 11.191 6.53835C11.0709 6.51599 10.4723 6.2493 9.86073 5.94566L8.7489 5.39353L7.63707 5.94566C7.02553 6.2493 6.42692 6.51599 6.30682 6.53835C5.96563 6.60188 5.57523 6.46429 5.288 6.17933C4.9837 5.87745 4.91353 5.64547 4.91312 4.94036L4.91276 4.39878H3.18201H1.45132L1.32296 4.53426ZM2.19795 7.04908C2.19795 7.06723 2.33735 7.1831 2.50774 7.30664C3.68089 8.1569 5.59028 9.92656 6.46185 10.9713C6.72395 11.2854 6.94757 11.5333 6.95884 11.5222C6.99343 11.4878 6.69143 10.3609 6.55616 10.0195C5.99975 8.61528 4.95821 7.63101 3.58487 7.21167C3.19789 7.09346 2.19795 6.97631 2.19795 7.04908ZM14.267 7.1225C12.7286 7.45817 11.5447 8.48934 10.941 10.0195C10.8059 10.3622 10.5046 11.4881 10.539 11.5222C10.5502 11.5333 10.7739 11.2854 11.036 10.9713C11.9075 9.92656 13.8169 8.1569 14.9901 7.30664C15.1605 7.1831 15.2998 7.07116 15.2998 7.05781C15.2998 7.00564 14.6026 7.04932 14.267 7.1225Z" fill="currentColor"/></svg>`
                              : ``
                          }
                      </div>
                      <div class="swiper-tab-title">${item.typeName}</div>
                  </div>
              `;

      parentItem.appendChild(tabElement);
      tabsList.appendChild(parentItem);
    });
  }

  createGalleryItems(items, itemsList) {
    items.forEach((item) => {
      const parentItem = document.createElement("div");

      parentItem.className = "swiper-slide";
      parentItem.innerHTML = `
                  <div class="${
                    item.type != "video" ? `card-photo` : `card-video`
                  }" item-id="${item.id}">
                      ${
                        item.type != "video"
                          ? `<img data-src="${item.link}" class="lazyload" />`
                          : `<iframe data-src="${item.link}" class="lazyload" width="100%" height="100%" autoplay="false" encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>`
                      }
                  </div>
              `;

      parentItem.setAttribute("swiper-slide-type", item.type);

      itemsList.appendChild(parentItem);
    });
  }

  createPreviewItems(items, previewList) {
    items.forEach((item) => {
      const parentItem = document.createElement("div");

      parentItem.className = "swiper-slide";
      parentItem.innerHTML = `
                  <div class="${
                    item.type != "video"
                      ? `preview-item`
                      : `preview-item preview-item-video`
                  }" item-id="${item.id}">
                      <div class="preview-item-inner">
                          ${
                            item.type != "video"
                              ? `<img data-src="${item.link}" class="lazyload" />`
                              : `<iframe data-src="${item.link}" class="lazyload" width="100%" height="100%" autoplay="false" encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>`
                          }
                      </div>
                  </div>
              `;

      previewList.appendChild(parentItem);

      parentItem.setAttribute("swiper-slide-type", item.type);

      this.swiper();
    });
  }

  swiper() {
    const tabs = document.querySelectorAll("[tabs-list] [swiper-item-type]");

    if ($(".section-view-inner").length) {
      //   var swiperTabs = new Swiper(".swiper-tabs", {
      //     direction: "horizontal",
      //     slidesPerView: 4,
      //     spaceBetween: 0,
      //     centeredSlides: false,
      //     slideToClickedSlide: true,
      //     scrollbar: {
      //       enabled: false,
      //     },
      //     pagination: {
      //       enabled: false,
      //     },
      //     navigation: {
      //       enabled: false,
      //     },
      //     allowTouchMove: false,
      //   });

      var swiperGallery = new Swiper(".swiper-gallery", {
        direction: "horizontal",
        rewind: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        scrollbar: {
          enabled: false,
        },
        pagination: {
          enabled: false,
        },
        navigation: {
          enabled: false,
        },
        allowTouchMove: true,
        grabCursor: true,
        on: {
          slideChange: function () {
            let activeSlide = swiperGallery.slides[swiperGallery.activeIndex],
              category = activeSlide.getAttribute("swiper-slide-type");

            tabs.forEach((tab) => {
              if (tab.getAttribute("swiper-item-type") == category) {
                tab.classList.add("active");
              } else {
                tab.classList.remove("active");
              }
            });
          },
        },
      });

      var swiperThumbs = new Swiper(".swiper-thumbs", {
        direction: "horizontal",
        rewind: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        spaceBetween: 6,
        slideToClickedSlide: true,
        centeredSlides: true,
        grid: {
          fill: "row",
        },
        scrollbar: {
          enabled: false,
        },
        pagination: {
          enabled: false,
        },
        navigation: {
          enabled: true,
          nextEl: ".swiper-thumbs .swiper-button-next",
          prevEl: ".swiper-thumbs .swiper-button-prev",
        },
        allowTouchMove: true,
        on: {
          slideChange: function () {
            let activeSlide = swiperGallery.slides[swiperGallery.activeIndex],
              category = activeSlide.getAttribute("swiper-slide-type");

            tabs.forEach((tab) => {
              if (tab.getAttribute("swiper-item-type") == category) {
                tab.classList.add("active");
              } else {
                tab.classList.remove("active");
              }
            });
          },
        },
      });

      setTimeout(function () {
        if (swiperGallery.update || swiperThumbs.update) {
          swiperGallery.update();
          swiperThumbs.update();

          swiperGallery.controller.control = swiperThumbs;
          swiperThumbs.controller.control = swiperGallery;
          // swiperGallery.sync(swiperThumbs);
        }
      }, 500);

      // tabs part
      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          let slides = swiperGallery.slides,
            category = tab.getAttribute("swiper-item-type"),
            firstSlideIndex = -1;

          slides.forEach((slide, index) => {
            if (slide.getAttribute("swiper-slide-type") == category) {
              firstSlideIndex = index;

              return;
            }
          });

          if (firstSlideIndex !== -1) {
            swiperGallery.slideTo(firstSlideIndex);
          } else {
            console.log("No slides found for this category.");
          }
        });
      });

      //   don't remove this part
      //   swiperThumbs.on("click", ".swiper-button-next", () => {
      //     let activeIndex = swiperGallery.activeIndex;

      //     swiperThumbs.slideTo(activeIndex + 1);
      //   });

      //   swiperThumbs.on("click", ".swiper-button-prev", () => {
      //     let activeIndex = swiperGallery.activeIndex;

      //     swiperThumbs.slideTo(activeIndex - 1);
      //   });

      //   swiperThumbs.on("click", ".swiper-slide", () => {
      //     let clickedIndex = swiperThumbs.clickedIndex;

      //     swiperThumbs.slideTo(clickedIndex);
      //   });

      $(window).on("resize", () => {
        swiperGallery.onResize();
        swiperThumbs.onResize();
      });
    }
  }
}

new Items();
