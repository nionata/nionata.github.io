<template>
  <div id="app">
    <SideNav :nav="data.nav" @navSelect="onNavSelect($event)" @onNavToggle="onNavToggle"/>
    <Main :data="data" @onNavToggle="onNavToggle"/>
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
                    selected: 'workspace.Life Status',
                    show: false,
                    initializing: true
                }
            }
        }
    },
    methods: {
        onNavSelect: function(navItem) {
            this.data.nav.selected = navItem
        },
        onNavToggle: function() {
            this.data.nav.show = !this.data.nav.show
        }
    }
}
</script>