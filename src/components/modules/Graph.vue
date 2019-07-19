<template>
    <div id="graph">
        <div id="branchContainer">
        </div>
        <div id="commitContainer">
            <div 
                class="commit"
                v-for="commit in commits"
                :key=commit.name
                @click="onCommitClick(commit)"
                :class="{selectedCommit: data.modal.selected.name===commit.name}"
            >
                <p class="commitName">{{commit.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import projects from '../../js/projects.json'
import experience from '../../js/experience.json'

export default {
    props: ['data'],
    data() {
        return {
            commits: [
                ...projects,
                ...experience
            ]
        }
    },
    methods: {
        onCommitClick: function(commit) {
            this.data.modal.enabled = false
            this.data.modal.selected = commit
            this.data.modal.enabled = true
        }
    }
}
</script>
