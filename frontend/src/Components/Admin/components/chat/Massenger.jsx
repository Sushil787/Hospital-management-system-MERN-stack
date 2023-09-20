import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Massenger = () => {
  return (
    <div className="chat">
        <div className="chatinfo">
            <span>Niroj</span>
            
        </div>
        <Messages/>

        <Input/>
        

    </div>
  )
}

export default Massenger