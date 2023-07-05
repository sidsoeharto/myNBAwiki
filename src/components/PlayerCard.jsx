import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { setPlayer, setPlayerTeam } from '../store/actions';
import { addFavorite } from '../store/actions';
import { toast } from 'react-toastify';
import { colors } from '../styles/theme';

function PlayerCard (props) {
  let history = useHistory()
  const { player } = props;

  const favorites = useSelector(state => state.favorite.favorites)

  const dispatch = useDispatch()
  
  function handleClick (player, e) {
    dispatch(setPlayer(player))
    dispatch(setPlayerTeam(player.TEAM_ID))
    history.push({
      pathname:`/player/${player.PERSON_ID}`,
    })
  }

  function clickToAdd (player) {
    if (!favorites.some(el => el.PERSON_ID === player.PERSON_ID)) {
      dispatch(addFavorite(player))
    } else {
      toast.error('Already added to Favorites')
    }
  }

  return (
    <Card>
      <CardActionArea>
        <CardMedia 
          image={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.PERSON_ID}.png`}
          style={{height: 240}}
        />
      </CardActionArea>
      <CardContent style={{minHeight: 175}}>
        <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Oswald, sans-serif', colors: colors.nbaNavy}}>
          {`${player.PLAYER_FIRST_NAME} ${player.PLAYER_LAST_NAME}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Position: {player.POSITION}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Jersey Number: {player.JERSEY_NUMBER}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Team: {`${player.TEAM_CITY} ${player.TEAM_NAME}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => clickToAdd(player)}>
          Favorite
        </Button>
        <Button size="small" color="primary" id={player.PERSON_ID} onClick={(e) => handleClick(player, e)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default PlayerCard