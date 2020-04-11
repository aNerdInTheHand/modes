import React, { useState } from 'react'
import './App.css'
import Intro from './pages/Intro'
import About from './pages/About'
import Info from './pages/Info'
import Ionian from './pages/Ionian'
import Dorian from './pages/Dorian'
import Phrygian from './pages/Phrygian'
import Lydian from './pages/Lydian'
import Mixolydian from './pages/Mixolydian'
import Aeolian from './pages/Aeolian'
import Locrian from './pages/Locrian'

const App = () => {
  const keys = ['C', 'G', 'D', 'A', 'E', 'B', 'F#']
  const intervals = ['Tone', 'Tone', 'Semitone', 'Tone', 'Tone', 'Tone', 'Semitone']
  const [key, setKey] = useState('C')

  const handleKeyChange = e => setKey(e.target.value)

  const selectKeyDropdown = () => (
    <div>
      <select
        className='select dropdown'
        onChange={handleKeyChange}
        defaultValue={keys[0]}
      >
        {keys.map((selectedKey, i) => (
          <option
            value={selectedKey}
            key={i}
          >
            {selectedKey}
          </option>
        ))}
      </select>
    </div>
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='main-header'><span role='img' aria-label='guitar emoji'>🎸</span> Musical Modes for guitarists <span role='img' aria-label='guitar emoji'>🎸</span></h1>
        <Intro />
        <About />
        <hr className='hr' />
        <h2 className='modes-header'>Modes of the major scale</h2>
        <Info />
        {selectKeyDropdown()}
        <Ionian />
        <Dorian />
        <Phrygian />
        <Lydian />
        <Mixolydian />
        <Aeolian />
        <Locrian />

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
