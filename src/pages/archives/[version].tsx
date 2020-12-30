import { GetStaticPaths, GetStaticProps } from 'next'
import archives from '@utils/archives'
import Dropdown, { Props as DropdownProps } from '@components/Dropdown'

type Props = {
    version: {
        current: string,
        all: DropdownProps['items']
    },
    srcPath: string
}

export const getStaticPaths: GetStaticPaths = async (context) => 
{
    const versions = archives.getVersions()
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
    // Get the current version and all versions
    const current = params.version as string
    const versions = archives.getVersions()

    // Generate options for FloatingDropdown
    const all = 
        versions
            .filter(version => version !== current)
            .reverse()
            .map(version => ({
                key: version,
                name: version,
                link: archives.getLink(version)
            }))

    return {
        props: {
            version: { current, all },
            srcPath: archives.getSourcePath(current as string)
        }
    }
}

const ArchivesVersion = ({ version, srcPath }: Props) =>
{
    return (
        <div>
            <iframe src={srcPath}></iframe>
            <div className="absolute top-1.5 right-1/2 transform translate-x-1/2">
                <Dropdown
                    selected={`Viewing ${version.current}`}
                    items={version.all}
                />
            </div>
        </div>
    )
}

export default ArchivesVersion