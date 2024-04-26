import React from 'react';
// import { useState } from 'react'; // dont need this here anymore.
import UnorderedList from './UnorderedList';

function List({ items, itemCheckedState, itemDelete }) {
    // // In this example, we look at how to render list of objects in react.
    // const [items, setItems] = useState([
    //     {
    //         id: 0,
    //         checked: false,
    //         item: "Apples"
    //     },
    //     {
    //         id: 1,
    //         checked: false,
    //         item: "pears"
    //     },
    //     {
    //         id: 2,
    //         checked: false,
    //         item: "grapes"
    //     }
    // ])
    // // Handling the state of the checkbox:
    // const itemCheckedState = (searchId) => {
    //     // for (const item of items) {
    //     //     if (item.id === searchId) {
    //     //         if (item.checked) {
    //     //             item.checked = false;
    //     //         } else {
    //     //             item.checked = true;
    //     //         }
    //     //     }
    //     // }
    //     // Using the method above, I tried to change the state of the object
    //     // directly using JS. While this works, its the wrong approach.
    //     // Need declarative code and use the setter function built into useState.
    //     const newList = items.map((item) => item.id === searchId ? {...item, checked: !item.checked} : item);
    //     setItems(newList);
    //     localStorage.setItem('shoppingList', JSON.stringify(newList));
    // }

    // const itemDelete = (id) => {
    //     const newList = items.filter((item) => item.id !== id);
    //     setItems(newList);
    //     localStorage.setItem('shoppingList', JSON.stringify(newList));
    // }
    return (
        // Wrapping a react fragment around this <ul> render gives a unique key
        // prop error. Even though unique keys have been assigned to each <li>
        <>
            {items.length ? (
                    <UnorderedList
                        items={items}
                        itemCheckedState={itemCheckedState}
                        itemDelete={itemDelete}
                    />
                ) : (
                    <p>List is empty!</p>
                )
            }
        </>
    )
}

export default List
