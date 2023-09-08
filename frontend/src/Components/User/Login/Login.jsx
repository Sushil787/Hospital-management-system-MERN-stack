import React from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAsync } from "../slices/Loginslice";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Box } from "@mui/system";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const data = await dispatch(loginAsync(values));

      if (data.meta.requestStatus === "rejected") {
        toast.error(data.payload.message);
      }

      const token = localStorage.getItem("jwt");
      const is_admin = localStorage.getItem("is_admin");
      if (token && is_admin === "false") {
        navigate("/");
        window.location.reload("true");
        toast.success("login successfully");
      }
      if (token && is_admin === "true") {
        navigate("/");
        window.location.reload("true");

        toast.success(" admin login successfully");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const validationSchema = yup.object({
    username: yup.string().required("Username must be required"),
    password: yup.string().required("Password must be required"),
  });

  return (
    <>
    <Box >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "70vh",
          marginTop:"100px"
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Grid sx={{
              
            

            }} container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  type="text"
                  label="Username"
                  variant="outlined"
                  name="username"
                  fullWidth
                />
                <Box

                  sx={{ color: "red" }}
                >
                  <ErrorMessage name="username" />
                </Box>
                
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
                <Box sx={{ color: "red" }}>
                  <ErrorMessage name="password" />  
                </Box>
              
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
          </Form>
        </Formik>
      </Container>
      </Box>
    </>
  );
}

export default LoginForm;
