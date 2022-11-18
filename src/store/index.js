import { createStore } from 'vuex';
import { menuClass } from './menuClass';
import {catalog} from "@/store/catalog.js";
import {popups} from "@/store/popups.js";

export default createStore({
  
  modules: {
    menuStore: menuClass,
    popups: popups,
		catalogStore: catalog,
  },
});
