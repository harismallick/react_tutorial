import React from 'react';
import { useState } from 'react';

function List() {
    // In this example, we look at how to render list of objects in react.
    const [items, setItems] = useState([
        {
            id: 0,
            checked: false,
            item: "Apples"
        },
        {
            id: 1,
            checked: false,
            item: "pears"
        },
        {
            id: 2,
            checked: false,
            item: "grapes"
        }
    ])
    return (
        <>
            {items.map((item) => (
                <ul>
                    <li className="item" key={item.id}>
                        <input type="checkbox" checked={item.checked}/>
                        <label>{ item.item }</label>
                        <button>Delete</button>
                    </li>
                </ul>

            ))}
        </>
    )
}

export default List
