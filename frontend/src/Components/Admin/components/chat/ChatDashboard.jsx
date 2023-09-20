import React from 'react'
import Sidebar from './Sidebar'
import Massenger from './Massenger'
import './style.css'

const ChatDashboard = () => {
  return (
    <div className="home">
        <div className="container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="massenger">
                <Massenger />
            </div>
        </div>

        
    </div>
  )
}

export default ChatDashboard