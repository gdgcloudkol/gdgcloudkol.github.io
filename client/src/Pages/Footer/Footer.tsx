import { Grid, Stack, Button, Typography, Container,
         IconButton, Divider } from '@mui/material'
import { Box } from '@mui/system'
import GdgIcon from '../../img/gdglogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import useMediaQuery from '@mui/material/useMediaQuery';

function Footer() {
    const matches = useMediaQuery('(max-width:650px)')
  return (
    <Container sx={{ textAlign: 'center', justifyContent: 'center',
                     marginTop: 10}}>
    <Grid container justifyContent="center" mb={2} ml={matches? 2 : 0}>
        <Grid item md={4} xs={12} alignItems='center' justifyContent="center" sx={{textAlign: 'center'}}
         mb={matches? 2 : 0}>
            <Stack spacing={1} direction='column' sx={{textAlign: 'left'}}>
                <Typography variant='h6'>About</Typography>
                <Typography color='inherit'>GDG Cloud Kolkata</Typography>
                <Typography color='inherit'>Google Developer Groups</Typography>
                <Typography color='inherit'>Women Techmakers</Typography>
                <Typography color='inherit'>Google Developer Student Clubs</Typography>
            </Stack>
        </Grid>
        <Grid item xs={12} md={4} alignItems='center' justifyContent="center"  sx={{textAlign: 'center'}}
          mb={matches? 2 : 0}>
            <Stack spacing={1} direction='column' sx={{textAlign: 'left'}}>
                <Typography variant='h6' >Resources</Typography>
                <Typography color='inherit'>Terms and Condition</Typography>
                <Typography color='inherit'>Telegram Group</Typography>
            </Stack>
        </Grid>
        <Grid item alignItems='center' justifyContent="center" xs={12} md={3} sx={{textAlign: 'center'}}
           mb={matches? 2 : 0}>
            <Stack spacing={1} direction='column' sx={{textAlign: 'left'}}>
                <Typography variant='h6' >Contact</Typography>
                <Typography color='inherit'>gdgcloudkol@gmail.com</Typography>
            </Stack>
        </Grid>
    </Grid>
    <Divider />
    <Grid mb={2} container alignItems='center' justifyContent="center">
        <Grid item md={3}>
            <Stack direction='row'>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <img src={GdgIcon}></img>
                </IconButton>
                <Typography variant='h6' mt={0.5}>
                    GDG Cloud Kolkata 
                </Typography>
            </Stack>
        </Grid>
        <Grid item md={5}>
        <div>
            <Typography mt={1}>&copy; Gdg Cloud Kolkata 2022</Typography>
        </div>
        </Grid>
        <Grid item >
            <Stack mt={1} direction='row' spacing={2} sx={{textAlign: 'center'}}>
                <Typography> Follow Us On: </Typography>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <GitHubIcon />
            </Stack>
        </Grid>
    </Grid>
    
    </Container>
  )
}

export default Footer