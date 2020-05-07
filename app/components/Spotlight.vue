<template>
    <div id="spotlight" class="container row">
        <div class="item" v-for="s in spotlight" v-bind:key="s.name">
          <img  v-bind:src="s.link" alt="s.name" />
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