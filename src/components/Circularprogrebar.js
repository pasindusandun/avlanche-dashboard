import { Box, Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparator from './RadialSeparator';

function Circularprogrebar() {
  return (
    <Grid item xs={12} sm={12} md={3} alignItems="stretch" >
      <Card sx={{ padding: 2 }}>
      <Typography variant='h1' fontSize={25} textAlign={'start'} marginBottom={3}>Workout Progress</Typography>
        <CircularProgressbarWithChildren
       
        value={81}
        text={`${81}%`}
        strokeWidth={10}
        circleRatio={0.75}
        styles={buildStyles({
          strokeLinecap: "butt",
          trailColor: "#eee",
          textColor: "black",
          rotation: 1 / 2 + 1 / 8,
          pathColor: "#6bc41c",
        })}

      >
          <RadialSeparator
          count={70}
          style={{
            background: "#fff",
            width: "2px",
            height: `${10}%`
          }}
        />
      </CircularProgressbarWithChildren>
      <Typography variant='body1' color={'GrayText'} textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur</Typography>
      <Box textAlign={'center'} marginTop={3}  >
      <Button variant="outlined" href="#outlined-buttons" color='secondary'>
  Set Target
</Button>
      </Box>
      
        </Card></Grid>
  )
}

export default Circularprogrebar