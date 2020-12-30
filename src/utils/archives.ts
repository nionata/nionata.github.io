import fs from 'fs'
import path from 'path'
import { Props as ListItemProps } from '@components/ListItem'

const semverRegex = /v\d+.\d+(?:.\d+)?/gi

export const getVersions = (): string[] => 
{
    try {
        const archivesDirectory = path.join(process.cwd(), 'public/archives')
        const versions = fs.readdirSync(archivesDirectory)

        // Filter out file names not matching semantic versioning
        return versions.filter(version => version.match(semverRegex))
    } catch (err) {
        console.log(err)
    }
}

export const getSourcePath = (version: string): string => 
{
    return `/archives/${version}/index.html`
}

export const getLink = (version: string) => 
{
    return `/archives/${version}`
}

export const getItemizedVersions = (): ListItemProps[] => 
{
    return getVersions()
            .reverse()
            .map(version => ({
                key: version,
                name: version,
                link: getLink(version)
            }))
}

export default 
{
    getLink,
    getSourcePath,
    getVersions,
    getItemizedVersions
}