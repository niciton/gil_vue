import noneImg from '@img/1x2.png'
// import index from "vuex";

export default {
	data(){
		return{
			noneImg,
			slideIndex: 0
		}
	},
	methods: {
		initLazySlider(index, el){
			const slides = el.querySelectorAll('.slide')
			const images = slides[index].querySelectorAll('[data-src]')

			if (!images[0].dataset.load) {
				images.forEach(img => {
					const src = img.dataset.src
					img.setAttribute('src', src)
					img.setAttribute('data-load', true)
				})
			}
		},
		sliderPrev() {
			this.slideIndex = this.slideIndex - 1
			if (this.slideIndex < 0) {
				this.slideIndex = this.slides.length - 1
			}
		},
		sliderNext() {
			this.slideIndex = this.slideIndex + 1
			if (this.slideIndex > this.slides.length - 1) {
				this.slideIndex = 0
			}
		},
	},
	mounted() {
		this.initLazySlider(0, this.$refs.sliderContainer)
	},
	watch: {
		slideIndex(index) {
			if (this.$refs.slider) {
				this.$refs.slider.goToSlide(index, {emit: true})
			} else {
				console.log('notfound refs.slider')
			}
		}
	},
}