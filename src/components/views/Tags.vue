<template>
    <div id="tags">
        <Cytoscape :tagIndex="tagIndex" :item="item" :selected="modal.selected" @onItemClick="onItemClick($event)" />
        <InformationModal :commit="modal.selected" :enabled="modal.enabled" @onModalClose="onModalClose" />
    </div>
</template>

<script>
import Cytoscape from '../modules/Cytoscape.vue'
import InformationModal from '../modules/InformationModal.vue'
import projects from '../../js/projects.json'
import experience from '../../js/experience.json'

export default {
    components: {Cytoscape, InformationModal},
    props: ['item'],
    data() {
        return {
            modal: {
                enabled: false,
                selected: ''
            },
            tagIndex: {}        
        }
    },
    methods: {
        onItemClick: function(item) {
            this.modal.selected = item
            this.modal.enabled = true
        },
        onModalClose: function() {
            this.modal.enabled = false
            this.modal.selected = ''
        },
        indexTags: function(items) {
            let tags = {}
            
            items.forEach(i => {
                i.tags.forEach(t => {
                    if (tags[t]) {
                        tags[t].push(i)
                    } else {
                        tags[t] = [i]
                    }
                })
            })
            
            return tags
        }
    },
    mounted: function() {
        this.tagIndex = this.indexTags([...projects, ...experience])            
    }
 }
</script>
