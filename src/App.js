import React, {useState} from "react";
import './Styles/App.css'
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";

function App() {
    const [posts,setPosts]=useState([
        {id:1, title:"text title", body:"more texts"},
        {id:2, title:"text title", body:"more texts"},
        {id:3, title:"text title", body:"more texts"},
        {id:4, title:"text title", body:"more texts"},
        {id:5, title:"text title", body:"more texts"},
        {id:6, title:"text title", body:"more texts"},
        {id:7, title:"text title", body:"more texts"}
    ]);

    const [posts2,setPosts2]=useState([
        {id:1, title:"text title111", body:"more texts"},
        {id:2, title:"text title111", body:"more texts"},
        {id:3, title:"text title111", body:"more texts"},
        {id:4, title:"text title111", body:"more texts"},
        {id:5, title:"text title111", body:"more texts"},
        {id:6, title:"text title111", body:"more texts"},
        {id:7, title:"text title111", body:"more texts"}
    ]);

    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder="title"/>
                <MyInput type="text" placeholder="description"/>
                <MyButton>Create post</MyButton>
            </form>
        <PostList posts={posts} title={"List 1"}/>
            <PostList posts={posts2} title={"List 2"}/>
        </div>
    );
}

export default App;
