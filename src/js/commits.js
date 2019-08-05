'use strict'

module.exports = {
    initCommit: (year) => {
        return {
            "title": `init ${year}`,
            "subTitle": "The start of a new year!",
            "tags": ["Stuff!"],
            "links": [],
            "image": "",
            "description": [],
            "date": {
                "start": "",
                "end": ""
            },
            "type": "master",
        }
    },
    mergeCommit: (year, type, position) => {
        return {
            "title": `merge '${type}' at the end of ${year}`,
            "subTitle": `a good year of ${type}`,
            "tags": ["Stuff!"],
            "links": [],
            "image": "",
            "description": [],
            "date": {
                "start": "",
                "end": ""
            },
            "type": `merge${position}`,
        }
    },
    uncommittedChanges: () => {
        return {
            "title": "uncommitted changes",
            "subTitle": "",
            "tags": ["Stuff!"],
            "links": [],
            "image": "",
            "description": [],
            "date": {
                "start": "",
                "end": ""
            },
            "type": "master",
        }
    }
}