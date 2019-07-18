<template>
    <div id="sideNav">
        <div v-for="group in navGroups" v-bind:key="group.title" class="navGroup">
            <div class="navMediaHolder">
                <i v-bind:class="group.icon"></i>
            </div>
            <div class="navContentHolder">
                <p class="navTitle">{{group.title}}</p>
                <p 
                    v-for="item in group.items" 
                    v-bind:key="item" 
                    v-on:click="$emit('navSelect', item)" 
                    class="navItem" 
                    v-bind:class="{navItemSelected: item === data.modal.display}">{{item}}
                </p>
            </div>
        </div>
        <div id="navFooter">
            <div id="linkGroup">
                <a href="https://github.com/nionata" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                <a href="mailto:nionata@ufl.edu" target="_blank"><i class="far fa-envelope fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/nionata/" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a>
            </div>
            <p href="bin/archived/index.html">nicholas-ionata (Git)</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data() {
        return {
            navGroups: [
                {
                    icon: "fas fa-laptop-code",
                    title: "WORKSPACE",
                    items: ["Life Status"]
                },
                {
                    icon: "fas fa-code-branch",
                    title: "BRANCHES",
                    items: ["master", "experience", "projects"]
                },
                {
                    icon: "fas fa-tag",
                    title: "TAGS",
                    items: ["languages", "tools", "technologies"]
                },
                {
                    icon: "fas fa-cloud",
                    title: "REMOTES",
                    items: ["origin", "legacy"]
                }
            ]
        }
    }
}
</script>
