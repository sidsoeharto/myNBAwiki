const initialState = {
  playerDataRegular: [],
  playerDataLatest: {},
  playerDataSummary: {}
}

function playerDataReducer ( state = initialState, action ) {
  switch(action.type) {
    case "SET_PLAYERDATA_REGULAR": 
      return {...state, playerDataRegular: action.payload }
    case "SET_PLAYERDATA_LATEST": 
      return {...state, playerDataLatest: action.payload }
    case "SET_PLAYERDATA_SUMMARY":
      return {...state, playerDataSummary: action.payload }
    default:
      return {...state}
  }
}

export default playerDataReducer