export function setPlayers (payload) {
  return { type: "SET_PLAYERS", payload: payload }
}

export function setPlayer (payload) {
  return { type: "SET_PLAYER", payload: payload }
}

export function setTeams () {
  return { type: "SET_TEAMS" }
}

export function setPlayerTeam () {
  return { type: "SET_PLAYER_TEAM" }
}

export function addFavorite (player) {
  return { type: "ADD_FAVORITE", payload: player }
}

export function removeFavorite () {
  return { type: "REMOVE_FAVORITE" }
}