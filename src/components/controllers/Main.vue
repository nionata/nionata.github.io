<template>
    <div id="main">
        <Graph :data="data"/>
        <informationModal :data="data"/>
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
