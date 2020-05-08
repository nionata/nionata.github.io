<template>
    <div id="spotlight" class="row">
        <div class="item imageContainer" v-for="s in spotlight" v-bind:key="s.name">
          <img class="spotlight" :src="'./app/images/spotlight/' + s.link" alt="s.name" />
        </div>
    </div>
</template>

<script>
import '../styles/spotlight.sass'
import spotlight from '../js/spotlight'

export default {
    data() {
        return {
            spotlight
        }
    }
}
</script>