<template>
    <div id="sideNav">
        <a href="bin/archived/index.html">legacy</a>
        <button v-on:click="$emit('navSelect', 'master')">master</button>
        <button v-on:click="$emit('navSelect', 'projects')">projects</button>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>
