import React from 'react'
import Hero from './Hero.js'
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className=''>
      
    <Hero/>
    <Outlet/>

    </div>
  )
}

export default HomePage