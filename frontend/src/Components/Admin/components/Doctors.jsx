import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddDoctorForm from "./AddDoctor";
import { Grid, Typography } from "@mui/material";



const columns = [

  { field: "name", headerName: "Name", width: 200 },
 
  {
    field: "expertise",
    headerName: "Expertise",
    width: 400,
    renderCell: (params) => {
      const expertise = params.value || [];
      return expertise.join(", ");
    },
  },
  {
    field: "date",
    headerName: "Available Date",
    width: 200,
    renderCell: (params) => {
      const date = params.value || [];
      return date.join(", ");
    },
  },


  {
    field: "actions",
    headerName: "Actions",
    width: 70,
    renderCell: (params) => {
      const handleDelete = async () => {
        const token = localStorage.getItem("jwt");
       
        try {
          await axios.delete(
            `http://localhost:8080/doctor/${params.row._id}`,
            {
              headers: {
                "Content-Type": "application/json",
                authorization: token,
              },
            }
          );
          window.location.reload(true);
        } catch (error) {
          console.log(error.message);
        }
      };

      return <button onClick={handleDelete}>Delete</button>;
    },
  },

  // {
  //   field: "seeMore",
  //   headerName: "More Info",
  //   width: 70,
  //   renderCell: (params) => {
  //     const handleDetails = async () => {
  //     //  navigate(`/doctordetails/${params.row._id}`)

  //     console.log(params.row._id)
       
      
  //     };

  //     return <button onClick={handleDetails}>See More</button>;
  //   },
  // },
];

export default function DataGridDemo() {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/public/doctor", {
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("jwt"),
        },
      });
     

      const rowsWithId = response.data.doctors.map((row, index) => ({
        id: index + 1,
        ...row,
      }));
      setData(rowsWithId);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const CustomNoRowsOverlay = () => {
    return (
      <GridOverlay>
        <div>loading....</div>
      </GridOverlay>
    );
  };
  return (
    <Grid container >
      
      <Grid item xs={12} sm={12}>
        <Box sx={{ height: "400px", maxWidth: "90%" }}>
          <Grid container sx={{justifyContent:"center"}} xs={10}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
              }}
              gutterBottom
            >
              Doctor List
            </Typography>
          </Grid>
          <DataGrid
            rows={data}
            columns={columns}
            components={{
              NoRowsOverlay: CustomNoRowsOverlay,
            }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </Grid>
    </Grid>
  );
}
