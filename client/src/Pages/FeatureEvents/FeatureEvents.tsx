import { Container } from '@mui/system'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Grid } from '@mui/material';
import './FeatureEvent.css'
import codingEvent from '../../img/studyJam.jpg';
import ccd from '../../img/ccdBanner.jpg'


function FeatureEvents() {
  
  return (
    <Container className='mainContainer'>
      <Container className='headerContainer'  sx={{mb: 1}} >
      <h1 className='heading'>Our<span> Featured Events</span></h1>
      {/* <div className="desc">
        <p>Events are listed in reverse chronological order by date.
        </p>
      </div> */}
      </Container>
      <Grid container spacing={6} justifyContent="center" alignItems="center" mt={0}>
      <Grid item m={2}>
        <Card sx={{ maxWidth: 250, maxHeight: 330, borderRadius: '16px' }}>
          <CardMedia
            component="img"
            height="100"
            image={ccd}
            alt="green iguana"
          />
          <CardContent sx={{height: 150}}>
            <Typography gutterBottom variant="h5" component="div">
              Cloud Community days 2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A community organized cloud conference with industry experts presenting on exciting topics!
            </Typography>
          </CardContent>
          <CardActions sx={{justifyContent: 'center'}}>
            {/* <Button size="small">Share</Button> */}
            <Button href='https://gdgcloud.kolkata.dev/ccd2022' 
                    size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>
        <Grid item m={2}>
        <Card sx={{ maxWidth: 250, maxHeight: 330, borderRadius: '16px' }}>
          <CardMedia
            component="img"
            height="100"
            image={codingEvent}
            alt="green iguana"
          />
          <CardContent sx={{height: 150}}>
            <Typography gutterBottom variant="h5" component="div">
              Android Study Jam
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Android Study Jams are community-organized study groups for people to learn how to build Android apps,
             using the curriculum provided by Google.
            </Typography>
          </CardContent>
          <CardActions sx={{justifyContent: 'center'}}>
            {/* <Button size="small">Share</Button> */}
            <Button href='https://gdg.community.dev/events/details/google-gdg-cloud-kolkata-presents-android-study-jams-kick-off/' 
                    size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>
        {/* <Grid item m={2}>
        <Card sx={{ maxWidth: 250,maxHeight: 300, borderRadius: '16px' }}>
          <CardMedia
            component="img"
            height="100"
            image={codingEvent}
            alt="green iguana"
          />
          <CardContent className='content'>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>
        <Grid item m={2}>
        <Card sx={{ maxWidth: 250,maxHeight: 300, borderRadius: '16px'}}>
          <CardMedia
            component="img"
            height="100"
            image={codingEvent}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid> */}
      </Grid>
    </Container>
  )
}

export default FeatureEvents