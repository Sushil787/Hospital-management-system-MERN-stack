import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

export default function Users() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/appointments', {
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('jwt'),
        },
      });
      
      setAppointments(response.data.all_appointments);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(appointments)

  const handleSave = async (appointment) => {
    try {
      // Save the appointment details
      const response = await axios.patch(
        'http://localhost:8080/appointments',
        {
          _id: appointment._id,
          status: 'checked',
          invoice: appointment.invoice,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('jwt'),
          },
        }
      );
      console.log(response);

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [

{field:'_id', headerName:"ID", width:150},
    {
      field: 'user',
      headerName: 'User Name',
      width: 150,
      renderCell: (params) => {
        const userName = params.row.user.username;
        return userName;
      }
    },
  
  
   
  
    { field: 'disease', headerName: 'Disease', width: 100 },
    
    { field: 'date', headerName: 'Date', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => (
        <span>
          {params.row.status === 'checked' ? '✔️' : 'Pending'}
        </span>
      ),
    },
    {
      field: 'payment',
      headerName: 'Payment',
      width: 100,
      renderCell: (params) => (
        <span>
          {params.row.payment === 'paid' ? 'paid' : 'unpaid'}
        </span>
      ),
    },
    {
      field: 'invoice',
      headerName: 'Invoice',
      width: 200,
      renderCell: (params) => (
        <>
          {params.row.status === 'checked' ? params.value :  <TextField
              value={params.value}
              onChange={(e) => handleChange(params.row, e.target.value)}
              variant="outlined"
              size="small"
              style={{ color: 'inherit', width: '90%' }}
            />}
            </>
        
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => (
        params.row.status !== "checked" ? (
          <Button onClick={() => handleSave(params.row)} style={{ color: 'white' }}>
            Add 
          </Button>):
          (
            <span>
          clear
        </span>
          )

       
        
      )
    },
  ];

  const handleChange = (row, value) => {
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment._id === row._id) {
        return {
          ...appointment,
          invoice: value,
        };
      }
      return appointment;
    });
    setAppointments(updatedAppointments);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={appointments} columns={columns} getRowId={(row) => row._id} />
    </div>
  );
}
