import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setPlayer, setPlayerTeam, removeFavorite } from '../store/actions';
import { useHistory } from 'react-router-dom';

function PlayerCardFavorite (props) {
  let history = useHistory()

  const dispatch = useDispatch()

  function handleClick (player, e) {
    dispatch(setPlayer(player.personId))
    dispatch(setPlayerTeam(player.teamId))
    history.push({
      pathname:`/player/${player.personId}`,
    })
  }

  function clickToRemove (player) {
    console.log('remove', player)
    dispatch(removeFavorite(player))
  }

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
          Team: {props.team.fullName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => clickToRemove(props.favorite)}>
          Remove From Favorites
        </Button>
        <Button size="small" color="primary" onClick={(e) => handleClick(props.favorite, e)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default PlayerCardFavorite
