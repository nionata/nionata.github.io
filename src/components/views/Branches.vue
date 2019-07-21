<template>
    <div id="branches">
        <div id="historyContainer">
            <div id="branchContainer">
                <div class="branch" v-for="commit in getCommits()" :key="commit.title">
                    <img 
                        src="/src/images/branch.svg"
                        class="masterBranch"
                        v-if="commit.type !== 'master'"
                    />
                    <img 
                        src="/src/images/branchCommit.svg"
                        :class="commit.class"
                    />
                </div>
            </div>
            <div id="commitContainer">
                <div 
                    class="commit"
                    v-for="(commit, index) in getCommits()"
                    :key="commit.title"
                    @click="onCommitClick(commit)"
                    :class="{selectedCommit: modal.selected.title === commit.title}"
                >
                    <p class="tag" v-if="index === 0"><i class="fas fa-code-branch" />{{commit.type}}</p>
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

        }
    },
    methods: {
        getCommits: function() {
            switch(this.item) {
                case 'master':
                    return this.mapCommits([...projects, ...experience], 'master')
                case 'experience':
                    return this.mapCommits(experience, 'experience')
                case 'projects':
                    return this.mapCommits(projects, 'projects')
            }
        },
        mapCommits: function(commits, type) {
            return commits.map(commit => {
                commit.type = type
                commit.class = `${type}Branch`
                return commit
            })
        },
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
