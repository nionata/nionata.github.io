<template>
    <div id="graph">
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
            <div id="commitsContainer">
                <div 
                    class="commitContainer"
                    v-for="(commit, index) in getCommits()"
                    :key="commit.title"
                    @click="$emit('onCommitClick', commit)"
                    :class="{selectedCommit: selected.title === commit.title}"
                >
                    <p class="tag" v-if="shouldTag(index)"><i class="fas fa-code-branch" />{{commit.type}}</p>
                    <p 
                        class="commitTitle" 
                        :class="{commitYear: commit.type === 'master'}"
                    >
                        {{commit.title}}
                        <span v-if="commit.type === 'experience'">, {{commit.subTitle}}</span>
                    </p>
                    <!-- <p class="commitYear" v-if="commit.date && commit.date.start">{{commit.date.start}}</p> -->
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['commits', 'item', 'selected'],
    methods: {
        getCommits: function() {
            // Get rid of merge commits for now 
            if (this.commits[this.item]) return this.commits[this.item].filter(commit => !commit.type.includes('merge'))
            // return this.commits[this.item]
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
            const {tags} = this.commits
            switch(this.item) {
                case 'master': return tags.includes(index)
                default: return index === 0
            }
        }
    }
}
</script>
