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

export function setRosterTeam (payload) {
  return { type: "SET_ROSTER_TEAM", payload: payload}
}

export function addFavorite (player) {
  return { type: "ADD_FAVORITE", payload: player }
}

export function removeFavorite (payload) {
  return { type: "REMOVE_FAVORITE", payload: payload }
}

export function setRoster (payload) {
  return { type: "SET_ROSTER", payload: payload }
}

export function setPlayerDataHeadline (payload) {
  return { type: "SET_PLAYERDATA_HEADLINESTATS", payload: payload }
}

export function setPlayerDataBio (payload) {
  return { type: "SET_PLAYERDATA_BIO", payload: payload }
}

export function setPlayerDataStats (payload) {
  return { type: "SET_PLAYERDATA_STATS", payload: payload }
}

export function setPlayerDataSummary (payload) {
  return { type: "SET_PLAYERDATA_SUMMARY", payload: payload }
}

export const fetchRoster = () => (dispatch, getState) => {
  const { rosterTeam } = getState()
  const template = require('nba-client-template')
  const options = {
    headers: {
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "en-US",
      Accept: "*/*",
      "User-Agent": template.user_agent,
      Referer: template.referrer,
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
      Origin: "https://stats.nba.com",
    }
  }
  fetch(`https://data.nba.net/data/10s/prod/v1/2020/teams/${rosterTeam.urlName}/roster.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data.league.standard.players)
      dispatch(setRosterTeam(data.league.standard.players))
    })
    .catch(err => {
      console.log('from action', err.message)
    })
}

export const fetchPlayerData = (url) => (dispatch, getState) => {
  const template = require('nba-client-template')
  const options = {
    headers: {
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "en-US",
      Accept: "*/*",
      "User-Agent": template.user_agent,
      Referer: template.referrer,
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
      Origin: "https://stats.nba.com",
    }
  }
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setPlayer(data.player))
      dispatch(setPlayerDataBio(data.bio))
      dispatch(setPlayerDataStats(data.stats))
    })
    .catch((err) => {
      console.log('from action', err.message)
    })
}