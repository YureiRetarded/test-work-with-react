import React, {useMemo, useState} from "react";
import './Styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import MyInput from "./Components/UI/input/MyInput";

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
    const  [selectedSort,setSelectedSort]=useState('');
    const [searchQuery,setSearchQuery]=useState('')
    const sortedPost=useMemo(()=>{
        console.log('!!!!')
        if(selectedSort)
            return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
        else
            return posts
    },[selectedSort,posts])

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPost.filter(post=>post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    },[searchQuery,sortedPost])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const sortPost=(sort)=>{
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{marginTop:15,marginBottom:15}}/>
            <div>
                <MyInput
                    placeholder='search'
                    value={searchQuery}
                    onChange={e=>setSearchQuery(e.target.value)}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    defaultValue='Sort by:'
                    option={[
                        {value:'title',name:'Title'},
                        {value:'body',name:'Description'}
                    ]}
                />
            </div>
            {sortedAndSearchedPosts.length !== 0
                ?
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"List 1"}/>
                :
                <h1 style={{textAlign: "center"}}>Posts doesn't exist</h1>
            }

        </div>
    );
}

export default App;
