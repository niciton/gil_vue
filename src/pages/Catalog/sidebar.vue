<template>
	<div class="sidebar">
		<ul class="AsideBlock">
			<li>
				<span class="AsideBlock__title">Генераторы</span>
				<ul class="AsideBlock">
					<li>
						<a
								href="/catalog/generatory/"
								class="AsideBlock__item AsideBlock__item--link"
						>Все товары раздела</a
						><a
							href="/catalog/generatory/generatory-dlya-traktorov/"
							class="AsideBlock__item AsideBlock__item--link"
					>Генераторы для тракторов</a
					>
					</li>
					<li>
						<a
								href="/catalog/generatory/generatory-kamaz/"
								class="AsideBlock__item AsideBlock__item--link"
						>Генераторы КАМАЗ</a
						>
					</li>
					<li>
						<a
								href="/catalog/generatory/generatory-maz/"
								class="AsideBlock__item AsideBlock__item--link"
						>Генераторы МАЗ</a
						>
					</li>
				</ul>
			</li>
			<li>
				<span class="AsideBlock__title">Стартеры</span>
				<ul class="AsideBlock">
					<li>
						<a
								href="/catalog/startery/"
								class="AsideBlock__item AsideBlock__item--link"
						>Все товары раздела</a
						><a
							href="/catalog/startery/startery-gaz/"
							class="AsideBlock__item AsideBlock__item--link"
					>Стартеры ГАЗ</a
					>
					</li>
					<li>
						<a
								href="/catalog/startery/startery-dlya-traktorov/"
								class="AsideBlock__item AsideBlock__item--link"
						>Стартеры для тракторов</a
						>
					</li>
				</ul>
			</li>
			<li>
				<span class="AsideBlock__title">Комплектующие генераторов</span>
				<ul class="AsideBlock">
					<li>
						<a
								href="/catalog/komplektuyuschie-generatorov/"
								class="AsideBlock__item AsideBlock__item--link"
						>Все товары раздела</a
						><a
							href="/catalog/komplektuyuschie-generatorov/komplektuyuschie-generatorov-dlya-traktorov/"
							class="AsideBlock__item AsideBlock__item--link"
					>Комплектующие генераторов для тракторов</a
					>
					</li>
					<li>
						<a
								href="/catalog/komplektuyuschie-generatorov/komplektuyuschie-generatorov-maz/"
								class="AsideBlock__item AsideBlock__item--link"
						>Комплектующие генераторов МАЗ</a
						>
					</li>
				</ul>
			</li>
			<li>
				<span class="AsideBlock__title">Комплектующие стартеров</span>
				<ul class="AsideBlock">
					<li>
						<a
								href="/catalog/komplektuyuschie-starterov/"
								class="AsideBlock__item AsideBlock__item--link"
						>Все товары раздела</a
						><a
							href="/catalog/komplektuyuschie-starterov/komplektuyuschie-starterov-dlya-traktorov/"
							class="AsideBlock__item AsideBlock__item--link"
					>Комплектующие стартеров для тракторов</a
					>
					</li>
					<li>
						<a
								href="/catalog/komplektuyuschie-starterov/komplektuyuschie-starterov-kamaz/"
								class="AsideBlock__item AsideBlock__item--link"
						>Комплектующие стартеров КАМАЗ</a
						>
					</li>
				</ul>
			</li>
		</ul>
		
		<!-- filters -->
		<div class="filters_wrap">
			<div class="filters_title">
				Фильтр по марке
				<span></span>
			</div>
			<div class="scroll-text">
				<template v-for="filter in filters" :key="filter">
					<label :class="['filter_label', {disabled: filter.disabled}]">
						<span class="filter_label__inp">
							<input type="checkbox"
										 @change="setFilter"
										 :checked="filter.id in filtersCheck"
										 :disabled="filter.disabled"
										 :value="filter.id"
							/>
							<span>
								<svg width="10"
										 height="8"
										 viewBox="0 0 10 8"
										 fill="none"
										 xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M1 3.15966L4.77331 7L9 1"
												stroke="#313131"
												stroke-miterlimit="22.9256"
												stroke-linecap="round"
												stroke-linejoin="round"
									/>
								</svg>
							</span>
						</span>
						<span class="filter_label__text">
							{{ filter.val }}
						</span>
					</label>
				</template>
				<label class="filter_label disabled">
          <span class="filter_label__inp">
            <input type="checkbox" disabled/>
            <span>
              <svg
									width="10"
									height="8"
									viewBox="0 0 10 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
							>
                <path
										d="M1 3.15966L4.77331 7L9 1"
										stroke="#313131"
										stroke-miterlimit="22.9256"
										stroke-linecap="round"
										stroke-linejoin="round"
								/>
              </svg>
            </span>
          </span>
					<span class="filter_label__text"> ГАЗ </span>
				</label>
			</div>
		</div>
		<button class="yellow_btn reset_btn hover_black"
						v-if="Object.keys(filtersCheck).length">
			Сбросить фильтр
		</button>
	</div>
<!--		<div>Data: {{ Number(6) === true }}</div>-->
</template>

<script>
import {mapMutations, mapState} from "vuex";
import transliter from "@/module/transliter.js";

export default {
	name: "sidebar",
	data() {
		return {
			filters: this.catalogFilters(),
			filtersCheck: JSON.parse(sessionStorage.getItem('filtersCheck')) || {},
			params: this.catalogParams()
		}
	},
	methods: {
		...mapState({
			catalogFilters: state => state.catalogStore.catalogFilters,
			catalogParams: state => state.catalogStore.catalogParams,
		}),
		...mapMutations({
			setParam: 'catalogStore/setParam',
			deleteParam: 'catalogStore/deleteParam',
		}),
		setFilter(e) {
			const inp = e.target
			const isChecked = inp.checked
			
			this.deleteParam('page')
			// console.log(this.params)
			
			if (isChecked) {
				this.filtersCheck[inp.value] = true
				this.filtersCheck[Number(inp.value)] = 1
				this.setParam({
					name: 'mark',
					val: this.filtersCheck
				})
			} else {
				delete this.filtersCheck[inp.value]
				delete this.filtersCheck[Number(inp.value)]
				this.setParam({
					name: 'mark',
					val: this.filtersCheck
				})
			}
			if (Object.keys(this.filtersCheck).length) {
				sessionStorage.setItem('filtersCheck', JSON.stringify(this.filtersCheck))
			} else {
				sessionStorage.setItem('filtersCheck', JSON.stringify({}))
			}
		},
		initFilter() {
			this.filtersCheck = this.params.mark || {}
			if (typeof this.filtersCheck !== 'object') {
				this.filtersCheck = {
					[this.filtersCheck]: 1
				}
			}
			
			for (const mark in this.filtersCheck) {
				console.log(this.filters[mark])
				// this.filters[mark].isChecked = true
			}
		},
	},
	// props: {
	// 	filters: {
	// 		type: Object,
	// 		default: {},
	// 	},
	// },
	watch: {
		params: {
			handler(val) {
			},
			deep: true,
		}
	},
	// computed: {
	// 	filters() {
	// 		console.log(this.catalogParams())
	// 		return this.params.filtersCheck;
	// 	},
	// },
	mounted() {
		for (let i = 0; i < 10; i++){
			// console.log(String.fromCharCode(Math.random() * 100))
		}
		console.log(String.fromCharCode(1))
	},
}
</script>
