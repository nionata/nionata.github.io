<template>
  <div id="app">
    <SideNav :data="data" @navSelect="onNavSelect($event)"/>
    <Main :data="data"/>
  </div>
</template>

<script>
import SideNav from './SideNav.vue'
import Main from './Main.vue'
import '../../sass/main.sass'

export default { 
    components: {SideNav, Main},
    data() {
        return {
            data: {
                modal: {
                    enabled: false,
                    selected: ''
                },
                nav: {
                    selected: ''
                }
            }
        }
    },
    methods: {
        onNavSelect: function(navItem) {
            this.data.nav.selected = navItem
        }
    }
}
</script>