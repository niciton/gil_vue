<template>
	<button class="yellow_btn hover_black show_btn" v-if="page != lastPage" @click="addContent()">
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
				
				<template v-if="page + 4 < lastPage">
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
					<a :href="'?page=' + Number(lastPage - (pagesAmount - index))"
						 class="Pagination__item"
						 @click.prevent="page = Number(lastPage - (pagesAmount - index))"
						 :class="{'Pagination__item--active': page == Number(lastPage - (pagesAmount - index))}"
						 v-for="(isActive, index) in pagesAmount"
						 :key="index"
					>
						{{
							Number(lastPage - (pagesAmount - index))
						}}
					</a>
				</template>
				
				<span class="Pagination__item Pagination__--"
							v-if="lastPage - 4 > page"></span>
				
				<a :href="'?page=' + lastPage"
					 class="Pagination__item"
					 :class="{'Pagination__item--active': page == lastPage}"
					 @click.prevent="page = lastPage"
				>{{ lastPage }}</a>
				
				<a :href="'?page=' + Number(page + 1)"
					 class="Pagination__item Pagination__arrow"
					 v-if="page != lastPage"
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
export default {
	name: "pagination",
	data() {
		return {
			page: 1,
			pagesAmount: 7,
			showContent: false,
		}
	},
	props: {
		lastPage: {
			type: Number,
			default: 10,
		}
	},
	methods: {
		setPage(index) {
			return this.page < 5 ? index + 2 : index + this.page - 3
		},
		addContent(){
			this.$emit('showcontent')
			++this.page
		},
	},
	watch: {
		page(index) {
			if (!this.showContent) {
				this.$emit('changepage', index)
				this.showContent = false
			}
		},
	},
}
</script>