<template>
    <div id="main">
        <Graph v-bind:data="data"/>
        <informationModal v-bind:data="data" v-on:closeModal="data.modal.enabled=false" />
    </div>
</template>

<script>
import Graph from '../modules/Graph.vue'
import InformationModal from '../modules/InformationModal.vue'

export default {
    components: {Graph, InformationModal},
    props: ['data']
}
</script>
