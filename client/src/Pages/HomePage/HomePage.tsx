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
          <Grid item md={5} component='div' >
            <Box 
             component='img'
             src={heroImage}
            />
          </Grid>
          <Grid item md={5} sx={{ alignItems: 'center'}}>
            <Typography variant='h3'>We will Help You to Grow your Skills and knowledge</Typography>
            <Typography mt={3}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
              <Button sx={{mt: 2}} color='primary' variant='contained'>Become a member</Button>
              {/* <Button color='primary' variant='outlined'>Become a member</Button> */}
          
          </Grid>
        </Grid>
        <Box sx={{justifyContent: 'center', alignItems: 'center'}} m={2}>
          <Grid container className='heroContainer'>
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