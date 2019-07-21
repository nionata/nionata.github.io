<template>
    <div id="remotes">
        <div id="originContainer" v-if="isItem('origin')">
            <p id="title">Log</p>
            <p class="remoteDescription">
                2019-05: added some templating with Vue.js to my now <a href="/bin/archived/index.html" target="_blank">legacy</a> site <br/>
                2019-06: "life is one big repo" <br/>
                2019-07: started a full redesign, as the site was two and half years old, with the git repo idea <br/>
                2019-08: published the current site and archived the original <br/>
            </p>
            <img id="designStages" src="/bin/design/phases/design-phases.gif" alt="design stages"/>
            <p>The design phases</p>
            <p>Origin powered by Vue.js, SASS, Webpack, and Babel</p>
        </div>
        <div id="legacyContainer" v-if="isItem('legacy')">
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: ['item'],
    data() {
        return {
        }
    },
    methods: {
        isItem: function(item) {
            return item === this.item
        },

    }
}
</script>
