import { Button, Container, Grid, Typography } from '@mui/material'
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
            <Typography variant='h3'><b>We Help You</b> to Grow your Skills and knowledge</Typography>
            <Typography mt={3}>
            When you join a Google Developer Group, you'll have the opportunity to learn new skills in a variety of formats.
             The community prides itself on being an inclusive environment where everyone and anyone interested
              in tech—from beginner developers to experienced professionals—all are welcome to join.
            </Typography>
              <Button href='https://gdg.community.dev/gdg-cloud-kolkata/' sx={{mt: 2}} color='primary' variant='contained'>Become a member</Button>
              {/* <Button color='primary' variant='outlined'>Become a member</Button> */}
          
          </Grid>
        </Grid>
        <Container sx={{marginTop: 4}} className='heroContainer'>
          <Grid container>
            <Grid item xs={12} md={6} mt={10}>
              <Typography variant='h3'><b> Make Stronger Cloud Community </b></Typography>
              <Typography mt={3}>
              The place for cloud developers and architects to come together to learn,
               discuss and explore the latest advances in cloud technologies.
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