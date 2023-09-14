

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Typography,
  Container,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material';

const Report = () => {
  const [datas, setDatas] = useState();
  const { id } = useParams();
  const token = localStorage.getItem('jwt');

  const doctorDetails = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/patient/single-appointment/${id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log(data.appointment);

      setDatas(data?.appointment);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    doctorDetails(id);
  }, []);

  const containerStyle = {
    marginTop: '20px',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '16px',
  };

  const paperStyle = {
    padding: '16px',
    marginBottom: '16px',
    textAlign: 'center',
   
  };

  const listItemStyle = {
    padding: '8px',
  };

  return (
    <Paper style={containerStyle}>
      <Typography variant="h4" style={titleStyle} gutterBottom>
        Medical Report
      </Typography>
    
      <Container   elevation={3}  style={paperStyle}>
       
       <Typography variant="h5">Patient Name:{datas?.user?.username}</Typography>
       <Typography variant="subtitle1">Email: {datas?.user?.email}</Typography>
       <Typography variant="subtitle1">Phone: {datas?.user?.phone}</Typography>
       <Typography variant="subtitle1">
         Location: {datas?.user?.location}
       </Typography>
       <Typography variant="subtitle1">Age: {datas?.user?.age}</Typography>
     </Container>
     <Container    elevation={3}   style={paperStyle}>
       <Typography variant="h5">Disease Details</Typography>
       <Typography variant="subtitle1">
         Date: {new Date(datas?.date).toLocaleDateString()}
       </Typography>
       <Typography variant="subtitle1">Disease: {datas?.disease}</Typography>
       <Typography variant="subtitle1">
         Doctor: {datas?.doctor?.name}
       </Typography>
       <Typography variant="subtitle1">
         Invoice: {datas?.doctor?.ammount}
       </Typography>
       <Typography variant="subtitle1">
         About Disease: {datas?.about}
       </Typography>
       <Typography variant="subtitle1">Medicine:</Typography>
       <List>
         {datas?.medicine?.map((med, index) => (
           <ListItem key={index} style={listItemStyle}>
             <ListItemText primary={med} />
           </ListItem>
         ))}
       </List>
       <Typography variant="subtitle1">Payment: {datas?.payment}</Typography>
     </Container>
     
     
    </Paper>
  );
};

export default Report;
