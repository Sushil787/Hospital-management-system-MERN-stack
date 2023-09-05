import { useEffect,useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


export default function Enquery() {
    const [enqueries, setEnquiry] = useState([]);
  
    useEffect(() => {
      fetchEnquery();
    }, []);
  
    const fetchEnquery = async () => {
      try {
        const response = await axios.get('http://localhost:8080/userquery', {
          headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('jwt'),
          },
        });
  
        setEnquiry(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const columns = [
      { field: 'name', headerName: 'Name', width: 200 },
      { field: 'email', headerName: 'Email', width: 200 },
      { field: 'contact', headerName: 'Contact', width: 200 },
      { field: 'message', headerName: 'Message', width: 400 },
    ];
  
    return (
      <div style={{ height: 400, width: '100%', paddingLeft:20 }}>
        <DataGrid
          rows={enqueries}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          getRowId={(row) =>row._id }
        />
      </div>
    );
  }
  