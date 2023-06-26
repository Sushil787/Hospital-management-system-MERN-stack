import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Divider,
  FixedSizeList,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import axios from "axios";

const AppointmentForm = () => {
 
  const data = useSelector((state) => state.doctor);
  const token = localStorage.getItem("jwt");

  const { id } = useParams();
  const doctor = data.doctor.doctors.find((item) => item._id === id);
  const { _id, name, expertise, image } = doctor;
  const [appointmentData, setAppointmentData] = useState({
    doctor: _id,
    disease: "",
    date: "",
    // status:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submithandler = async (event) => {
    event.preventDefault();

    console.log(appointmentData);

    try {
      const res = await axios.post(
        "http://localhost:8080/patient/appointment",
        appointmentData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
            // Add more headers as needed
          },
        }
      );
      console.log(res);
    } catch (error) {}
    // Reset the form
    setAppointmentData({
      disease: "",
      date: "",
      // status:''
    });
  };

  return (
    <>
      <Grid
        container
        sx={{ mt: "20px", display: "flex", justifyContent: "space-evenly" }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "400px",
              height: "500px",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={image}
              alt={name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Name: {name}
          </Typography>
          <Divider />
          <Typography variant="h6" sx={{ textAlign: "center",paddingTop:"30px" }}>
            Expertise
          </Typography>
          <List
            sx={{
              listStyleType: "disc",
              pl: 2,
              "& .MuiListItem-root": {
                display: "list-item",
              },
            }}
          >
            {expertise.map((item) => {
              return <ListItem>{item}</ListItem>;
            })}
          </List>
        </Grid>
      </Grid>

      <Grid
        container
        xs={12}
        sx={{
          mt: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Grid container xs={12} md={5} spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: "black",

                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
                fontWeight: "bold",
                textTransform: "uppercase",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                mb: "30px",
              }}
            >
              Appointment Now
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="disease"
              label="Disease"
              value={appointmentData.disease}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          {/* <Grid item xs={12}>
          <TextField
            name="status"
            label="Status"
            value={appointmentData.status}
            onChange={handleChange}
            fullWidth
            required
            />
        </Grid> */}
          <Grid item xs={12}>
            <TextField
              name="date"
              label="Date"
              type="date"
              value={appointmentData.date}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              textAlign="center"
              type="submit"
              variant="contained"
              color="primary"
              onClick={submithandler}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AppointmentForm;
