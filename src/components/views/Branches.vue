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

const initCommit = (year) => {
    return {
        "title": `init ${year}`,
        "subTitle": "The start of a new year!",
        "tags": ["Stuff!"],
        "links": [],
        "image": "",
        "description": [],
        "date": {
            "start": "",
            "end": ""
        },
        "type": "master",
    }
}

const mergeCommit = (year, type, position) => {
    return {
        "title": `merge '${type}' at the end of ${year}`,
        "subTitle": `a good year of ${type}`,
        "tags": ["Stuff!"],
        "links": [],
        "image": "",
        "description": [],
        "date": {
            "start": "",
            "end": ""
        },
        "type": `merge${position}`,
    }
}

const uncommittedChanges = () => {
    return {
        "title": "uncommitted changes",
        "subTitle": "",
        "tags": ["Stuff!"],
        "links": [],
        "image": "",
        "description": [],
        "date": {
            "start": "",
            "end": ""
        },
        "type": "master",
    }
}

export default {
    components: {Graph, InformationModal},
    props: ['modal', 'item'],
    data() {
        return {
            commits: []
        }
    },
    methods: {
        onCommitClick: function(commit) {
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
        mergeCommits: function(commitGroups, master, meta) {
            // Base case
            if(!commitGroups.length) return {master, meta}
            
            // Get the groups year and corresponding commits
            const [year, commits] = commitGroups.shift()

            // Get the indexes, if any, of the diff commit types
            meta = {
                projects: commits.findIndex(commit => commit.type === 'projects'),
                experience: commits.findIndex(commit => commit.type === 'experience'),
                master: commits.findIndex(commit => commit.type === 'master')
            }

            // Add commits and add merge commits if applicabled
            master.unshift(...commits)
            if (master.projects !== -1 && commitGroups.length) master.unshift(mergeCommit(year, 'projects', 'Inner'))
            if (master.experience !== -1 && commitGroups.length) master.unshift(mergeCommit(year, 'experience', 'Outer'))

            // Recurse
            return this.mergeCommits(commitGroups, master, meta)
        }
    },
    mounted: function() {
        // Get the raw commits and label them
        let projects = this.labelCommits(projectsRaw, 'projects')
        let experience = this.labelCommits(experienceRaw, 'experience')
        
        // Init commit holders 
        let commitGroups = {}
        const commits = [...projects, ...experience]

        // Sort and group commits by year
        commits.sort((a, b) => new Date(a.date.start) - new Date(b.date.start))        
        commits.forEach(commit => {
            const year = new Date(commit.date.start).getFullYear()

            if (commitGroups[year]) {
                commitGroups[year].unshift(commit)
            } else {
                commitGroups[year] = [commit, initCommit(year)]
            }
        })

        // Get the master commits
        let {master, meta} = this.mergeCommits(Object.entries(commitGroups), [], {})
        const rootCommit = master.pop()

        // Add root to experience
        experience.push({
            ...rootCommit,
            type: 'experience'
        })

        // Add root to projects
        projects.push({
            ...rootCommit,
            type: 'projects'
        })

        // Add root to master
        master.push({
            ...rootCommit,
            type: 'rootInit'
        })

        // Update state
        this.commits = {
            experience,
            projects,
            master, 
            tags: Object.values(meta)
        }
    }
}
</script>
