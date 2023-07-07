import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { AppsOutlined, ViewCompact, FitnessCenter,ArrowRight } from '@mui/icons-material';


function AdCard() {
    return (
        <Card sx={{ backgroundColor: '#3DA2FF', marginTop: 4, marginLeft: 2, marginRight: 2 }}>
            <Box display={'flex'} justifyContent={'space-between'} >
                <AppsOutlined color='disabled' />
                <FitnessCenter fontSize='large' />
            </Box>
            <Typography color={'white'} sx={{ marginLeft: 1.5 }} width={'60%'} fontSize={13} >
                Start Plan Your Workout
            </Typography>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography color={'white'} fontSize={13} 
                sx={{  marginLeft: 1.5,}}
                 >
                    Check schedule
                </Typography>
                <ArrowRight color='primary'/>
                <ViewCompact color='primary' sx={{marginRight:1}}/>
            </Box>

        </Card>
    )
}

export default AdCard