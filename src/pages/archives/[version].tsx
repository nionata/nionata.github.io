import { GetStaticPaths, GetStaticProps } from 'next'
import * as archives from '@utils/archives'
import FloatingDropdown, { Props as FloatingDropdownProps } from '@components/FloatingDropdown'

export const getStaticPaths: GetStaticPaths = async (context) => {
    const versions = await archives.getVersions()
    const paths = versions.map(version => ({
        params: { version }
    }))

    return { 
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Get the current version and all versions
    const { version: current } = params
    const versions = await archives.getVersions()

    // Generate options for FloatingDropdown
    const options = 
        versions
            .filter(version => version !== current)
            .reverse()
            .map(version => ({
                name: version,
                link: archives.getLink(version)
            }))

    return {
        props: {
            version: { current, options },
            srcPath: archives.getSourcePath(current as string)
        }
    }
}

type Props = {
    version: {
        current: string,
        options: FloatingDropdownProps['options']
    },
    srcPath: string
}

const ArchivesVersion = ({ version, srcPath }) => {
    console.log(version)
    return (
        <div>
            <iframe src={srcPath} className=""></iframe>
            <FloatingDropdown
                selected={version.current}
                options={version.options}
            />
        </div>
    )
}

export default ArchivesVersion