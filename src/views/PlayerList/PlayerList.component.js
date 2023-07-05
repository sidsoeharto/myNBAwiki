import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Grid, Container, InputBase } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import 'react-toastify/dist/ReactToastify.css';
import { Search } from '@material-ui/icons';

import SearchFilter from './SearchFilter';
import PlayerCard from '../../components/PlayerCard';
import { useFetchPlayers, useFetchTeams } from './PlayerList.hooks';
import { InputInput, InputRoot, PaginationContainer, SearchBar, SearchIconBox } from './PlayerList.styles';

function PlayerList (props) {
  useFetchPlayers('http://localhost:8000/players');
  useFetchTeams('https://data.nba.net/data/10s/prod/v1/2020/teams.json');

  const players = useSelector(state => state.player.players);
  const teams = useSelector(state => state.team.teams);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [playersPerPage] = React.useState(12);

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const handleChange = (event, value) => {
    setCurrentPage(Number(value));
  };

  function renderTeam (player, teams) {
    let renderedTeam = {};
    teams.forEach(team => {
      if (player.teamId === team.teamId) {
        renderedTeam = team;
      }
    })
    return renderedTeam;
  }

  return (
    <React.Fragment>
      <Container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <SearchFilter />
        <div style={{ maxWidth: '1440px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '20px' }}>
          <Grid container spacing={3}>
            {currentPlayers.map(player => <Grid item xs={12} sm={6} lg={3}><PlayerCard key={player.PERSON_ID} player={player} team={renderTeam(player, teams)}/></Grid>)}
          </Grid>
        </div>
        <PaginationContainer>
          <Pagination count={42} page={currentPage} onChange={handleChange} boundaryCount={3} showFirstButton showLastButton/>
        </PaginationContainer>
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

export default PlayerList
