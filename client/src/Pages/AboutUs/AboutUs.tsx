import { Box, Container, Grid, Accordion, Typography,
          AccordionSummary, AccordionDetails } from '@mui/material'
import './AboutUs.css'
import aboutIcon from '../../img/aboutIcon.png'
import communityIcon from '../../img/community.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function AboutUs() {
  return (
    <Container sx={{mt: 5}}>
        <h1 className='heading'>About<span> Us</span></h1>
        <Grid container className='headerContainer aboutContainer'  sx={{mb: 5}} >
            <Grid item className="about" mr={5}>
                <p>A Developer Students Club is a Google recognized student body at a college which directly reports to Google for their activities and is supported by the tech giant. A DSC conducts workshops, seminars and other fun activities which help the students connect with Google.
                </p>
            </Grid>
            <Grid item>
            <Box
            component= 'img'
            src={aboutIcon}
            sx={{ width: 150, height: 150}}
            ml={2}
            mt={3}
            /> 
            </Grid>    
        </Grid>
        <Grid container >
            <Grid item md={4}>
            <Box sx={{alignItems: 'center', textAlign: 'center'}}>
                <Box
                component= 'img'
                src={communityIcon}
                sx={{ width: 150, height: 150}}
                /> 
                <h1 className='comunityHeader'>Community <br></br> Guidelines</h1> 
            </Box>   
            </Grid>
            <Grid item md={7} mt={5}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
               </Accordion>
               <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
               </Accordion>
               <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
               </Accordion>
               <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
               </Accordion>

            </Grid>
        </Grid>
    
    </Container>
  )
}

export default AboutUs
