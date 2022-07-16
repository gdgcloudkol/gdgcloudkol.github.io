import { Container } from '@mui/system'
import { Box, Stack } from '@mui/material'
import './OurPartners.css'
import partnerImg from '../../img/partnersImg.svg'
import dots from '../../img/dots.svg'


function OurPartners() {
  return (
    <Container className='mainContainer'>
      <h1 className='heading'>Our<span> Partners</span></h1>
      {/* <Stack className='desc-container'> */}
      <p className="desc">A very big thank you to all our partners for their continued partnership.
        If you’re interested in being showcased throughout ,
         contact <a href="mailto: gdgcloudkol@gmail.com"> gdgcloudkol@gmail.com</a> to discuss
         sponsorship opportunities.
      </p>
      {/* <a href='#' className='links'><b>Explore Details</b></a> */}
      {/* </Stack> */}
      <Box className='partnerImg'>
        <img src={partnerImg} alt="image of our partners" />
        {/* <img className='dots' src={dots} alt="dots" /> */}
      </Box>
      
    </Container>
    
  )
}

export default OurPartners