import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  players: [],
  player: {},
  teams: [],
  playerTeam: {},
  favorites: []
}

function reducer ( state = initialState, action ) {
  switch(action.type) {
    case "SET_PLAYERS":
      return {...state, players: action.payload }
    case "SET_PLAYER": 
      return {...state, player: state.players.find(player => player.personId === action.payload)}
    case "SET_TEAMS": 
      return {...state, teams: action.payload }
    case "SET_PLAYER_TEAM":
      return {...state, playerTeam: state.teams.find(team => team.teamId === action.payload) }
    case "ADD_FAVORITE":
      return {...state, favorites: state.favorites.concat(action.payload)}
    case "REMOVE_FAVORITE":
      return {...state, favorites: state.favorites.filter(favorite => favorite !== action.payload)}
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store