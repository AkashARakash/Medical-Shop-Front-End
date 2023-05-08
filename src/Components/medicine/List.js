import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../store/checkAuth";
 import { useSelector } from "react-redux";
 import PostList from "./PostList";

function List() {
     const user = useSelector(store => store.auth.user);
    var [posts, setPosts]=useState([]);
    
    function fetchPosts(){
        axios.get('https://medicalstore.mashupstack.com/api/medicine',
        {
            headers: 
                {'Authorization': 'Bearer ' + user.token}
    }
    ).then(response=>{
            setPosts(response.data)
        })

    }
    useEffect(()=>{
        fetchPosts()
    },[])

    return (<div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-4">Medicines</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <Link to="/medicine/list/create" className="btn btn-success mb-2">Create Medicine</Link>
                    {posts.map(post =><PostList key={post.id} post={post} refresh={fetchPosts}/>)}
                </div>
            </div>
        </div>
    </div>
    )
}

export default checkAuth(List);