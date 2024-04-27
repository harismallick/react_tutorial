import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
        <a className="navbar-brand" href="/#">Navbar</a>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <ul>
            <li className="nav-item dropdown">
                <a 
                    className="nav-link dropdown-toggle" 
                    href="/#" 
                    id="navbarDropdown" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                >
                    Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/#">Home</a>
                    <a className="dropdown-item" href="/#">Json Challenge action</a>
                    <a className="dropdown-item" href="/#">Something else here</a>
                </div>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
