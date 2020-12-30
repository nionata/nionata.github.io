import { GetStaticPaths, GetStaticProps } from 'next'
import Archives from '@utils/archives'
import Dropdown, { Props as DropdownProps } from '@components/Dropdown'

type Props = {
    versions: DropdownProps['items'],
    currentVersion: string,
    srcPath: string
}

export const getStaticPaths: GetStaticPaths = async (context) => 
{
    const versions = Archives.getVersions()
    const paths = versions.map(version => ({
        params: { version }
    }))

    return { 
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }): Promise<{ props: Props }>  => 
{
    // Get the version param and all the itemized versions
    const currentVersion = params.version as string
    const versions = 
        Archives.getItemizedVersions()
                .filter(version => version.name !== currentVersion)

    // Add a link back to versions home
    versions.unshift({
        key: 'archivesHome',
        name: 'Archives',
        link: '/archives'
    })

    return {
        props: {
            versions,
            currentVersion,
            srcPath: Archives.getSourcePath(currentVersion as string)
        }
    }
}

const ArchiveVersion = ({ versions, currentVersion, srcPath }: Props) =>
{
    return (
        <div>
            <iframe src={srcPath}></iframe>
            {/* Float that boy in the top center*/}
            <div className="absolute top-1.5 right-1/2 transform translate-x-1/2">
                <Dropdown
                    selected={`Viewing ${currentVersion}`}
                    items={versions}
                />
            </div>
        </div>
    )
}

export default ArchiveVersion