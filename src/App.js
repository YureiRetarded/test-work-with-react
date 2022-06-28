import React, {useEffect, useState} from "react";
import './Styles/App.css'
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/UI/Navbar/Navbar";
import AppRouter from "./Components/AppRouter";
import {AuthContext} from "./context";


function App() {

    const [isAuth,setIsAuth]=useState(false)
    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    },[])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <Router>
                <div className='display'>
                    <Navbar/>
                    <AppRouter/>
                </div>
            </Router>
        </AuthContext.Provider>
    )
}

export default App;
