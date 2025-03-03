import React from 'react'
import {Outlet} from 'react-router-dom'
import './Layout.css'

import Navbar from '../navbar/Navbar'
const Layout = () => {
  return (
   <div className='container'>
        <Navbar/>
        <div className='children'>
        <Outlet/>

        </div>

    </div>
  )
}

export default Layout