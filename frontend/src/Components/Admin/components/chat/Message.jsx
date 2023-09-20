import { Avatar } from '@mui/material'
import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
        <div className="messageinfo">  
        <Avatar sx={{ width: 30, height: 30 }}>N</Avatar> 
  
        
        </div>
        <div className="messagecontent">
            <p className='texts'>hello</p>
        </div>
    </div>
  )
}

export default Message