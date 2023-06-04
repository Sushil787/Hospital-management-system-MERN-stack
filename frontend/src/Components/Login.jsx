import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      let isValid = true;
      const errors = {};

     

      if (!username.trim()) {
        errors.email = "Email is required";
        isValid = false;
      }

      if (!password.trim()) {
        errors.password = "Password is required";
        isValid = false;
      } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
        isValid = false;
      }

     
      const userData = {
      
        username,
        password,
        
      };
      const response = await axios.post(
        "http://192.168.1.68:8080/signin",
        userData
      );
 
      // window.alert(`${response.data}`)
      const authorizationHeader = response.headers['authorization'];
      console.log(authorizationHeader);
      // console.log(authorizationHeader);
      // const token = authorizationHeader?.split(' ');
      // console.log(token)
      // const jwtToken = token[0];
      // console.log(jwtToken);
  
      // Store the JWT token in localStorage or state
      // localStorage.setItem('jwtToken', jwtToken);

     setUsername("")
      
      setPassword("");
     
    } catch (error) {
      window.alert(`${error}`)
    }
  
 
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              type="text"
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={handleEmailChange}
            />
          </Grid>
         
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default LoginForm;
