<template>
    <div id="main">
        <Graph :data="data"/>
        <informationModal :data="data"/>
    </div>
</template>

<script>
import Graph from '../modules/Graph.vue'

export default {
    components: {Graph},
    props: ['data']
}
</script>
