import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { setPlayer, setPlayerTeam } from '../store/actions';
import { addFavorite } from '../store/actions';
import { toast } from 'react-toastify';

function PlayerCard (props) {
  let history = useHistory()

  const favorites = useSelector(state => state.favorite.favorites)

  const dispatch = useDispatch()
  
  function handleClick (player, e) {
    dispatch(setPlayer(player.personId))
    dispatch(setPlayerTeam(player.teamId))
    history.push({
      pathname:`/player/${player.personId}`,
    })
  }

  function clickToAdd (player) {
    if (!favorites.some(el => el.personId === player.personId)) {
      dispatch(addFavorite(player))
    } else {
      toast.error('Already added to Favorites')
    }
  }

  return (
    <Card>
      <CardActionArea>
        <CardMedia 
          image={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.player.personId}.png`}
          style={{height: 200}}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.player.firstName + ' ' + props.player.lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Position: {props.player.pos}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Jersey Number: {props.player.jersey}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Team: {props.team.fullName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => clickToAdd(props.player)}>
          Favorite
        </Button>
        <Button size="small" color="primary" id={props.player.personId} onClick={(e) => handleClick(props.player, e)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default PlayerCard