import Page from '../components/Page/Page';
import '../scss/pages/OnlineCatalog/OnlineCatalog';
import onlineCatalogSearch from '../modules/onlineCatalog-search';

/**
 * OnlineCatalog company page
 */

class OnlineCatalog extends Page {
  constructor() {
    super();

    this.$tabPerent = document.querySelector('.tabs_wrap');
    this.$logos = document.querySelector('.logos');

    window.addEventListener('resize', (e) => {
      setTimeout(() => {
        this.tabSet();
      }, 300);
    });

    this.tabSet();
    this.initTabs();
    onlineCatalogSearch();
    // this.initSearach();
  }

  initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabsLogos = document.querySelectorAll('.tabs_logos');

    for (let i = 0; i < tabs.length; i++) {
      let tab = tabs[i];
      let tabLogo = tabsLogos[i];
      // let logoBody = logosBody[i]
      tab.addEventListener('click', (e) => {
        this.tabActiveRemove();
        // this.logos.style.height = tabLogo.offsetHeight + "px"
        tabLogo.classList.add('active');
        tab.classList.add('active');

        this.tabSet();
      });
    }
  }

  tabActiveRemove() {
    document.querySelector('.tab.active').classList.remove('active');
    document.querySelector('.tabs_logos.active').classList.remove('active');
  }

  tabSet(
    tabLogoActive = document.querySelector('.tabs_logos.active'),
    tabActive = document.querySelector('.tab.active')
  ) {
    this.arrowSet(tabActive);
    if (window.innerWidth < 750) {
      this.$logos.style.height = '';
    } else {
      this.$logos.style.height = tabLogoActive.clientHeight + 'px';
    }
  }

  arrowSet(tab, arrow = document.querySelector('.active_arrow')) {

    let position =
      tab.getBoundingClientRect().left -
      this.$tabPerent.getBoundingClientRect().left;
    arrow.style.left =
      position + tab.offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';
  }
}

new OnlineCatalog();
