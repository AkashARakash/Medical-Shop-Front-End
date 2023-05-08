import axios from "axios";
import { Link } from "react-router-dom";
 import { useSelector } from "react-redux";
 import checkAuth from "../store/checkAuth";



function PostList(props) {
     var user = useSelector(store => store.auth.user);
    function deletePost() {
        axios.delete('https://medicalstore.mashupstack.com/api/medicine/'+props.post.id,
        {
            
            headers: 
                {'Authorization': 'Bearer ' + user.token}
     
        }
        ).then(response=>{
            alert(response.data.message)
            props.refresh()
        })
    }
    return (  
        <div>    
        <div className="card">
          <div className="card-body">
            {props.post.name}
            <div className="float-right">
              <Link to={"/medicine/list/"+props.post.id} className="btn btn-success mr-2">View</Link>
              <Link to={"/medicine/list/"+props.post.id+"/edit"} className="btn btn-success mr-2 ml-2">Edit</Link>
              <button className="btn btn-success ml-2" onClick={deletePost}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      
      
      
    )
}
export default checkAuth (PostList);
