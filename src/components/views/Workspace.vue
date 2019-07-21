<template>
    <div id="workspace">
        <div id="terminalContainer">
            <div id="terminalHeader">
                <div id="dotGroup">
                    <p class="dot" id="dotRed"></p>
                    <p class="dot" id="dotYellow"></p>
                    <p class="dot" id="dotGreen"></p>
                </div>
                <p id="terminalTitle">./life_status</p>
            </div>
            <div id="terminalBody">
                <p v-for="(line, index) in content" :key="index" :class="{grayLine: isComment(line)}">{{line}}<br/></p>
                <div id="cursorLine">
                    <p id="terminalHead">$</p>
                    <i class="fas fa-rectangle-portrait" />{{line}}
                    <p class="blinking" id="terminalCursor"></p> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const lines = [
    "# Me",
    "Hi. I'm Nicholas Ionata",
    "",
    "# School",
    "I am a junior at the University of Florida studying Computer Science and Buisness",
    "",
    "# Work",
    "I am a Backend Engineering Intern at Stream Monkey!",
    "",
    "# Interests",
    "Technology, business, fitness, and traveling",
    "",
    "# What's next?",
    "Get in touch via Linkedin or the methods on my resume",
    "",
    "npm run start",
    ""
]
const finalLine = "Enjoy"
const charDelay = 80

export default {
    components: {},
    props: ['item'],
    data() {
        return {
            content: [],
            line: ''
        }
    },
    methods: {
        isComment: function(line) {
            return line.includes("#")
        },
        processLine: function(i) {
            if(i === lines.length) {
                // Reloop Terminal
                // window.setTimeout(() => {
                //     this.content = []
                //     this.processLine(0)
                // }, 5000)
                this.line = finalLine
                this.$emit('onDoneInitializing')
                return 
            }

            let line = lines[i]
            this.line = line // ''
            // this.processChars(line, 0)

            window.setTimeout(() => {
                this.addLine(line)
                this.processLine(i + 1)
            }, line.length * charDelay)
        },
        // processChars: function(line, i) {
        //     window.setTimeout(() => {
        //         this.line += line.charAt(i)
        //         this.processChars(line, i + 1)
        //     }, charDelay)
        // },
        addLine: function(line) {
            this.content.push(line)
        }
    },
    mounted: function() {
        this.processLine(0)
    }
}
</script>
