import React from 'react';
import { Container, Avatar, Typography, Box } from '@mui/material';

const Profile = () => {
  // Sample doctor data (replace with actual data)
  const doctor = {
    name: 'Dr. John Smith',
    specialty: 'Cardiologist',
    location: 'New York, NY',
    imageUrl: 'https://example.com/doctor-avatar.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut blandit nunc.'
  };

  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Avatar alt={doctor.name} src={doctor.imageUrl} sx={{ width: 150, height: 150 }} />
        <Typography variant="h4" component="div" mt={2}>
          {doctor.name}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {doctor.specialty}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {doctor.location}
        </Typography>
        <Typography variant="body1" mt={2}>
          {doctor.bio}
        </Typography>
      </Box>
    </Container>
  );
};

export default Profile;

