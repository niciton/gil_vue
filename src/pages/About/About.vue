<template>
  <default id="about">
    <div class="main-content">
     <pictures></pictures>
      <about-text>
      </about-text>
    </div>
  </default>
</template>

<script>

import Default from '@components/Default.vue'
import pictures from "@page/About/pictures.vue";
import aboutText from "@page/About/text.vue";

import '@css/page/About/About.scss';
import {VueperSlide, VueperSlides} from "vueperslides";

export default {
  components: {
    Default,
    pictures,
    aboutText,
  }
}
</script>