import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import toast from 'react-hot-toast';


function Report() {
  const navigate = useNavigate();

  const [isEditingDate, setIsEditingDate] = useState(false);
const [selectedDate, setSelectedDate] = useState(new Date());

    const { id } = useParams();
    console.log(id)
    const [data,setDatas] = useState();
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [medicine, setmedicine] = useState([]);
  const [Medicine, setMedicine] = useState('');
 const [about, setAbout] = useState([]);
 const [date,setDate]=useState(new Date())

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
    }, [isEditingDate]);

const handlesave=async()=>{
  setIsEditingDate(!isEditingDate);
  if(isEditingDate){
  }
  try {

    const response = await axios.patch(`http://localhost:8080/update-date`, {_id:id,date:selectedDate}, {
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('jwt'),
      },
    });
    console.log(response.date)
  }
  catch(error){
    console.log(error)
  }
}
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
          toast.success('Generate report successfully');
          navigate("/")
        } else {
          toast.error('Something went wrong');
            }

      } catch (error) {
        console.error(error);
      }
    
    // Handle form submission, e.g., send the data to the server
    // You can access all the form fields' values in this function
  };

  return (

<>
    <Container maxWidth="md">
    <Typography variant="h2" sx={{
      textAlign:"center", 
      marginBottom:"60px" 
    }}>Patient Information</Typography>


      <Grid container spacing={2}>
        
        
      

        <Grid item xs={6} >
          <Typography variant="h3">Patient Name</Typography>
          <Typography variant="h6">{data?.user?.username}</Typography>
        </Grid>
          
        <Grid item xs={6} md={6}>
          <Typography variant="h3">Patient Email</Typography>
          <Typography variant="h6">{data?.user?.email}</Typography>
          </Grid>
          <Grid item xs={6} md={6}>
          <Typography variant="h3">Patient Phone</Typography>
          <Typography variant="h6">{data?.user?.phone}</Typography>
          </Grid>

          <Grid item xs={6} md={6}>
          <Typography variant="h3">Patient Address</Typography>
          <Typography variant="h6">{data?.user?.location}</Typography>
          </Grid>
          <Grid item xs={6} md={6}>
          <Typography variant="h3">Patient Age</Typography>
          <Typography variant="h6">{data?.user?.age}</Typography>
          </Grid>
          <Grid item xs={6} md={6}>
          <Typography variant="h3">Disease</Typography>
          <Typography variant="h6">{data?.disease}</Typography>
          </Grid>

          <Grid item xs={3}  sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
          }}>
        
  <Typography variant="h3">Date </Typography>
  {isEditingDate ? (
   
      <DatePicker
        open
       
        value={moment(data?.date).format('DD/MM/YYYY')}
        onChange={(newDate) => setSelectedDate(newDate)}
        // renderInput={(params) => <TextField {...params} fullWidth />}
        minDate={new Date() }
        // You can customize the DatePicker appearance and behavior as needed
      />
  
  ) : (
    <Typography variant="h6">
      {moment(data?.date).format('DD/MM/YYYY')}
    </Typography>




  )}





</Grid>

<Grid item xs={6} md={6}>
  
<Button
  variant="contained"
  color="primary"
  onClick={handlesave}
>
  {isEditingDate ? 'Save Date' : 'Edit Date'}
</Button>

</Grid>









      </Grid>

    </Container>
    <Container sx={{
      marginTop:"60px"
    }} maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" sx={{
          textAlign:"center",
          marginBottom:"60px"
        }}>Report Generator</Typography>
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
            <Typography variant="h6">Medicine Information</Typography>
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


    </>
  );
}


export default Report;
