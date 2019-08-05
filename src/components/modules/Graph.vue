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
            <div id="commitContainer">
                <div 
                    class="commit"
                    v-for="(commit, index) in getCommits()"
                    :key="commit.title"
                    @click="$emit('onCommitClick', commit)"
                    :class="{selectedCommit: selected.title === commit.title}"
                >
                    <p class="tag" v-if="commits.tags.includes(index)"><i class="fas fa-code-branch" />{{commit.type}}</p>
                    <p class="commitTitle">{{commit.title}}</p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['commits', 'item', 'selected'],
    methods: {
        getCommits: function() {
            return this.commits[this.item]
        },
        getBranchImage(branch, type) {
            switch (type) {
                case branch:
                    return '/src/images/branchCommit.svg'
                case 'rootInit':
                    if (branch === 'master') return '/src/images/masterBranch.svg' 
                    return ''
                default: 
                    return '/src/images/branch.svg'
            }
        },
    }
}
</script>
