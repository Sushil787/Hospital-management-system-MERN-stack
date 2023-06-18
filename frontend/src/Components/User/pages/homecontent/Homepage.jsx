import React from "react";
import Screen from "./Slider";
import { Grid, Typography } from "@mui/material";
import Departments from "./Departments";

const Homepage = () => {
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
        <Grid item xs={12}>
          <Screen />
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
            OUR SERVICES
          </Typography>
        </Grid>

        <Grid container item xs={12} justifyContent="center" spacing={2}>
          {departments.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Departments item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
