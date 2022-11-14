<template>
  <div class="menu_body" @click.stop :class="[className, {active: menuClass()[className]}]" >
    <button class="btn_close link menu-toggle-item" @click="toggleMenuClass(className)">
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 18L18 1.00001" stroke-width="2" stroke-linecap="round"></path>
        <path d="M18 18L1.00001 1.00001" stroke-width="2" stroke-linecap="round"></path>
      </svg>
    </button>
    <slot></slot>
  </div>
</template>

<script>
// import '@/css/main.scss';
import {mapState, mapMutations} from 'vuex';

export default {
  methods: {
    ...mapState({
      menuClass: state => state.menuStore.menuClass
    }),
    ...mapMutations({
      addClass: 'menuStore/addMenuClass',
      toggleMenuClass: 'menuStore/toggleMenuClass',
    }),
  },
  props: {
    className: String,
  },
  mounted(){
    this.addClass(this.className);
  },
}
</script>