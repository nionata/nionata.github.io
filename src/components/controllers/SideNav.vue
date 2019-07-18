<template>
    <div id="sideNav">
        <div class="navGroup">
            <div class="navMediaHolder">
                
            </div>
            <div class="navContentHolder">
                <p class="navTitle">WORKSPACE</p>
                <p class="navItem">Life Status</p>
            </div>
        </div>
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
