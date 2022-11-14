import client from '../modules/client';
import Form from '../modules/Form';
// const Mask = require('maska');
import * as Mask from 'maska';

// ====phone_validation==== \\
const PhoneForm = class {
  constructor() {
    this.initGetForm();
  }

  initGetForm(){
    const phoneBtn = document.querySelector(
      '.header_phone.header_link.menu-toggle-item'
    );

    phoneBtn.addEventListener('click', getForm);

    function getForm() {
      client('/callback/?isNaked=1').then((res) => {
        PhoneForm.prototype.formSet(res);
        phoneBtn.removeEventListener('click', getForm);
      });
    }
  }

  formSet(response) {
    const menuPhone = document.querySelector('.menu_body.phone .form_wrap');
    menuPhone.innerHTML += response;
    // ====mask_phone==== \\
    Mask.create('#user--phone', {
      mask: '+7 (###) ###-##-##',
    });

    menuPhone.classList.remove('load');

    this.validation();
  }

  validation() {
    new Form(
      {
        'user--phone': { required: true, phone: true },
      },
      this.phoneValidation
    );
  }

  phoneValidation() {
    const button = this.form.find('.submit_btn');
    const menuPhone = document.querySelector('.menu_body.phone');

    if (button.hasClass('Button--loading')) {
      return;
    }

    button.addClass('Button--loading');

    client(this.form[0].action, { body: this.form[0] }, true)
      .then((res) => {
        // console.log(res);
        if (res.ok) {
          this.form[0].reset();
          menuPhone.classList.add('message');
          setTimeout((e) => {
            menuPhone.classList.remove('message');
          }, 7000);
        } else {
          this.setError(res.data);
        }
      })
      .finally(() => {
        button.removeClass('Button--loading');
      });
  }
};

new PhoneForm();
