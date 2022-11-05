import Page from '../components/Page/Page';
import '../scss/pages/Guarantee/Guarantee';
// import GeminiScrollbar from '../libs/gemini-scrollbar/index';

/**
 * About company page
 */
class Guarantee extends Page {
  constructor() {
    super();

    this.scrollStyle();
  }
  scrollStyle() {
    // let scrollBar = new GeminiScrollbar({
    //   element: document.querySelector('.scroll-text'),
    //   autoshow: true,
    //   forceGemini: true,
    // }).create();
  }
}

new Guarantee();
