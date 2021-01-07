const initialState = {
  favorites: []
}

function favoriteReducer ( state = initialState, action ) {
  switch(action.type) {
    case "ADD_FAVORITE":
      return {...state, favorites: state.favorites.concat(action.payload)}
    case "REMOVE_FAVORITE":
      return {...state, favorites: state.favorites.filter(favorite => favorite !== action.payload)}
    default:
      return {...state}
  }
}

export default favoriteReducer