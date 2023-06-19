import React from "react";
import Screen from "./Slider";
import { Avatar, Grid, Typography,useTheme } from "@mui/material";
import Departments from "./Departments";
import h1_hero from '../../assets/h1_hero.png'

import Image from 'mui-image'
import { Box, fontSize } from "@mui/system";
import Gallery from "./Gallery";


const Homepage = () => {
  const theme=useTheme()


  const departments = [
    { name: "Anesthesiology And Critical Care" },
    { name: "Clinical Biochemistry" },
    { name: "Department of Dermatology" },
    { name: "Microbiology" },
    { name: "Ophthalmology" },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{
          marginBottom:"60px"
        }}>
          <Screen />
        </Grid>

        

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:'60px',
            borderRadius:"40px",
            gap:"10px"
            
          }}
          
          
        >
          <Grid container item   sx={{
        minHeight:'80vh'}} xs={12} >
            <Grid item xs={12} md={5} >
            <Image src={h1_hero} shift="top" distance="2rem" shiftDuration={320} fit="cover" 
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
            />

            </Grid>

            <Grid item   xs={12} md={7} 
            sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"column",
              gap:6,
              backgroundColor:"#ccff99"
              
              
            }}

             > 
            <Box  sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"column",
              
            }}> 

            <Typography  sx={{
              width:"500px",
             marginTop:"50px",
             fontSize:"30px",
             fontStyle:"italic"
            }}>
            “I am at an age where I just want to be fit and healthy our bodies are our
                                    responsibility! So start caring for your body and it will care for you. Eat clean it
                                    will care for yout hard.”
            </Typography>
           
            <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56 }}
/>
            </Box>
            </Grid>
          </Grid>
        </Grid>

        

        <Grid
          item
          xs={12}
         
          sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Gallery
          </Typography>
        </Grid>
        <Grid container item xs={12}  >
         
            
        <Gallery/>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
