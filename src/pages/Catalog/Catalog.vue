<template>
	<default id="Catalog">
		<div class="load_screen" :class="{load: loadContent}"></div>
		<div class="main-content">
			<sidebar/>
			
			<!-- cards -->
			<div class="product-content">
				<div class="mobile_filters btns_wrap">
					<a
							href="#"
							class="catalog_btn yellow_btn hover_black link menu-toggle-item"
							data-link="catalog"
					>
          <span class="icon">
            <img src="/icons/catalog.svg" alt />
            <img src="/icons/catalog.svg" alt />
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
					<pagination @showcontent="setShowContent($event)"
											@changepage="params.page = $event"
					/>
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

import { mapMutations, mapState } from 'vuex'

import back from "@/mixin/back.js";
// import {catalog} from "@/store/catalog.js";

export default {
	name: "Catalog",
	data() {
		return {
			cards: [],
			page: 1,
			showContent: false,
			params: this.catalogParams(),
			options: {},
		}
	},
	mixins: [back],
	methods: {
		...mapState({
			catalogParams: state => state.catalogStore.catalogParams,
		}),
		...mapMutations({
			setParam: 'catalogStore/setParam',
		}),
		log(val) {
			console.log(val)
		},
		getProduct() {
			this.getCard(this.params).then((cards) => {
				if (this.showContent) {
					this.cards = [...this.cards, ...cards]
				} else {
					this.cards = cards
				}
				this.showContent = false
			})
		},
		setShowContent() {
			this.showContent = true
			this.params.page = this.params.page + 1
		},
		setParams() {
			const paramArr = location.search.replace('?', '').split('&')
			
			paramArr.forEach(item => {
				const name = item.split('=')[0]
				const value = item.split('=')[1]
				
				this.params[name] = value
			})
		},
	},
	mounted() {
		console.log(this.catalogParams())
		this.getProduct()
		this.setParams()
		
		setTimeout(() => {
			console.log(this.catalogParams())
		}, 1000)
	},
	watch: {
		params: {
			handler(val) {
				this.getProduct()
				if (!this.showContent) scrollTo(this.$refs.products)
				// this.getCard(val).then((cards) => {
				// 	// this.log(cards)
				// 	this.cards = cards
				// })
			},
			deep: true,
		}
	},
	components: {
		Default,
		cardList,
		sidebar,
		pagination,
	}
}
</script>