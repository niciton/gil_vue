import Page from '../components/Page/Page';
import '../scss/pages/BecomeDealer/BecomeDealer';
import dropList from '../components/dropList'
// import '../modules/popup';
// const Mask = require('maska');

import * as Mask from 'maska';
import Form from '../modules/Form';
import client from '../modules/client';

/**
 * BecomeDealer page
 * when Form submitted, we show success modal and block form for second submit
 */
class BecomeDealer extends Page {
  constructor() {
    super();
    this.initValidation();
    this.selectStyle();

    Mask.create('#dealer--phone');
    Mask.create('#dealer--inn');
  }

  selectStyle() {
    dropList('.select_wrap');
    const options = document.querySelectorAll(
      '.form_select .form_select__option'
    );
    const select = document.querySelector('.form_select');
    const selectListPerent = document.querySelector('.select_list');
    const selectTitle = document.querySelector(
      '.select_title span.select_title__text'
    );

    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      selectListPerent.innerHTML += `
        <li class="select_item" data-value="${option.value}">${option.value}</li>
    `;
    }

    const selectList = document.querySelectorAll('.select_item');

    for (let i = 0; i < selectList.length; i++) {
      const option = selectList[i];
      option.addEventListener('click', (e) => {
        selectTitle.innerHTML = option.dataset.value;
        select.value = option.dataset.value;
      });
    }
  }

  initValidation() {
    new Form(
      {
        'dealer--org-type': { required: true },
        'org--name': { required: false },
        'dealer--inn': { required: true, inn: true },
        'dealer--fio': { required: true },
        'dealer--position': { required: true },
        'dealer--phone': { required: true, phone: true },
        'dealer--mail': { required: true, email: true },
      },
      this.onPassedValidation
    );
  }

  onPassedValidation() {
    const button = this.form.find('.submit_btn');
    if (button.hasClass('Button--loading')) {
      return;
    }

    button.addClass('Button--loading');

    client(this.form[0].action, { body: this.form[0] }, true)
      .then((res) => {
        // console.log(res.ok, res.data);
        if (res.ok) {
          document.querySelector('.popup').classList.add('open');
          this.form[0].reset();
        } else {
          this.setError(res.data);
        }
      })
      .finally(() => {
        button.removeClass('Button--loading');
      });
  }
}

new BecomeDealer();
