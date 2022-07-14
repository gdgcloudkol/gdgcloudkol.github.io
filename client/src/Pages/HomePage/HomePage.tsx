import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from '../../Components/Navbar'
import heroImage from '../../img/heroImage.png'
import heroImage2 from '../../img/heroImage2.png'
import './HomePage.css'

function HomePage() {
  return (
    // <Container>
    <>
      <Navbar />
        <Grid container mt={2} spacing={2}>
          <Grid item md={5} component='div' sx={{alignContent: 'left', alignItems: 'left'}}>
            <Box 
             component='img'
             src={heroImage}
            />
          </Grid>
          <Grid item md={5} sx={{ justifyContent: 'center'}}>
            <Typography variant='h3'>WE will Help You to Grow your Skills and knowledge</Typography>
            <Typography mt={3}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
          </Grid>
        </Grid>
        <Box className='heroContainer' m={2}>
          <Grid container>
            <Grid item xs={6} mt={10}>
              <Typography variant='h3'> Make Stronger Cloud Community</Typography>
              <Typography mt={3}>
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Typography>
            </Grid>
            <Grid item md={5} component='div'>
            <Box 
             component='img'
             src={heroImage2}
            />
          </Grid>

          </Grid>
        </Box> 
    </>
  )
}

export default HomePage