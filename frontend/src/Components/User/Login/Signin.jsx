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
import {Formik,Field,Form,ErrorMessage} from 'formik'
import * as yup from 'yup'
import toast from "react-hot-toast";


function SignUpForm() {
  const [error,setError]=useState("")
  const Navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [is_admin, setIsAdmin] = useState(false);


  const initialValues = {
    username: "",
    email:"",
    password: "",
  };
  
  const validationSchema = yup.object({
    username: yup.string().required("Username must be required"),
    email: yup.string().email("Invalid email!").required("email must be required"),
    password: yup.string().required("Password must be required").min(8,"Password must be greater then 8 character"),
  });

  const onSubmit= async(values)=>{
    try {
      const response= await axios.post(
        "http://localhost:8080/signup",

        values
      );
      console.log(response)

      Navigate("/login")
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during signup.");
      }
      
    }

  }
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <Formik validationSchema={validationSchema}initialValues={initialValues} onSubmit={onSubmit}>
      <Form >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field
            as={TextField}
              type="text"
              label="Username"
              variant="outlined"
              name="username"
              fullWidth
              
            />
            <ErrorMessage name="username"/>
          </Grid>
          <Grid item xs={12}>
            <Field
            as={TextField}
              type="email"
              label="Email"
              variant="outlined"
              name="email"
              fullWidth
              
            />
            <ErrorMessage name="email"/>
          </Grid>
          <Grid item xs={12}>
            <Field
            as={TextField}
              type="password"
              label="Password"
              variant="outlined"
              name="password"
              fullWidth
             
            />
            <ErrorMessage name="password"/>
          </Grid>
         
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Form>
      </Formik>
    </Container>
  );
}

export default SignUpForm;
