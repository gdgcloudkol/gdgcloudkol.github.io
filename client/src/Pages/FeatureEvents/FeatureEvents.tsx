import { Container } from '@mui/system'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Grid } from '@mui/material';
import './FeatureEvent.css'
import codingEvent from '../../img/codingevent.png';

function FeatureEvents() {
  return (
    <Container className='mainContainer'>
      <Container className='headerContainer'  sx={{mb: 5}} >
      <h1 className='heading'>Our<span> Feature Events</span></h1>
      <div className="desc">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Officia repudiandae autem ab qui a ad commodi?
        </p>
      </div>
      </Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item m={2}>
        <Card sx={{ maxWidth: 300}}>
          <CardMedia
            component="img"
            height="140"
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
        </Grid>
        <Grid item m={2}>
        <Card sx={{ maxWidth: 300}}>
          <CardMedia
            component="img"
            height="140"
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
        <Card sx={{ maxWidth: 300}}>
          <CardMedia
            component="img"
            height="140"
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
        </Grid>
      </Grid>
    </Container>
  )
}

export default FeatureEvents