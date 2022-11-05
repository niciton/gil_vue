<template>
	<menu-body className="menu">
		<nav class="menu_wrap">
			<ul class="menu_list">
				<template v-for="page in $router.options.routes" :key="page.meta.name">
					<li class="menu_item" v-if="!page.alias">
						<router-link :to="page.path" class="menu_link" @click="closeMenu">
              <span class="arrow">
                <svg width="8" height="14" fill="none">
                  <use xlink:href="@icons/sprite.svg#menu_arrow"></use>
                </svg>
              </span>
							<span class="text">{{ page.meta.name }}</span>
						</router-link>
					</li>
				</template>
				
				<li class="menu_item">
					<a href="BecomeDealer.html" class="menu_link">
            <span class="arrow">
              <svg width="8" height="14" fill="none">
                <use xlink:href="@icons/sprite.svg#menu_arrow"></use>
              </svg>
            </span>
						<span class="text">СТАТЬ ДИЛЕРОМ</span>
					</a>
				</li>
				
				<li class="menu_item">
					<a href="Delivery.html" class="menu_link">
            <span class="arrow">
              <svg width="8" height="14" fill="none">
                <use xlink:href="@icons/sprite.svg#menu_arrow"></use>
              </svg>
            </span>
						<span class="text">ДОСТАВКА</span>
					</a>
				</li>
				<li class="menu_item">
					<a href="OnlineCatalog.html" class="menu_link">
            <span class="arrow">
              <svg width="8" height="14" fill="none">
                <use xlink:href="@icons/sprite.svg#menu_arrow"></use>
              </svg>
            </span>
						<span class="text">Online каталоги</span>
					</a>
				</li>
				<li class="menu_item">
					<a href="Contact.html" class="menu_link">
            <span class="arrow">
              <svg width="8" height="14" fill="none">
                <use xlink:href="@icons/sprite.svg#menu_arrow"></use>
              </svg>
            </span>
						<span class="text">КОНТАКТЫ</span>
					</a>
				</li>
			</ul>
		</nav>
	</menu-body>
	
	<menu-body className="phone">
		<div class="form_wrap load_screen" :class="{load: !Object.keys(form).length}">
