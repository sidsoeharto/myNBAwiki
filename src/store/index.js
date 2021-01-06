import { createStore } from 'redux';

const initialState = {
  player: {},
  teams: [],
  playerTeam: {},
  favorites: []
}

function reducer ( state = initialState, action ) {
  switch(action.type) {
    case "SET_PLAYER": 
      return {...state, player: action.payload }
    case "SET_TEAMS": 
      return {...state, teams: action.payload }
    case "SET_PLAYER_TEAM":
      return {...state, playerTeam: action.payload }
    case "ADD_FAVORITE":
      return {...state, favorites: state.favorites.concat(action.payload)}
    case "REMOVE_FAVORITE":
      return {...state, favorites: state.favorites.filter(favorite => favorite !== action.payload)}
    default:
      return state;
  }
}

const store = createStore(reducer)

export default store