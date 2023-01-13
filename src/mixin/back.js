import axios from "axios";
// import transliter from "@/module/transliter.js";
import {mapMutations} from 'vuex'

/*
* здесь я жестко наваливалил целый
* унитаз говно кода
* */

export default {
	data() {
		return {
			data: [],
			filters: {},
			isOnce: true,
			loadContent: false,
			lastPage: 10,
			// filters: {}
		}
	},
	methods: {
		...mapMutations({
			setFilters: 'catalogStore/setFilters',
			setParam: 'catalogStore/setParam',
			deleteParam: 'catalogStore/deleteParam',
			setFilter: 'catalogStore/setFilter'
		}),

		getCard(params) {
			this.lockParams = false
			this.loadContent = true
			setTimeout(() => {
				this.loadContent = false
			}, 500)
			return axios({
				method: 'get',
				url: 'http://localhost:5173/src/roflanBack/data.json',
			}).then(res => {
				if (this.isOnce) this.data = res.data
				const lastPageVal = Math.ceil(this.data.length / this.amount)
				this.setParam({name: 'lastPage', val: lastPageVal})
				this.data = res.data

				this.setFilters()
				return this.setCards(params)
				// return Promise.resolve("result")
			}).catch(err => {
				console.log(err)
				alert('что-то пошло не так. Ошибка: ' + err)
			}).finally(() => {
				if (this.isOnce) this.loadContent = false
				if (!this.loadContent) this.loadContent = false
				this.isOnce = false
				this.lockParams = true
			})
		},
		setCards(params) {
			const page = params.page || 1
			const amount = this.amount || 10
			const filterActive = JSON.parse(sessionStorage.getItem('filtersCheck')) || {}

			if(Object.keys(filterActive).length){
				this.data = this.data.filter(item => {
					if(item.Manufacturer_ID in filterActive) {
						console.log('true_')
						return item
					}
				})
				console.log(this.data)
			}

			let cardArr = this.data.slice((page - 1) * amount, (amount * page))

			return cardArr
		},
		setFilters() {
			// console.log(data)
			for (let i = 0; i < this.data.length; i++) {
				const item = this.data[i]
				if (!(item.Manufacturer_ID in this.filters)){
					this.setFilter({
						name: item.Manufacturer_ID,
						val: {
							val: item.Manufacturer,
							id: item.Manufacturer_ID,
						},
					})
					// this.filters[item.Manufacturer_ID] = item.Manufacturer
				}

				// this.filters[transliter(item.Manufacturer)] = 1
				// console.log(transliter(item.Manufacturer))
				// if (item.)
			}
			// this.setFilters(this.filters)
		},
	},
}