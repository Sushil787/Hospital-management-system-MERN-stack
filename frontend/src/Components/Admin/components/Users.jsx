
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import moment from 'moment';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Users() {

  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

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


  const handleDateChange = async (params, newDate) => {
    try {
      const tokens = localStorage.getItem('jwt');
      const response = await axios.post(
        'http://localhost:8080/date',
        {
          _id: params._id,
          date: newDate,
        },
        {
          headers: {
            authorization: tokens,
          },
        }
      );
      if (response.status === 200) {
        console.log('Date updated successfully');
        // Update the date in the local state
        const updatedAppointments = appointments.map((appointment) => {
          if (appointment._id === params._id) {
            return {
              ...appointment,
              date: newDate,
            };
          }
          return appointment;
        });
        setAppointments(updatedAppointments);
        
      } else {
        console.log('Failed to update date');
      }
    } catch (error) {
      console.error('Error updating date:', error);
    }
  };
 
  useEffect(() => {
    fetchData();
  }, [appointments]);
  const handleInvoiceChange = (row, value) => {
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
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'user',
      headerName: 'User Name',
      width: 200,
      renderCell: (params) => {
        const userName = params.row.user.username;
        return userName;
      },
    },
    {
      field: 'doctor',
      headerName: 'Doctor Name',
      width: 200,
      renderCell: (params) => {
        const userName = params.row.doctor.name;
        return userName;
      },
    },
    { field: 'disease', headerName: 'Disease', width: 200 },
    {
      field: 'date',
      headerName: 'Date',
      width: 200,
      renderCell: (params) => (
        moment(params.row.date).format('YYYY-MM-DD')
      ),
    },
  
    
   


    
  ];

  return (
    <>
      <div style={{ marginLeft: 20, height: 400, width: '100%' }}>
        <DataGrid rows={appointments} columns={columns} getRowId={(row) => row._id} />
      </div>
    </>
  );
}







