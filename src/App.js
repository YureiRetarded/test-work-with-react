import React, {useMemo, useState} from "react";
import './Styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "aaa title", body: "cccc texts"},
        {id: 2, title: "bbb title", body: "asda texts"},
        {id: 3, title: "ccc title", body: "mosssre texts"},
        {id: 4, title: "tdddext title", body: "awdawd texts"},
        {id: 5, title: "rrrr title", body: "cccc texts"},
        {id: 6, title: "teqqxt title", body: "qwert texts"},
        {id: 7, title: "tertttxt title", body: "madvawgaore texts"}
    ]);
    const [filter,setFilter]=useState({sort:'',query:''})
    const [modal,setModal]=useState(false)
    const sortedAndSearchedPosts=usePosts(posts,filter.sort,filter.query)



    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop:20}} onClick={()=>setModal(true)}>
                New post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{marginTop:15,marginBottom:15}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"List 1"}/>
        </div>
    );
}

export default App;
