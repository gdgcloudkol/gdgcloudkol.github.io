import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Stack
} from "@mui/material";
import GdgIcon from '../../img/gdglogo.png';
import DrawerComp from "./Drawer";
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "white", color: 'black' }}>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
             <img src={GdgIcon}></img>
          </IconButton>
          {isMatch ? (
            <>
               <Typography variant='h6' component='div' sx={{ flexGrow: 1, textAlign: 'left'}} >
                GDG Cloud Kolkata 
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              {/* <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs> */}
              <Typography variant='h6' component='div' sx={{ flexGrow: 1, textAlign: 'left'}} >
                GDG Cloud Kolkata 
              </Typography>
              <Stack direction='row' spacing={2}>
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>Team</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit'>Contact</Button>
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;

