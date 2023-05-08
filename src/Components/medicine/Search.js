import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import checkAuth from "../store/checkAuth";

function Search() {
  const user = useSelector(store => store.auth.user);
  const [search, setSearch] = useState([]);
  const [keyword, setKeyword] = useState("");
  const config ={
    headers: 
      {'Authorization': 'Bearer ' + user.token}
  } 
  useEffect(() => {
    axios.get(`https://medicalstore.mashupstack.com/api/medicine/search?keyword=${keyword}`,config
     
    ).then(response=>{
      setSearch(response.data)
    })
  }, [keyword,user.token])

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <form >
        <input
          type="text" placeholder="Search here "value={keyword} onChange={handleChange}/>
      </form>
      <div>
        {search.map((search) => (
          <div key={search.id}>
            <h3>{search.name}</h3>
            <p>Company: {search.company}</p>
            <p>Expiry date: {search.expiry_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default checkAuth(Search);
