import{ React,  useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
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
  console.log(data);

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const item = localStorage.getItem("jwt");
  const is_admin = localStorage.getItem("is_admin");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelog = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <AppBar sx={{ background: "#edf0ed" ,position:"relative" }} >
        <Toolbar sx={{justifyContent:"space-between"}}>
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
              <List sx={{ display: "flex", flexDirection: "row", gap:"10px", color:"black" }}>
                <ListItem>
                  <ListItemButton component={Link} to="/" sx={{ textAlign: "center" }}>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component={Link}
                    to="/contact"
                    sx={{ textAlign: "center" }}
                  >
                    <ListItemText primary="Contact " />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component={Link}
                    to="/about"
                    sx={{ textAlign: "center" }}
                  >
                    <ListItemText primary="About " />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component={Link}
                    to="/doctor"
                    sx={{ textAlign: "center" }}
                  >
                    <ListItemText primary="Doctors" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component={Link}
                    to="/services"
                    sx={{ textAlign: "center" }}
                  >
                    <ListItemText primary="Services" />
                  </ListItemButton>
                </ListItem>
              </List>

              <Box sx={{ marginLeft: "auto" }}>
                {item && is_admin === "false" ? (
                  <>
                    <Tooltip title={localStorage.getItem("user")}>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <Avatar />
                      </Button>
                    </Tooltip>

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem as={NavLink} to="/cart">
                        Appotnment
                      </MenuItem>
                      <MenuItem onClick={handlelog}>Logout</MenuItem>
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
