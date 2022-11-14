import { createStore } from 'vuex';
import { menuClass } from './menuClass';
import {popups} from "@/store/popups.js";

export default createStore({
  
  modules: {
    menuStore: menuClass,
    popups: popups
  },
});
