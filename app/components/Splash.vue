<template>
    <div id="splash" class="container col">
          <div class="item row" id="splash-header">
            <img src="images/me.png" id="splash-img" 
                @mouseover="dev.show=true"
            />
          </div>
          <div class="item" id="splash-about">
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
</template>

<script>
import '../styles/splash.sass'

export default {

}
</script>