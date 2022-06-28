import React, {useEffect, useState} from "react";
import './Styles/App.css'
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/UI/Navbar/Navbar";
import AppRouter from "./Components/AppRouter";


function App() {
    return (
        <Router>
            <div className='display'>
                <Navbar/>
                <AppRouter/>
            </div>
        </Router>

    )
}

export default App;
