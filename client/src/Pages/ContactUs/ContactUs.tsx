import React from 'react'
import { Box, Container } from '@mui/system'
import Grid from '@mui/material/Grid'
import assitant from '../../img/assistant.png'
import icon from '../../img/icon.svg'
import './ContactUs.css'


function ContactUs() {
  return (
    <Container>
        <h1 className='heading'>Our<span> Contact</span></h1>
        <Grid container>
            <Grid item sm={5}>
                <h2>Do You have any query ? Our Support Team is ready to help you</h2>
                <p className='description'>
                    Hi, I’m  GDG Kolkata cloud community support  executive.
                    If you have any query ,please mail me on the given email id.
                    Hi, I’m  GDG Kolkata cloud community support  executive.
                    If you have any query ,please mail me on the given email id.
                </p>
                <Box className="email">
                    <Box >
                        <img className="atherate" src={icon} alt="@ symbol" />
                    </Box>
                    <Box sx={{textAlign: 'left'}}>
                     {/* <div> */}
                        <h4>Email</h4>
                        <p>gdgcloudkol@gmail.com</p>
                     {/* </div> */}
                    </Box>
                </Box>

            </Grid>
            <Grid item sm={4}>
                <Box m={2} >
                    <img className='assistantImg' src={assitant}></img>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ContactUs
