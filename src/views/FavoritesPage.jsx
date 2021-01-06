import React from 'react';
import { useSelector } from "react-redux";
import PlayerCardFavorite from '../components/PlayerCardFavorite'
import Grid from '@material-ui/core/Grid';

function FavoritesPage () {

  const favorites = useSelector(state => state.favorites)
  
  return(
    <div>
      <Grid container spacing={3}>
        {
          favorites.map(favorite => <Grid item xs={3}><PlayerCardFavorite key={favorite.personId} favorite={favorite}></PlayerCardFavorite></Grid>) 
        }
      </Grid>
    </div>
  )
}

export default FavoritesPage