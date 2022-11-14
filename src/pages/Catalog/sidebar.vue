<template>
	<div class="sidebar">
		<ul class="AsideBlock">
			<li>
				<span class="AsideBlock__title">Генераторы</span>
				<ul class="AsideBlock">
					<li>
						<a
								href="/catalog/generatory/"
								class="AsideBlock__item AsideBlock__item--link"
						>Все товары раздела</a
						><a
							href="/catalog/generatory/generatory-dlya-traktorov/"
							class="AsideBlock__item AsideBlock__item--link"
					>Генераторы для тракторов</a
					>
					</li>
					<li>
						<a
								href="/catalog/generatory/generatory-kamaz/"
								class="AsideBlock__item AsideBlock__item--link"
						>Генераторы КАМАЗ</a
						>
					</li>
					<li>
						<a
								href="/catalog/generatory/generatory-maz/"
								class="AsideBlock__item AsideBlock__item--link"
						>Генераторы МАЗ</a
						>
					</li>
				</ul>
			</li>
			<li>
				<span class="AsideBlock__title">Стартеры</span>
				<ul class="AsideBlock">
					<li>
						<a
								href="/catalog/startery/"
								class="AsideBlock__item AsideBlock__item--link"
						>Все товары раздела</a
						><a
							href="/catalog/startery/startery-gaz/"
							class="AsideBlock__item AsideBlock__item--link"
					>Стартеры ГАЗ</a
					>
					</li>
					<li>
						<a
								href="/catalog/startery/startery-dlya-traktorov/"
								class="AsideBlock__item AsideBlock__item--link"
						>Стартеры для тракторов</a
						>
					</li>
				</ul>
			</li>
			<li>
				<span class="AsideBlock__title">Комплектующие генераторов</span>
				<ul class="AsideBlock">
					<li>
						<a
								href="/catalog/komplektuyuschie-generatorov/"
								class="AsideBlock__item AsideBlock__item--link"
						>Все товары раздела</a
						><a
							href="/catalog/komplektuyuschie-generatorov/komplektuyuschie-generatorov-dlya-traktorov/"
							class="AsideBlock__item AsideBlock__item--link"
					>Комплектующие генераторов для тракторов</a
					>
					</li>
					<li>
						<a
								href="/catalog/komplektuyuschie-generatorov/komplektuyuschie-generatorov-maz/"
								class="AsideBlock__item AsideBlock__item--link"
						>Комплектующие генераторов МАЗ</a
						>
					</li>
				</ul>
			</li>
			<li>
				<span class="AsideBlock__title">Комплектующие стартеров</span>
				<ul class="AsideBlock">
					<li>
						<a
								href="/catalog/komplektuyuschie-starterov/"
								class="AsideBlock__item AsideBlock__item--link"
						>Все товары раздела</a
						><a
							href="/catalog/komplektuyuschie-starterov/komplektuyuschie-starterov-dlya-traktorov/"
							class="AsideBlock__item AsideBlock__item--link"
					>Комплектующие стартеров для тракторов</a
					>
					</li>
					<li>
						<a
								href="/catalog/komplektuyuschie-starterov/komplektuyuschie-starterov-kamaz/"
								class="AsideBlock__item AsideBlock__item--link"
						>Комплектующие стартеров КАМАЗ</a
						>
					</li>
				</ul>
			</li>
		</ul>
		
		<!-- filters -->
		<div class="filters_wrap">
			<div class="filters_title">
				Фильтр по марке
				<span></span>
			</div>
			<template v-for="filter in filters" :key="filters">
				<label class="filter_label">
          <span class="filter_label__inp">
            <input type="checkbox" value="filter.val" />
            <span>
              <svg
									width="10"
									height="8"
									viewBox="0 0 10 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
							>
                <path
										d="M1 3.15966L4.77331 7L9 1"
										stroke="#313131"
										stroke-miterlimit="22.9256"
										stroke-linecap="round"
										stroke-linejoin="round"
								/>
              </svg>
            </span>
          </span>
					<span class="filter_label__text">
						{{ filter.text }}
					</span>
				</label>
			</template>
			<label class="filter_label">
          <span class="filter_label__inp">
            <input type="checkbox" />
            <span>
              <svg
									width="10"
									height="8"
									viewBox="0 0 10 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
							>
                <path
										d="M1 3.15966L4.77331 7L9 1"
										stroke="#313131"
										stroke-miterlimit="22.9256"
										stroke-linecap="round"
										stroke-linejoin="round"
								/>
              </svg>
            </span>
          </span>
				<span class="filter_label__text"> КАМАЗ </span>
			</label>
			<label class="filter_label disabled">
          <span class="filter_label__inp">
            <input type="checkbox" disabled />
            <span>
              <svg
									width="10"
									height="8"
									viewBox="0 0 10 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
							>
                <path
										d="M1 3.15966L4.77331 7L9 1"
										stroke="#313131"
										stroke-miterlimit="22.9256"
										stroke-linecap="round"
										stroke-linejoin="round"
								/>
              </svg>
            </span>
          </span>
				<span class="filter_label__text"> ГАЗ </span>
			</label>
			<label class="filter_label">
          <span class="filter_label__inp">
            <input type="checkbox" />
            <span>
              <svg
									width="10"
									height="8"
									viewBox="0 0 10 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
							>
                <path
										d="M1 3.15966L4.77331 7L9 1"
										stroke="#313131"
										stroke-miterlimit="22.9256"
										stroke-linecap="round"
										stroke-linejoin="round"
								/>
              </svg>
            </span>
          </span>
				<span class="filter_label__text"> МАЗ </span>
			</label>
			<label class="filter_label">
          <span class="filter_label__inp">
            <input type="checkbox" />
            <span>
              <svg
									width="10"
									height="8"
									viewBox="0 0 10 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
							>
                <path
										d="M1 3.15966L4.77331 7L9 1"
										stroke="#313131"
										stroke-miterlimit="22.9256"
										stroke-linecap="round"
										stroke-linejoin="round"
								/>
              </svg>
            </span>
          </span>
				<span class="filter_label__text"> Тракторы </span>
			</label>
		</div>
		<button class="yellow_btn reset_btn hover_black">Сбросить фильтр</button>
	</div>
</template>

<script>
export default {
	name: "sidebar",
	props: {
		filters: {
			type: Object,
			default: {},
		}
	},
}
</script>
