import React from 'react';
import Topbar from "./components/navbar/Topbar";
import Sidebar1 from "./components/navbar/Sidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import EditProfile from './components/EditProfile';

import Users from './components/Users';
import {Routes,Route} from 'react-router-dom'


import Report from './components/Report';
import Profile from './components/Profile';


const DDashboard = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{
            display: 'flex',
          }}
        >
          <Sidebar1 />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
            }}
          >
           

            <main className="content" style={{ flex: 1 }}>
            <Topbar />
            
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/editprofile" element={<EditProfile />} />
                <Route path="/users" element={<Users />} />
                {/* <Route path="/enquery" element={<Enquery />} /> */}
                {/* <Route path="/ambulance" element={<Ambulance />} /> */}
                <Route path="/report/:id" element={<Report />} />
                {/* <Route path="/AddDoctor" element={< AddDoctor/>} /> */}

                
              </Routes>
             
            </main>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default DDashboard;
