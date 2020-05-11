<template>
    <div id='nav' class="item row" 
        :class="{ navShadow: scroll != 0 }">
        <div id="navLeft" class="item row">
            <a href="#splash" class="item">
                <img id="navLogo" :src="logo" />
            </a>
            <a href="#experience" class="navLink">
                <p>Experience</p>
            </a>
            <!-- <a href="#skills" class="item navLink">
                Skills
            </a> -->
            <a href="#certs" class="navLink">
                <p>Certifications</p>
            </a>
        </div>
        <div id="navRight" class="item row">
            <a href="./resume.pdf" class="navLink">
                <p>Resume</p>
            </a>
        </div>
    </div>
</template>

<script>
import 'styles/nav.sass'
import logo from 'images/logo.png'

export default {
    data() {
        return {
            scroll: 0,
            logo
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll (e) {
            this.scroll = window.scrollY
        }
    }
}
</script>