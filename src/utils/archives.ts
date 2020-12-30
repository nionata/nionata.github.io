import fs from 'fs'
import path from 'path'

const semverRegex = /v\d+.\d+(?:.\d+)?/gi

export const getVersions = (): string[] => {
    try {
        const archivesDirectory = path.join(process.cwd(), 'public/archives')
        const versions = fs.readdirSync(archivesDirectory)

        // Filter out file names not matching semantic versioning
        return versions.filter(version => version.match(semverRegex))
    } catch (err) {
        console.log(err)
    }
}

export const getSourcePath = (version: string): string => {
    return `/archives/${version}/index.html`
}

export const getLink = (version: string) => {
    return `/archives/${version}`
}

export default {
    getLink,
    getSourcePath,
    getVersions
}