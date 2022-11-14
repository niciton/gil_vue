<template>
	<card v-for="card in cardList" :key="card" :cardData="card"/>
</template>

<script>
import card from "@/components/card.vue";

export default {
	name: "cardList",
	props: {
		cardList: {
			type: Array,
			default: [],
		}
	},
	watch: {
		cardList(val) {
			// console.log(val)
		},
	},
	components: {
		card
	},
}
</script>

<style scoped>

</style>