import React from 'react'

import {Drawer,List,Divider} from '@mui/material'
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



const Drawor = () => {

    const [open,setOpen]=React.useState(false)
  return (
    <>
    <Drawer open={open} onClose={()=>setOpen(false)}>
       <List>
    <ListItemButton>
        <ListItemText>
            Home
        </ListItemText>
    </ListItemButton>
    <ListItemButton>
        <ListItemText>
            Contact us
        </ListItemText>
    </ListItemButton>
    <ListItemButton>
        <ListItemText>
            About us
        </ListItemText>
    </ListItemButton>

    <ListItemButton>
        <ListItemText>
            Doctors
        </ListItemText>
    </ListItemButton>

       </List>
       <Divider/>
       <List>
    <ListItemButton>
        <ListItemText>
            Login
        </ListItemText>
    </ListItemButton>
    <ListItemButton>
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