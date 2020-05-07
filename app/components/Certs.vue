<template>
    <div id="certs" class="row">
        <h1>Certifications</h1>
        <div class="item row">
            <div class="item cert" v-for="cert in certs" :key="cert.badge">
                <a :href="'https://www.youracclaim.com/badges/' + cert.badge" target="_blank">
                    <img :src="'./app/images/certs/' + cert.img">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import '../styles/certs.sass'
import certs from '../js/certs'

export default {
    data() {
        return {
            certs
        }
    }
}
</script>