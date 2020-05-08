<template>
  <div id="app" class="">
      <Nav :dev="dev" />
      <Splash />
      <Spotlight />
      <Experience />
      <Certs />
      <Footer />
  </div>
</template>

<script>
import 'styles/app.sass'
import Nav from 'comp/Nav.vue'
import Splash from 'comp/Splash.vue'
import Spotlight from 'comp/Spotlight.vue'
import Experience from 'comp/Experience.vue'
import Certs from 'comp/Certs.vue'
import Footer from 'comp/Footer.vue'

export default { 
    components: { Nav, Splash, Spotlight, Experience, Certs, Footer },
    data() {
        return {
            dev: false
        }
    },
    methods: {
    }
}
</script>