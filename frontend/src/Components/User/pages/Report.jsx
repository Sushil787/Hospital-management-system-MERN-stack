import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

   

    




import {
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const Report = () => {


  const [datas,setDatas]=useState()


  const { id } = useParams();
  const token = localStorage.getItem("jwt");

 
  

    const doctorDetails= async(id)=>{
      try{
        const {data}= await axios.get(`http://localhost:8080/patient/single-appointment/${id}`,{headers:{
          authorization:token
        }})

        console.log(data.appointment)
        
  setDatas(data?.appointment)
      
  
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

   

  


    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Medical report
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Avatar
              alt={datas?.user?.username}
              src={datas?.user?.image}
              style={{ width: '100px', height: '100px', marginBottom: '16px' }}
            />
            <Typography variant="h5">{datas?.user?.username}</Typography>
            <Typography variant="subtitle1">
              Email: {datas?.user?.email}
            </Typography>
            <Typography variant="subtitle1">
              Phone: {datas?.user?.phone}
            </Typography>
            <Typography variant="subtitle1">
              Location: {datas?.user?.location}
            </Typography>
            <Typography variant="subtitle1">
              Age: {datas?.user?.age}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h5">datas Details</Typography>
            <Typography variant="subtitle1">
              Date: {new Date(datas?.date).toLocaleDateString()}
            </Typography>
            <Typography variant="subtitle1">
              Disease: {datas?.disease}
            </Typography>
            <Typography variant="subtitle1">
              Doctor: {datas?.doctor?.name}
            </Typography>
            <Typography variant="subtitle1">
              Invoice: {datas?.doctor?.ammount}
            </Typography>
            <Typography variant="subtitle1">Medicine:</Typography>
            <List>
              {datas?.medicine?.map((med, index) => (
                <ListItem key={index}>
                  <ListItemText primary={med} />
                </ListItem>
              ))}
            </List>
            <Typography variant="subtitle1">
              Payment: {datas?.payment}
            </Typography>
            
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Report;
