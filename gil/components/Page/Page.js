import '../../scss/main';
import '../../modules/polyfills';
import $ from 'cash-dom';

/**
 * Base class for all entry points
 */
export default class Page {
  constructor() {
    this.$body = $('body');
    this.initNotCriticalResources();
    this.goTopBtn();
  }

  initNotCriticalResources() {
    this.$body.on('click', 'a[href]', (e) => {
      if (
        e.currentTarget.href.endsWith('.jpg') ||
        e.currentTarget.href.endsWith('.png')
      ) {
        e.preventDefault();
      }
    });

    window.requestIdleCallback(() =>
      import(/* webpackChunkName: 'notCritical' */ './notCritical.js')
    );
  }

  goTopBtn() {
    const btn = document.getElementById('go-top');
    if (btn) {
      window.addEventListener('scroll', setGoTop);

      function setGoTop() {
        if (window.pageYOffset < window.innerHeight / 4) {
          btn.classList.add('none');
        } else {
          btn.classList.remove('none');
        }
      }

      setGoTop();

      btn.addEventListener('click', (e) => {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  goTop(el) {
    // document.body.scrollIntoView({
    //   behavior: 'smooth',
    //   lift: 0,
    //   top: '1000px',
    // });
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
