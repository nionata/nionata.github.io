<template>
  <div id='app' class="">
      <Nav />
      <div id="main" class="item col">
          <Splash />
          <Spotlight />
          <footer />
      </div>
  </div>
</template>

<script>
import './styles/app.sass'
import Nav from './components/Nav.vue'
import Splash from './components/Splash.vue'
import Spotlight from './components/Spotlight.vue'
import Footer from './components/Footer.vue'

export default { 
    components: { Nav, Splash, Spotlight },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>