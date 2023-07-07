import { Box, Button, Card, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparator from './RadialSeparator';
import { useSelector } from 'react-redux';

function Circularprogrebar() {
  const workoutProgressRedu= useSelector(state=>state.HealthStore.workoutProgress);
  const [workoutProgress, setWorkoutProgress] = useState(0)
  useEffect(() => {
    setWorkoutProgress(workoutProgressRedu)
  }, [workoutProgressRedu])
  
  return (
    <Grid item xs={8} sm={6} md={2} alignItems="stretch"  >
      <Card sx={{ padding: 2 }}>
      <Typography variant='h1' fontSize={25} textAlign={'start'} marginBottom={3}>Workout Progress</Typography>
        <CircularProgressbarWithChildren
       
        value={81}
        text={`${workoutProgress}%`}
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