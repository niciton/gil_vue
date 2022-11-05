import Page from '../components/Page/Page';
import '../scss/pages/Homepage/Homepage';
import slider from '../modules/slider';

/**
 * Home company page
 */
class Homepage extends Page {
  constructor() {
    super();
    this.initHome();
    this.initSlider();
  }

  initHome() {
    const sliderNavContainer = document.querySelector('.slider_nav');
    const slides = document.querySelectorAll('.slide');

    for (let i = 0; i < slides.length; i++) {
      sliderNavContainer.innerHTML +=
        '<button class="slider_nav__item"></button>';
    }
  }

  initSlider() {
    slider({
      container: '.slider_body',
      items: 1,
      mode: 'gallery',
      autoplay: false,
      nav: true,
      prevButton: '.slider_prev',
      nextButton: '.slider_next',
      navContainer: '.slider_nav',
      arrowKeys: true,
      lazyloadSelector: '.tns-lazy-img',
      lazyload: true,
      speed: 500,
    });
  }
}

new Homepage();
