import React from 'react'
import { HelpOutlineOutlined, AddOutlined, AddToDriveOutlined, Google, Favorite } from '@mui/icons-material';
import { Box, Button, Grid, Typography, styled } from '@mui/material';
function Addacounts({handleSubmit}) {
    const StyleGrid = styled(Grid)({
        justifyContent: 'center',
        display: 'flex'
    })

    const Stylediv = styled('div')({
        paddingTop:'20px',
        paddingBottom:'20px',
        paddingLeft:'10px',
        paddingRight:'10px',
        borderRadius: '50%',
        backgroundColor: '#e6f3ff',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    })
    return (
        <Box>
           <Grid container spacing={2} alignItems="center" marginTop={5}>
            <StyleGrid item xs={3} width='400px'>
                <Stylediv >
                    <Grid container direction="column" alignItems="center" spacing={1}>
                        <Grid item >
                            <Google color='action' />
                            <AddOutlined color='action' />
                        </Grid>
                        <Grid item color={'lightgray'}>
                            <span >I'm using Gmail</span>
                        </Grid>
                    </Grid>
                </Stylediv>
            </StyleGrid>
            <StyleGrid item xs={3}>
                <Stylediv disabled >
                    <Grid container direction="column" alignItems="center" spacing={1}>
                        <Grid item>
                            <Favorite color='action'  />
                        </Grid>
                        <Grid item  color={'lightgray'}>
                            <span>I'm using Office</span>
                        </Grid>
                    </Grid>
                </Stylediv>
            </StyleGrid>
            <StyleGrid item xs={3}>
                <Stylediv disabled >
                    <Grid container direction="column" alignItems="center" spacing={1}>
                        <Grid item>
                            <AddToDriveOutlined color='action'  />
                        </Grid>
                        <Grid item  color={'lightgray'}>
                            <span>I'm using Drive</span>
                        </Grid>
                    </Grid>
                </Stylediv>
            </StyleGrid>
            <StyleGrid item xs={3}>
                <Stylediv disabled >
                    <Grid container direction="column" alignItems="center" spacing={1}>
                        <Grid item>
                            <HelpOutlineOutlined color='action'  />
                        </Grid>
                        <Grid item  color={'lightgray'}>
                            <span>Anthore Service</span>
                        </Grid>
                    </Grid>
                </Stylediv>
            </StyleGrid>

        </Grid>
        <Box  marginTop={'50px'}>
               <Typography color={'lightgray'} align='center'>or if want skip this entirely and setup it later</Typography>
               <Typography color={'primary'}   paddingTop={'10px'} align='center'> <Button  variant='text' onClick={handleSubmit}>Skip step</Button> </Typography>
        </Box>
        </Box>
    )
}

export default Addacounts