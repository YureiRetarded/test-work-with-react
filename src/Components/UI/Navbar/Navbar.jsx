import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import cl from './Navbar.module.css'
import {AuthContext} from "../../../context";
import MyButton from "../button/MyButton";
const Navbar = () => {
    const {isAuth,setIsAuth}=useContext(AuthContext)
    const logout=()=>{
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
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
                {isAuth?
                    <li>
                    <MyButton onClick={logout} >Logout</MyButton>
                    </li>
                    :
                    <></>
                }

            </ul>
        </nav>
    );
};

export default Navbar;