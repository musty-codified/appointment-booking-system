import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'

import { useAuth } from '../../context/AuthContext';
import './Navbar.css'

const Navbar = () => {
  const {logout} = useAuth();  

  const getSignature = localStorage.getItem("signature");
  const getRole = localStorage.getItem("role");

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
                getRole === "admin" ? (<>
              
                 <li><NavLink className= "nav-link text-dark"
                 to="/admin-dashboard"
                 style={({isActive})=> isActive ? activeStyles : null}
                 >VIEW BOOKINGS</NavLink>
                 </li>
                </>):
              
                (<>
                <li><NavLink className= "nav-link text-dark" 
                   to="/user-booking"
                   style={({isActive})=> isActive ? activeStyles : null}
                 >BOOK APPOINTMENT</NavLink>
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
            >GET STARTED</NavLink>
            </li> 

          </>) :
            (<><li><NavLink className= "nav-link text-dark" 
            to="#" onClick={handleLogout}
            style={({isActive})=> isActive ? activeStyles : null}
            >
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