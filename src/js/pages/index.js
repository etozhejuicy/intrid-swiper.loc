// vendor libs
import Swiper from "swiper/bundle";

// vendor styles
import "../../../node_modules/swiper/swiper.css";

import "../../scss/pages/index.scss";

import "../modules/items";

const app = document.getElementById("app");

class Main {
  constructor() {
    window.addEventListener("DOMContentLoaded", () => {
      this.init();
    });
  }

  init() {
    app.innerHTML = `
        <section class="section section-content section-view">
            <div class="section-view-inner">
              <div class="section-view-tabs">
                <div class="swiper-container swiper-tabs">
                  <div class="swiper-wrapper" tabs-list=""></div>
                </div>
              </div>
              <div class="section-view-content">
                <div class="swiper-container swiper-gallery">
                  <div class="swiper-wrapper" items-list=""></div>
                </div>
              </div>
              <div class="section-view-navigate">
                <div class="swiper-container swiper-thumbs">
                  <div class="swiper-wrapper" preview-list=""></div>
                  <div class="btn btn-primary btn-icon swiper-button-prev" style="--swiper-navigation-size: 2.5rem;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);--swiper-navigation-color: var(--cl-btn-color);">
                    <i class="cl-icon-arrow-left"></i>
                  </div>
                  <div class="btn btn-primary btn-icon swiper-button-next" style="--swiper-navigation-size: 2.5rem;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);--swiper-navigation-color: var(--cl-btn-color);">
                    <i class="cl-icon-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
        </section>
        `;

    this.swipers();
  }

  swipers() {
    if ($('.section-view-inner').length) {
      var swiperTabs = new Swiper('.swiper-tabs', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 0,
        centeredSlides: false,
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
      });

      var swiperGallery = new Swiper(".swiper-gallery", {
        direction: 'horizontal',
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
      });

      var swiperThumbs = new Swiper(".swiper-thumbs", {
        direction: 'horizontal',
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
      });


      setTimeout(function () {
        if (swiperGallery.update || swiperThumbs.update) {
          swiperTabs.update();
          swiperGallery.update();
          swiperThumbs.update();
          swiperGallery.controller.control = swiperThumbs;
          swiperThumbs.controller.control = swiperGallery;
          swiperGallery.sync(swiperThumbs);
        }
      }, 500);

      var activeIndex = swiperGallery.activeIndex;

      swiperThumbs.on('click', '.swiper-button-next', () => {
        swiperThumbs.slideTo(activeIndex + 1);
      });


      swiperThumbs.on('click', '.swiper-button-prev', () => {
        swiperThumbs.slideTo(activeIndex - 1);
      });

      swiperThumbs.on('click', '.swiper-slide', () => {

        var clickedIndex = swiperThumbs.clickedIndex;

        swiperThumbs.slideTo(clickedIndex);
      });

      window.addEventListener('resize', () => {
        swiperGallery.onResize();
        swiperThumbs.onResize();
      });

    }
  }
}

new Main();
