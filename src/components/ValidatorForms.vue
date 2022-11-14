<script>
// import '@/css/components/DefaultForm.scss';
/*
* form: {
* 	formInp:{
* 		name: '',
* 		type: '',
* 		necessarily: Bol,
* 	}
* }
* */

export default {
  data() {
    return {
      // в этом объекте хранятся значения input
      formObj: {
        select: '',
      },
      // в этом объекте хранятся значения переключатели классов
      isInvalid: {},
      // в этом объекте хранятся обязательные поля
      fieldNecessarily: {},
      errors: [],
      // в этом объекте хранятся маски
      addMaska: {
        phone: '+7 (###) ###-##-##',
        inn: '############',
      }
    }
  },
  methods: {
    validator(e) {
      this.errors = [];
      const workers = {
        required: (name) => {
          if (this.formObj[name]?.trim()) {
            this.setValid(name);
          } else {
            this.setInvalid(name);
            this.errors.push(`Заполните поле «${this.form.formInp[name].name}»`);
          }
        },

        phone: (name) => {
          const PHONE_LENGTH = 18;
					console.log(this.formObj[name]?.length === PHONE_LENGTH)
          if (this.formObj[name]?.length === PHONE_LENGTH) {
            this.setValid(name);
          } else {
            this.setInvalid(name);
            this.errors.push(
              `Заполните поле «${this.form.formInp[name].name}» корректно`
            );
          }
        },

        inn: (name) => {
          const INN_LENGTH = [10, 12];

          if (INN_LENGTH.includes(this.formObj[name]?.length)) {
            this.setValid(name);
          } else {
            this.setInvalid(name);
            this.errors.push(
              `Поле «${this.form.formInp[name].name}» должно содержать 10 или 12 цифр`
            );
          }
        },

        email: (name) => {
          const REGEX =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          // console.log(REGEX.test(dom.val().trim()));

          if (REGEX.test(this.formObj[name]?.trim())) {
            this.setValid(name);
          } else {
            this.setInvalid(name);
            this.errors.push(
              `Заполните поле «${this.form.formInp[name].name}» корректно`
            );
          }
        },

        skip: () => {
          /* stoopid dummy dim dam */
        },
      };
      if (this.form.select?.necessarily){
        this.errors.push(`Заполните поле «${this.form.select.name}»`);
        this.setInvalid('select')
      } else {
        this.setValid('select')
      }

      for (const filedName in this.form.formInp) {
				console.log(this.formObj[filedName], this.form.formInp[filedName].necessarily)
        if (this.formObj[filedName] || this.form.formInp[filedName].necessarily) {
          workers.required(filedName)

          if (filedName in workers) workers[filedName](filedName)
        }else {
          this.setValid(filedName)
        }
      }
      if (!this.errors.length) {
        callback()
      }
    },
    setInvalid(name) {
      this.isInvalid[name] = true
    },
    setValid(name) {
      this.isInvalid[name] = false
    },
    setFormObj(obj, val = [false]) {
      if (this.form.select?.necessarily) obj.select = val[0]

      for (const inpName in this.form.formInp) {
        obj[inpName] = val[0]
      }
    },
  },
  props: {
    form: {
			type: Object,
			default: {}
		},
    callback: Function,
  },
  mounted() {
		// if (this.form?.formInp) {
		// 	if (this.form.formInp[0].name) console.log('notfound form.formInp.name')
		// 	if (this.form.formInp[0].type) console.log('notfound form.formInp.type')
		// } else {
		// 	console.log('notfound form.formInp')
		// }
    this.setFormObj(this.isInvalid);
    this.setFormObj(this.fieldNecessarily, [true, false]);
  },
}
</script>

<template>
  <form class="form" @submit.prevent="validator" v-if="Object.keys(form).length">
    <slot name="top"></slot>
    <div class="select_wrap form_item" :class="[{'is-invalid': isInvalid.select}]">
      <select v-if="form.select" v-model="formObj.select">
        <option disabled="disabled" selected="selected" :value="form.select.defaultVal.val">
          {{ form.select.defaultVal.text }} {{ form.select.necessarily ? ' *' : '' }}
        </option>
        <option v-for="option in form.select.options" :key="option.val" :value="option.val">
          {{ option.text }}
        </option>
      </select>
    </div>
      <input 
        v-for="inp in form.formInp" 
        :key="inp.name"
        type="text" 
        class="form_inp inp form_item"
        :class="[{'is-invalid': isInvalid[inp.type]}]"
        :name="inp.type"
        v-maska="addMaska[inp.type]" 
        :placeholder="inp.name + [inp.necessarily ?  ' *' : '']"
        v-model="formObj[inp.type]" 
      />

    <div class="form_errors" v-show="errors[0]">
      {{ errors[0] }}
    </div>

    <slot ref="btn" name="bottom"></slot>
  </form>
</template>