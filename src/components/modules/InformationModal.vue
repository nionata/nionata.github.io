<template>
    <transition name="custom-classes-transition"
    enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutLeft">
    <div id="modal" v-if="data.modal.enabled" :class="{modalEnabled: data.modal.enabled, modalDisabled: !data.modal.enabled}">
        <div id="modalLeft">
            <div id="metaContainer">
                hey
            </div>
            <div id="tagsContainer">
                hi
            </div>
        </div>
        <div id="modalRight">
            <div id="modalDivider">
            </div>
            <div id="descriptionContainer">
            </div>
            <div id="toggleContainer">
                <i class="fas fa-times" @click="onModalClose"/>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    props: ['data'],
    methods: {
        onModalClose: function() {
            this.data.modal.enabled = false
        }
    }
}
</script>
