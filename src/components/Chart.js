import { Box, Card, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Line } from "react-chartjs-2";
import { DirectionsRun, SelfImprovement, DirectionsBike } from '@mui/icons-material';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend } from "chart.js";
import Circularprogrebar from '../components/Circularprogrebar';


ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement, Legend
)

function Chart() {
    const [chartFilter, setChartFilter] = useState(1)
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr','May','jun','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81,12, 36, 68, 120,12, 36, 68, 120],
            fill: false,
            borderColor: '#fc9434',
            backgroundColor: '#fc9434',
            pointBackgroundColor: '#ffffff'
        }, {
            label: 'My First Dataset',
            data: [35, 63, 110, 76,65, 59, 80, 81,12, 36, 68, 120],
            fill: false,
            borderColor: '#1ca4c4',
            backgroundColor: '#1ca4c4',
        }, {
            label: 'My First Dataset',
            data: [12, 36, 68, 120,35, 63, 110, 76,65, 59, 80, 81],
            fill: false,
            borderColor: '#c844d4',
            backgroundColor: '#c844d4',
    
        },]
    };
    const options = {
        plugins: {
            legend: false
        },
    }
    const handleChange = (e) => {
        setChartFilter(e.target.value);
    }
    return (
        <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={12} md={9} alignItems="stretch">
                <Card sx={{ padding: 2 }} >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection:{xs:'column',sm:'column',md:'row'} }} gap={{xs:2,sm:2,md:3}} >
                        <Box alignItems={'center'} >
                            <Typography variant='h1' fontSize={25} textAlign={{xs:'center',sm:'center',md:'end'}}>Workout Statistic</Typography>
                            <Typography variant='body1' color={'GrayText'} textAlign={{xs:'center',sm:'center',md:'end'}}>Lorem ipsum dolor sit amet, consectetur</Typography>
                        </Box>
                        <Box display={'flex'}>
                            <Box>
                                <DirectionsRun sx={{ color: '#fc9434' }} fontSize='large' />
                            </Box>
                            <Box>
                                <Typography variant='h6' fontSize={20}>45%</Typography>
                                <Typography>Running</Typography>
                            </Box>
                        </Box>
                        <Box display={'flex'} >
                            <Box>
                                <DirectionsBike sx={{ color: '#1ca4c4' }} fontSize='large' />
                            </Box>
                            <Box>
                                <Typography variant='h6' fontSize={20}>27%</Typography>
                                <Typography>Cycling</Typography>
                            </Box>

                        </Box>
                        <Box display={'flex'} >
                            <Box>
                                <SelfImprovement sx={{ color: '#c844d4' }} fontSize='large' />
                            </Box>
                            <Box>
                                <Typography variant='h6' fontSize={20}>86%</Typography>
                                <Typography>Yoga</Typography>
                            </Box>

                        </Box>
                        <Box alignItems={'center'}>
                            <InputLabel id="demo-simple-select-label" sx={{ borderRadius: '100px', borderColor: 'transparent' }} ></InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={chartFilter}
                                onChange={(e) => handleChange(e)}
                                sx={{ borderRadius: 3, borderColor: 'transparent' }}
                            >
                                <MenuItem value={1}>Weekly</MenuItem>
                                <MenuItem value={2}>Monthly</MenuItem>
                            </Select>
                        </Box>


                    </Box>
                    <Box  sx={{ width: '`100%' }} marginTop={5}>
                        <Line
                            data={data}
                            options={options}
                        >

                        </Line>
                    </Box>

                </Card>
            </Grid>
            <Circularprogrebar />
        </Grid>

    )
}

export default Chart