import React from 'react';
import Navbar from './components/Navbar'
import HomePage from './views/HomePage'
import DetailPage from './views/DetailPage';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <HomePage />
        <DetailPage />
      </header>
    </div>
  );
}

export default App;
