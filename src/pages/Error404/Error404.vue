<template>
	<default id="error-404">
		<div class="main-content">
			<div class="error_block">
				<img src="/img/puzzle_error.png" alt/>
				<div class="error_text">404</div>
			</div>
			<div class="block_title">
				К сожалению, запрашиваемая страница не найдена.
			</div>
			<div class="btns_wrap">
				<a href="#" class="yellow_btn hover_black"> На главную </a>
				<a href="#" class="yellow_btn hover_black"> Каталог </a>
			</div>
		</div>
	</default>
</template>

<script>
import Default from "@components/Default.vue";
import '@/css/page/error404/error404.scss'

export default {
	name: "Error404",
	components: {
		Default,
	},
}
</script>

<style scoped>

</style>