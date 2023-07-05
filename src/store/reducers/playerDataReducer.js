const initialState = {
  playerDataHeadline: {},
  playerDataBio: [],
  playerDataStats: [],
  playerDataSummary: {}
}

function playerDataReducer ( state = initialState, action ) {
  switch(action.type) {
    case "SET_PLAYERDATA_HEADLINESTATS":
      return {...state, playerDataHeadline: action.payload}
    case "SET_PLAYERDATA_BIO": 
      return {...state, playerDataBio: action.payload }
    case "SET_PLAYERDATA_STATS": 
      return {...state, playerDataStats: action.payload }
    case "SET_PLAYERDATA_SUMMARY":
      return {...state, playerDataSummary: action.payload }
    default:
      return {...state}
  }
}

export default playerDataReducer