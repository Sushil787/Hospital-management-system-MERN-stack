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
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
              <img
              style={{
                borderRadius: "60%",
                width: 100,
                height: 100,
              }}
                src={logo}
                alt="logo"
               
              />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Box>
              <Typography variant="body2">About us</Typography>
              <Typography variant="body2">
              we are dedicated to delivering exceptional healthcare services that cater to your physical, emotional, and mental well-being. As a leading healthcare institution, we have been serving our community for 10 years with unwavering commitment and a mission to promote health and healing.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            <Box gap={2}>
              <Typography variant="body2"> contact: +977-9862164447</Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <span>Email: </span>
                <Link
                  href="mailto:bastolaronak12@gmail.com"
                  color="inherit"
                  sx={{ marginLeft: "4px" }}
                >
                   bastolaronak12@gmail.com
                </Link>
              </Typography>
            </Box>
         
          </Grid>
        </Grid>
        <Divider sx={{ width: "100%", my: 2 }} />
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
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
