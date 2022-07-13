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
      <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing 
      elit. Vel laudantium, fugit pariatur quam totam perferendis hic asperiores 
      sequi voluptas eaque officia aut, rerum recusandae!
      </p>
      <a href='#' className='links'><b>Explore Details</b></a>
      {/* </Stack> */}
      <Box className='partnerImg'>
        <img src={partnerImg} alt="image of our partners" />
        {/* <img className='dots' src={dots} alt="dots" /> */}
      </Box>
      
    </Container>
    
  )
}

export default OurPartners