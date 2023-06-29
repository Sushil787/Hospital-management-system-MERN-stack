import React from 'react';
import Topbar from "./components/navbar/Topbar";
import Sidebar1 from "./components/navbar/Sidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Doctors from './components/Doctors';
import Users from './components/Users';
import {Routes,Route} from 'react-router-dom'

const Dashboard = () => {
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
                <Route path="/" element={<Doctors />} />
                <Route path="/users" element={<Users />} />
              </Routes>
             
            </main>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Dashboard;
