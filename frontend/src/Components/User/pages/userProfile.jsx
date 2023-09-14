





import React, { useState } from 'react';
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Grid,
  Box,
} from '@mui/material';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userContact, setUserContact] = useState();
  const [userAddress, setUserAddress] = useState();
  const [userGender, setUserGender] = useState();
  const [userAge, setUserAge] = useState();

  const fetch_user = async () => {
    try {
      const response = await axios.get('http://localhost:8080/userdetails', {
        headers: {
          authorization: localStorage.getItem('jwt'),
        },
      });
      setUser(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetch_user();
  }, [isEditing]);

  React.useEffect(() => {
    setUserName(user?.username);
    setUserEmail(user?.email);
    // setUserPassword("*********");
    setUserContact(user?.phone);
    setUserAddress(user?.location);
    setUserGender(user?.gender);
    setUserAge(user?.age);
  }, [user, isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        'http://localhost:8080/updatepatient',
        {
          username: userName,
          email: userEmail,
          password: userPassword,
          phone: userContact,
          location: userAddress,
          age: userAge,
          gender: userGender,
        },
        {
          headers: {
            authorization: localStorage.getItem('jwt'),
          },
        }
      );

      setUserName('');
      setUserEmail('');
      setUserPassword('');
      setUserContact('');
      setUserAddress('');
      setUserGender('');
      setUserAge('');
      toast.success('Profile Updated Successfully');

      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);

    setUserName('');
    setUserEmail('');
    setUserPassword('');
    setUserContact('');
    setUserAddress('');
    setUserGender('');
    setUserAge('');
  };

  const containerStyle = {
    backgroundImage: `url('https://wallpapers.com/images/hd/profile-picture-background-l9lertipy1ynf57v.jpg')`, // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure the container takes up the full viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
  };

  const titleStyle = {
    color: 'white', // Text color
    textAlign: 'center',
    marginBottom: '20px',
  };

  return (
    <Container style={containerStyle}>
      <Typography variant="h4" style={{
        textAlign: 'center',
      }} gutterBottom>
        User Profile
      </Typography>

      {/* ... Rest of your component */}
      <Container maxWidth="md" style={{ marginTop: '50px' }}>
        
       

    

          <Grid container spacing={4}>
               
        
              <Grid item xs={12} sm={6}>
              
               
                {isEditing ? (
                    <TextField
                      label="Name"
                      fullWidth
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      margin="normal"
                    />
                  ) : (
                    <Typography variant="subtitle1">Name: {userName}</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {isEditing ? (
                    <TextField
                      label="Email"
                      fullWidth
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      margin="normal"
                    />
                  ) : (
                    <Typography variant="subtitle1">Email: {userEmail}</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {isEditing ? (
                    <TextField
                      label="Enter new password"
                      fullWidth
                      type="password"
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                      margin="normal"
                    />
                  ) : (
                    <Typography variant="subtitle1">Password: ********</Typography>
                    
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {isEditing ? (
                    <TextField
                      label="Contact"
                      fullWidth
                      value={userContact}
                      onChange={(e) => setUserContact(e.target.value)}
                      margin="normal"
                    />
                  ) : (
                    <Typography variant="subtitle1">Contact: {userContact}</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {isEditing ? (
                    <TextField
                      label="Address"
                      fullWidth
                      value={userAddress}
                      onChange={(e) => setUserAddress(e.target.value)}
                      margin="normal"
                    />
                  ) : (
                    <Typography variant="subtitle1">Address: {userAddress}</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {isEditing ? (
                    <Box>
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup
                        row
                        value={userGender}
                        onChange={(e) => setUserGender(e.target.value)}
                      >
                        <FormControlLabel
                          value="Male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="Female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="Other"
                          control={<Radio />}
                          label="Other"
                        />
                      </RadioGroup>
                    </Box>
                  ) : (
                    <Typography variant="subtitle1">Gender: {userGender}</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {isEditing ? (
                    <TextField
                      label="Age"
                      fullWidth
                      value={userAge}
                      onChange={(e) => setUserAge(e.target.value)}
                      margin="normal"
                    />
                  ) : (
                    <Typography variant="subtitle1">Age: {userAge}</Typography>
                  )}
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                {isEditing ? (
                  <>
                    <Button variant="contained" color="primary" onClick={handleSaveClick}>
                      Save
                    </Button>
                    <Button variant="contained" onClick={handleCancelClick}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleEditClick}>
                    Edit
                  </Button>
                )}
              </Box>
            </Container>
    </Container>
  );
};

export default UserProfile;
