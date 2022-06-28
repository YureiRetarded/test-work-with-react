import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Home from "../pages/Home";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {publicRoutes,privateRoutes} from "./router";

const AppRouter = () => {
    const isAuth=true;

    return (
        isAuth ?
        <Routes>
            {privateRoutes.map(route=>
                <Route path={route.path} element={route.element}/>
            )}
        </Routes>
            :
            <Routes>
                {publicRoutes.map(route=>
                    <Route path={route.path} element={route.element}/>
                )}
            </Routes>
    );
};

export default AppRouter;