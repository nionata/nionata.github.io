<template>
  <div id="experience" class="col">
    <div id="header" class="rowBare">
      <Header />
      <h2 class="sectionTitle">Experience</h2>
    </div>
    <div class="experience" v-for="exp in experience" :key="exp.title">
      <div class="columnContainer">
        <div class="dateContainer">
          <p v-if="exp.type === 'date'" :class="exp.type">{{exp.title}}</p>
        </div>
        <Column
          v-for="(type, i) in getColumnTypes(exp.type)"
          :class="columnTags[i]"
          :key="i"
          :type="type"
        />
      </div>
      <div class="detailsContainer">
        <p v-if="exp.type !== 'date'" :class="exp.type">{{exp.title}}</p>
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
      experience: [],
      columnTags: ["date", "work", "projects"]
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
    this.experience = this.addYears([
      ...this.labelTimes(work, "work"),
      ...this.labelTimes(projects, "projects")
    ])
  }
}
</script>