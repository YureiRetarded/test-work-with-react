import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostIdPage from "../../pages/PostIdPage";
import Home from "../../pages/Home";
import Error from "../../pages/Error";
import Login from "../../pages/Login";

export const privateRoutes = [
    {path:'/about',element:<About/>},
    {path:'/posts',element:<Posts/>},
    {path:'/posts/:id',element:<PostIdPage/>},
    {path:'/',element:<Home/>},
    {path:'*',element:<Home/>}
]
export const publicRoutes = [
    {path:'/login',element:<Login/>},
    {path:'*',element:<Login/>}
]