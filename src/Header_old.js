import logo from './logo.svg';
import './App.css';
import React from 'react'

function Header_old() {
    const name = "John Doe";
    const handleNameChange = () => {
        const names = ['Jane', 'Bob', 'Paul'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>Hello, {name}</p>
                <p>
                    Rendering JS arrays in JSX: <br />
                    {[1, 2, 3]}
                </p>
                {/* functions passed to JSX */}
                <p>
                    Hello, {handleNameChange()}
                </p>
            </header>
        </div>
    )
}

export default Header_old
