import { Grid, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'

function Personinfo({LableStyled,formData,handleOnChange,isSubmited}) {
    
  return (
    <Grid container spacing={2} alignItems="center">
    <Grid item xs={12} sm={6}>
        <LableStyled required>First Name</LableStyled>
        <TextField
            fullWidth
            variant="outlined"
            name="firstName"
            required
            type='text'
        value={formData.firstName}
        onChange={handleOnChange}
        sx={{backgroundColor:formData.firstName=="" && isSubmited==0 ?'#fce4e4':'transparent'}}
        />
        
    </Grid>
    <Grid item xs={12} sm={6}>
        <LableStyled required>Last Name</LableStyled>
        <TextField
            fullWidth
            variant="outlined"
            name="lastName"
            type='text'
            required
        value={formData.lastName}
        onChange={handleOnChange}
        sx={{backgroundColor:formData.lastName=="" && isSubmited==0 ?'#fce4e4':'transparent'}}

        />
    </Grid>
    <Grid item xs={12}>
        <LableStyled required>Email Address</LableStyled>
        <TextField
            fullWidth
            variant="outlined"
            name="email"
            type='email'
            required
        value={formData.email}
        onChange={handleOnChange}
        sx={{backgroundColor:formData.email=="" && isSubmited==0 ?'#fce4e4':'transparent'}}
        />
    </Grid>
    <Grid item xs={12}>
        <LableStyled required>Phone Number</LableStyled>
        <TextField
            fullWidth
            variant="outlined"
            name="phoneNum"
            type='number'
            required
        value={formData.phoneNum}
        onChange={handleOnChange}
        sx={{backgroundColor:formData.phoneNum=="" && isSubmited==0 ?'#fce4e4':'transparent'}}
        />
    </Grid>
    <Grid item xs={12}>
        <LableStyled required>Where are you from</LableStyled>
        <TextField
            fullWidth
            variant="outlined"
            name="location"
            type='text'
            required
        value={formData.location}
        onChange={handleOnChange}
        sx={{backgroundColor:formData.location=="" && isSubmited==0 ?'#fce4e4':'transparent'}}
        />
    </Grid>
</Grid>

  )
}

export default Personinfo