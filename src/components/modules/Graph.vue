<template>
    <div id="graph">
        <Commit :commit="commit" v-for="commit in getCommits(item)" :key="commit.title" />
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
            switch (type) {
                case branch:
                    return '/src/images/branchCommit.svg'
                case 'mergeInner':
                    if (branch === 'master') return '/src/images/innerMerge.svg'
                    if (branch === 'experience') return '/src/images/branch.svg'
                    return ''
                case 'mergeOuter':
                    if (branch === 'master') return '/src/images/outerMerge.svg'
                    return ''
                case 'rootInit':
                    if (branch === 'master') return '/src/images/rootCommit.svg' 
                    return ''
                default: 
                    return '/src/images/branch.svg'
            }
        },
        shouldTag: function(index) {
            // const {tags} = this.commits
            const tags = []
            switch(this.item) {
                case 'master': return tags.includes(index)
                default: return index === 0
            }
        }
    }
}
</script>
