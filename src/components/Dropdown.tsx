import React, { useState } from 'react'
import Button from '@components/Button'
import ListItems, { Props as ListItemsProps } from '@components/ListItems'

export type Props = {
    selected: string,
    items: ListItemsProps['items'],
    reverse?: boolean
}

const Dropdown = ({ selected, items, reverse = false }: Props) => 
{
    const [open, toggleOpen] = useState(false)

    // By default, render the button and then the items
    let components = [
        <Button text={selected} click={() => toggleOpen(!open)} />,
        <ListItems items={items} show={open} />,
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