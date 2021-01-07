const initialState = {
  roster: [],
  rosterTeam: {}
}

function rosterReducer ( state = initialState, action ) {
  switch(action.type) {
    case "SET_ROSTER":
      return {...state, roster: state.players.filter(player => state.rosterTeam.includes(player.personId))}
    case "SET_ROSTER_TEAMS": 
      return {...state, rosterTeam: action.payload }
    default:
      return {...state}
  }
}

export default rosterReducer