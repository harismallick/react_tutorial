import React from 'react'

function Main() {
    const groceryList = ["apples", "flour", "bread", "eggs"];
    const groceryObject = {
        1: "apple",
        2: "flour",
        3: "bread",
        4: "eggs"
    };
    return (
        <div>
            <p>{ groceryList }</p>
            {/* <p>{{ groceryObject }}</p> */}
            {/* Trying to render an object does not work in react*/}
        </div>
    )
}

export default Main
