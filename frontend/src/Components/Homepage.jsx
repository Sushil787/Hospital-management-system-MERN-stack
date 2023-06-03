import React from 'react'
import Screen from '../homecontent/Slider'
import {Grid} from '@mui/material'

const Homepage = () => {
  return (
    <>
    <Grid container>
      <Grid item xs={12}>
      <Screen/>
      </Grid>

    </Grid>
    </>
    
  )
}

export default Homepage