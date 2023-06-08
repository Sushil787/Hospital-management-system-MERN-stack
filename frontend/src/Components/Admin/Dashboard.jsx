import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate=useNavigate()


    const logoutHandler = () => {
      
        localStorage.removeItem("is_admin");
        localStorage.removeItem("jwt");
        navigate("/")

        window.location.reload(true)

       
      };
  return (
    <>
    <h1>hello world</h1>
          <Button onClick={logoutHandler}>log out</Button>
    </>
  )
}

export default Dashboard