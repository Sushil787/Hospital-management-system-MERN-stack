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
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import axios from "axios";
import toast from 'react-hot-toast'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css"

const AppointmentForm = () => {
  const [doctor,setDoctor]=useState()

  // const tomorrow = new Date();
  // tomorrow.setDate(tomorrow.getDate() + 1);
 
  const { id } = useParams();
  const Navigate=useNavigate()
  
  const token = localStorage.getItem("jwt");

  const doctorDetails= async(id)=>{
    try{
      const {data}= await axios.get(`http://localhost:8080/public/doctor/${id}`,{headers:{
        authorization:token
      }})
      
    setDoctor(data.data)
    console.log(doctor)
    toast.success(data.message)
    

    }
    catch(error)
    {
      
      toast.error(error.message)
    }

   


  }


  React.useEffect(()=>{
      doctorDetails(id)

  },[id])
 
 
 

  const [appointmentData, setAppointmentData] = useState({
    doctor:id,
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
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.danger(error.message)
    }
    // Reset the form
    setAppointmentData({
      disease: "",
      date: "",
      // status:''
    });
  };


  const handlejoin=()=>{
    Navigate(`/room/${doctor?.roomid}`)
  }

 

  

  return (
    <>
    {doctor&&
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
              src={doctor?.image}
              alt={doctor?.name}
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
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Name: {doctor?.name}
          </Typography>
          <Divider />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {doctor?.desc}
          </Typography>
          <Divider />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Email: {doctor?.email}
          </Typography>
          <Divider />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Phone: {doctor?.contact}
          </Typography>
          <Divider />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Fee:{doctor?.ammount}
          </Typography>
        




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
            {doctor?.expertise.map((item) => {
              return <ListItem>{item}</ListItem>;
            })}
          </List>

          {/* create a input filed for room id for video call  */}
           <Typography variant="h6" sx={{ textAlign: "center" }}>
            Available Time
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
            {doctor?.date?.map((item) => {
              return <ListItem>{item}</ListItem>;
            })}
          </List>
            {/* BUTTON FOR VIDEO CALL */}
            {/* <Button
              textAlign="center"
              variant="contained"
              color="primary"
              onClick={
                handlejoin  

              }
             
            >
              Join
            </Button> */}


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
            {/* <TextField
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
            
            /> */}

<DatePicker

className="form-control"

      selected={appointmentData.date}
      onChange={(date) => setAppointmentData({...appointmentData,date:date})}
      placeholderText="Select a date"

      minDate={new Date()}
      
     
      required

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
}
    </>
  );
};


export default AppointmentForm;

