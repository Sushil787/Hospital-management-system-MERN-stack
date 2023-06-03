import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, FormControlLabel, Checkbox } from '@mui/material';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleIsAdminChange = (e) => {
    setIsAdmin(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('isAdmin:', isAdmin);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              type="text"
              label="Username"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
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
            <FormControlLabel
              control={<Checkbox checked={isAdmin} onChange={handleIsAdminChange} />}
              label="Is Admin"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default SignUpForm;
