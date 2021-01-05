import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './views/HomePage'
import DetailPage from './views/DetailPage';
import FavoritesPage from './views/FavoritesPage';
import TeamPage from './views/TeamPage';

function App() {
  const [players, setPlayers] = React.useState([])

  function handleClickPlayer (data) {
    setPlayers(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
          <Router>
            <Switch>
              <Route path="/" exact>
                <HomePage handleClickPlayer={handleClickPlayer}/>
              </Route>
              <Route path="/players/:teamId" exact>
                <TeamPage />
              </Route>
              <Route path="/player/:id">
                <DetailPage players={players}/>
              </Route>
              <Route path="/favorites">
                <FavoritesPage />
              </Route>
            </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
