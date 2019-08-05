<template>
    <div id="workspace">
        <div id="terminalContainer">
            <div id="terminalHeader">
                <div id="actionGroup">
                    <i id="stopAction" class="terminalAction fas fa-stop" title="Stop" @click="onAction('stop')" />
                    <i id="slowAction" class="terminalAction fas fa-backward" title="Slow down" @click="onAction('slowDown')" />
                    <i id="speedAction" class="terminalAction fas fa-forward" title="Speed up" @click="onAction('speedUp')" />
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
let {lines, charDelay, incrementInterval} = terminal

export default {
    components: {},
    props: ['item', 'initializing'],
    data() {
        return {
            content: [],
            line: '',
            stop: false,
        }
    },
    methods: {
        onAction: function(action) {
            if (this.stop || !this.initializing) return

            switch (action) {
                case 'stop':
                    const lastLine = lines.pop()

                    this.content = lines
                    this.line = lastLine
                    this.stop = true
                    this.$emit('onDoneInitializing')
                    break
                case 'slowDown':
                    charDelay += incrementInterval
                    break
                case 'speedUp':
                    charDelay -= incrementInterval
                    break
            }
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
                if (this.stop) return

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
