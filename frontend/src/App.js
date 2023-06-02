import {Grid,Box} from '@mui/material'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'

import './App.css';
import LoginForm from './Components/Login';
import SignUpForm from './Components/Signin';
import Home from './Components/Home'


function App() {
  return (
 <Grid Container>
  <Grid item>
  <Navbar/>
  </Grid>
  <Grid item>
    <Box sx={{maxHeight:'80vh', marginTop:'20px'}}>
     <Routes>
      <Route to="/" exact Component={Home}/>
      <Route path='/login' Component={LoginForm}/>
      <Route path='/SignUp' Component={SignUpForm}/>
     </Routes>
    </Box>
  </Grid>
  <Grid item>
    <Box>
    footer
    </Box>
  </Grid>

 </Grid>
  )
 
}

export default App;
