import useToggle from '@hooks/useToggle'
import Button from '@components/Button'
import ListItems, { Props as ListItemsProps } from '@components/ListItems'

export type Props = {
    selected: string,
    items: ListItemsProps['items'],
    reverse?: boolean
}

const Dropdown = ({ selected, items, reverse = false }: Props) => 
{
    const [open, toggleOpen] = useToggle()

    // By default, render the button and then the items
    let components = [
        <Button text={selected} click={toggleOpen} />,
        <ListItems items={items} show={open} click={toggleOpen} />
    ]

    // If reverse, flip the render order
    if (reverse) components.reverse()

    return (
        <div className="flex flex-col text-left">
            {components.shift()}
            {components.shift()}
        </div>
    )
}

export default Dropdown