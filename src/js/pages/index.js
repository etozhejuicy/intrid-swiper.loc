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
                tabs...
              </div>
              <div class="section-view-content">
                <div class="swiper-container swiper-tabs">
                  <div class="swiper-wrapper" items-list=""></div>
                </div>
              </div>
              <div class="section-view-navigate">
                <div class="swiper-container swiper-navigate">
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
      var swiperTabs = new Swiper(".swiper-tabs", {
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

      var swiperNavigate = new Swiper(".swiper-navigate", {
        rewind: true,
        slidesPerView: "auto",
        spaceBetween: 6,
        slideToClickedSlide: true,
        centeredSlides: false,
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
          nextEl: ".swiper-navigate .swiper-button-next",
          prevEl: ".swiper-navigate .swiper-button-prev",
        },
        allowTouchMove: true,
        grabCursor: true,
      });

      setTimeout(function () {
        if (swiperTabs.update || swiperNavigate.update) {
          swiperTabs.update();
          swiperNavigate.update();
          swiperTabs.controller.control = swiperNavigate;
          swiperNavigate.controller.control = swiperTabs;
          swiperTabs.sync(swiperNavigate);
        }
      }, 500);

      // var activeIndex = swiperTabs.activeIndex;

      // swiperNavigate.on('click', '.swiper-button-next', () => {
      //   swiperNavigate.slideTo(activeIndex + 1);
      // });


      // swiperNavigate.on('click', '.swiper-button-prev', () => {
      //   swiperNavigate.slideTo(activeIndex - 1);
      // });

      // swiperNavigate.on('click', '.swiper-slide', () => {

      //   var clickedIndex = swiperNavigate.clickedIndex;

      //   swiperNavigate.slideTo(clickedIndex);
      // });

    }
  }
}

new Main();
