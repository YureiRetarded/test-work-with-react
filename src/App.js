import React, {useEffect, useState} from "react";
import './Styles/App.css'
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";


function App() {
    function Home() {
        return <h2>Home</h2>;
    }

    return (
        <Router>
            {/*Block of navigation*/}
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/*Block of displaying page*/}
                <Routes>
                    <Route path="/about" element={<About/>}>

                    </Route>
                    <Route path="/users" element={<Posts/>}>

                    </Route>
                    <Route path="/" element={<Home/>}>

                    </Route>
                </Routes>

            </div>
        </Router>

    )
}

export default App;
