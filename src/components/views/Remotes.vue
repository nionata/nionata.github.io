<template>
    <div id="remotes">
        <div class="remoteContainer" v-if="isItem('origin')">
            <div class="logContainer">
                <p id="title">Log</p>
                <p class="remoteDescription">
                    2019-03: added some templating with Vue.js to my now <a href="/bin/archived/index.html" target="_blank">legacy</a> site <br/>
                    2019-06: "life is one big repo" <br/>
                    2019-07: started a full redesign, as the site was two and half years old, with the git repo idea <br/>
                    <img class="remoteImage" src="/bin/design/phases/design-phases.gif" alt="design stages"/> <br/>
                    2019-08: published the current site and archived the original <br/>
                </p>    
            </div>
            <p>Origin powered by Vue.js, SASS, Webpack, and Babel</p>
        </div>
        <div class="remoteContainer" v-if="isItem('legacy')">
            <div class="logContainer">
                <p id="title">Log</p>
                <p class="remoteDescription">
                    2016-12: init <br/>
                    <img class="remoteImage" id="legacyImage" src="/src/images/legacy.png" @click="onLegacyClick()" alt="legacy"/> <br/>
                    2017-01: small updates <br/>
                    2018-12: fixed broken link <br/>
                    2019-03: added some templating with Vue.js to more easily add experiences and projects <br/>
                </p>    
            </div>
            <p>Legacy powered by jQuery, Vue.js and Bootstrap</p>
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
        onLegacyClick: function() {
            window.open("/bin/archived/index.html", "_blank")
        }
    }
}
</script>
