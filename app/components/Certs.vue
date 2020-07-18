<template>
    <div id="certs" class="col">
        <h2 class="item sectionTitle">Certifications</h2>
        <div id="certsContainer" class="item rowNarrow">
            <div class="item cert" v-for="cert in certs" :key="cert.badge">
                <a :href="'https://www.youracclaim.com/badges/' + cert.badge" target="_blank">
                    <img :src="'./app/images/certs/' + cert.img" class="badge" />
                </a>
            </div>
        </div>
        <div id="fullCertContainer" class="item rowNarrow">
            <a href="app/images/certs/codepath.PNG">
                <img src="app/images/certs/codepath.PNG" class="fullCert" />
            </a>
        </div>
    </div>
</template>

<script>
import 'styles/certs.sass'
import certs from 'js/certs'

export default {
    data() {
        return {
            certs
        }
    }
}
</script>