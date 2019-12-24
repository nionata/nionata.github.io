<template>
    <div class="commit">
        <div class="dateContainer">
            <p class="date" v-if="commit.type === 'master'">{{commit.title}}</p>
        </div>
        <div class="branchContainer">
            <img v-for="branch in branches" :src="branch.img" :class="branch.class" :key="branch.class" />
        </div>
        <div class="messageContainer" :class="{titleMessage: commit.type !== 'master', selectedCommit: selected}" @click="$emit('onClick', commit)" :key="commit.title">
            <!-- <p class="tag" v-if="shouldTag(index)"><i class="fas fa-code-branch" />{{commit.type}}</p> -->
            <p class="commitTitle" v-if="commit.type !== 'master'">{{commit.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['commit', 'branches', 'selected'],
}
</script>
