import ListItem, { Props as ListItemProps } from '@components/ListItem'

export type Props = 
{
    items: Array<ListItemProps>,
    show?: boolean,
    click?(): void
}

const ListItems = ({ items, show = true, click = null }: Props) => 
{
    return (
        <div className={`${show ? '' : 'invisible'} my-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
            onClick={click ? () => click() : click}
        >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {items.map(item => <ListItem {...item} />)}
            </div>
        </div>
    )
}

export default ListItems