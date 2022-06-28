import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from '../API/PostService'
import {useFetching} from "../hooks/useFetching";

const PostIdPage = () => {
    const params = useParams();
    const [post,setPost]=useState({})
    const [fetchPostById,isLoading,error]=useFetching(async (id)=>{
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    useEffect(()=>{
        fetchPostById(params.id)
    },[])
    console.log(post)
    return (
        <div>
            <h1>Страница поста:{params.id}</h1>
            <div>
                <div><h2>{post.title}</h2></div>
            </div>
            <div>
                <div>{post.body}</div>
            </div>
        </div>
    );
};

export default PostIdPage;