import React, {useEffect, useRef, useState} from "react";
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import MyModal from "../Components/UI/MyModal/MyModal";
import MyButton from "../Components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount, getPagesArray} from "../utils/pages";
import MyPagination from "../Components/UI/pagination/MyPagination";
import {useObserver} from "../hooks/useObserver";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()



    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit,page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts,...response.data]);
        const totalCount = response.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limit))
    })
    const changePage=(page)=>{
        setPage(page);
    }


    useObserver(lastElement,page<totalPages,isPostsLoading,()=>{
        setPage(page+1)
    })

    useEffect(() => {
        fetchPosts(limit,page);
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className='Posts'>
            <MyButton onClick={fetchPosts}>Fetch</MyButton>
            <MyButton style={{marginTop: 20}} onClick={() => setModal(true)}>
                New post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError && <h1>Error:{postError}</h1>}

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"List 1"}/>
            <div ref={lastElement} style={{height:20}}></div>
            {isPostsLoading && <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>}
            {/*<MyPagination page={page} changePage={changePage} totalPages={totalPages}/>*/}
        </div>
    );
}

export default Posts;
