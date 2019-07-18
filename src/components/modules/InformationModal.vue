<template>
    <div id="modal" v-bind:class="{modalEnabled: data.modal.enabled, modalDisabled: !data.modal.enabled}">
        My modal
        <button v-on:click="$emit('closeModal')">close</button>
        {{data.modal.enabled}}
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>
