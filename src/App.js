import React from 'react';
import './App.css';
import Intro from './pages/Intro'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
        <a
          className="App-link"
          href="https://soundcloud.com/nick-holvast"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shameless plug to my music
        </a>
      </header>
    </div>
  );
}

export default App;
