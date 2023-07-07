import { Box, Button, Card, CardHeader, Divider, Fab, Grid, InputLabel, Step, StepLabel, Stepper, TextField, Typography, styled, withStyles} from '@mui/material'
import React, { useState } from 'react'
import Personinfo from './Personinfo';
import Companyinfo from './Companyinfo';
import Businesshours from './Businesshours';
import Addacounts from './Addacounts';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/UserDetailsStore';

function Userdetailsform() {
    const dispatch=useDispatch();
    const navigator = useNavigate();
    const customPageTheme = createTheme({
        palette: {
          primary: {
            main: '#6CC51D', 
          },
        },
      });
    const LableStyled = styled(InputLabel)({
        marginBottom: '5px',
        marginTop: '10px',
    })
    const steps = ['Personal Info', 'Company Info', 'Business Hours',""]
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: 0,
        location: '',
        companyName: "",
        companyEmail: "",
        companyPhoneNum: "",
        position: "",
        MondaystartTime:"",
        MondayendTime:"",
        TuesdaystartTime:"",
        TuesdayendTime:"", wendnesdaystartTime:"",wendnesdayendTime:"", ThursdaystartTime:"",ThursdayendTime:"", FridaystartTime:"",FridayendTime:""
    });
    const handleOnChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData)

    }
    const [isSubmited, setIsSubmited] = useState(-1);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmited(activeStep)
        if (activeStep == 3) {
            dispatch(addUser(formData))
            navigator('/dashboard');
        }
        else {
            setActiveStep(activeStep + 1);
        }
        console.log(formData)
    }
    const handlePrevious = (e) => {
        e.preventDefault();
        if (activeStep != 0) {
            setActiveStep(activeStep - 1);
        }
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
            <Card sx={{ width: '80%', paddingLeft: 5, paddingRight: 5 }} >

                <Typography sx={{ marginTop: 2, marginBottom: 2 }} >Form Step</Typography>
                <Divider sx={{ marginBottom: '15px' }} />
                <ThemeProvider theme={customPageTheme}>
                <Stepper activeStep={activeStep} alternativeLabel >
                    {steps.map((label, index) => {
                        
                      
                       return ( <Step key={label} >
                            <StepLabel 
                            >{label}</StepLabel>
                        </Step>)
                    })}
                </Stepper>
                </ThemeProvider>
               
                <Box>
                    <form
                        onSubmit={handleSubmit}
                    >
                        {activeStep == 0 ? <Personinfo LableStyled={LableStyled} isSubmited={isSubmited} formData={formData} handleOnChange={handleOnChange} /> : activeStep == 1 ? <Companyinfo LableStyled={LableStyled} isSubmited={isSubmited} formData={formData} handleOnChange={handleOnChange} /> : activeStep == 2 ? <Businesshours  isSubmited={isSubmited} LableStyled={LableStyled} formData={formData} handleOnChange={handleOnChange} /> : (<Addacounts isSubmited={isSubmited} handleSubmit={handleSubmit}/>)}
                        <Box sx={{ display: 'flex', justifyContent: 'end' }} gap={2} marginTop={4} marginBottom={4}>
                            <Button variant="contained" color={activeStep == 0 ? "grey" : "secondary"} onClick={handlePrevious}>
                                previous
                            </Button>
                            <Button type="submit" variant="contained" color={"secondary"} onClick={()=>{setIsSubmited(activeStep)}}  >
                                {activeStep == 3 ? "Finish" : "Next"}
                            </Button>

                        </Box>

                    </form>
                </Box>

            </Card>
        </Box>

    )
}

export default Userdetailsform