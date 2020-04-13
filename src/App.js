import React, { useState } from 'react'
import './App.css'
import { notes } from './constants/chords'
import Intro from './panels/Intro'
import Modes101 from './panels/Modes101'
import Modes102 from './panels/Modes102'
import Info from './panels/Info'
import Ionian from './panels/Ionian'
import Dorian from './panels/Dorian'
import Phrygian from './panels/Phrygian'
import Lydian from './panels/Lydian'
import Mixolydian from './panels/Mixolydian'
import Aeolian from './panels/Aeolian'
import Locrian from './panels/Locrian'
// import BackingMixoLydian from './panels/backing/Mixolydian'

const App = () => {
  const keys = ['C', 'G', 'D', 'A', 'E', 'B', 'F#']
  const intervals = ['Tone', 'Tone', 'Semitone', 'Tone', 'Tone', 'Tone', 'Semitone']
  const [key, setKey] = useState('C')
  const [keyNotes, setNotes] = useState(notes[key])

  const handleKeyChange = e => {
    setKey(e.target.value)
    setNotes(notes[e.target.value])
  }

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
        <Modes101 />
        <Modes102 />
        <hr className='hr' />
        <h2 className='modes-header'>Modes of the major scale</h2>
        <Info />
        {selectKeyDropdown()}
        <Ionian notes={keyNotes} />
        <Dorian notes={keyNotes} />
        <Phrygian notes={keyNotes} />
        <Lydian notes={keyNotes} />
        <Mixolydian notes={keyNotes} />
        <Aeolian notes={keyNotes} />
        <Locrian notes={keyNotes} />
        <hr className='hr' />
        {/* <h2 className='backing-tracks-header'>Backing Tracks and Examples</h2>
        <BackingMixoLydian />
        <hr className='hr' /> */}
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
