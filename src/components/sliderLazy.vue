<template>
	<VueperSlides ref="slider">
		<slot></slot>
<!--		<template #content>-->
<!--			<slot name="content">fff</slot>-->
<!--		</template>-->
	</VueperSlides>
</template>

<script>
import {VueperSlide, VueperSlides} from "vueperslides";

export const slider = {
	name: "slider",
	data() {
		return {
			slideIndex: 0
		}
	},
	methods: {
		setSlide(e) {
		
		},
		lazyLoadInit() {
			console.log(this.$refs.slider)
		}
	},
	mounted() {
		this.lazyLoadInit()
	},
	components: {
		VueperSlides,
	},
}
export const slide = VueperSlide;
</script>

<style src="vueperslides/dist/vueperslides.css" scoped></style>