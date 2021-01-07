import React from 'react';
import { useSelector } from "react-redux";
import PlayerCardFavorite from '../components/PlayerCardFavorite'
import Grid from '@material-ui/core/Grid';

function FavoritesPage () {

  const favorites = useSelector(state => state.favorites)
  const teams = useSelector(state => state.teams)

  function renderTeam (player, teams) {
    let renderedTeam = {}
    teams.forEach(team => {
      if (player.teamId === team.teamId) {
        renderedTeam = team
      }
    })
    return renderedTeam
  }
  
  return(
    <div>
      <Grid container spacing={3}>
        {
          favorites.map(favorite => <Grid item xs={3}><PlayerCardFavorite key={favorite.personId} favorite={favorite} team={renderTeam(favorite, teams)}></PlayerCardFavorite></Grid>) 
        }
      </Grid>
    </div>
  )
}

export default FavoritesPage