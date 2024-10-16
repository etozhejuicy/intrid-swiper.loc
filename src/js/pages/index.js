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
                <div class="tabs">
                  <div class="tabs-container" tabs-list=""></div>
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
                  <button type="button" class="swiper-button-prev"></button>
                  <button type="button" class="swiper-button-next"></button>
                </div>
              </div>
            </div>
        </section>
        `;
  }
}

new Main();
