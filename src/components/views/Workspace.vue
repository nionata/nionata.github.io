<template>
    <div id="workspace">
        <div id="terminalContainer">
            <div id="terminalHeader">
                <div id="dotGroup">
                    <p class="dot" id="dotRed" @click="onSkip"></p>
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
import terminal from '../../js/terminal.json'
const {lines, charDelay} = terminal

export default {
    components: {},
    props: ['item'],
    data() {
        return {
            content: [],
            line: '',
            skip: false,
        }
    },
    methods: {
        onSkip: function() {
            if (this.skip) return

            const lastLine = lines.pop()
            
            this.content = lines
            this.line = lastLine
            this.skip = true
            this.$emit('onDoneInitializing')
        },
        isComment: function(line) {
            return line.includes("#")
        },
        processLine: function(i) {
            const lastIndex = lines.length - 1

            if(i === lastIndex) {
                this.line = lines.pop()
                this.$emit('onDoneInitializing')
                return 
            }

            this.line = lines[i] 

            window.setTimeout(() => {
                if (this.skip) return

                this.content.push(this.line)
                this.processLine(i + 1)
            }, this.line.length * charDelay)
        }
    },
    mounted: function() {
        this.processLine(0)
    }
}
</script>
