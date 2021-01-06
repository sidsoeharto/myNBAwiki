import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { removeFavorite } from '../store/actions';
import { useDispatch } from 'react-redux';

function PlayerCardFavorite (props) {

  React.useEffect(() => {
    console.log(props.favorite)
  }, [])

  return (
    <Card>
      <CardMedia
        image={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.favorite.personId}.png`}
        style={{height: 200}}
      >
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.favorite.firstName + ' ' + props.favorite.lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Position: {props.favorite.pos}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Jersey Number: {props.favorite.jersey}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* Team: {props.team.fullName} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Remove From Favorites
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default PlayerCardFavorite
