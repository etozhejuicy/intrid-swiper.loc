// vendor libs
import Swiper from "swiper/bundle";

// vendor styles
import "../../../node_modules/swiper/swiper.css";

const app = document.getElementById("app");

class Main {
  constructor() {
    window.addEventListener("DOMContentLoaded", () => {
      this.init();
    });
  }

  init() {
    app.innerHTML = `
            <div class="swiper-container swiper-tabs">
                <div class="swiper-wrapper" items-list=""></div>
                <div class="swiper-pagination fs-4 fw-bold"></div>
                <div class="btn btn-primary btn-icon swiper-button-next" style="--swiper-navigation-size: 2.5rem;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);--swiper-navigation-color: var(--cl-btn-color);">
                    <i class="cl-icon-arrow-right"></i>
                </div>
                <div class="btn btn-primary btn-icon swiper-button-prev" style="--swiper-navigation-size: 2.5rem;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);--swiper-navigation-color: var(--cl-btn-color);">
                    <i class="cl-icon-arrow-left"></i>
                </div>
            </div>
        `;

    this.swipers();
  }

  swipers() {
    if ($(".swiper-tabs").length) {
      var swiperTabs = new Swiper(".swiper-tabs", {
        slidesPerView: "auto",
        spaceBetween: 20,
        height: 100,
        scrollbar: {
          enabled: true,
          el: ".swiper-scrollbar-tabs",
          draggable: true,
          dragSize: "auto",
          hide: false,
          snapOnRelease: true,
        },
        pagination: {
          enabled: true,
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          enabled: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        allowTouchMove: true,
        grabCursor: true,
      });
      setTimeout(function () {
        if (swiperTabs.update) {
          swiperTabs.update();
        }
      }, 500);
    }
  }
}

new Main();
