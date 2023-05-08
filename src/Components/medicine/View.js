import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import checkAuth from "../store/checkAuth";
import Navbar from "../Navbar";

function View() {
  const { postId } = useParams();
  const user = useSelector(store => store.auth.user);
  const [post, setPost] = useState({ name:'', company:'', expiry_date:'' });

  useEffect(() => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    axios.get(`https://medicalstore.mashupstack.com/api/medicine/${postId}`, config)
      .then(response => {
        console.log(response.data)
        setPost(response.data)
      })
  }, [postId, user.token]);

  return (
    <div>
      <Navbar/>
      <div className="container">
        <h1>Medicine View</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3>Med Name: {post.name}</h3>
              </div>
              <div className="card-body">
                Company: {post.company}
              </div>
              <div className="expiry-card">
                expiry: {post.expiry_date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkAuth(View);
