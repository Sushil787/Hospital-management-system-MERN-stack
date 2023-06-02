import {Grid,Box} from '@mui/material'
import Navbar from './Components/Navbar'

import './App.css';


function App() {
  return (
 <Grid Container>
  <Grid item>
  <Navbar/>
  </Grid>
  <Grid item>
    <Box>
     body
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
