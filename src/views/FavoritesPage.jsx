import React from 'react';
import { useSelector } from "react-redux"

function FavoritesPage () {

  const favorites = useSelector(state => state.favorites)
  
  return(
    <div>
      {
        favorites.map(favorite => <div>{JSON.stringify(favorite)}</div>) 
      }
    </div>
  )
}

export default FavoritesPage