import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';

import { MultiSelect } from "react-multi-select-component";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import "./doctor.css"

const options = [
  { label: "10AM-12PM", value: "10PM-12PM" },
  { label: "12.30PM-2.30PM", value: "12.30PM-2.30PM" },
  { label: "3PM-5PM", value: "3PM-5PM" },
];


const theme = createTheme(); // Create a theme




const AddDoctorForm = () => {



    const [user,setUser]=useState({})
    

  const [name, setName] = useState(user?.name);

  const [image, setImage] = useState(user?.image);


  const [contact, setContact] = useState(user?.contact);
  const [email, setEmail] = useState(user?.email);

  const [desc, setDesc] = useState(user?.desc);
  const [ammount, seAmmount] = useState(user?.ammount);


  const fetchdoctor=async()=>{
    try {
        const response= await axios.get('http://localhost:8080/doctor-single',{
            headers: {

                "authorization": localStorage.getItem("jwt")
            }})

            console.log(response.data.data)
            if(response)
            {
                setUser(response.data.data)
            }
        }
        catch(error)
        {
            console.log(error.message)
        }   
    }
        


    React.useEffect(() => {
        fetchdoctor()
    }, [])

    console.log(user)
    console.log(user.name)
    



  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const doctorData = { name, image,contact,email,desc,ammount };
     
     const response=  await axios.patch('http://localhost:8080/doctor-update', doctorData,{
        headers: {
            
            "authorization": localStorage.getItem("jwt")
            
          },
      });
      if(response)
      { 
    setName("")

setImage("")

setContact("")
setEmail("")

setDesc("")
seAmmount("")
}
      
      
    } catch (error) {
     console.log(error.message)
    }
  };

  return (
   
    <Box  sx={{ maxWidth: 500, margin: '0 auto' }}>
      <Typography variant="h4" sx={{
        textAlign: 'center',
      }} gutterBottom>
        Edit Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          fullWidth
          margin="normal"
        />


<TextField
          label="Total Amount"
          value={ammount}
          onChange={(e) => seAmmount(e.target.value)}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
          fullWidth
          margin="normal"
        />

      



        <TextField
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          fullWidth
          margin="normal"
        />


   
   


        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  
  );
};

export default AddDoctorForm;




