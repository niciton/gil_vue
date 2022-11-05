import Page from '../components/Page/Page';
import '../scss/pages/OnlineCatalogModel/OnlineCatalogModel';
// import client from '../modules/client';
import dropList from '../components/dropList';
import onlineCatalogSearch from '../modules/onlineCatalog-search';

/**
 * OnlineCatalogModel company page
 */
class OnlineCatalogModel extends Page {
  constructor() {
    super();

    // this.initDroplist();
    dropList('.toggle_btn', false);
    onlineCatalogSearch();
  }
}

new OnlineCatalogModel();
