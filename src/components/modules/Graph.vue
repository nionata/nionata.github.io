<template>
    <div id="graph">
        <Commit 
            :commit="commit" 
            :branches="getBranchImages(commit.type)" 
            :tag="shouldTag(commit.type, index)" 
            :selected="commit.title === selected.title"
            :key="commit.title"
            @onClick="onCommitClick($event)" 
            v-for="(commit, index) in getCommits(item)" />
    </div>
</template>

<script>
import Commit from './Commit.vue'

export default {
    components: {Commit},
    props: ['commits', 'item', 'selected'],
    methods: {
        getCommits: function(selector) {
            if (selector === 'master') {
                return this.commits
            }

            return this.commits.filter(commit => (commit.type === selector || commit.type === 'master'))
        },
        getBranchImage: function(branch, type) {
            if (type === branch) {
                return '/src/images/branchCommit.svg'
            }

            return '/src/images/branch.svg'
        },
        getBranchImages: function(type) {
            let branches = ['master', 'projects', 'experience']

            return branches.filter(branch => {
                    if (this.item === 'master' || branch === 'master') return true
                    if (this.item === branch) return true
                }).map(branch => {
                    return {
                        class: `${branch}Branch`,
                        img: this.getBranchImage(branch, type)
                    }
                })
        },
        shouldTag: function(type, index) {
            return index === this.getCommits(this.item).findIndex(commit => commit.type === type)
        },
        onCommitClick: function(commit) {
            if (commit.type !== 'master') this.$emit('onCommitClick', commit)
        }
    }
}
</script>
