import { Card, CircularProgress, Fab, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LocalFireDepartmentOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';



function Detailcard() {
    const [healthDetail, sethealthDetail] = useState({progress: {
        details:0 , text: ""
      },
      calories: {
        details: 0, text: ""
      },
      Diet: {
        details: 0, text: ""
      },
      sleeping: {
        details: 0, text: ""
      },
      members: {
        details: 0, text: ""
      }});

    const healthDetails =useSelector(state=>state.HealthStore.healthDetails)
    
    useEffect(() => {
        sethealthDetail({...healthDetails})
    }, [healthDetails])


    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={4} lg={2.4}
            >
                <Card sx={{ padding: 3 }} >
                    <Fab
                        sx={{
                            backgroundColor: '#6CC51D',
                            '&:hover': {
                                backgroundColor: '#6CC51D',
                            },
                        }}
                    >
                        <LocalFireDepartmentOutlined fontSize='large' sx={{ color: '#ffffff' }} />
                        <CircularProgress
                            variant='determinate'
                            value={healthDetail.progress.details}
                            size={68}
                            sx={{
                                position: 'absolute',
                                top: -6,
                                left: -6,
                                zIndex: 4,
                                color: '#c4fc84'
                            }}
                        />
                    </Fab>
                    \
                    <Typography variant='h1' fontSize={30} marginTop={2} >

                        {healthDetail.progress.details + "%"}
                    </Typography>
                    <Typography variant='subtitle2' color={'gray'} >

                        {healthDetail.progress.text}
                    </Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.4} >
                <Card sx={{ padding: 3 }} >
                    <Fab
                        sx={{
                            backgroundColor: '#ff0080',
                            '&:hover': {
                                backgroundColor: '#ff0080',
                            },

                        }}
                    >
                        <LocalFireDepartmentOutlined fontSize='large' sx={{ color: '#ffffff' }} />
                        <CircularProgress
                            variant='determinate'
                            color='primary'
                            value={42}
                            size={68}
                            sx={{
                                position: 'absolute',
                                top: -6,
                                left: -6,
                                zIndex: 4,
                                color: '#ff99ce'
                            }}
                        />
                    </Fab>
                    <Typography variant='h1' fontSize={30} marginTop={2} >{healthDetail.calories.details + "Cal"}</Typography>
                    <Typography variant='subtitle2' color={'gray'} >{healthDetail.calories.text}</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.4} >
                <Card sx={{ padding: 3 }} >
                    <Fab
                        sx={{
                            backgroundColor: '#fc9434',
                            '&:hover': {
                                backgroundColor: '#fc9434',
                            },
                        }}
                    >
                        <LocalFireDepartmentOutlined fontSize='large' sx={{ color: '#ffffff' }} />
                        <CircularProgress
                            variant='determinate'
                            color='primary'
                            value={65}
                            size={68}
                            sx={{
                                position: 'absolute',
                                top: -6,
                                left: -6,
                                zIndex: 4,
                                color: '#fcd4ac'
                            }}
                        />
                    </Fab>
                    <Typography variant='h1' fontSize={30} marginTop={2} >{healthDetail.Diet.details + " Left"}</Typography>
                    <Typography variant='subtitle2' color={'gray'} >{healthDetail.Diet.text}</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.4} >
                <Card sx={{ padding: 3 }} >
                    <Fab
                        sx={{
                            backgroundColor: '#1ca4c4',
                            '&:hover': {
                                backgroundColor: '#1ca4c4',
                            },
                        }}
                    >
                        <LocalFireDepartmentOutlined fontSize='large' sx={{ color: '#ffffff' }} />
                        <CircularProgress
                            variant='determinate'
                            color='primary'
                            value={100}
                            size={68}
                            sx={{
                                position: 'absolute',
                                top: -6,
                                left: -6,
                                zIndex: 4,
                                color: '#e4fcfc'
                            }}
                        />
                    </Fab>
                    <Typography variant='h1' fontSize={30} marginTop={2} >{healthDetail.sleeping.details + " Hours"}</Typography>
                    <Typography variant='subtitle2' color={'gray'} >{healthDetail.sleeping.text}</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.4} >
                <Card sx={{ padding: 3 }} >
                    <Fab
                        sx={{
                            backgroundColor: '#34d4bc',
                            '&:hover': {
                                backgroundColor: '#34d4bc',
                            },
                        }}
                    >
                        <PersonOutlineOutlined fontSize='large' sx={{ color: '#ffffff' }} />
                        <CircularProgress
                            variant='determinate'
                            value={100}
                            size={68}
                            sx={{
                                position: 'absolute',
                                top: -6,
                                left: -6,
                                zIndex: 4,
                                color: '#e4fcfc'
                            }}
                        />
                    </Fab>
                    <Typography variant='h1' fontSize={30} marginTop={2} >{healthDetail.members.details + " Person"}</Typography>
                    <Typography variant='subtitle2' color={'gray'} >{healthDetail.members.text}</Typography>
                </Card>
            </Grid>
        </Grid>

    )
}

export default Detailcard