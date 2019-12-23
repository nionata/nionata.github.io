<template>
    <div id="branches">
        <Graph :commits="commits" :item="item" :selected="modal.selected" @onCommitClick="onCommitClick($event)"/>
        <informationModal :commit="modal.selected" :enabled="modal.enabled" @onModalClose="onModalClose" />
    </div>
</template>

<script>
import Graph from '../modules/Graph.vue'
import InformationModal from '../modules/InformationModal.vue'
import projectsRaw from '../../js/projects.json'
import experienceRaw from '../../js/experience.json'
import {initCommit, mergeCommit, uncommittedChanges, initRepo} from '../../js/commits'

export default {
    components: {Graph, InformationModal},
    props: ['modal', 'item'],
    data() {
        return {
            commits: {}
        }
    },
    methods: {
        onCommitClick: function(commit) {
            let type = commit.type
            if (type === 'master') return

            this.modal.selected = commit
            this.modal.enabled = true
        },
        onModalClose: function() {
            this.modal.enabled = false
            this.modal.selected = ''
        },
        labelCommits: function(commits, type) {
            return commits.map(commit => {
                commit.type = type
                return commit
            })
        },
        addYears: function(commits) {
            let yearsIndex = {}
            let tags = []
            const len = commits.length

            commits.sort((a, b) => new Date(b.date.start) - new Date(a.date.start)) 
            for (let i = 0; i < len; i++) {
                let curr = commits.pop()
                const year = new Date(curr.date.start).getFullYear()

                if (!yearsIndex[year]) {
                    yearsIndex[year] = true 
                    commits.unshift(initCommit(year))
                }
                
                commits.unshift(curr)
            }

            return commits
        }
    },
    mounted: function() {
        // Get the raw commits and label them
        let projects = this.labelCommits(projectsRaw, 'projects')
        let experience = this.labelCommits(experienceRaw, 'experience')

        // Update state
        this.commits = this.addYears([...projects, ...experience])
    }
}
</script>
