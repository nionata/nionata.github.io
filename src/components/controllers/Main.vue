<template>
    <div id="main" :class="{showBackground: !data.nav.initializing}">
        <Workspace :item="getNavItem()" :initializing="data.nav.initializing" v-show="showComponent('workspace')" @onDoneInitializing="onDoneInitializing"/>
        <Branches :item="getNavItem()" :modal="data.modal" v-show="showComponent('branches')"/>
        <Tags :item="getNavItem()" v-show="showComponent('tags')"/>
        <Remotes :item="getNavItem()" v-show="showComponent('remotes')"/>
    </div>
</template>

<script>
import Workspace from '../views/Workspace.vue'
import Branches from '../views/Branches.vue'
import Tags from '../views/Tags.vue'
import Remotes from '../views/Remotes.vue'

export default {
    components: {Workspace, Branches, Tags, Remotes},
    props: ['data'],
    methods: {
        onDoneInitializing: function() {
            this.$emit('onNavToggle')
            this.data.nav.initializing = false
        },
        getNavGroup: function() {
            return this.data.nav.selected.split('.')[0]
        },
        getNavItem: function() {
            return this.data.nav.selected.split('.')[1]
        },
        showComponent: function(component) {
            return component === this.getNavGroup()
        }
    }
}
</script>
