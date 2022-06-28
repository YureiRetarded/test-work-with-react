import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from '../API/PostService'
import {useFetching} from "../hooks/useFetching";
import Loader from "../Components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post,setPost]=useState({})
    const [comments,setComments]=useState([])
    const [fetchPostById,isLoading,error]=useFetching(async (id)=>{
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments,isCommentLoading,comment__error]=useFetching(async (id)=>{
        const response = await PostService.getCommentsByPostId(id)

        setComments(response.data)
    })
    useEffect(()=>{
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
    return (
        <div>
            <h1>Page of post:{params.id}</h1>
            {isLoading
            ?<Loader/>
            :<div><h2>{post.title}</h2></div>}
            <h2>Comments</h2>
            {isCommentLoading
            ?<Loader/>
            :<div>
                    {comments.map(c=>
                        <div key={c.id} style={{border:"solid 1px teal",padding:10,marginTop:10}} >
                            <p>{c.name}</p>
                            <p>{c.email}</p>
                            <p>{c.body}</p>

                        </div>
                    )}
            </div>
            }
        </div>
    );
};

export default PostIdPage;