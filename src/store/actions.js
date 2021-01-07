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

export function setPlayerDataRegular (payload) {
  return { type: "SET_PLAYERDATA_REGULAR", payload: payload }
}

export function setPlayerDataLatest (payload) {
  return { type: "SET_PLAYERDATA_LATEST", payload: payload }
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
      Origin: "http://stats.nba.com",
    }
  }
  fetch(`http://data.nba.net/data/10s/prod/v1/2020/teams/${rosterTeam.urlName}/roster.json`)
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
      Origin: "http://stats.nba.com",
    }
  }
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.league.standard.stats)
      dispatch(setPlayerDataSummary(data.league.standard.stats.careerSummary))
      dispatch(setPlayerDataRegular(data.league.standard.stats.regularSeason.season))
      dispatch(setPlayerDataLatest(data.league.standard.stats.latest))
    })
    .catch((err) => {
      console.log('from action', err.message)
    })
}