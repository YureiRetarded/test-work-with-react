import React, {useRef, useState} from "react";
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
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const bodyInputRef = useRef()
    const titleInputRef = useRef()
    const addNewPost=(e)=>{
        e.preventDefault()
        //alert(title+"------"+description)
        alert(titleInputRef.current.value+"------"+bodyInputRef.current.value)
    }

    return (
        <div className="App">
            <form>
                {/*<MyInput value={title} ref={titleInputRef} onChange={event=>setTitle(event.target.value)} type="text" placeholder="title"/>*/}
                {/*<MyInput value={description} ref={bodyInputRef} onChange={event=>setDescription(event.target.value)} type="text" placeholder="description"/>*/}
                <MyInput  ref={titleInputRef}  type="text" placeholder="title"/>
                <MyInput  ref={bodyInputRef}  type="text" placeholder="description"/>
                <MyButton onClick={addNewPost} >Create post</MyButton>
            </form>
        <PostList posts={posts} title={"List 1"}/>
            <PostList posts={posts2} title={"List 2"}/>
        </div>
    );
}

export default App;
