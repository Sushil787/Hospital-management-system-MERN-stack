import { useEffect,useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


export default function Enquery() {
    const [datas, setDatas] = useState([]);
  
    useEffect(() => {
      fetchEnquery();
    }, []);
  
    const fetchEnquery = async () => {
      try {
        const response = await axios.get('http://localhost:8080/ambulance', {
          headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('jwt'),
          },
        });
  
        setDatas(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const columns = [
      { field: 'name', headerName: 'Name', width: 200 },
      { field: 'phoneNumber', headerName: 'phoneNumber', width: 150},
      { field: 'address', headerName: 'Address', width: 150 },
      {field:"state",headerName:"state",width:150},
      {field:"city",headerName:"city",width:150},
      {field:"zip",headerName:"Zip Code",width:150},
      { field: 'emergencyType', headerName: 'EmergenctType', width: 200 },
    ];
  
    return (
      <div style={{ height: 400, width: '100%', paddingLeft:20 }}>
        <DataGrid
          rows={datas}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          getRowId={(row) =>row._id }
        />
      </div>
    );
  }
  