import { Grid, Stack, Button, Typography, Container,
         IconButton, Divider } from '@mui/material'
import { Box } from '@mui/system'
import GdgIcon from '../../img/gdglogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <Container sx={{margin: 5, alignItems: 'center', textAlign: 'center'}}>
    <Grid container justifyContent="center" sx={{margin: 5}}>
        <Grid item md={3} sx={{textAlign: 'center'}}>
            <Stack direction='column' sx={{textAlign: 'left'}}>
                <Typography variant='h6'>Community</Typography>
                <Typography color='inherit'>Home</Typography>
                <Typography color='inherit'>Team</Typography>
                <Typography color='inherit'>About</Typography>
                <Typography color='inherit'>Contact</Typography>
            </Stack>
        </Grid>
        <Grid md={3} item sx={{textAlign: 'center'}}>
            <Stack direction='column' sx={{textAlign: 'left'}}>
                <Typography variant='h6' >AboutUs</Typography>
                <Typography color='inherit'>Home</Typography>
                <Typography color='inherit'>Team</Typography>
                <Typography color='inherit'>About</Typography>
                <Typography color='inherit'>Contact</Typography>
            </Stack>
        </Grid>
        <Grid item md={3} sx={{textAlign: 'center'}}>
            <Stack direction='column' sx={{textAlign: 'left'}}>
                <Typography variant='h6' >Developer Console</Typography>
                <Typography color='inherit'>Home</Typography>
                <Typography color='inherit'>Team</Typography>
                <Typography color='inherit'>About</Typography>
                <Typography color='inherit'>Contact</Typography>
            </Stack>
        </Grid>
    </Grid>
    <Divider />
    <Grid container>
        <Grid item md={4}>
            <Stack direction='row'>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <img src={GdgIcon}></img>
                </IconButton>
                <Typography variant='h6' mt={0.5}>
                    GDG Cloud Kolkata 
                </Typography>
            </Stack>
        </Grid>
        <Grid item md={4}>
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