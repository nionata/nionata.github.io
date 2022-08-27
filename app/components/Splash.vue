<template>
    <div id="splash" class="col">
          <div class="item row" id="splash-header">
          </div>
          <div class="item" id="splash-about">
            <h1 id="splash-about-title">
              Hi, I'm Nicholas Ionata
            </h1>
            <div id="splash-about-content">
                <h3>
                  I am a software engineer working on live data systems at Anduril.
                </h3>
                <h3>
                  I previously worked on live stats at Stream Monkey.
                </h3>
            </div>
          </div>
          <Contacts />
          <a href="#spotlight">
            <i class="fa fa-chevron-down fa-5x" aria-hidden="true" id="splash-action"/>
          </a>
    </div>
</template>

<script>
import 'styles/splash.sass'
import Contacts from 'comp/Contacts'

export default {
    props: ['dev'],
    components: { Contacts, },
}
</script>