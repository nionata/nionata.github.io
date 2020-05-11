<template>
  <div id="experience" class="col">
    <div id="header" class="rowBare">
      <Header />
      <h2 class="sectionTitle">Experience</h2>
    </div>
    <div class="experience" v-for="(exp, x) in experiences" :key="exp.title">
      <div class="dateContainer">
          <p v-if="exp.type === 'date'" :class="exp.type">{{exp.title}}</p>
      </div>
      <div class="columnContainer">
        <Column
          v-for="(type, j) in getColumnTypes(exp.type)"
          :class="columnTags[j]"
          :key="j"
          :type="type"
        />
      </div>
      <div class="detailsContainer" v-if="exp.type !== 'date'" 
        @mouseenter="onDetails(x)" 
        @mouseleave="onDetails()"
      >
         <div id="detailsHeader" class="rowBare" :class="exp.type">
            <div class="rowBare">
              <p v-if="exp.type === 'work'">{{exp.subTitle}} @ {{exp.title}}</p>
              <p v-if="exp.type !== 'work'">{{exp.title}}</p>
            </div>
            <div id="tagsContainer" class="rowBare">
              <span class="outline" v-for="(tag, i) in exp.tags" :key="i">{{tag}}</span>
            </div>
         </div>
         <transition name="fade">
         <div id="detailsBody" class="colBare" v-if="active == x">
           <div class="rowBare item">
              <p v-if="exp.date.end">{{exp.date.start}} - {{exp.date.end}}</p>
              <p v-if="!exp.date.end">{{exp.date.start}}</p>
            </div>
            <div id="descriptionContainer" class="colBare item">
              <li v-for="(line, i) in exp.description" :key="i">{{line}}</li>
            </div>
            <div id="linksContainer" class="rowBare">
              <a v-for="(link, i) in exp.links" :href="link.link" target="_blank" :key="i"><span>{{link.type}}</span></a>
            </div>
         </div>
         </transition>
      </div>
    </div>
  </div>
</template>

<script>
import "styles/experience.sass"
import Header from "comp/Header.vue"
import Column from "comp/Column.vue"
import work from "js/work"
import projects from "js/projects"

const months = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"]

export default {
  components: { Header, Column },
  data() {
    return {
      experiences: [],
      columnTags: ["date", "work", "projects"],
      active: -1
    }
  },
  methods: {
    labelTimes: function(commits, type) {
      return commits.map(commit => {
        commit.type = type
        return commit
      })
    },
    addYears: function(commits) {
      let yearsIndex = {}
      let tags = []
      const len = commits.length

      commits.sort((a, b) => this.genDate(b.date.start) - this.genDate(a.date.start))
      for (let i = 0; i < len; i++) {
        let curr = commits.pop()
        const year = curr.date.start.split(" ")[1]
        
        if (!yearsIndex[year]) {
          yearsIndex[year] = true
          commits.unshift(this.date(year))
        }

        commits.unshift(curr)
      }

      return commits
    },
    genDate(monthYear) {
        let split = monthYear.split(" ")
        return new Date(split[1], months.indexOf(split[0]), 1)
    },
    date: function(year) {
      return {
        title: `${year}`,
        description: [],
        type: "date"
      }
    },
    getColumnTypes: function(type) {
      let types = ["rect", "rect", "rect"]
      let i

      switch (type) {
        case "date":
          i = 0
          break
        case "work":
          i = 1
          break
        case "projects":
          i = 2
          break
      }

      types[i] = "rectCircle"
      return types
    },
    onDetails(x) {
      setTimeout(() => {
        if(x > -1) {
          this.active = x
        } else {
          this.active = -1
        }
      }, 0)
    }
  },
  mounted: function() {
    this.experiences = this.addYears([
      ...this.labelTimes(work, "work"),
      ...this.labelTimes(projects, "projects")
    ])
  }
}
</script>