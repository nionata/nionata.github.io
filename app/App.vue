<template>
  <div id="app" class="">
      <Nav :dev="dev" />
      <Splash />
      <Spotlight />
      <Certs />
      <Footer />
  </div>
</template>

<script>
import './styles/app.sass'
import Nav from './components/Nav.vue'
import Splash from './components/Splash.vue'
import Spotlight from './components/Spotlight.vue'
import Certs from './components/Certs.vue'
import Footer from './components/Footer.vue'

export default { 
    components: { Nav, Splash, Spotlight, Certs, Footer },
    data() {
        return {
            dev: false
        }
    },
    methods: {
    }
}
</script>