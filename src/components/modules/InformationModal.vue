<template>
    <div id="modal" :class="{modalEnabled: enabled, modalDisabled: !enabled}">
        <div id="modalLeft">
            <div id="metaContainer">
                <p id="modalTitle">{{commit.title}}</p>
                <p>{{commit.subTitle}}</p>
                <p v-if="commit.date">{{commit.date.start}} - {{commit.date.end}}</p>
            </div>
            <div id="linksContainer">
                <a class="link" target="_blank" v-for="link in commit.links" :key="link.link" :href="link.link">{{link.type}}</a>
            </div>
            <div id="tagsContainer">
                <p class="tag" v-for="tag in commit.tags" :key="tag">{{tag}}</p>
            </div>
        </div>
        <div id="modalRight">
            <div id="descriptionsContainer" v-if="commit.description && commit.description.length">
                <div id="descriptionContainer" v-for="(description, index) in commit.description" :key="index">
                    <p class="descriptionNumber">{{index + 1}}</p>
                    <p class="description">{{description}}</p>
                </div>
            </div>
            <div id="toggleContainer">
                <transition
                    name="modalClose"
                    enter-active-class="animated rotateIn"
                    leave-active-class="animated rotateOut"
                >
                    <i v-if="enabled" class="fas fa-times" @click="$emit('onModalClose')" />
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['commit', 'enabled'],
}
</script>
