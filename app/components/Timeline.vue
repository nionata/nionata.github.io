<template>
  <div id="timeline" class="col">
      <h2 class="item primary sectionTitle">Timeline</h2>
      <div id="timeContainer" class="item colNarrow">
          <div class="rowBare time" v-for="time in timeline" :key="time.title">
              <div class="item rowBare branchesContainer">
                  <span class="dateContainer">
                      <span v-if="time.type === 'master'">{{time.title}}</span>
                  </span>
                  <img 
                    v-for="(type, i) in getTimeTypes(time.type)" 
                    :src="'app/images/timeline/' + type + '.svg'" 
                    :class="branches[i] + 'Branch'"
                    :key="i" />
              </div>
              <div class="item rowBare detailsContainer">
                    <span v-if="time.type !== 'master'">{{time.title}}</span>
                    <!-- <span v-if="time.date !== undefined">
                        {{time.date.start}} -
                        {{time.date.end}}
                    </span> -->
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import 'styles/timeline.sass'
import projects from 'js/projects'
import experience from 'js/experience'

export default { 
    data() {
        return {
            timeline: [],
            branches: ['master', 'experience', 'projects']
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
                    commits.unshift(this.yearMarker(year))
                }
                
                commits.unshift(curr)
            }

            return commits
        },
        yearMarker: function(year) {
            return {
                "title": `${year}`,
                "description": [],
                "type": "master",
            }
        },
        getTimeTypes: function(type) {
            let types = ['branch', 'branch', 'branch']

            switch(type) {
                case 'master':
                    types[0] = 'branchCommit'
                    break
                case 'experience':
                    types[1] = 'branchCommit'
                    break
                case 'projects':
                    types[2] = 'branchCommit'
                    break
            }

            return types
        }
    },
    mounted: function() {
        console.log(projects)
        console.log(experience)

        this.timeline = this.addYears([
            ...this.labelTimes(projects, 'projects'), 
            ...this.labelTimes(experience, 'experience')
        ])
    }
}
</script>