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
      <div class="detailsContainer" v-if="exp.type !== 'date'" @mouseenter="active = x" @mouseleave="active = -1">
         <div id="detailsHeader" class="rowBare" :class="exp.type">
            <div class="rowBare">
              <p v-if="exp.type === 'work'">{{exp.subTitle}} @&nbsp</p>
              <p class="experienceTitle">{{exp.title}}</p>
            </div>
            <div class="rowBare">
              <span class="outline" v-for="(tag, i) in exp.tags" :key="i">{{tag}}</span>
            </div>
         </div>
         <transition name="fade">
         <div id="detailsBody" class="colBare" v-if="active == x">
           <div class="rowBare item">
              <p>{{exp.date.start}}</p>
              <p v-if="exp.date.end">&nbsp- {{exp.date.end}}</p>
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
import "styles/Experience.sass"
import Header from "comp/Header.vue"
import Column from "comp/Column.vue"
import work from "js/work"
import projects from "js/projects"

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

      commits.sort((a, b) => new Date(b.date.start) - new Date(a.date.start))
      for (let i = 0; i < len; i++) {
        let curr = commits.pop()
        const year = new Date(curr.date.start).getFullYear()

        if (!yearsIndex[year]) {
          yearsIndex[year] = true
          commits.unshift(this.date(year))
        }

        commits.unshift(curr)
      }

      return commits
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