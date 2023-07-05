import React from 'react'
import { Box, Grid, TextField, Typography, styled } from '@mui/material'
function Businesshours({ formData, handleOnChange,isSubmited }) {
    const LableTypoStyled = styled(Typography)({
        marginBottom: '5px',
        marginTop: '10px'
    })
    const days = ["Monday", "Tuesday", "wendnesday", "Thursday", "Friday"]
    return (

        <Box>
            {days.map((day) => {
                const startTime = day + "startTime"
                const endTime = day + "endTime"
                return (
                    <Grid container spacing={2} alignItems="center" marginTop={'20px'} key={day} >
                        <Grid item xs={4}>
                            <LableTypoStyled required>{day}</LableTypoStyled>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                name={startTime}
                                type='time'
                                required
                                value={formData[startTime]}
                                onChange={handleOnChange}
                                sx={{backgroundColor:formData[startTime]=="" && isSubmited==2 ?'#fce4e4':'transparent'}}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                name={endTime}
                                type='time'
                                required
                                value={formData[endTime]}
                                onChange={handleOnChange}
                                sx={{backgroundColor:formData[endTime]=="" && isSubmited==2 ?'#fce4e4':'transparent'}}
                            />
                        </Grid>
                    </Grid>
                )
            })}
        </Box>
    )
}

export default Businesshours