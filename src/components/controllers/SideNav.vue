<template>
    <div id="sideNav" :class="{navOpen: nav.show, navClose: !nav.show, navInitializing: nav.initializing}">
        <i class="fas" :class="{'fa-bars': !nav.show, 'fa-times': nav.show}" @click="$emit('onNavToggle')" id="navToggle"/>
        <div v-for="group in navGroups" :key="group.title" class="navGroup">
            <div class="navMediaHolder">
                <i class="fas fa-fw" :class="group.icon"></i>
            </div>
            <div class="navContentHolder">
                <p class="navTitle">{{group.title}}</p>
                <p 
                    v-for="item in group.items" 
                    :key="item" 
                    @click="onNavItemClick(`${group.title}.${item}`)" 
                    class="navItem" 
                    :class="{navItemSelected: isSelected(`${group.title}.${item}`)}">{{item}}
                </p>
            </div>
        </div>
        <div id="navFooter">
            <div id="linkGroup" class="footerSection">
                <a href="https://github.com/nionata" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                <!--<a href="mailto:nionata@ufl.edu" target="_blank"><i class="far fa-envelope fa-2x"></i></a>-->
                <a href="/bin/archived/resume.pdf" target="_blank"><i class="far fa-file-alt fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/nionata/" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a>
            </div>
            <p href="bin/archived/index.html" class="footerSection">nicholas-ionata (Git)</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['nav'],
    data() {
        return {
            navGroups: [
                {
                    icon: "fa-terminal",
                    title: "workspace",
                    items: ["Life Status"]
                },
                {
                    icon: "fa-code-branch",
                    title: "branches",
                    items: ["master", "experience", "projects"]
                },
                {
                    icon: "fa-tag",
                    title: "tags",
                    items: ["languages", "tools", "technologies"]
                },
                {
                    icon: "fa-tag",
                    title: "remotes",
                    items: ["origin", "legacy"]
                }
            ]
        }
    },
    methods: {
        onNavItemClick: function(item) {
            this.$emit('navSelect', item)
            if (this.isMobile()) this.$emit('onNavToggle')
        },
        isSelected: function(item) {
            return item === this.nav.selected
        },
        isMobile: function isMobile() {
            return window.innerWidth <= 600
        } 
    }
}
</script>
