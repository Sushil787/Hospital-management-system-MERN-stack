import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';

const AddDoctorForm = ({fetchdata}) => {
  const [name, setName] = useState('');
  const [expertise, setExpertise] = useState(['']);
  const [image, setImage] = useState('');
  const [roomid,setroomid]=useState('')

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
      const doctorData = { name, expertise, image,roomid };
     const response=  await axios.post('http://localhost:8080/doctor', doctorData,{
        headers: {
            
            "authorization": localStorage.getItem("jwt")
            
          },
      });
      if(response)
      { fetchdata()
    setName("")
setExpertise([''])
setImage("")
setroomid("")}
      
      
    } catch (error) {
     console.log(error.message)
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
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
          label="Room ID"
          value={roomid}
          onChange={(e) => setroomid(e.target.value)}
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
