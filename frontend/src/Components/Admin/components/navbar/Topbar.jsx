import React from 'react'
import {Box, IconButton, useTheme} from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext,tokens } from '../../theme'

import { LightModeOutlined } from '@mui/icons-material'
import { DarkModeOutlined } from '@mui/icons-material'

import { PersonOutline } from '@mui/icons-material'
import logo from '../../../User/assets/logo.png'

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', p:2}}>
    <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
            sx={{
                backgroundColor:"white",
                '&:hover': {
                    backgroundColor: 'white', // Specify the same background color on hover
                  },
            }}
            
          
          >
            <img src={logo} alt="logo" />
          </IconButton>

        <Box sx={{display:"flex"}}>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ?(
                 <DarkModeOutlined />) : (
                 <LightModeOutlined />)}
                 </IconButton>

          

           

            <IconButton onClick={()=>{localStorage.clear()
            window.location.reload("true")}}>
                <PersonOutline/>
            </IconButton>

        </Box>

    </Box>

  )
}

export default Topbar


