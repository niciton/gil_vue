<template>
  <default id="dealer">
    <div class="main-content">
      <!-- picture -->
      <div class="picture">
        <img
            src="img/puzzle.png"
            srcset="img/1x2.png 750w, img/puzzle.png 1000w"
            sizes="(max-width: 750px) 1px,
            1800px"
            alt="Пазлы"
        />
      </div>
      <div class="form_wrap">
        <div class="form_text">
          Мы открыты для партнерства и приглашаем к сотрудничеству дилеров и
          оптовиков для реализации продукции торговой марки GILBER.
        </div>
        <div class="block_title">Отправьте заявку и станьте нашим партнером</div>
        <!-- form -->
<!--        <form-->
<!--            action="../netcat/add.php"-->
<!--            method="post"-->
<!--            class="form_body become-dealer_form"-->
<!--        >-->
<!--          <div class="form_title width-100">Организация *</div>-->
<!--          <div class="select_wrap">-->
<!--            <select-->
<!--                name="select"-->
<!--                class="form_select"-->
<!--                id="dealer&#45;&#45;org-type"-->
<!--                data-title="Организация"-->
<!--            >-->
<!--              <option class="form_select__option" value="0">тип</option>-->
<!--              <option class="form_select__option" value="ИП">ИП</option>-->
<!--              <option class="form_select__option" value="ООО">ООО</option>-->
<!--              <option class="form_select__option" value="ОАО">ОАО</option>-->
<!--              <option class="form_select__option" value="ЗАО">ЗАО</option>-->
<!--              <option class="form_select__option" value="ПАО">ПАО</option>-->
<!--              <option class="form_select__option" value="АО">АО</option>-->
<!--              <option class="form_select__option" value="ПО">ПО</option>-->
<!--            </select>-->
<!--            <a href="#" class="select_title link">-->
<!--              <span class="select_title__text"> Тип </span>-->
<!--              <span class="select_title__arrow">-->
<!--              <svg-->
<!--                  width="8"-->
<!--                  height="14"-->
<!--                  viewBox="0 0 8 14"-->
<!--                  fill="none"-->
<!--                  xmlns="http://www.w3.org/2000/svg"-->
<!--              >-->
<!--                <path-->
<!--                    d="M1.02614 1L7 6.97441L1 13"-->
<!--                    stroke-width="2"-->
<!--                    stroke-miterlimit="22.9256"-->
<!--                    stroke-linecap="round"-->
<!--                    stroke-linejoin="round"-->
<!--                />-->
<!--              </svg>-->
<!--            </span>-->
<!--            </a>-->
<!--            <ul id="#select_list" class="select_list">-->
<!--              &lt;!&ndash; заполняется в js из form_select &ndash;&gt;-->
<!--            </ul>-->
<!--          </div>-->

<!--          <input-->
<!--              type="text"-->
<!--              name="organization"-->
<!--              class="form_inp width-100 organization"-->
<!--              placeholder="Название компании"-->
<!--              data-title="Организация"-->
<!--              id="org&#45;&#45;name"-->
<!--          />-->

<!--          <div class="form_title width-100">ИНН *</div>-->

<!--          <input-->
<!--              type="text"-->
<!--              name="TIN"-->
<!--              class="form_inp width-100 tin"-->
<!--              data-title="ИНН"-->
<!--              id="dealer&#45;&#45;inn"-->
<!--              data-mask='["##########", "############"]'-->
<!--          />-->

<!--          <div class="form_inner width-50">-->
<!--            <div class="form_title width-100">Контактное лицо (ФИО) *</div>-->

<!--            <input-->
<!--                type="text"-->
<!--                name="person"-->
<!--                class="form_inp width-100 person"-->
<!--                data-title="Контактное лицо"-->
<!--                id="dealer&#45;&#45;fio"-->
<!--            />-->

<!--            <div class="form_title width-100">Контактный телефон *</div>-->

<!--            <input-->
<!--                type="text"-->
<!--                class="form_inp inp_phone width-100 phone"-->
<!--                placeholder="+7 (___) ___-__-__"-->
<!--                data-title="Контактный телефон"-->
<!--                id="dealer&#45;&#45;phone"-->
<!--                data-mask="+7 (###) ###-##-##"-->
<!--            />-->
<!--          </div>-->
<!--          <div class="form_inner width-50">-->
<!--            <div class="form_title width-100">Должность *</div>-->

<!--            <input-->
<!--                type="text"-->
<!--                name="position"-->
<!--                class="form_inp width-100 position"-->
<!--                id="dealer&#45;&#45;position"-->
<!--                data-title="Должность"-->
<!--            />-->

<!--            <div class="form_title width-100">Контактный e-mail *</div>-->

<!--            <input-->
<!--                type="text"-->
<!--                name="email"-->
<!--                id="dealer&#45;&#45;mail"-->
<!--                class="form_inp width-100 email"-->
<!--                data-title="Контактный e-mail"-->
<!--                data-mask="X*@X*.X*"-->
<!--            />-->
<!--          </div>-->

<!--          &lt;!&ndash; errors &ndash;&gt;-->
<!--          <div class="form_errors">-->
<!--            <img src="/icons/error02.svg" alt />-->
<!--            <span> Заполните поле «Телефон» корректно </span>-->
<!--          </div>-->

<!--          <button-->
<!--              class="yellow_btn submit_btn Button&#45;&#45;loading hover_black"-->
<!--              type="submit"-->
<!--          >-->
<!--            <span class="text"> Стать партнером </span>-->
<!--            <span class="load">-->
<!--            <img src="/icons/load_round.svg" alt />-->
<!--          </span>-->
<!--          </button>-->
<!--        </form>-->
        <validator-forms :callback="submitCallback" :form="form" class="form_body">
          <template #bottom>
            <button
                class="yellow_btn submit_btn hover_black"
                :class="{'Button--loading': load}"
                type="submit"
            >
              <span class="text">Стать партнером</span>
              <span class="load">
            <img src="@icons/load_round.svg" alt />
          </span>
            </button>
          </template>
        </validator-forms>
        <!-- popup -->
<!--        <div id="popup" class="popup">-->
<!--          <a href="#" class="btn_close link close_popup">-->
<!--            <img src="/icons/close.svg" alt />-->
<!--          </a>-->
<!--          <div class="popup_wrap popup_content">-->
<!--            <div class="popup_body">-->
<!--              <div class="popup_title">Спасибо за обращение!</div>-->
<!--              <div class="popup_title-sub">-->
<!--                В ближайшее время мы свяжемся с Вами-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <popup></popup>
        <div class="form_text footer_form">
          Нажимая кнопку «Стать партнером» вы соглашаетесь с условиями обработки
          <a href="#" class="form_text__link underline reverse">
            персональных данных
          </a>
        </div>
      </div>
    </div>
  </default>
</template>

<script>
import Default from "@/components/Default.vue";
import validatorForms from "@components/ValidatorForms.vue";
import popup from "@/components/popup.vue";

import '@/css/page/BecomeDealer/BecomeDealer.scss'

export default {
  name: "Dealer",
  data(){
    return {
      load: false,
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
            necessarily: true,
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
            necessarily: true,
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
  methods: {
    submitCallback(){
      this.load = true
      setTimeout(()=> {
        this.load = false
      },1000)
    }
  },
  components: {
    Default,
    validatorForms,
    popup,
  },
}
</script>
