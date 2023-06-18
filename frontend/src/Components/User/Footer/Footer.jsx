



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
import SendIcon from "@mui/icons-material/Send";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <AppBar position="static" sx={{
      backgroundColor:"black"
    }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="primary"
              component={Link}
              to="/"
              sx={{ width: "80px", height: "80px" }}
            >
              <img src={logo} alt="logo" sx={{ width: "100%", height: "auto" }} />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Box >
              <Typography variant="body2">About us</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. llo itaque esse ipsum nobis dolore minima?Lorem ipsum dolor sit, amet consectetur adipisicing elit. llo itaque esse ipsum nobis dolore minima?Lorem ipsum dolor sit, amet consectetur adipisicing elit. llo itaque esse ipsum nobis dolore minima?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Box gap={2}>
            <Typography variant="body2"> contact:+977 9840178262</Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
  <span>Email: </span>
  <Link href="mailto:niroj.satyal2000@gmail.com" color="inherit" sx={{ marginLeft: "4px" }}>
    niroj.satyal2000@gmail.com
  </Link>
</Typography>
</Box>
            <Paper
              component="form"
              sx={{ p: "2px 4px", display: "flex", alignItems: "center", marginTop: "1rem" }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Comment"
                inputProps={{ "aria-label": "comment" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SendIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
        <Divider sx={{ width: "100%", my: 2 }} />
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton color="secondary" sx={{ mx: 1 }}>
              <Facebook />
            </IconButton>
            <IconButton color="secondary" sx={{ mx: 1 }}>
              <Twitter />
            </IconButton>
            <IconButton color="secondary" sx={{ mx: 1 }}>
              <Instagram />
            </IconButton>
            <IconButton color="secondary" sx={{ mx: 1 }}>
              <Language />
            </IconButton>
          </Grid>
          
         
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
