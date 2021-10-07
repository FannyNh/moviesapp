import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-content">
                <Link exact="true" to="/">
                    <div className="logo">
                        <img src="./assets/logo.svg" alt="icon" />
                        <h3>Movie App Challenge</h3>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
