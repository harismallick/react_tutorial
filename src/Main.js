import React from 'react';
import { useState } from 'react';

function Main() {
    const groceryList = ["apples", "flour", "bread", "eggs"];
    // const groceryObject = {
    //     0: "apple",
    //     1: "flour",
    //     2: "bread",
    //     3: "eggs"
    // };
    // const counter = 0;

    // Ways to handle onClick events in React:
    const inputRef = React.useRef();
    const inputRef2 = React.useRef();


    const handleNameChange = () => {
        const names = ['Jane', 'Bob', 'Paul'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
    const handleClick = () => {
        const name = handleNameChange();
        inputRef.current.innerText = `Pass func to JSX, ${name}`;
    }

    const handleClick2 = (name) => {
        inputRef2.current.innerText = `Create arrow func in jsx, ${name}`;
    }

    // useState() hook example:

    const [name2, setName] = useState('John');
    const handleNameChange2 = () => {
        const names = ['Jane', 'Bob', 'Paul'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]); // Notice how we using the setter and not 
                             // an explicit return statement.
    }

    // State management by react:

    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }
    // Even though we call setCount 3 times, count only incremented by 1.
    return (
        <div>
            <p>{ groceryList }</p>
            { groceryList.map((item, index) => (
                <React.Fragment key={index}>
                    <span>{ item }</span>
                    <br />
                </React.Fragment>
            )) }
            {/* <p>{{ groceryObject }}</p> */}
            {/* Trying to render an object does not work in react*/}
            <p ref={inputRef}>Hello</p>
            <button onClick={handleClick}>Name</button>
            <p ref={inputRef2}>Hello</p>
            <button onClick={() => handleClick2(handleNameChange())}>Name2</button>
            <p>Hello {name2}</p>
            <button onClick={handleNameChange2}>useState hook</button>
            <p>Counter: {count}</p>
            <button onClick={incrementCount}>Click</button>
        </div>
    )
}

export default Main
