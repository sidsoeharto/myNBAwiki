const initialState = {
  players: [],
  player: {}
}

function playerReducer ( state = initialState, action ) {
  switch(action.type) {
    case "SET_PLAYERS":
      return {...state, players: action.payload }
    case "SET_PLAYER": 
      return {...state, player: action.payload }
    default:
      return {...state}
  }
}

export default playerReducer