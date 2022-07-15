import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Navbar from '../../Components/Navbar/Navbar'
import heroImage from '../../img/heroImage.png'
import heroImage2 from '../../img/heroImage2.png'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <Container sx={{justifyContent: 'center', alignItems: 'center'}}>
       <Navbar />
      </Container>
        <Grid container mt={8} spacing={2} sx={{justifyContent: 'center', alignItems: 'center'}}>
          <Grid xs={12} item md={5} component='div' >
            <img 
            //  component='img'
            className='heroImage'
             src={heroImage}
            />
          </Grid>
          <Grid item xs={12} md={5} sx={{ alignItems: 'center'}}>
            <Typography variant='h3'>We will Help You to Grow your Skills and knowledge</Typography>
            <Typography mt={3}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
              <Button sx={{mt: 2}} color='primary' variant='contained'>Become a member</Button>
              {/* <Button color='primary' variant='outlined'>Become a member</Button> */}
          
          </Grid>
        </Grid>
        <Container sx={{marginTop: 4}} className='heroContainer'>
          <Grid container >
            <Grid item xs={12} md={6} mt={10}>
              <Typography variant='h3'> Make Stronger Cloud Community</Typography>
              <Typography mt={3}>
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} component='div'>
            <img
             className='heroImage'
             src={heroImage2}
            />
            </Grid>
          </Grid>
        </Container> 
    </>
  )
}

export default HomePage