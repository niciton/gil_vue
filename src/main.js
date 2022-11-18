import { createApp } from 'vue'
import App from './App.vue'
import UIComponents from './UI/index.js';
import router from './router';
import * as Maska from 'maska';
import VueLazyLoad from 'vue3-lazyload'

// import * as vue from 'Vue'
import store from './store';

const app = createApp(App);

UIComponents.forEach((item) => app.component(item.name, item));

app.use(router);
app.use(store);
app.use(VueLazyLoad, {
	loading: '',
	error: '',
	lifecycle: {
		loading: (el) => {
			console.log('loading', el)
		},
		error: (el) => {
			console.log('error', el)
		},
		loaded: (el) => {
			console.log('loaded', el)
		}
	}
})

app.directive('maska', Maska.maska);

app.mount('body');
