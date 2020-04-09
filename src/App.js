import React from 'react'
import './App.css'
import Intro from './pages/Intro'
import About from './pages/About'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='main-header'><span role='img' aria-label='guitar emoji'>🎸</span> Musical Modes for guitarists <span role='img' aria-label='guitar emoji'>🎸</span></h1>
        <Intro />
        <About />
        <hr className='hr' />
        <h2 className='modes-header'>Modes of the major scale</h2>
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
  )
}

export default App
