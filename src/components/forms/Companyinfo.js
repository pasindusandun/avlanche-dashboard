import { Grid, TextField, Typography, styled } from '@mui/material'
import React from 'react'

function Companyinfo({ LableStyled, formData, handleOnChange,isSubmited }) {

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
                <LableStyled required>Company Name</LableStyled>
                <TextField
                    fullWidth
                    variant="outlined"
                    name="companyName"
                    required
                    type='text'
                    value={formData.companyName}
                    onChange={handleOnChange}
                    sx={{backgroundColor:formData.companyName=="" && isSubmited==1 ?'#fce4e4':'transparent'}}
                />
            </Grid>
            <Grid item xs={12}>
                <LableStyled required>Company Email Address</LableStyled>
                <TextField
                    fullWidth
                    variant="outlined"
                    name="companyEmail"
                    type='email'
                    required
                    value={formData.companyEmail}
                    onChange={handleOnChange}
                    sx={{backgroundColor:formData.companyEmail=="" && isSubmited==1 ?'#fce4e4':'transparent'}}
                />
            </Grid>
            <Grid item xs={12}>
                <LableStyled required>Company Phone Number</LableStyled>
                <TextField
                    fullWidth
                    variant="outlined"
                    name="companyPhoneNum"
                    type='number'
                    required
                    value={formData.companyPhoneNum}
                    onChange={handleOnChange}
                    sx={{backgroundColor:formData.companyPhoneNum=="" && isSubmited==1 ?'#fce4e4':'transparent'}}
                />
            </Grid>
            <Grid item xs={12}>
                <LableStyled required>You Position in Company</LableStyled>
                <TextField
                    fullWidth
                    variant="outlined"
                    name="position"
                    type='text'
                    required
                    value={formData.position}
                    onChange={handleOnChange}
                    sx={{backgroundColor:formData.position=="" && isSubmited==1 ?'#fce4e4':'transparent'}}
                />
            </Grid>
        </Grid>
    )
}

export default Companyinfo