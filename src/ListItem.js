import React from 'react'

const ListItem = ({item, itemCheckedState, itemDelete}) => {
    return (
        <li className="item"> {/*key={item.id} attribute removed from here.
                                The unique key is assigned in the parent component.
                            */}
            <input 
                type="checkbox"
                onChange={() => itemCheckedState(item.id)} 
                checked={item.checked}/>
            <label
                onDoubleClick={() => itemCheckedState(item.id)}
                style={(item.checked) ? {
                    textDecoration: 'line-through'
                }: null}
            >{ item.item }</label>
            <button onClick={() => itemDelete(item.id)}>Delete</button>
        </li>
    )
}

export default ListItem