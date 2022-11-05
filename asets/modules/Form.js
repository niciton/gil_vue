import $ from 'cash-dom';
import './input';
// import '../sass/components/Form';

/**
 * Form class
 *
 * this.form in another files from THIS class
 */
export default class Form {
  constructor(options, callback = () => {}, $this) {
    this.form = $('#' + Object.keys(options)[0]).closest('.form_body');
    this.errorNode = this.form.find('.form_errors');
    this.options = options || {};
    this.errors = [];
    this.$this = $this;
    this.callback = callback;

    this.listenForm();
  }

  validateGuest() {
    const workers = {
      // dom == id
      required: (dom) => {
        const _dom = dom[0];

        if (_dom.nodeName === 'SELECT') {
          if (_dom.options[_dom.selectedIndex].disabled) {
            this.setInvalid(dom);
            this.errors.push(`Заполните поля «${dom.attr('data-title')}»`);
          } else {
            this.setValid(dom);
          }

          return;
        }

        if (!dom.val().trim()) {
          this.setInvalid(dom);
          this.errors.push(`Заполните поле «${dom.attr('data-title')}»`);
        } else {
          this.setValid(dom);
        }
      },

      phone: (dom) => {
        const PHONE_LENGTH = 18;
        if (dom.val().length === PHONE_LENGTH) {
          this.setValid(dom);
        } else {
          this.setInvalid(dom);
          this.errors.push(
            `Заполните поле «${dom.attr('data-title')}» корректно`
          );
        }
      },

      inn: (dom) => {
        const INN_LENGTH = [10, 12];

        if (INN_LENGTH.includes(dom.val().length)) {
          this.setValid(dom);
        } else {
          this.setInvalid(dom);
          this.errors.push(
            `Поле «${dom.attr('data-title')}» должно содержать 10 или 12 цифр`
          );
        }
      },

      email: (dom) => {
        const REGEX =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // console.log(REGEX.test(dom.val().trim()));

        if (REGEX.test(dom.val().trim())) {
          this.setValid(dom);
        } else {
          this.setInvalid(dom);
          this.errors.push(
            `Заполните поле «${dom.attr('data-title')}» корректно`
          );
        }
      },

      skip: () => {
        /* stoopid dummy dim dam */
      },
    };

    this.errors = [];

    for (const option in this.options) {
      const rules = this.options[option];
      const dom = $(`#${option}`);

      const isHereSkip = rules['skip'];
      const shouldISkip = isHereSkip ? !isHereSkip() : false;

      if (!isHereSkip || (isHereSkip && shouldISkip)) {
        for (const rule in rules) {
          workers[rule](dom);
        }
      }
    }
  }

  setInvalid(dom) {
    dom.addClass('is-invalid');
  }

  setValid(dom) {
    dom.removeClass('is-invalid');
  }

  fillErrorNode(text) {
    this.errorNode.addClass('is-active').find('span')[0].textContent = text;
  }

  unfillErrorNode(text) {
    this.errorNode.removeClass('is-active').find('span')[0].textContent = '';
  }

  setError(text) {
    this.fillErrorNode(text);
  }

  listenForm() {
    this.form.on('submit', (e) => {
      this.validateGuest();
      e.preventDefault();

      if (this.errors.length) {
        this.fillErrorNode(this.errors[0]);
      } else {
        this.unfillErrorNode();
        this.callback(this.$this);
      }
    });
  }
}
