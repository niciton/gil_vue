<template>
  <default id="delivery">
    <div class="main-content">
      <!-- picture -->
      <div class="picture">
        <img src="@img/kamaz.png" alt />
      </div>
      <!-- text-content -->
      <div class="text text_arrow">
        <div class="block_title">
          Доставим запчасти в любой регион России и в страны СНГ, независимо от
          объема заявки
        </div>
        <p>
          <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M1.02614 1L7 6.97441L1 13"
                stroke-width="2"
                stroke-miterlimit="22.9256"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>

          <span class="block_title sub_title">Автомобильный транспорт</span>
          Сотрудничаем с ПЭК, Байкал Сервис, КИТ, ЖелДорЭкспедиция, Деловые линии,
          Мейджик Транс.
        </p>
        <p>
          <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M1.02614 1L7 6.97441L1 13"
                stroke-width="2"
                stroke-miterlimit="22.9256"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>

          <span class="block_title sub_title"> Авиадоставка </span>
          Обеспечим авиадоставку всеми известными транспортными компаниями.
        </p>
        <p>
          <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M1.02614 1L7 6.97441L1 13"
                stroke-width="2"
                stroke-miterlimit="22.9256"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>

          <span class="block_title sub_title"> ЖЕЛЕЗНОДОРОЖНЫЙ ТРАНСПОРТ </span>
          Доставим груз железнодорожным транспортом по тарифам ОАО «РЖД».
        </p>
        <p>
          <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M1.02614 1L7 6.97441L1 13"
                stroke-width="2"
                stroke-miterlimit="22.9256"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>

          <span class="block_title sub_title"> САМОВЫВОЗ </span>
          По усмотрению клиента забрать заказанный товар можно самовывозом с
          нашего склада, расположенного по адресу: г. Набережные Челны, ул.
          Металлургическая, д. 23.
        </p>
      </div>
    </div>
  </default>
</template>

<script>
import Default from "@components/Default.vue";
import '@/css/page/Delivery/Delivery.scss'

export default {
  name: "Delivery",
  components: {
    Default
  }
}
</script>

<style scoped>

</style>