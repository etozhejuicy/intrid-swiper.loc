import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

var options = {
  lerp: 0.85,
  duration: 2.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 1,
  infinite: false,
};

class LenisScroll {
  constructor() {
    this.lenis = new Lenis(options);
    this.events();
  }

  events() {
    this.lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      this.lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  stop() {
    this.lenis.stop();
  }

  start() {
    this.lenis.start();
  }
}

export default new LenisScroll();
