<template>
  <footer class="footer" ref="footer">
    <div class="container footer_container">
      <div class="footer_main">
        <a href="https://avtoalfa.com/" target="_blank" class="avtoalfa_logo">
          <img src="@img/logo_avtoalfa.svg" alt="Логотип АВТОАЛЬФА" />
        </a>
        <div class="footer_main__text">Правообладатель эксклюзивных торговых марок</div>
        <div class="footer_main__logos">
          <a href="https://avtoalfa.com/proizvoditeli/camida/" target="_blank" class="footer_link" rel="nofollow">
            <img src="@img/logo_camida.svg" alt="Логотип CAMIDA" />
          </a>
          <a href="https://avtoalfa.com/proizvoditeli/steners/" target="_blank" class="footer_link" rel="nofollow">
            <img src="@img/logo_steners.svg" alt="Логотип STENERS" />
          </a>
          <a href="https://avtoalfa.com/proizvoditeli/bovia/" target="_blank" class="footer_link" rel="nofollow">
            <img src="@img/logo_bovia.svg" alt="Логотип BOVIA" />
          </a>
          <a href="https://avtoalfa.com/proizvoditeli/gilber/" target="_blank" class="footer_link" rel="nofollow">
            <img class="gilber" src="@img/logo_gilber.svg" alt="Логотип GILBER" />
          </a>
        </div>
      </div>
      <div class="footer_text">
        &copy; GILBER, 2022
      </div>
    </div>
  </footer>
</template>

<script>
// import a from '@/components/.vue';
export default {
  data() {
    return {

    }
  },
  methods: {
		setHeightFooter(){
			// console.log(this.$refs.footer)
			setTimeout(() => {
				this.$emit('size', this.$refs.footer.offsetHeight + 10)
			}, 300)
		}
  },
  mounted() {
		this.setHeightFooter()
		window.addEventListener('resize', this.setHeightFooter)
	},
	components: {

  }
}
</script>

<style src="@/css/components/_footer.scss">

</style>