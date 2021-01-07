export function setPlayers (payload) {
  return { type: "SET_PLAYERS", payload: payload }
}

export function setPlayer (payload) {
  return { type: "SET_PLAYER", payload: payload }
}

export function setTeams (payload) {
  return { type: "SET_TEAMS", payload: payload }
}

export function setPlayerTeam (payload) {
  return { type: "SET_PLAYER_TEAM", payload: payload }
}

export function addFavorite (player) {
  return { type: "ADD_FAVORITE", payload: player }
}

export function removeFavorite (payload) {
  return { type: "REMOVE_FAVORITE", payload: payload }
}