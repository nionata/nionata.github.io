<template>
  <div id="app">
    <SideNav :nav="nav" @navSelect="onNavSelect($event)" @onNavToggle="onNavToggle"/>
    <Main :nav="nav" @onNavToggle="onNavToggle"/>
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
            nav: {
                selected: 'workspace.Life Status',
                show: false,
                initializing: true
            }
        }
    },
    methods: {
        onNavSelect: function(navItem) {
            this.nav.selected = navItem
        },
        onNavToggle: function() {
            this.nav.show = !this.nav.show
        }
    }
}
</script>