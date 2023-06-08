

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Drawor from "./Drawor";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/Loginslice";

import logo from "../assets/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.login);

  const theme = useTheme();
  const [value, setValue] = useState();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const item = localStorage.getItem("jwt");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    dispatch(logout())
    navigate("/");
  };

  return (
    <>
      <AppBar sx={{ background: "#edf0ed" }} position="relative">
        <Toolbar>
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

          {isMatch ? (
            <Drawor />
          ) : (
            <>
              <Tabs
                value={value}
                onChange={(e, value) => setValue(value)}
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                  ml: "50px",
                  flexGrow: 1,
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Tab
                  label="Home"
                  component={NavLink}
                  to="/"
                  exact
                  activeClassName="Mui-selected"
                />

                <Tab label="Contact us" component={NavLink} to="/contact" />
                <Tab label="About us" component={NavLink} to="/about" />
                <Tab label="Doctors" component={NavLink} to="/doctor" />
                <Tab label="Our Services" component={NavLink} to="/services" />
              </Tabs>
              <Box sx={{ marginLeft: "auto" }}>
                {item ? (
                  <>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <Avatar />
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      color="secondary"
                      component={Link}
                      to="/Login"
                    >
                      Login
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ marginLeft: "20px" }}
                      component={Link}
                      to="/SignUp"
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
