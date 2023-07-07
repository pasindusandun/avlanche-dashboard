import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { AppsOutlined, ViewCompact, FitnessCenter } from '@mui/icons-material';

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
            <Box display={'flex'} justifyContent={'space-between'}>
                <Typography color={'white'} fontSize={13} sx={{ marginTop: 2, marginLeft: 1.5,alignItems:"flex-start", }} >
                    Check schedule
                </Typography>
                <ViewCompact color='primary'/>
            </Box>

        </Card>
    )
}

export default AdCard