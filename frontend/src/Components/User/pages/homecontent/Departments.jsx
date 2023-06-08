import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Departments({item}) {
  return (
    <Card sx={{ minWidth: 100,minHeight:100}}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text.primary" gutterBottom>
         {item.name}
        </Typography>
        
        
      
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}