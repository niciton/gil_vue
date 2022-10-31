<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import '@/css/main.scss';
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';
import MenuAll from '@/components/MenuAll.vue';

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    ...mapState({
      menuClass: state => state.menuStore.menuClass
    }),
    ...mapMutations({
      toggleMenuClass: 'menuStore/toggleMenuClass',
      closeMenu: 'menuStore/closeMenu',
    }),
    toggleMenu(className) {
      this.closeMenu();
      this.toggleMenuClass(className);
    }
  },
  components: {
    AppHeader,
    MenuAll,
    AppFooter,
  },
  mounted() {
    document.addEventListener('click', (e) => {
      this.closeMenu();
    })
    document.addEventListener('keydown', (e) => {
      if (e.which === 27) this.closeMenu();
    });
  },
  // components: { DefaultBtn },
}
</script>

<template>
  <router-view></router-view>
</template>