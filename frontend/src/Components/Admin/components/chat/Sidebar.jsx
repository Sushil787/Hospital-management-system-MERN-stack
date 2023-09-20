import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import User from './User'

const Sidebar = () => {
  return (
    <div className='sidebar'>

        <Navbar/>
        <Search/>
        <User/>

    </div>
  )
}

export default Sidebar