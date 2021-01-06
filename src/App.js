import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { Home, About, Team, Detail, Favorites } from './views'
import { CssBaseline } from '@material-ui/core';

function App() {
  const [players, setPlayers] = React.useState([])
  const [team, setTeam] = React.useState([])

  function handleClickPlayer (dataPlayer, dataTeam) {
    setPlayers(dataPlayer)
    setTeam(dataTeam)
  }

  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home handleClickPlayer={handleClickPlayer}/>
          </Route>
          <Route path="/players/:teamId" exact>
            <Team />
          </Route>
          <Route path="/player/:id">
            <Detail players={players} team={team}/>
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
