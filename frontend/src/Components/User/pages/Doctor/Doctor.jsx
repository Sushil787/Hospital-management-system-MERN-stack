import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DoctorCard from "./Doctorcard";
import { Grid, Typography } from "@mui/material";
import Loading from "../../Loading";
import { getdoctor } from "../../slices/getDoctor";
import { useDispatch, useSelector } from "react-redux";

const Doctor = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.doctor);
  const { doctor, isLoading, error } = datas;

  useEffect(() => {
    dispatch(getdoctor());
  }, []);

  return (
    <>
      <Loading isloading={isLoading} />
      <Grid container sx={{ display: "flex", marginTop: "30px", marginLeft:"40px" }}>
        <Grid item xs={10}>
          <Typography
            sx={{
              color: "black",
              fontSize: "40px",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            OUR DOCTORS
          </Typography>
        </Grid>
        {doctor?.doctors?.map((item) => {
          return (
            <Grid
              item
              sx={{ padding: "10px" }}
              xs={12}
              sm={6}
              md={3}
              direction="row"
            >
              <DoctorCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Doctor;
