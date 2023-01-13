<template>
	<button class="yellow_btn hover_black show_btn" v-if="page != params.lastPage" @click="addContent()">
		Показать ещё
	</button>
	<div class="pagination_wrap">
		<div class="Pagination">
			<div class="Pagination__inner">
				<a :href="'?page=' + Number(page - 1)"
					 class="Pagination__item Pagination__arrow"
					 v-if="page != 1"
					 @click.prevent="page = Number(page - 1)"
				></a>
				
				<a href="/catalog/"
					 class="Pagination__item"
					 :class="{'Pagination__item--active': page == 1}"
					 @click.prevent="page = 1"
				>1</a>
				
				<span class="Pagination__item Pagination__--"
							v-if="page > 5"></span>
				
				<template v-if="pagesAmount - 2 > params.lastPage">
					<a :href="'?page=' + index + 2"
							class="Pagination__item"
							@click.prevent="page = index + 2"
							:class="{'Pagination__item--active': page == index + 2}"
							v-for="(isActive, index) in (params.lastPage-2)"
							:key="index"
					>
						{{
							index+2
						}}
					</a>
				</template>
				<template v-else-if="page + 4 < params.lastPage">
					<a :href="'?page=' + setPage(index)"
						 class="Pagination__item"
						 @click.prevent="page = setPage(index)"
						 :class="{'Pagination__item--active': page == setPage(index)}"
						 v-for="(isActive, index) in pagesAmount"
						 :key="index"
					>
						{{
							setPage(index)
						}}
					</a>
				</template>
				<template v-else>
					<a :href="'?page=' + Number(params.lastPage - (pagesAmount - index))"
						 class="Pagination__item"
						 @click.prevent="page = Number(params.lastPage - (pagesAmount - index))"
						 :class="{'Pagination__item--active': page == Number(params.lastPage - (pagesAmount - index))}"
						 v-for="(isActive, index) in pagesAmount"
						 :key="index"
					>
						{{
							Number(params.lastPage - (pagesAmount - index))
						}}
					</a>
				</template>
				
				<span class="Pagination__item Pagination__--"
							v-if="params.lastPage - 4 > page"></span>
				
				<a :href="'?page=' + lastPage"
					 class="Pagination__item"
					 :class="{'Pagination__item--active': page == params.lastPage}"
					 @click.prevent="page = params.lastPage"
				>{{ params.lastPage }}</a>
				
				<a :href="'?page=' + Number(page + 1)"
					 class="Pagination__item Pagination__arrow"
					 v-if="page != params.lastPage"
					 @click.prevent="page = Number(page + 1)"
				></a>
			</div>
		</div>
		<div class="not-found">
			<div class="block_title">По вашему запросу ничего не найдено</div>
			<div class="not-found_inner">
				<!-- <div class="text t-1">не найдено</div>
				<div class="text t-2">ни<span>чего</span></div> -->
				<!-- <div class="magnifier">
					<div class="magnifier_border">
						<div class="magnifier_body"></div>
					</div>
				</div> -->
				<!--				<img src="/netcat_files/pages/not_found.png" alt=""/>-->
			</div>
		</div>
	</div>
</template>

<script>
import setURL from "@/module/setURL.js";
import {mapMutations, mapState} from "vuex";

export default {
	name: "pagination",
	data() {
		return {
			page: this.catalogParams().page || 1,
			params: this.catalogParams(),
			// showContent: false,
			lastPage: this.catalogParams().lastPage || 1,
			pagesAmount: this.lastPage > 7 ? 7 : this.lastPage
		}
	},
	props: {
		lastPage: {
			type: Number,
			default: 10,
		},
		pageLoad: {
			type: Number,
		},
	},
	methods: {
		...mapState({
			catalogParams: state => state.catalogStore.catalogParams,
			showContent: state => state.catalogStore.showContent,
		}),
		...mapMutations({
			setParam: 'catalogStore/setParam',
			setShowContent: 'catalogStore/setShowContent',
		}),
		setPage(index) {
			return this.page < 5 ? index + 2 : index + this.page - 3
		},
		addContent(){
			this.setParam({
				name: 'page',
				val: this.page++
			})
			this.setShowContent(true)
		},
	},
	mounted() {
		// я беру из URL т.к. он монтируется после заполнения значения page
		this.page = Number(location.search.split('page=')[1]?.split('&')[0]) || 1
		// console.log(location.search.split('page=')[1]?.split('&')[0])
		// setURL('page')
		
		// if (this.pageLoad > this.lastPage) {
		// 	this.page = this.lastPage
		// } else {
		// 	this.page = Number(this.pageLoad)
		// }
	},
	watch: {
		page(index) {
			// console.log(index)
			this.setParam({
				name: 'page',
				val: index || 1,
			})
		},
		params: {
			handler(val){
				console.log(val)
				this.page = this.catalogParams().page || 1;
				this.lastPage = this.catalogParams().lastPage || 1;
				this.pagesAmount = this.lastPage > 7 ? 7 : this.lastPage;
				// console.log(val)
				// this.page = Number(val.page)
			},
			
			deep: true
		},
	},
}
</script>