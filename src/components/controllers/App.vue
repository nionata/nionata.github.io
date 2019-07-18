<template>
  <div id="app">
    <SideNav v-bind:data="data" v-on:navSelect="data.modal.enabled=true, data.modal.display=$event"/>
    <Main v-bind:data="data"/>
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
                    enabled: true,
                    display: ''
                }
            }
        }
    },
}
</script>