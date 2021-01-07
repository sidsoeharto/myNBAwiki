import favoriteReducer from './favoriteReducer'
import playerReducer from './playerReducer'
import rosterReducer from './rosterReducer'
import teamReducer from './teamReducer'
import { combineReducers } from 'redux'
import playerDataReducer from './playerDataReducer'

const reducers = combineReducers({
  favorite: favoriteReducer,
  player: playerReducer,
  playerData: playerDataReducer,
  roster: rosterReducer,
  team: teamReducer
})

export default reducers