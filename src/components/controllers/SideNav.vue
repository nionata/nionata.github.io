<template>
    <div id="sideNav" :class="{navOpen: mobileNavShow, navClose: !mobileNavShow}">
        <i class="fas" :class="{'fa-bars': !mobileNavShow, 'fa-times': mobileNavShow}" @click="onMobileNavToggle" id="navToggle"/>
        <div v-for="group in navGroups" :key="group.title" class="navGroup">
            <div class="navMediaHolder">
                <i class="fas fa-fw" :class="group.icon"></i>
            </div>
            <div class="navContentHolder">
                <p class="navTitle">{{group.title}}</p>
                <p 
                    v-for="item in group.items" 
                    :key="item" 
                    @click="onNavItemClick(item)" 
                    class="navItem" 
                    :class="{navItemSelected: item === data.modal.display}">{{item}}
                </p>
            </div>
        </div>
        <div id="navFooter">
            <div id="linkGroup" class="footerSection">
                <a href="https://github.com/nionata" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                <a href="mailto:nionata@ufl.edu" target="_blank"><i class="far fa-envelope fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/nionata/" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a>
            </div>
            <p href="bin/archived/index.html" class="footerSection">nicholas-ionata (Git)</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'navSelect'],
    data() {
        return {
            mobileNavShow: false,
            navGroups: [
                {
                    icon: "fa-laptop-code",
                    title: "WORKSPACE",
                    items: ["Life Status"]
                },
                {
                    icon: "fa-code-branch",
                    title: "BRANCHES",
                    items: ["master", "experience", "projects"]
                },
                {
                    icon: "fa-tag",
                    title: "TAGS",
                    items: ["languages", "tools", "technologies"]
                },
                {
                    icon: "fa-tag",
                    title: "REMOTES",
                    items: ["origin", "legacy"]
                }
            ]
        }
    },
    methods: {
        onNavItemClick: function(item) {
            this.$emit('navSelect', item)
            this.mobileNavShow = false
        },
        onMobileNavToggle: function() {
            this.mobileNavShow = !this.mobileNavShow
        }
    }
}
</script>
