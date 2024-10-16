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
                  <button type="button" class="swiper-button-prev">
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.5L2 9.5L10 1.5" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <button type="button" class="swiper-button-next">
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 17.5L10 9.5L2 1.5" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        </section>
        `;
  }
}

new Main();
