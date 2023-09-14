import React, { useEffect, useState } from 'react';
import { Container, Typography, Avatar, Grid, Chip, Box } from '@mui/material';
import axios from 'axios';

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState({});

  const fetchDoctor = async () => {
    try {
      const response = await axios.get('http://localhost:8080/doctor-single', {
        headers: {
          authorization: localStorage.getItem('jwt'),
        },
      });

      if (response) {
        setDoctor(response.data.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  const avatarStyle = {
    width: '150px',
    height: '150px',
  };

  const containerStyle = {
    paddingTop: '20px',
    paddingBottom: '20px',
  };

  const chipStyle = {
    marginRight: '8px',
    fontSize: '16px',
  };

  return (
    <Container maxWidth="md" sx={containerStyle}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} textAlign="center">
          <Avatar alt={doctor.name} src={doctor?.image} sx={avatarStyle} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h1" gutterBottom>
            {doctor?.name}
          </Typography>
          <Typography variant="h3" paragraph>
            {doctor?.desc}
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <Typography variant="h2" fontWeight="bold">
              Email:
            </Typography>
            <Typography variant="h2" ml={1}>
              {doctor?.email}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <Typography variant="h2" fontWeight="bold">
              Contact:
            </Typography>
            <Typography variant="h2" ml={1}>
              {doctor?.contact}
            </Typography>
          </Box>
          {/* <Box mt={2}>
            <Typography variant="body2" fontWeight="bold">
              Description
            </Typography>
            <Typography variant="body2">{doctor?.desc}</Typography>
          </Box> */}
          {/* <Box mt={2}>
            <Typography variant="h3" fontWeight="bold">
              Expertise:
            </Typography>
            <Box display="flex" flexWrap="wrap" alignItems="center">
              {doctor?.expertise?.map((expertise, index) => (
                <Chip
                  key={index}
                  label={expertise}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  sx={chipStyle}
                />
              ))}
            </Box>
          </Box> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DoctorProfile;




