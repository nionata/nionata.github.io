<template>
  <div id="app">
    <SideNav :navSelected="data.nav.selected" @navSelect="onNavSelect($event)"/>
    <Main :data="data"/>
  </div>
</template>

<script>
import SideNav from './SideNav.vue'
import Main from './Main.vue'
import '../../sass/app.sass'

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

            if (navItem == 'remotes.legacy') {
                window.open("/bin/archived/index.html", "_blank")
            }
        }
    }
}
</script>