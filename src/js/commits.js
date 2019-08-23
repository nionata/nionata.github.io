'use strict'

module.exports = {
    initCommit: (year) => {
        return {
            "title": `init ${year}`,
            "description": [],
            "type": "master",
        }
    },
    mergeCommit: (year, type, position) => {
        return {
            "title": `merge '${type}' at the end of ${year}`,
            "subTitle": `a good year of ${type}`,
            "description": [],
            "type": `merge${position}`,
        }
    },
    uncommittedChanges: () => {
        return {
            "title": "uncommitted changes",
            "description": [],
            "type": "master",
        }
    },
    initRepo: () => {
        return {
            "title": "init master",
            "description": [],
            "type": "master",
        }
    }
}