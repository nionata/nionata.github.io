const timeout = 2500

function initVue() {
  Vue.component('splash', {
    props: ['dev'],
    template: `
      <div class="section-col primary-color" id="splash">
          <div class="section-item section-row" id="splash-header">
            <img src="images/me.png" id="splash-img" 
                @mouseover="dev.show=true"
            />
          </div>
          <div class="section-item" id="splash-about">
            <h1 id="splash-about-title">
              Hi, I'm Nicholas Ionata
            </h1>
            <div id="splash-about-content">
                <h3>
                  I study 
                  <span class="splash-about-highlight">
                    Computer Science
                  </span> 
                  at the 
                  <span class="splash-about-highlight">
                    University of Florida
                  </span>
                </h3>
                <h3>
                  In my freetime I
                  <span class="splash-about-highlight">
                    make
                  </span>
                  cool things
                </h3>
            </div>
          </div>
          <a href="#experience">
            <i class="fa fa-chevron-down fa-5x" aria-hidden="true" id="splash-action"/>
          </a>
      </div>
    `
  })

  Vue.component('spotlight', {
    props: ['links'],
    template: `
      <div class="section-row accent-color" id="spotlight">
        <div class="section-item" v-for="l in links" v-bind:key="l.name">
          <img  v-bind:src="l.link" alt="l.name"/>
        </div>
      </div>
    `
  })

  new Vue({
    el: "#app",
    data: {
      spotlight: spotlight,
      projects: projects,
      experience: experience,
      dev: {
        mode: false,
        show: false
      }
    },
    methods: {
      rotateSpotlight: function() {
        let shift = this.spotlight.shift()
        this.spotlight.push(shift)
      }
    },
    created: function() {
      // If mobile
      // setTimeout(
      //   setInterval(
      //     this.rotateSpotlight,
      //     timeout
      //   ),
      //   timeout
      // )
    }
  })
}
