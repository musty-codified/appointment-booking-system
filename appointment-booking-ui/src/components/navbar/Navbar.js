import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'

import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { useContext } from 'react';
import { useAuth } from '../../context/AuthContext';
import Menu from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import './Navbar.css'

const Navbar = () => {
  const {logout} = useAuth();  

    const [sideBar, setSideBar] = useState(false);

  const getSignature = localStorage.getItem("signature");
  const getRole = localStorage.getItem("role");

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  const handleLogout = () => {
    logout();
  };


  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red"
  };

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'> 
        <img src={Logo} alt='navbar logo' className='navbar-logo'/>
         <a href='/'> <h1>APPOINTMENTS BOOKING</h1></a>
            <ul className= 'navbar-links'>
              {
                getRole === "Admin" ? (<>
              
                 <li><NavLink className= "nav-link text-dark"
                 to="/admin-dashboard"
                 style={({isActive})=> isActive ? activeStyles : null}
                 >BOOKINGS</NavLink>
                 </li>
                
                </>):
              
                (<>
                <li><NavLink className= "nav-link text-dark" 
                   to="/"
                   style={({isActive})=> isActive ? activeStyles : null}
                 >BOOK US</NavLink>
                 </li>
                 
                 </>)
              
              }
           

           { 
           !getSignature ? (<>
            <li> <NavLink className= "nav-link text-dark"
              to="/login"
              style={({isActive})=> isActive ? activeStyles : null}
             >LOGIN</NavLink>
             </li>

            <li> <NavLink className= "nav-link text-dark" 
             to="/register"
             style={({isActive})=> isActive ? activeStyles : null}
            >REGISTER</NavLink>
            </li> 

          </>) :
            (<><li><NavLink className= "nav-link text-dark" 
            to="#" onClick={handleLogout}
            style={({isActive})=> isActive ? activeStyles : null}
            >
            <ExitToAppIcon className="icon" />

              LOGOUT
              </NavLink>
            </li></>)
         }
             </ul>
             </div>

     </nav>
     </>
  )
}

export default Navbar