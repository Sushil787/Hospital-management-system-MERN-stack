

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };
  
  const titleStyle = {
    textAlign: 'center',
  };
  
  const paperStyle = {
    width: '100%',
    maxWidth: '600px', // Adjust the maximum width as needed
    margin: '10px',
    padding: '20px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  const listItemStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '5px',
  };
  
  const responsiveContainerStyle = {
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };
  
  const responsivePaperStyle = {
    flex: '1',
    margin: '10px',
  };
  


 

  return (
    // <Container style={containerStyle}>
    //   <Typography variant="h4" style={titleStyle} gutterBottom>
    //     Medical Report
    //   </Typography>
    
    //   <Container   elevation={3}  style={paperStyle}>
       
    //    <Typography variant="h5">Patient Name:{datas?.user?.username}</Typography>
    //    <Typography variant="subtitle1">Email: {datas?.user?.email}</Typography>
    //    <Typography variant="subtitle1">Phone: {datas?.user?.phone}</Typography>
    //    <Typography variant="subtitle1">
    //      Location: {datas?.user?.location}
    //    </Typography>
    //    <Typography variant="subtitle1">Age: {datas?.user?.age}</Typography>
    //  </Container>
    //  <Container    elevation={3}   style={paperStyle}>
    //    <Typography variant="h5">Disease Details</Typography>
    //    <Typography variant="subtitle1">
    //      Date: {new Date(datas?.date).toLocaleDateString()}
    //    </Typography>
    //    <Typography variant="subtitle1">Disease: {datas?.disease}</Typography>
    //    <Typography variant="subtitle1">
    //      Doctor: {datas?.doctor?.name}
    //    </Typography>
    //    <Typography variant="subtitle1">
    //      Invoice: {datas?.doctor?.ammount}
    //    </Typography>
    //    <Typography variant="subtitle1">
    //      About Disease: {datas?.about}
    //    </Typography>
    //    <Typography variant="subtitle1">Medicine:</Typography>
    //    <List>
    //      {datas?.medicine?.map((med, index) => (
    //        <ListItem key={index} style={listItemStyle}>
    //          <ListItemText primary={med} />
    //        </ListItem>
    //      ))}
    //    </List>
    //    <Typography variant="subtitle1">Payment: {datas?.payment}</Typography>
    //  </Container>
     
     
    // </Container>



    <Container style={{ ...containerStyle, ...responsiveContainerStyle }}>
    <Typography variant="h4" style={titleStyle} gutterBottom>
      Medical Report
    </Typography>

    <Container elevation={3} style={{ ...paperStyle, ...responsivePaperStyle }}>

      <Typography variant="h5">Patient Details</Typography>
      <Typography variant="subtitle1">Patient Name: {datas?.user?.username}</Typography>
      <Typography variant="subtitle1">Email: {datas?.user?.email}</Typography>
      <Typography variant="subtitle1">Phone: {datas?.user?.phone}</Typography>
      <Typography variant="subtitle1">Location: {datas?.user?.location}</Typography>
      <Typography variant="subtitle1">Age: {datas?.user?.age}</Typography>
    </Container>
    <Container elevation={3} style={{ ...paperStyle, ...responsivePaperStyle }}>
      <Typography variant="h5">Disease Details</Typography>
      <Typography variant="subtitle1">Date: {new Date(datas?.date).toLocaleDateString()}</Typography>
      <Typography variant="subtitle1">Disease: {datas?.disease}</Typography>
      <Typography variant="subtitle1">Doctor: {datas?.doctor?.name}</Typography>
      <Typography variant="subtitle1">Invoice: {datas?.doctor?.ammount}</Typography>
      <Typography variant="subtitle1">About Disease: {datas?.about}</Typography>
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
  </Container>
  );
};

export default Report;
