import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export default function SimpleBackdrop({isloading}) {
  

  return (
    <div>
      
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 , backgroundColor:"transparent", }}
        open={isloading}
       
      >
        <CircularProgress color="primary" size={50}/>
      </Backdrop>
    </div>
  );
}