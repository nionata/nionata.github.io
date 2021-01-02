import { GetStaticProps } from "next"
import * as Archives from '@utils/archives'
import ListItems, { Props as ListItemsProps } from "@components/ListItems"
import ListItem from "@components/ListItem"

type Props = {
    versions: ListItemsProps['items']
}

export const getStaticProps: GetStaticProps = async ({ params }): Promise<{ props: Props }> => 
{   
    return {
        props: { 
            versions: Archives.getItemizedVersions() 
        }
    }
}

const ArchivesHome = ({ versions }: Props) => 
{
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="w-1/2 text-center pb-2">
                <h1 className="text-xl">Archives</h1>
                <p>Since 2016, this site has served as a playground for testing new tech. These are the iterations.</p>
            </div>

            {/* <ListItem
                key="yolo"
                name="test"
                link="/archives/v2.0"
            /> */}

            <div className="w-1/2 pt-2 border-t-2 border-blue-300">
                <ListItems items={versions} />
            </div>
        </div>
    )
}

export default ArchivesHome