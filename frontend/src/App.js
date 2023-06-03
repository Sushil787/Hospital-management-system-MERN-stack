import {Grid,Box} from '@mui/material'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer'

import './App.css';
import LoginForm from './Components/Login';
import SignUpForm from './Components/Signin';
import Screen from './Components/Homepage'
import Contact from './Components/Contact';


function App() {
  return (
 <Grid Container  sx={{marginTop:'0px',gap:0}}>
  <Grid item>
  <Navbar/>
  </Grid>
  <Grid item>
    <Box sx={{maxHeight:'80vh'}}>
     <Routes>
      <Route path="/" Component={Screen}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/login' Component={LoginForm}/>
      <Route path='/SignUp' Component={SignUpForm}/>
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
