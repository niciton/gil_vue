import Page from '../components/Page/Page';
import '../scss/pages/OnlineCatalogBrand/OnlineCatalogBrand';
// import client from '../modules/client';
import onlineCatalogSearch from '../modules/onlineCatalog-search';

/**
 * OnlineCatalogBrand company page
 */
class OnlineCatalogBrand extends Page {
  constructor() {
    super();
    
    onlineCatalogSearch();
  }
}

new OnlineCatalogBrand();