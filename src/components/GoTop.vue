<template>
  <div class="container go-top">
    <button ref="btn" class="go-top_btn" :class="{none: showBtn}">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 22 12" fill="none">
        <path d="M1 10.9564L10.9573 1L21 11" stroke="#FFED00" stroke-width="2" stroke-miterlimit="22.9256"
              stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "GoTop",
  data() {
    return {
      showBtn: true,
    }
  },
  methods: {
    setGoTop(){
      if (window.pageYOffset < window.innerHeight / 4) {
        this.showBtn = true
      } else {
        this.showBtn = false
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.setGoTop);

    this.setGoTop();

    this.$refs.btn.addEventListener('click', (e) => {
      document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  }
}
</script>