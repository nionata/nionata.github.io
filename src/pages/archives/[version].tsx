import '@styles/ArchiveSite.module.css'

import { GetStaticPaths, GetStaticProps } from 'next'
import * as archives from '@utils/archives'

export default function ArchivesVersion({ version, srcPath }) {
    return (
        <div className="static">
            <button className="relative z-10">
                {version}
            </button>
            <iframe src={srcPath}>
            </iframe>
        </div>
    )
}

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
    const { version } = params
    const srcPath = archives.getSourcePath(version as string)

    return {
        props: {
            version,
            srcPath
        }
    }
}