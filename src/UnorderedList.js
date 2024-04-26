import React from 'react'
import ListItem from './ListItem'

const UnorderedList = ({ items, itemCheckedState, itemDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    itemCheckedState={itemCheckedState}
                    itemDelete={itemDelete}
                />
            ))}
        </ul>
    )
}

export default UnorderedList