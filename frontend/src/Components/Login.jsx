import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../slices/Loginslice";
import { useEffect } from "react";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    const errors = {};

    if (!username.trim()) {
      errors.username = "Username is required";
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } 

    if (!isValid) {
      const errorMessages = Object.values(errors).join("\n");
      window.alert(`\n${errorMessages}`);
    }
    const users = { username, password };
    try {
      await dispatch(loginAsync(users));
      const token = localStorage.getItem("jwt");
      if (token) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default LoginForm;
