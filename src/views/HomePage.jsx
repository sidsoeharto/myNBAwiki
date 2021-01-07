import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import PlayerCard from '../components/PlayerCard';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomePage (props) {
  const players = useSelector(state => state.player.players)
  const teams = useSelector(state => state.team.teams)

  const [currentPage, setCurrentPage] = React.useState(1)
  const [playersPerPage, setPlayersPerPage] = React.useState(12)

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer)

  const handleChange = (event, value) => {
    setCurrentPage(Number(value))
  }

  function renderTeam (player, teams) {
    let renderedTeam = {}
    teams.forEach(team => {
      if (player.teamId === team.teamId) {
        renderedTeam = team
      }
    })
    return renderedTeam
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {currentPlayers.filter(player => player.isActive === true).map(player => <Grid item xs={3}><PlayerCard key={player.personId} player={player} team={renderTeam(player, teams)}/></Grid>)}
      </Grid>
      <Container>
        <Pagination count={42} page={currentPage} onChange={handleChange} />
      </Container>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </React.Fragment>
  )
}

export default HomePage
