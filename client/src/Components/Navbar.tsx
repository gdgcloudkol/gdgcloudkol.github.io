import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import GdgIcon from '../img/gdglogo.png';
import './Navbar.css'

function Navbar() {
  return (
    <AppBar position='sticky' sx={{background: 'white', color: 'black'}}>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
             <img src={GdgIcon}></img>
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1, textAlign: 'left'}} >
                GDG Cloud Kolkata 
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>Team</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit'>Contact</Button>
            </Stack>
        </Toolbar>
    </AppBar>
    
  )
}

export default Navbar