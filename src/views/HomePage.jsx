import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import PlayerCard from '../components/PlayerCard';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      teams: [],
      currentPage: 1,
      playersPerPage: 12 
    }
  }

  componentDidMount() {
    const playerUrl = 'http://data.nba.net/data/10s/prod/v1/2020/players.json';
    fetch(playerUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({players: data.league.standard})
      })
  }

  render() {
    const { players, teams, currentPage, playersPerPage } = this.state

    const indexOfLastPlayer = currentPage * playersPerPage;
    const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
    const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer)

    const handleChange = (event, value) => {
      this.setState({
        currentPage: Number(value)
      })
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container spacing={3}>
          {currentPlayers.map(player => <Grid item xs={3}><PlayerCard key={player.personId} player={player}/></Grid>)}
        </Grid>
        <Pagination count={50} page={currentPage} onChange={handleChange} />
      </React.Fragment>
    )
  }
}

export default HomePage
