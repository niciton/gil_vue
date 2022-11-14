import axios from "axios";
import transliter from "@/module/transliter.js";

export default {
	data() {
		return {
			data: [],
			filters: {},
			isOnce: true,
			loadContent: false,
			lastPage: 10,
		}
	},
	methods: {
		getCard(params) {
			this.loadContent = true
			setTimeout(()=> {
				this.loadContent = false
			}, 500)
			if (true) {
				return axios({
					method: 'get',
					url: 'http://localhost:5173/src/roflanBack/data.json',
					// responseType: ''
				}).then(res => {
					// console.log(res)
					this.data = res.data
					this.lastPage = Math.ceil(this.data.length / params.amount)
						this.setFilters(this.data)
					return this.setCards(res.data, params)
					// return Promise.resolve("result")
				}).catch(err => {
					console.log(err)
				}).finally(()=>{
					if (this.isOnce) this.loadContent = false
					if (!this.loadContent) this.loadContent = false
					this.isOnce = false
				})
			}
		},
		setCards(data, params){
			const page = params.page || 1
			const amount = params.amount || 10
			const cardArr = data.slice((page - 1) * amount, (amount * page))

			return cardArr
		},
		setFilters(data){
			// console.log(data)
			for (let i = 0; i < data.length; i++) {
				const item = data[i]

			}
		},
	},
}