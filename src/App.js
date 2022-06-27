import React, {useEffect, useState} from "react";
import './Styles/App.css'
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";


function App() {
    return(

        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/posts">
                        <Posts />
                    </Route>
                </Routes>
            </div>
        </Router>

    )
}

export default App;
