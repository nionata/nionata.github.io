const timeout = 2500

function initVue() {
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
      experience: experience
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
