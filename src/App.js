import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { PlayerList, About, Team, PlayerDetail, Favorites } from './views'
import { CssBaseline } from '@material-ui/core';
import { MainContent } from './App.styles';

function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Navbar />
        <MainContent>
          <Switch>
            <Route path="/" exact>
              <PlayerList />
            </Route>
            <Route path="/roster/:teamId" exact>
              <Team />
            </Route>
            <Route path="/player/:id">
              <PlayerDetail />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </MainContent>
      </Router>
    </div>
  );
}

export default App;
