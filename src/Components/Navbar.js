import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { removeUser } from "./store/authSlice";

function Navbar() {
   var user = useSelector(store => store.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logout() {
    if (user) {
      axios.post('https://medicalstore.mashupstack.com/api/logout', {}, 
      {
        headers: { 'Authorization': "Bearer " + user.token }
      }
      );
      dispatch(removeUser());
      navigate('/login');
    }
  }
  return <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="navbar-brand">
      <h4>Medi World</h4>
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul className="navbar-nav" style={{ color: "#ffffff" }}>
        <li className="nav-item">
          <NavLink to={"/"} className={"nav-link"}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/medicine/list/search"} className="nav-link">
            Search Medicine
          </NavLink>
        </li>
        {user ?
          <li className="nav-item   ">
            <span className="nav-link ms-auto" onClick={logout}>Logout</span>
          </li> :
          <li className="nav-item">
            <NavLink
              to={"/login"}
              className={
                'nav-link ' +
                (status => status.isActive ? 'active' : '')
              }
            >
              Login
            </NavLink>
          </li>
        }
      </ul>
    </div>
  </nav>



}

export default Navbar;