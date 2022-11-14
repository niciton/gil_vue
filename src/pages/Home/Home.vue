<template>
	<default id="home">
		<div class="page_bg"></div>
		<div ref="sliderContainer" class="slider_wrap">
			<vueper-slides ref="slider" :bullets="false" :arrows="false" :dragging-distance="50"
			               @slide="initLazySlider($event.currentSlide.index, $refs.sliderContainer)" fade>
				<vueper-slide v-for="(slide, i) in slides" :key="i" class="slide" :class="'sl-' + Number(i + 1)">
					<template #content>
						<div class="slide_inner">
							<div v-for="(img, iImg) in slide.picture" :key="img" class="slide_picture"
							     :class="'p-' + Number(1 + iImg)">
								<img :src="noneImg" :data-src="img.image" alt>
							</div>
							<a :href="slide.url" class="slide_btn">
								{{ slide.text }}
							</a>
						</div>
					</template>
				</vueper-slide>
			</vueper-slides>
			
			<!-- slider_nav -->
			<div class="slider_nav__wrap">
				<button class="slider_prev" @click="sliderPrev">
					<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.97386 1L1 6.97441L7 13" stroke-width="2" stroke-miterlimit="22.9256" stroke-linecap="round"
						      stroke-linejoin="round"/>
						<line x1="1" y1="-1" x2="9" y2="-1" transform="matrix(-1 0 0 1 17 8)" stroke-width="2"
						      stroke-linecap="round"/>
					</svg>
				</button>
				
				<div class="slider_nav">
					<button class="slider_nav__item" v-for="(_, i) in slides" :key="i" :class="{ active: i == slideIndex }"
					        @click="slideIndex = i">
					</button>
				</div>
				
				<button class="slider_next" @click="sliderNext()">
					<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.0261 1L16 6.97441L10 13" stroke-width="2" stroke-miterlimit="22.9256" stroke-linecap="round"
						      stroke-linejoin="round"/>
						<line x1="1" y1="7" x2="9" y2="7" stroke-width="2" stroke-linecap="round"/>
					</svg>
				</button>
			</div>
		</div>
	</default>
</template>

<script>
// import ValidatorForms from '@/components/ValidatorForms.vue';

import {VueperSlides, VueperSlide} from 'vueperslides'
import lazySlider from "@/mixin/lazySlider.js";

import Default from '@components/Default.vue'
import '@css/page/Home/Home.scss';

import noneImg from '@img/1x2.png'

import generator_left from '@img/generator_left.png'
import generator_right from '@img/generator_right.png'

import starter_left from '@img/starter_left.png'
import starter_right from "@img/starter_right.png"

export default {
	data() {
		return {
			noneImg: noneImg,
			slides: [
				{
					picture: [
						{image: generator_left},
						{image: generator_right},
					],
					url: '#cal',
					load: true,
					text: 'генераторы',
				},
				{
					picture: [
						{image: starter_left},
						{image: starter_right},
					],
					url: '#cal',
					load: false,
					text: 'Стартеры',
				}
			],
			slideIndex: 0,
			meta: {
				title: 'home',
			},
			form: {
				action: '',
				select: {
					necessarily: true,
					name: 'Организация',
					defaultVal: {
						val: '',
						text: 'тип',
					},
					options: [
						{
							val: 'ип',
							text: 'ип',
						},
						{
							val: 'ООО',
							text: 'ООО',
						},
						{
							val: 'ОАО',
							text: 'ОАО',
						},
					]
				},
				formInp: {
					name: {
						name: 'Организация',
						type: 'name',
						necessarily: true
					},
					inn: {
						name: 'ИНН',
						type: 'inn',
					},
					fio: {
						name: 'Контактное лицо (ФИО)',
						type: 'fio',
						necessarily: true
					},
					phone: {
						name: 'Контактный телефон',
						type: 'phone',
						necessarily: true
					},
					position: {
						name: 'Должность',
						type: 'position',
					},
					email: {
						name: 'Контактный e-mail',
						type: 'email',
						necessarily: true
					},
				}
			},
		}
	},
	mixins: [lazySlider],
	methods: {
		// sliderPrev() {
		// 	this.slideIndex = this.slideIndex - 1
		// 	if (this.slideIndex < 0) {
		// 		this.slideIndex = this.slides.length - 1
		// 	}
		// },
		// sliderNext() {
		// 	this.slideIndex = this.slideIndex + 1
		// 	if (this.slideIndex > this.slides.length - 1) {
		// 		this.slideIndex = 0
		// 	}
		// },
	},
	// mounted() {
	// 	this.initLazySlider(0, this.$refs.sliderContainer)
	// },
	// watch: {
	// 	slideIndex(index) {
	// 		this.slides[index].load = true
	// 		this.$refs.slider.goToSlide(index, {emit: true})
	// 	}
	// },
	components: {
		// ValidatorForms,
		Default,
		VueperSlides,
		VueperSlide
	}
}
</script>

<style src="vueperslides/dist/vueperslides.css" scoped></style>