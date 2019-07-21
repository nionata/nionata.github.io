<template>
    <div id="branches">
        <div id="historyContainer">
            <div id="branchContainer">
            </div>
            <div id="commitContainer">
                <div 
                    class="commit"
                    v-for="commit in commits"
                    :key="commit.title"
                    @click="onCommitClick(commit)"
                    :class="{selectedCommit: modal.selected.title === commit.title}"
                >
                    <p class="commitTitle">{{commit.title}}</p>
                </div>
            </div>
        </div>
        <informationModal :commit="modal.selected" :enabled="modal.enabled" @onModalClose="onModalClose" />
    </div>
</template>

<script>
import projects from '../../js/projects.json'
import experience from '../../js/experience.json'
import InformationModal from '../modules/InformationModal.vue'

export default {
    components: {InformationModal},
    props: ['modal', 'item'],
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
            this.modal.selected = commit
            this.modal.enabled = true
            //window.setTimeout(() => window.scrollTo(0, window.()), 500)
        },
        onModalClose: function() {
            this.modal.enabled = false
            this.modal.selected = ''
        }
    }
}
</script>
