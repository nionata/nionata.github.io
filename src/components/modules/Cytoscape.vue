<template>
    <div id="cy">
        {{this.updateCy(tagIndex, item, mounted)}}
    </div>
</template>

<script>
import cytoscape from 'cytoscape'
import tags from '../../js/tags.json'

export default {
    props: ['tagIndex', 'item', 'selected'],
    data() {
        return {
            mounted: false   
        }
    },
    methods: {
        getElements: function(tagIndex, item) {
            let nodes = [] 
            let currTags = tags[item]

            if (!currTags) return

            currTags.forEach(tag => {
                nodes.push({data: {id: tag}, classes: 'tag'})
                
                tagIndex[tag].forEach(t => {
                    nodes.push({data: {id: t.title, info: t}, classes: 'item'})
                    nodes.push({data: {source: tag, target: t.title}})
                })
            })        

            return nodes
        },
        onClick: function(info) {
            this.$emit('onItemClick', info)
        },
        updateCy: function(tagIndex, item, mounted) {
            if (!mounted) return

            let elements = this.getElements(tagIndex, item)

            let cy = cytoscape({
                container: document.getElementById('cy'),
                elements,
                style: [
                    {
                        selector: 'node',
                        style: {
                            'label': 'data(id)',
                            'color': 'white',
                        }
                    },
                    {
                        selector: '.item',
                        style: {
                            'background-color': '#666',
                            "text-valign": "bottom",
                            "text-halign": "center"
                        }
                    },
                    {
                        selector: '.tag',
                        style: {
                            'background-color': '#008FFE',
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'width': 3,
                            'line-color': '#ccc',
                            'target-arrow-shape': 'triangle'
                        }
                    }
                ],
                layout: {
                    name: 'breadthfirst',
                    fit: true,
                    padding: 30,
                    animate: true,
                    maximal: true,
                    grid: false,
                    directed: true
                }
            })
            
            let onItemTap = this.onClick

            cy.on('tap', '.item', function (evt) {
                let info = this.data('info')
                onItemTap(info)
            })
        }
    },
    mounted: function() {
        this.mounted = true
    }
 }
</script>