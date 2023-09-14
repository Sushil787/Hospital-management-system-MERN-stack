import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Report() {

    const { id } = useParams();
    console.log(id)
    const [data,setDatas] = useState();
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [medicine, setmedicine] = useState([]);
  const [Medicine, setMedicine] = useState('');
 const [about, setAbout] = useState([]);

 console.log(data)


 const fetchdata = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/single/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('jwt'),
        },
      });

      setDatas(response.data.appointment    );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { 
    fetchdata();
    }, [data]);


  const handleAddDisease = () => {
    if (Medicine !== '') {
        setmedicine([...medicine, Medicine]);
      setMedicine('');
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        const response = await axios.patch(`http://localhost:8080/update-medicine`, {_id:id,medicine,about}, {
          headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('jwt'),
          },
        });
  
        if (response.status === 200) {
          console.log('Medicine updated successfully');
        } else {
            console.log('Failed to update medicine');
            }

      } catch (error) {
        console.error(error);
      }
    
    // Handle form submission, e.g., send the data to the server
    // You can access all the form fields' values in this function
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Report Generator</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              
              variant="outlined"
              value={data?.user?.username}
              onChange={(e) => setPatientName(e.target.value)}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              
              variant="outlined"
              value={data?.doctor?.name}
              onChange={(e) => setDoctorName(e.target.value)}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              
              variant="outlined"
              value={data?.invoice}
              onChange={(e) => setTotalAmount(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Disease Information</Typography>
            <TextField
              fullWidth
              label="Disease"
              variant="outlined"
              value={Medicine}
              onChange={(e) => setMedicine(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddDisease}>
              Add Medicine
            </Button>
            {/* {diseaseArray.map((about, index) => (
              <div key={index}>{about}</div>
            ))} */}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Disease Information</Typography>
            <TextField
              fullWidth
              label="Disease"
              variant="outlined"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            
            {/* {diseaseArray.map((about, index) => (
              <div key={index}>{about}</div>
            ))} */}
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Generate Report
        </Button>
      </form>
    </Container>
  );
}


export default Report;
