import React from 'react'
import {AppBar,Toolbar,IconButton,Tabs,Tab,Box,Button,useTheme,useMediaQuery} from  '@mui/material'
import Drawor from './Drawor'


import logo from  "./logo.png"






const Navbar = () => {
    const theme=useTheme()
    const [value,setValue]=React.useState()

    const ismatch=useMediaQuery(theme.breakpoints.down('md'))
  
   
   
  return (
    <>
    <AppBar sx={{background:"#edf0ed"}} >
        <Toolbar>
        <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="primary"
    >
        <img src={logo} alt="logo" />
    
   
    </IconButton>
        
       
    {ismatch?( <Drawor/>):(
        <>
        
  <Tabs
  value={value}
  onChange={(e,value)=>setValue(value)}
  textColor="secondary"
  indicatorColor="secondary"
 sx={{ml:"50px",flexGrow:1,justifyContent:'center',display:'flex'}}
 
>
  <Tab  label="Home" />
  <Tab  label="Contact us" />
  <Tab  label="About us" />
  <Tab  label="Doctors" />
</Tabs>
<Box sx={{marginLeft:"auto"}}>
<Button variant="outlined" color="secondary">Login</Button>
<Button variant="outlined" color="secondary" sx={{marginLeft:"20px"}}>Sign in</Button>
</Box>
</>

    )}



  

        </Toolbar>
       
    </AppBar>
    </>
  )
}

export default Navbar