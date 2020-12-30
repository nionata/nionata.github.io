import { GetStaticProps } from "next"
import * as Archives from '@utils/archives'
import ListItems, { Props as ListItemsProps } from "@components/ListItems"

type Props = {
    versions: ListItemsProps['items']
}

export const getStaticProps: GetStaticProps = async ({ params }): Promise<{ props: Props }> => 
{
    const versions = Archives.getItemizedVersions()
    
    return {
        props: { versions }
    }
}

const ArchivesHome = ({ versions }: Props) => 
{
    return (
        <div>
            <ListItems items={versions} />
        </div>
    )
}

export default ArchivesHome