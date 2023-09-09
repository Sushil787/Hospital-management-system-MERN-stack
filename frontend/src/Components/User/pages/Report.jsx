import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Report = () => {
    const { id } = useParams();
    const token = localStorage.getItem("jwt");

   
    

      const doctorDetails= async(id)=>{
        try{
          const {data}= await axios.get(`http://localhost:8080/patient/single-appointment/${id}`,{headers:{
            authorization:token
          }})
          
      console.log(data)
        
    
        }
        catch(error)
        {
          
          console.log(error.message)
        }
    
       
    
    
      }

        useEffect(()=>{
            doctorDetails(id)
        },[])

    
  return (
    <div>{id}</div>
  )
}

export default Report