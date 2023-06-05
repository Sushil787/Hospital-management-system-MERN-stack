import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DoctorCard from "./Doctorcard";
import { Grid, Typography } from "@mui/material";
import Loading from './Loading'


const Doctor = () => {
  const [data, setData] = useState();
  const [isloading,setIsloading]=useState(false)

  useEffect(() => {
    const fetchdata = async () => {
      setIsloading(true)
      try {
        const { data } = await axios.get("http://localhost:8080/doctor");
        setData(data);
      } catch (error) {
        console.log(error.msg);
      } finally
      {
        setIsloading(false)
      }
    };
    fetchdata();
  }, []);
  console.log(data);

  return (
    <>
    <Loading isloading={isloading}/>
      <Grid container sx={{display:'flex', marginTop:'30px'}} >
        <Grid item xs={12} >
            <Typography sx={{
                      color: "black",
                      fontSize: "40px",
                      fontWeight: "bold",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", 
                      textAlign:'center'
                    }}>
                OUR DOCTORS
            </Typography>
        </Grid>
  {data?.doctors?.map((item) => {
   
    return (
        <Grid item  sx={{padding:'30px', }}   xs={12} sm={6} md={3} direction="row">
      <DoctorCard item={item} />
      </Grid>
    );
  })}
</Grid>

    </>
  );
};

export default Doctor;
