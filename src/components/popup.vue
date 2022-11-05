<template>
  <div :ref="setPopupName()" class="popup" @click="closePopup(setPopupName())">
    <button class="btn_close close_popup">
      <img src="@icons/close.svg" alt />
    </button>
    <div class="popup_wrap" >
      <slot @click.stop></slot>
    </div>
  </div>
</template>

<script>
// import a from '@/components/.vue';
import {mapState, mapMutations} from "vuex";

export default {
  data() {
    return {

    }
  },
  methods: {
    setPopupName(){
      const isStr = typeof this.popupName == 'string'
      return isStr ? this.popupName : 'popup-' + this.$route.href.replace('/', '')
    },
    ...mapState({
      popups: state => state.popups.popups
    }),
    ...mapMutations({
      addPopup: 'popups/addPopup',
      closePopup: 'popups/closePopup',
    })
  },
  props: {
    popupName: String,
  },
  mounted() {
    this.addPopup({
      name: this.setPopupName(),
      body: this.$refs[this.setPopupName()]
    })
  }
}
</script>

<style src="@/css/components/popup.scss" scoped>

</style>