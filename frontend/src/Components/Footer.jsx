import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Link,
  IconButton,
  Box,
 Paper,
 InputBase,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, Language, Instagram } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';
import logo from "./logo.png";

const Footer = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Grid
          container
          display="felx"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="primary"
              component={Link}
              to="/"
            >
              <img src={logo} alt="logo" />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={{marginRight:'30px'}}>
              <Typography>About us</Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid modi qui corporis consequuntur id illo fugiat quo!
                Officia pariatur explicabo, at, veniam magnam illo itaque esse
                ipsum nobis dolore minima?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} margin={3} paddding={3}>
            <Typography>
                +977 9840178262
            </Typography>
           
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
     
      <InputBase
        sx={{ ml: 1,flex:1 }}
        placeholder="comment"
        inputProps={{ 'aria-label': 'comment' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SendIcon />
      </IconButton>
      
    </Paper>
              
            </Grid>
         
        </Grid>
      </Toolbar>
      <Divider />
     
    </AppBar>
  );
};

export default Footer;
