import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import PlayerCard from '../components/PlayerCard';
import useFetchPlayers from '../hooks/useFetchPlayers';

function HomePage (props) {
  const [teams, setTeams] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [playersPerPage, setPlayersPerPage] = React.useState(12)

  const [players] = useFetchPlayers('http://data.nba.net/data/10s/prod/v1/2020/players.json')

  function fetchTeams () {
    const teamsUrl = 'http://data.nba.net/data/10s/prod/v1/2020/teams.json';
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
    fetch(teamsUrl, options)
      .then((response) => response.json())
      .then((data) => {
        setTeams(data.league.standard)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer)

  const handleChange = (event, value) => {
    setCurrentPage(Number(value))
  }

  React.useEffect(() => {
    fetchTeams();
  }, [])

  function renderTeam (player, teams) {
    let renderedTeam = {}
    teams.forEach(team => {
      if (player.teamId === team.teamId) {
        renderedTeam = team
      }
    })
    return renderedTeam
  }

  function handleClickPlayer (dataPlayer, dataTeam) {
    props.handleClickPlayer(dataPlayer, dataTeam)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={3}>
        {currentPlayers.map(player => <Grid item xs={3}><PlayerCard key={player.personId} player={player} team={renderTeam(player, teams)} handleClickPlayer={handleClickPlayer}/></Grid>)}
      </Grid>
      <Pagination count={50} page={currentPage} onChange={handleChange} />
    </React.Fragment>
  )
}

export default HomePage
