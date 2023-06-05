import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
 
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SignUpForm() {
  const [error,setError]=useState("")
  const Navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [is_admin, setIsAdmin] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleusernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleIsAdminChange = (e) => {
    setIsAdmin(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let isValid = true;
      const errors = {};

      if (!username.trim()) {
        errors.username = "Username is required";
        isValid = false;
      }

      if (!email.trim()) {
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

      if (!isValid) {
        const errorMessages = Object.values(errors).join("\n");
        window.alert(`\n${errorMessages}`);
       
        return;
      }
      const userData = {
        username,
        email,
        password,
        is_admin,
      };
       await axios.post(
        "http://localhost:8080/signup",
        userData
      );
     
      
        Navigate("/login")
      
     

      setEmail("");
      setUsername("");
      setPassword("");
      setIsAdmin(false);
    } catch (error) {
      if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
        alert(error)
        
			}
    }
    
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
              value={username}
              onChange={handleusernameChange}
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
              control={
                <Checkbox checked={is_admin} onChange={handleIsAdminChange} />
              }
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
