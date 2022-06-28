import React from 'react';
import {Link} from "react-router-dom";
import cl from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={cl.navbar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;