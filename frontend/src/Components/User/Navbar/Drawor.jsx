import React from 'react'

import {Drawer,List,Divider} from '@mui/material'
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



const Drawor = () => {

    const [open,setOpen]=React.useState(false)
  return (
    <>
    <Drawer open={open} onClose={()=>setOpen(false)}>
       <List>
    <ListItemButton component={Link} to='/'>
        <ListItemText>
            Home
        </ListItemText>
    </ListItemButton >
    <ListItemButton component={Link} to='/contact'>
        <ListItemText>
            Contact us
        </ListItemText>
    </ListItemButton>
    <ListItemButton component={Link} to='/about'>
        <ListItemText>
            About us
        </ListItemText>
    </ListItemButton>

    <ListItemButton component={Link} to='/service'>
        <ListItemText>
            Service
        </ListItemText>
    </ListItemButton>

    <ListItemButton component={Link} to='/doctor'>
        <ListItemText>
            Doctors
        </ListItemText>
    </ListItemButton>

       </List>
       <Divider/>
       <List>
    <ListItemButton component={Link} to='/login'>
        <ListItemText>
           User Login
        </ListItemText>
    </ListItemButton>

    <ListItemButton component={Link} to='/doctorlogin'>
        <ListItemText>
           Doctor Login
        </ListItemText>
    </ListItemButton>
    <ListItemButton component={Link} to='/SignUp'>
        <ListItemText>
            Sign up
        </ListItemText>
    </ListItemButton>
   

       </List>


    </Drawer>
    

    <IconButton sx={{ color:'white',marginLeft:"auto"}} onClick={()=>setOpen(!open)}>

 <MenuIcon/>
    </IconButton>

    </>

  )
}

export default Drawor