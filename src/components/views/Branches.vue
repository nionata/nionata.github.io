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
import projectsRaw from '../../js/projects.json'
import experienceRaw from '../../js/experience.json'
import InformationModal from '../modules/InformationModal.vue'

export default {
    components: {InformationModal},
    props: ['modal', 'item'],
    data() {
        return {
            commitGroups: {}
        }
    },
    methods: {
        getCommits: function() {
            switch(this.item) {
                case 'master':
                    return this.labelCommits([...projectsRaw, ...experienceRaw], 'master')
                case 'experience':
                    return this.labelCommits(experienceRaw, 'experience')
                case 'projects':
                    return this.labelCommits(projectsRaw, 'projects')
            }
        },
        labelCommits: function(commits, type) {
            return commits.map(commit => {
                commit.type = type
                commit.class = `${type}Branch`
                return commit
            })
        },
        onCommitClick: function(commit) {
            this.modal.selected = commit
            this.modal.enabled = true
        },
        onModalClose: function() {
            this.modal.enabled = false
            this.modal.selected = ''
        }
    },
    mounted: function() {
        const projects = this.labelCommits(projectsRaw, 'projects')
        const experience = this.labelCommits(experienceRaw, 'experience')

        let commitGroups = {}
        let commits = [...projects, ...experience]

        commits.sort((a, b) => new Date(a.date.start) - new Date(b.date.start))
        commits.forEach(commit => {
            const year = new Date(commit.date.start).getFullYear()

            if (commitGroups[year]) {
                commitGroups[year].push(commit)
            } else {
                commitGroups[year] = [commit]
            }
        })
    
        this.commitGroups = commitGroups
    }
}
</script>
