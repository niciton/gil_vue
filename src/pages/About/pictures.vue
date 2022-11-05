<template>
	<div class="bg">
		<img src="@img/upakovka_gilber.png" srcset="@icons/1x2.png 540w, @img/upakovka_gilber.png 1000w" sizes="(max-width: 540px) 1px,
              1800px" alt="Упаковка GILBER"/>
	</div>
	<!-- pictures -->
	<div class="pictures">
		<div class="certificates">
			<div class="certificate cert-1">
				<img src="@img/certificate01.png" alt="Сертификат соответствия GILBER"/>
			</div>
			<div class="certificate cert-2">
				<img src="@img/certificate01.png" alt="Сертификат соответствия GILBER - 2"/>
			</div>
			<div class="certificate cert-3">
				<img src="@img/certificate01.png" alt="Сертификат соответствия GILBER - 3"/>
			</div>
		</div>
		<div class="btn_wrap">
			<button class="yellow_btn hover_black popup_link pictures_btn" @click="popupOpen('popup-about')">
				Посмотреть сертификаты
			</button>
		</div>
	</div>
	<!-- popup -->
	<popup>
		<div class="slider_pagination popup_content round">
			{{slideIndex+1}}/{{ slides.length }}
		</div>
		
		<button class="prev_btn popup_content round btn" @click.stop="sliderPrev">
			<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.97386 1L1 6.97441L7 13" stroke-width="2" stroke-miterlimit="22.9256" stroke-linecap="round"
							stroke-linejoin="round"/>
				<line x1="1" y1="-1" x2="9" y2="-1" transform="matrix(-1 0 0 1 17 8)" stroke-width="2"
							stroke-linecap="round"/>
			</svg>
		</button>
		
		<button class="next_btn popup_content round btn" @click.stop="sliderNext">
			<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.0261 1L16 6.97441L10 13" stroke-width="2" stroke-miterlimit="22.9256" stroke-linecap="round"
							stroke-linejoin="round"/>
				<line x1="1" y1="7" x2="9" y2="7" stroke-width="2" stroke-linecap="round"/>
			</svg>
		</button>
		
		<div class="popup_body" ref="sliderContainer" @click.stop>
			<VueperSlides @slide="initLazySlider($event.currentSlide.index, $refs.sliderContainer)"
										:bullets="false" :arrows="false"
										ref="slider"
										class="slider_body popup_slider">
				<VueperSlide class="slide popup_content" v-for="img in slides" :key="img">
					<template #content>
						<img :src="noneImg" alt :data-src="img">
					</template>
				</VueperSlide>
			</VueperSlides>
		</div>
	</popup>
</template>

<script>
import popup from "@components/popup.vue";
import {mapMutations} from "vuex";
import {VueperSlide, VueperSlides} from "vueperslides";
import lazySlider from "@/js/lazySlider.js";

import certificate from '@img/certificate04.jpg'

export default {
	data() {
		return {
			slides: [
				certificate,
				certificate,
				certificate,
			],
			// slideIndex: 1
		}
	},
	mixins: [lazySlider],
	components: {
		popup,
		VueperSlides,
		VueperSlide,
	},
	methods: {
		...mapMutations({
			popupOpen: 'popups/openPopup'
		})
	},
}
</script>

<style src="vueperslides/dist/vueperslides.css" scoped></style>
<style src="@/css/components/popup_slider.scss" scoped></style>