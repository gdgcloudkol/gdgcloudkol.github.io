import { Box, Container } from '@mui/material'
import './AboutUs.css'
import aboutIcon from '../../img/aboutIcon.png'
import communityIcon from '../../img/community.png'


function AboutUs() {
  return (
    <Container sx={{mt: 5}}>
        <h1 className='heading'>About<span> Us</span></h1>
        <Container className='headerContainer aboutContainer'  sx={{mb: 5}} >
            <div className="about">
                <p>A Developer Students Club is a Google recognized student body at a college which directly reports to Google for their activities and is supported by the tech giant. A DSC conducts workshops, seminars and other fun activities which help the students connect with Google.
                </p>
            </div>
            <Box
            component= 'img'
            src={aboutIcon}
            sx={{ width: 150, height: 150}}
            ml={3}
            mt={3}
            />     
        </Container>
        <Container>
            <Box
              component= 'img'
              src={communityIcon}
              sx={{ width: 150, height: 150}}
            />

            
        </Container>
    
    </Container>
  )
}

export default AboutUs
