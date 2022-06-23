import React, {useRef, useState} from "react";
import './Styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "text title", body: "more texts"},
        {id: 2, title: "text title", body: "more texts"},
        {id: 3, title: "text title", body: "more texts"},
        {id: 4, title: "text title", body: "more texts"},
        {id: 5, title: "text title", body: "more texts"},
        {id: 6, title: "text title", body: "more texts"},
        {id: 7, title: "text title", body: "more texts"}
    ]);
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost=(post)=>{
        setPosts(posts.filter(p=>p.id!==post.id))
    }

    const [description, setDescription] = useState("")


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList remove={removePost} posts={posts} title={"List 1"}/>
        </div>
    );
}

export default App;
