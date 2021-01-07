import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { Home, About, Team, Detail, Favorites } from './views'
import { CssBaseline } from '@material-ui/core';
import useFetchPlayers from './hooks/useFetchPlayers';
import useFetchTeams from './hooks/useFetchTeams';

function App() {
  useFetchPlayers('http://data.nba.net/data/10s/prod/v1/2020/players.json')
  useFetchTeams('http://data.nba.net/data/10s/prod/v1/2020/teams.json')

  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/players/:teamId" exact>
            <Team />
          </Route>
          <Route path="/player/:id">
            <Detail />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