<!--			<form class="menu_wrap form_body form" method="post" action="#">-->
<!--				<div class="menu_title">-->
<!--					<img src="@icons/form_phone.svg" alt/>-->
<!--					<span> Заказать обратный звонок </span>-->
<!--				</div>-->
<!--				<div class="form_inps">-->
<!--					<input class="inp_name inp form_inp" type="text" name="name" placeholder="Ваше имя"/>-->
<!--					<input class="inp_phone inp form_inp" type="text" id="user&#45;&#45;phone" data-title="Телефон"-->
<!--								 placeholder="Телефон *"/>-->
<!--				</div>-->
<!--				&lt;!&ndash; errors &ndash;&gt;-->
<!--				<div class="form_errors">-->
<!--					<img src="@icons/error.svg" alt/>-->
<!--					<span> Заполнит корректно </span>-->
<!--				</div>-->
<!--				-->
<!--				<div class="form_text">-->
<!--					Нажимая кнопку «Позвоните мне» вы соглашаетесь с условиями обработки-->
<!--					<a href="Policy.html" class="form_link"> персональных данных </a>-->
<!--				</div>-->
<!--				<button class="form_btn submit_btn yellow_btn">Позвоните мне</button>-->
<!--			</form>-->
			<validator-forms class="menu_wrap form_body" :form="form">
				<template #top>
					<div class="menu_title">
						<img src="@icons/form_phone.svg" alt>
						<span> Заказать обратный звонок </span>
					</div>
				</template>
				<template #bottom>
					<div class="form_text">Нажимая кнопку «Позвоните мне» вы соглашаетесь с условиями обработки
						<a href="/policy/" target="_blank" class="form_link">персональных данных</a>
					</div>
					<button class="form_btn submit_btn yellow_btn">
						<span class="text">Позвоните мне</span>
						<span class="load">
							<img src="@icons/load_round.svg" alt>
						</span>
					</button>
				</template>
			</validator-forms>
		</div>
		<div class="thank-message">
			<div class="message-title">Спасибо за обращение!</div>
			<div class="message-sub-title">В ближайшее время мы свяжемся с Вами</div>
		</div>
	</menu-body>
	
	<menu-body className="catalog">
		<div class="menu_wrap">
			<ul class="AsideBlock">
				<li>
					<span class="AsideBlock__title"><span></span>Стартеры</span>
					<ul class="AsideBlock">
						<li><a href="/catalog/startery/" class="AsideBlock__item AsideBlock__item--link">
							Все товары раздела
						</a><a href="/catalog/startery-gaz-99835/" class="AsideBlock__item AsideBlock__item--link">
							Стартеры ГАЗ
						</a>
						</li>
						<li><a href="/catalog/startery-dlya-traktorov-99833/" class="AsideBlock__item AsideBlock__item--link">
							Стартеры для тракторов
						</a></li>
						<li><a href="/catalog/startery-kamaz-100355/" class="AsideBlock__item AsideBlock__item--link">Стартеры
							КАМАЗ</a>
						</li>
						<li><a href="/catalog/startery-uaz-100170/" class="AsideBlock__item AsideBlock__item--link">Стартеры УАЗ</a>
						</li>
					</ul>
				</li>
				<li><span class="AsideBlock__title is-active"><span></span>Комплектующие стартеров</span>
					<ul class="AsideBlock">
						<li><a href="/catalog/komplektuyuschie-starterov/" class="AsideBlock__item AsideBlock__item--link">Все
							товары
							раздела</a><span class="AsideBlock__item">Комплектующие стартеров для тракторов</span></li>
						<li><a href="/catalog/komplektuyuschie-starterov-kamaz-99834/"
									 class="AsideBlock__item AsideBlock__item--link">Комплектующие стартеров КАМАЗ</a></li>
					</ul>
				</li>
				<li><span class="AsideBlock__title"><span></span>Генераторы</span>
					<ul class="AsideBlock">
						<li><a href="/catalog/generatory/" class="AsideBlock__item AsideBlock__item--link">Все товары раздела</a><a
								href="/catalog/generatory-gaz-100173/" class="AsideBlock__item AsideBlock__item--link">Генераторы
							ГАЗ</a></li>
						<li><a href="/catalog/generatory-dlya-traktorov-99830/" class="AsideBlock__item AsideBlock__item--link">Генераторы
							для тракторов</a></li>
						<li><a href="/catalog/generatory-kamaz-99832/" class="AsideBlock__item AsideBlock__item--link">Генераторы
							КАМАЗ</a></li>
						<li><a href="/catalog/generatory-maz-99837/" class="AsideBlock__item AsideBlock__item--link">Генераторы
							МАЗ</a>
						</li>
						<li><a href="/catalog/generatory-uaz-100168/" class="AsideBlock__item AsideBlock__item--link">Генераторы
							УАЗ</a>
						</li>
					</ul>
				</li>
				<li><span class="AsideBlock__title"><span></span>Комплектующие генераторов</span>
					<ul class="AsideBlock">
						<li><a href="/catalog/komplektuyuschie-generatorov/" class="AsideBlock__item AsideBlock__item--link">Все
							товары
							раздела</a><a href="/catalog/komplektuyuschie-generatorov-dlya-traktorov-99831/"
														class="AsideBlock__item AsideBlock__item--link">Комплектующие генераторов для тракторов</a>
						</li>
						<li><a href="/catalog/komplektuyuschie-generatorov-kamaz-100372/"
									 class="AsideBlock__item AsideBlock__item--link">Комплектующие генераторов КАМАЗ</a></li>
						<li><a href="/catalog/komplektuyuschie-generatorov-maz-99836/"
									 class="AsideBlock__item AsideBlock__item--link">Комплектующие генераторов МАЗ</a></li>
					</ul>
				</li>
				<li><span class="AsideBlock__title"><span></span>Фонари</span>
					<ul class="AsideBlock">
						<li><a href="/catalog/fonari/" class="AsideBlock__item AsideBlock__item--link">Все товары раздела</a><a
								href="/catalog/fonari-kamaz-100361/" class="AsideBlock__item AsideBlock__item--link">Фонари КАМАЗ</a>
						</li>
					</ul>
				</li>
				<li><span class="AsideBlock__title"><span></span>Фары</span>
					<ul class="AsideBlock">
						<li><a href="/catalog/fary/" class="AsideBlock__item AsideBlock__item--link">Все товары раздела</a><a
								href="/catalog/fary-kamaz-100363/" class="AsideBlock__item AsideBlock__item--link">Фары КАМАЗ</a></li>
					</ul>
				</li>
			</ul>
			<a href="Catalog.html" class="menu_btn yellow_btn catalog">
				Перейти в каталог
			</a>
		</div>
	</menu-body>
</template>

<script>
import '@/css/components/menu.scss';
import menuBody from '@/components/menuBody.vue';
import validatorForms from "@components/ValidatorForms.vue";

import {mapMutations, mapState} from 'vuex';

export default {
	data() {
		return {
			form: {},
			menuClass: this.menuClass(),
		}
	},
	methods: {
		...mapState({
			menuClass: state => state.menuStore.menuClass
		}),
		...mapMutations({
			closeMenu: 'menuStore/closeMenu',
		}),
		
	},
	watch: {
		menuClass: {
			handler(newVal){
				if (newVal.phone && !Object.keys(this.form).length) {
					this.form = {
						action: '',
						formInp: {
							name: {
								name: 'Ваше имя',
								type: 'name',
							},
							phone: {
								name: 'Телефон',
								type: 'phone',
								necessarily: true,
							}
						}
					}
				}
			},
			deep: true,
		}
	},
	components: {
		menuBody,
		validatorForms,
	}
}
</script>