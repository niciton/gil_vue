<template>
	<default id="Catalog">
		<div class="load_screen" :class="{load: loadContent}"></div>
		<div class="main-content">
			<sidebar />
			
			<!-- cards -->
			<div class="product-content">
				<div class="mobile_filters btns_wrap">
					<a
							href="#"
							class="catalog_btn yellow_btn hover_black link menu-toggle-item"
							data-link="catalog"
					>
          <span class="icon">
            <img src="/icons/catalog.svg" alt/>
            <img src="/icons/catalog.svg" alt/>
          </span>
						<span class="text">Каталог</span>
					</a>
					<a
							href="#"
							class="filter_btn yellow_btn hover_black header_link link menu-toggle-item"
							data-link="catalog"
					>
          <span class="icon">
            <svg>
              <use xlink:href="/icons/sprite.svg#filter"></use>
            </svg>
          </span>
						<span class="text">Фильтр по марке</span>
					</a>
				</div>
				<div class="options">
					<template v-for="option in options" :key="option">
						<button class="filter_btn">
							{{ option.text }}
							<span class="value">
							{{ option.value }}
						</span>
							<span class="close">
								<svg width="19" height="19" viewBox="0 0 19 19" fill="none">
									<use href="/icons/sprite.svg#close"></use>
								</svg>
							</span>
						</button>
					</template>
				</div>
				<div class="products" ref="products">
					<card-list :cardList="cards"/>
<!--					<div class="assa">-->
<!--						{{ params.lastPage }}-->
<!--					</div>-->
					<pagination v-if="params.lastPage > 2" />
					<div class="q">
						{{ params.lastPage }}
					</div>
				</div>
			</div>
		</div>
	</default>
</template>

<script>
import '@/css/page/Catalog/Catalog.scss'
import Default from "@/components/Default.vue";
import pagination from "./pagination.vue";
import sidebar from "./sidebar.vue";

import cardList from "@components/cardList.vue";
import scrollTo from "@/module/scrollTo.js";
import getURL from "@/module/getURL.js";

import {mapMutations, mapState} from 'vuex'

import back from "@/mixin/back.js";
// import {catalog} from "@/store/catalog.js";

export default {
	name: "Catalog",
	data() {
		return {
			cards: [],
			amount: 10,
			// showContent: false,
			params: this.catalogParams(),
			options: {},
		}
	},
	mixins: [back],
	methods: {
		...mapState({
			catalogParams: state => state.catalogStore.catalogParams,
			showContent: state => state.catalogStore.showContent,
		}),
		...mapMutations({
			setParam: 'catalogStore/setParam',
			setShowContent: 'catalogStore/setShowContent',
			deleteParam: 'catalogStore/deleteParam',
		}),
		getProduct() {
			this.getCard(this.params).then((cards) => {
				if (this.showContent()) {
					this.cards = [...this.cards, ...cards]
				} else {
					this.cards = cards
				}
				
				this.setShowContent(false)
				this.setURL()
			})
		},
		setParams() {
			const paramArr = location.search.replace('?', '').split('&')
			
			if (paramArr[0]){
				paramArr.forEach(item => {
					// console.log(paramArr)
					const name = item.split('=')[0]
					let val = String(item.split('=')[1])
					
					if (val.includes(',')) {
						let valObj = {}
						val.split(',').forEach(item => {
							valObj[item] = 1
						})
						val = valObj
					}
					
					// this.params[name] = value
					this.setParam({
						name: name,
						val: val,
					})
				})
			}
			this.setURL()
		},
		setURL(){
			
			if (this.params.page == 1) {
				this.deleteParam('page')
			}
			window.history.replaceState(null, null, getURL(this.params));
		},
	},
	mounted() {
		this.getProduct()
		this.setParams()
		
		console.log()
		
		setTimeout(() => {
			console.log(this.catalogParams())
		}, 1000)
		console.log('catalog')
	},
	watch: {
		params: {
			handler(val) {
				console.log('catalog: ', val)
				if (this.lockParams) {
					this.getProduct()
					if (!this.showContent()) scrollTo(this.$refs.products)
				}
			},
			deep: true,
		},
	},
	components: {
		Default,
		cardList,
		sidebar,
		pagination,
	}
}
</script>