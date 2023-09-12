import React, { useState } from "react";
import { Box, IconButton, Menu, useTheme, MenuItem, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext} from "../../theme";
import { useNavigate } from "react-router-dom";

import { LightModeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";

import { PersonOutline } from "@mui/icons-material";


const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const navigate=useNavigate()
  
  const colorMode = useContext(ColorModeContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
      <Typography as="h4">
        
      </Typography>

      <Box sx={{ display: "flex" }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>

        <IconButton onClick={handleClick}>
          <PersonOutline />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              localStorage.clear();
              navigate("/")
              
              window.location.reload("true");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
