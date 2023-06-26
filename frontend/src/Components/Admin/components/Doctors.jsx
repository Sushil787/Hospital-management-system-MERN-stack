import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect } from "react";

import AddDoctorForm from "./AddDoctor";
import { Grid, Typography } from "@mui/material";

const columns = [
  { field: "_id", headerName: "ID", width: 200 },
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
    field: "actions",
    headerName: "Actions",
    width: 120,
    renderCell: (params) => {
      const handleDelete = async () => {
        const token = localStorage.getItem("jwt");
        // console.log(token);
        // console.log(params.row._id);
        try {
          const response = await axios.delete(
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
];

export default function DataGridDemo() {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/public/doctor", {
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("jwt"),
        },
      });
      // console.log(response.data);

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
        <div>No doctors</div>
      </GridOverlay>
    );
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <AddDoctorForm fetchdata={fetchData} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{ height: "400px", width: "90%" }}>
          <Grid container xs={12}>
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
