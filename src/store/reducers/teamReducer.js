const initialState = {
  teams: [],
  playerTeam: {}
}

function teamReducer ( state = initialState, action ) {
  switch(action.type) {
    case "SET_TEAMS": 
      return {...state, teams: action.payload }
    case "SET_PLAYER_TEAM":
      return {...state, playerTeam: state.teams.find(team => team.teamId === action.payload) }
    default:
      return {...state}
  }
}

export default teamReducer