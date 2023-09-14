import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';

import { MultiSelect } from "react-multi-select-component";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./doctor.css"
import toast from 'react-hot-toast';

const options = [
  { label: "10AM-12PM", value: "10PM-12PM" },
  { label: "12.30PM-2.30PM", value: "12.30PM-2.30PM" },
  { label: "3PM-5PM", value: "3PM-5PM" },
];


const theme = createTheme(); // Create a theme

const AddDoctorForm = ({fetchdata}) => {
  const [name, setName] = useState('');
  const [expertise, setExpertise] = useState(['']);
  const [image, setImage] = useState('');

  const [selectdate, setSelectDate] = useState([]);
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [desc, setDesc] = useState('');
  const [ammount, seAmmount] = useState('');


  const date = selectdate.map(option => option.value);

  const handleExpertiseChange = (index, value) => {
    const updatedExpertise = [...expertise];
    updatedExpertise[index] = value;
    setExpertise(updatedExpertise);
  };

  const handleAddExpertise = () => {
    setExpertise([...expertise, '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const doctorData = { name, expertise, image,date,contact,email,password,desc,ammount };
      console.log(doctorData)
     const response=  await axios.post('http://localhost:8080/doctor', doctorData,{
        headers: {
            
            "authorization": localStorage.getItem("jwt")
            
          },
      });
      if(response)
      { 
    setName("")
setExpertise([''])
setImage("")
setSelectDate([])
setContact("")
setEmail("")
setPassword("")
setDesc("")
seAmmount("")
toast.success("Doctor Added Successfully")
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
        Add Doctor
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
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        <Typography variant="subtitle1" gutterBottom>
          Expertise:
        </Typography>
        {expertise.map((value, index) => (
          <TextField
            key={index}
            label="Expertise"
            value={value}
            onChange={(e) => handleExpertiseChange(index, e.target.value)}
            required
            fullWidth
            margin="normal"
          />
        ))}
        <Button variant="contained" onClick={handleAddExpertise}>
          Add More
        </Button>



        <TextField
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          fullWidth
          margin="normal"
        />


   
      <MultiSelect
     
   
        options={options}
        value={selectdate}
        onChange={setSelectDate}
        labelledBy="Choose Date"


       className='select'

     

      />
   


        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  
  );
};

export default AddDoctorForm;




