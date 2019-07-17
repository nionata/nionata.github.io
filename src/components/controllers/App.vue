<template>
  <div id="app">
    <SideNav/>
    <InformationModal/>
    <Graph/>
  </div>
</template>

<script>
import SideNav from './SideNav.vue'
import InformationModal from './InformationModal.vue'
import Graph from './Graph.vue'

export default {
    components: {
        'SideNav': SideNav,
        'InformationModal': InformationModal,
        'Graph': Graph
    },
    data() {
        return {
            view: 'master',
            message: 'Hello World',
        }
    },
}
</script>

<style>
#app {
    font-size: 50px;
    font-family: 'Roboto', sans-serif;
    color: blue;
}
</style>