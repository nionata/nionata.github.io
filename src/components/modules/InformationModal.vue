<template>
    <div id="modal" :class="{modalEnabled: data.modal.enabled, modalDisabled: !data.modal.enabled}">
        <transition name="fade">
            <div id="modalWrapper" v-if="data.modal.enabled">
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
    </div>
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
