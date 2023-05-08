import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./store/authSlice";
import checkGuest from "./store/checkGuest";


function Login() {
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [errorMessage, setErrorMessage] = useState('');
   const dispatch = useDispatch();
  function attemptLogin() {
      axios.post('https://medicalstore.mashupstack.com/api/login',{
          email:email,
          password:password
      }).then(response=>{
          setErrorMessage('')
          var user = {
              email:email,
              token:response.data.token
          }
          dispatch(setUser(user));
      }).catch(error=>{
          if(error.response.data.errors){
              setErrorMessage(Object.values(error.response.data.errors).join(' '))
          }else if(error.response.data.message){
              setErrorMessage(error.response.data.message)
          }else{
              setErrorMessage('Failed to login user. Please contact admin')
          }
      })
  }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1>Login</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text"
                        className="form-control"
                        value={email}
                        onInput={(event)=>setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password"
                        className="form-control"
                        value={password}
                        onInput={(event)=>setPassword(event.target.value)}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={attemptLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center">
    <p>Create a new Account here <a href="/register">Sign up.</a></p>
</div>
    </div>
  )
}
export default checkGuest(Login);
