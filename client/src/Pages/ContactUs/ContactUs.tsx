import React from 'react'
import { Box, Container } from '@mui/system'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import assitant from '../../img/assistant.png'
import icon from '../../img/icon.svg'
import './ContactUs.css'


function ContactUs() {
  return (
    <Container>
        <h1 className='heading'>Our<span> Contact</span></h1>
        <Grid container  justifyContent='center' spacing={10}>
            <Grid item sm={5}>
                <h2>Do You have any query ? Our Support Team is ready to help you</h2>
                <p className='description'>
                    Hi, I’m  GDG Kolkata cloud community support  executive.
                    If you have any query ,please mail me on the given email id.
                    Hi, I’m  GDG Kolkata cloud community support  executive.
                    If you have any query ,please mail me on the given email id.
                </p>
                <Stack direction='row' className="email">
                    <Box mt={4} >
                        <img className="atherate" src={icon} alt="@ symbol" />
                    </Box>
                    <Box sx={{textAlign: 'left'}}>
                        <h4>Email</h4>
                        <p>gdgcloudkol@gmail.com</p>
                    </Box>
                </Stack>

            </Grid>
            <Grid item sm={4}>
                <Box justifyContent='center' alignItems='center'>
                    <img className='assistantImg' src={assitant}></img>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ContactUs
