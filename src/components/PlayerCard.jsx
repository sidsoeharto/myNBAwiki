import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../store/actions'

function PlayerCard (props) {
  let history = useHistory()

  const dispatch = useDispatch()
  
  function handleClick (dataPlayer, dataTeam, e) {
    props.handleClickPlayer(dataPlayer, dataTeam)
    history.push({
      pathname:`/player/${dataPlayer.personId}`,
    })
  }

  function clickToAdd (player) {
    console.log(player)
    dispatch(addFavorite(player))
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
        <Button size="small" color="primary" id={props.player.personId} onClick={(e) => handleClick(props.player, props.team, e)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default PlayerCard