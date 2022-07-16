import { Grid, Stack, Button, Typography, Container,
         IconButton, Divider, Link } from '@mui/material'
import GdgIcon from '../../img/gdglogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useMediaQuery from '@mui/material/useMediaQuery';

function Footer() {
    const matches = useMediaQuery('(max-width: 650px)')
  return (
    <Container sx={{ textAlign: 'center', justifyContent: 'center',
                     marginTop: 10}}>
    <Grid container justifyContent="center" mb={2} ml={matches? 2 : 0}>
        <Grid item md={4} xs={12} alignItems='center' justifyContent="center" sx={{textAlign: 'center'}}
         mb={matches? 2 : 0}>
            <Stack spacing={1} direction='column' sx={{textAlign: 'left'}}>
                <Typography variant='h6'>About</Typography>
                <Typography color='inherit'>
                 <Link href="https://gdg.community.dev/gdg-cloud-kolkata/"
                       color="inherit" underline='hover' target={'_blank'}>
                    GDG Cloud Kolkata
                 </Link>
                </Typography>
                <Typography color='inherit'>
                   <Link href="https://developers.google.com/community/gdg" 
                       color="inherit" underline='hover' target={'_blank'}>
                    Google Developer Groups
                   </Link>
                </Typography>
                <Typography color='inherit'>
                  <Link href="https://developers.google.com/womentechmakers"
                        color="inherit" underline='hover' target={'_blank'}>
                    Women Techmakers
                  </Link>
                </Typography>
                <Typography color='inherit'>
                   <Link href="https://developers.google.com/community/gdsc"
                       color="inherit" underline='hover' target={'_blank'}>
                     Google Developer Student Clubs
                   </Link>
                </Typography>
            </Stack>
        </Grid>
        <Grid item xs={12} md={4} alignItems='center' justifyContent="center"  sx={{textAlign: 'center'}}
          mb={matches? 2 : 0}>
            <Stack spacing={1} direction='column' sx={{textAlign: 'left'}}>
                <Typography variant='h6' >Resources</Typography>
                <Typography color='inherit'>Terms and Condition</Typography>
                
                 <Typography color='inherit'>
                   <Link href="https://t.me/gdgcloudkol" color="inherit" underline='hover' target={'_blank'}>
                    Telegram Group
                    </Link>
                </Typography>
                
            </Stack>
        </Grid>
        <Grid item alignItems='center' justifyContent="center" xs={12} md={3} sx={{textAlign: 'center'}}
           mb={matches? 2 : 0}>
            <Stack spacing={1} direction='column' sx={{textAlign: 'left'}}>
                <Typography variant='h6' >Contact</Typography>
                <Stack direction='row' spacing={1}>
                <Typography color='inherit'>
                    {/* <MailOutlineIcon />  */}
                {/* <a href='mail to: gdgcloudkol@gmail.com'> */}
                   gdgcloudkol@gmail.com
                {/* </a> */}
                </Typography>
                </Stack>
            </Stack>
        </Grid>
    </Grid>
    <Divider />
    <Grid mb={1} pt={1} container alignItems='center' justifyContent="center">
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
        <Grid item md={5} >
        <Stack direction='row' alignItems='center' justifyContent="center">
          <a href="https://opensource.org/licenses/MIT">
            <img src="https://img.shields.io/badge/License-MIT-yellow.svg"></img>
          </a>
             <Typography pb={0.75} pl={1}>Gdg Cloud Kolkata</Typography>
        </Stack>
        </Grid>
        <Grid item >
            <Stack mt={1} direction='row' spacing={2} sx={{textAlign: 'center'}}>
                <Typography> Follow Us On: </Typography>
                <Link href="https://facebook.com/gdgcloudkol" color="inherit" underline='hover' target={'_blank'}>
                <FacebookIcon />
                </Link>
                <Link href="https://instagram.com/gdgcloudkol" color="inherit" underline='hover' target={'_blank'}>
                <InstagramIcon />
                </Link>
                <Link href="https://twitter.com/gdgcloudkol" color="inherit" underline='hover' target={'_blank'}>
                <TwitterIcon />
                </Link>
                <Link href="https://www.linkedin.com/company/gdgcloudkol" color="inherit" underline='hover' target={'_blank'}>
                <LinkedInIcon />
                </Link>
                <Link href="https://github.com/gdgcloudkol" color="inherit" underline='hover' target={'_blank'}>
                <GitHubIcon />
                </Link>
            </Stack>
        </Grid>
    </Grid>
    
    </Container>
  )
}

export default Footer