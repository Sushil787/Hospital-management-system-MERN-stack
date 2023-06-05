import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
        password,
      };

      const { data } = await axios.post(
        "http://localhost:8080/signin",
        userData
      );

      const token = data.message;
      const tokenParts = token.split(".");
      const secondPart = tokenParts[1];
      localStorage.setItem("token", secondPart);

      Navigate("/");

      setUsername("");
      setPassword("");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        alert(Error);
      }
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
