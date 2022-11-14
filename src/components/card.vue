// ====это та что на витрине==== \\

<template>
	<div class="card">
		<a href="Card.html" class="card_photo">
			<img srcset="/icons/no_photo.svg"
					 :data-srcset="cardData.Image"
					 :alt="[cardData.Articul, cardData.Name, '225x150']"
			/>
		</a>
		<div class="card_body">
			<a href="Card.html" class="card_title">
				{{ cardData.Name }}
			</a>
			<div class="card_article card_item">
				<div class="article_title item_title">Артикул</div>
				<span class="dots"></span>
				<div class="article_value item_value">{{ cardData.Articul }}</div>
			</div>
			<div class="card_item card_manufacturer">
				<div class="item_title manufacturer_title">Производитель</div>
				<span class="dots"></span>
				<div class="item_value manufacturer_value">{{ cardData.Manufacturer }}</div>
			</div>
			<div class="card_price card_item">
				<div class="price_title item_title">Розничная цена</div>
				<span class="dots"></span>
				<div class="price_value item_value">
					<div class="text">{{ showPrice(cardData.Price) }}</div>
					<div class="icon">
						<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd"
										d="M3.76927 7.04658L3.77033 1.66983C5.13449 1.61522 7.10191 1.57815 8.2874 1.94291C11.1471 2.82262 11.496 5.68313 8.36307 6.76375C7.28372 7.13631 5.04515 7.1207 3.77033 7.04658H3.76927ZM1.9532 8.72407L2.01625 8.94644C2.02046 9.02544 2.01205 9.14637 2.01205 9.23122C2.011 9.44188 2.03097 10.5017 1.97842 10.7056L0.771904 10.7456C0.164442 10.8158 -0.240182 11.4448 0.160238 11.9949C0.570117 12.5576 1.2028 12.268 1.98472 12.3811C1.98472 13.216 1.98472 12.4016 1.98472 13.2365C1.98472 14.0294 1.88278 14.9793 2.86229 14.9998C3.24904 15.0076 3.57064 14.7813 3.6894 14.518C3.84284 14.1776 3.77033 12.858 3.77033 12.3675C4.6048 12.3285 5.52019 12.3597 6.36412 12.3597C7.2091 12.3597 8.08036 12.4035 8.06144 11.519C8.03307 10.2677 5.7987 10.8265 3.77033 10.6919V8.73285C6.35467 8.61387 8.72566 9.13174 11.0189 7.14801C12.8749 5.54367 12.7666 2.9299 10.8665 1.46015C8.67626 -0.233926 6.78031 0.0167222 3.46029 0.0089199C1.61268 0.00501876 1.98578 0.6253 1.98578 2.82945C1.98578 4.22996 1.98578 5.62949 1.98578 7.03C1.21752 7.16167 0.0845682 6.80861 0.018357 7.83266C-0.0510071 8.90743 1.35309 8.73285 1.9553 8.72407H1.9532Z"
										fill="#737373"></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "card",
	data() {
		return {
			card: this.cardData
		}
	},
	props: {
		cardData: {
			type: Object,
			default: {}
		}
	},
	methods: {
		showPrice(str) {
			// проверка для того что бы, когда объект пустой это ни чего не ломало
			const price = str?.toLocaleString('ru-RU')
			return price
		}
	},
}
</script>

<style src="@/css/components/card.scss">

</style>