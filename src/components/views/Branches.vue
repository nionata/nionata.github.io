<template>
    <div id="branches">
        <div id="historyContainer">
            <div id="branchContainer">
                <div class="branch" v-for="commit in getCommits()" :key="commit.title">
                    <img 
                        :src="getBranchImage('master', commit.type)"
                        class="masterBranch"
                        v-if="item === 'master'"
                    />
                    <img 
                        :src="getBranchImage('projects', commit.type)"
                        class="projectsBranch"
                        v-if="item === 'master' || item === 'projects'"
                    />
                    <img 
                        :src="getBranchImage('experience', commit.type)"
                        class="experienceBranch"
                        v-if="item === 'master' || item === 'experience'"
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

const tit = 'fasd'

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
        "class": "masterBranch"
    }
}

const mergeCommit = (year, type) => {
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
        "type": "master",
        "class": "masterBranch"
    }
}

export default {
    components: {InformationModal},
    props: ['modal', 'item'],
    data() {
        return {
            commits: []
        }
    },
    methods: {
        getCommits: function() {
            switch(this.item) {
                case 'master':
                    return this.commits.merged
                case 'experience':
                    return this.labelCommits(experienceRaw, 'experience')
                case 'projects':
                    return this.labelCommits(projectsRaw, 'projects')
            }
        },
        getBranchImage(branch, type) {
            if (branch === type) return '/src/images/branchCommit.svg'
            return '/src/images/branch.svg'
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
        },
        processCommit: function(commitGroups, merged, meta) {
            if(!commitGroups.length) return {merged, meta}
            
            const [year, commits] = commitGroups.shift()

            meta[year] = {
                projects: commits.find(commit => commit.type === 'projects') !== undefined,
                experience: commits.find(commit => commit.type === 'experience') !== undefined,
            }

            merged.unshift(...commits)
            if (meta[year].projects && commitGroups.length) merged.unshift(mergeCommit(year, 'projects'))
            if (meta[year].experience && commitGroups.length) merged.unshift(mergeCommit(year, 'experience'))

            return this.processCommit(commitGroups, merged, meta)
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
                commitGroups[year].unshift(commit)
            } else {
                commitGroups[year] = [commit, initCommit(year)]
            }
        })

        this.commits = this.processCommit(Object.entries(commitGroups), [], {})
    }
}
</script>
