import React, {useEffect, useState} from "react";
import './Styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./Components/UI/Loader/Loader";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostsLoading, setIsPostsLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    async function fetchPosts() {
        setIsPostsLoading(true)
        setTimeout(async ()=>{ const posts = await PostService.getAll();
            setPosts(posts);
            setIsPostsLoading(false)},1000)

    }

    return (
        <div className="App">
            <MyButton onClick={fetchPosts}>Fetch</MyButton>
            <MyButton style={{marginTop: 20}} onClick={() => setModal(true)}>
                New post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{marginTop: 15, marginBottom: 15}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {isPostsLoading
                ? <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"List 1"}/>
            }
        </div>
    );
}

export default App;
