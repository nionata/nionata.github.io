<template>
  <div id="app">
    {{ message }}
    <a href="bin/archived/index.html">Old Site</a>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello World',
            }
        },
    }
</script>

<style>
    #app {
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        color: blue;
    }
</style>