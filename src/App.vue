<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import '@/css/main.scss';

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapState({
      menuClass: state => state.menuStore.menuClass
    }),
    ...mapMutations({
      toggleMenuClass: 'menuStore/toggleMenuClass',
      closeMenu: 'menuStore/closeMenu',
			closePopups: 'popups/closePopups',
    }),
    toggleMenu(className) {
      this.closeMenu();
      this.toggleMenuClass(className);
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      this.closeMenu();
    })
    document.addEventListener('keydown', (e) => {
      if (e.which === 27) {
				this.closeMenu();
				this.closePopups();
			}
    });
  },
  // components: { DefaultBtn },
}
</script>

<template>
  <router-view></router-view>
</template>