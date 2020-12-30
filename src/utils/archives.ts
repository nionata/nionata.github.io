import fs from 'fs/promises'

const semverRegex = /v\d+.\d+(?:.\d+)?/gi

export const getVersions = async (): Promise<string[]> => {
    try {
        const versions = await fs.readdir('./public/archives')

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