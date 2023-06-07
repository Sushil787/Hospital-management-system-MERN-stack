import {Grid,Box} from '@mui/material'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer'

import './App.css';
import LoginForm from './Components/Login';
import SignUpForm from './Components/Signin';
import Screen from './Components/Homepage'
import Contact from './Components/Contact';
import Services from './Components/Services';
import About from './Components/About/About'
import Doctor from './Components/Doctor';
import PrivateRoutes from './Privateroutes';
import Form from './Components/Form';
import { useSelector } from 'react-redux';


function App() {
 
  
  
  return (
 <Grid Container  sx={{marginTop:'0px',gap:0,display:'flex' ,flexDirection:'column'}}>
  <Grid item>
  <Navbar/>
  </Grid>
  <Grid   style={{flexGrow:1 ,minHeight:'80vh'}} item>
    <Box >
      
        <Routes>
     
        <Route path="/" Component={Screen}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/SignUp' Component={SignUpForm}/>
        <Route path='/services' Component={Services}/>
        <Route path='/about' Component={About}/>
        <Route path='/doctor' Component={Doctor}/>
        
        <Route path='/login' Component={LoginForm}/>
        <Route Component={PrivateRoutes }>
  
          <Route path='/form/:id' Component={Form}/>
        </Route>
       </Routes>
      
     
    </Box>
  </Grid>
  <Grid item>
   <Footer/>
  </Grid>

 </Grid>
  )
 
}

export default App;
