import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'
import { aeolianChords } from '../constants/chords'

const Aeolian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview
      modeName={'Aeolian'}
      chords={aeolianChords}
      article={'an'}
      whatIsIt={() => whatIsIt()}
      soundsLike={() => soundsLike()}
      spotIt={() => spotIt()}
      soloOverIt={() => soloOverIt()}
      hearIt={() => hearIt()} />
  </div>
)

const whatIsIt = () => (
  <ul>
    <li>The Aeolian mode is the sixth degree mode of the major scale.</li>
    <li>In other words, its scale is the major scale starting from the sixth note of the major scale.</li>
    <li>Its intervals are T-S-T-T-S-T-T.</li>
  </ul>
)

const soundsLike = () => (
  <p>
    The Aeolian mode is another way of saying 'minor' - its scale is just the natural minor scale.
    It's a very familiar sound but don't confuse 'minor' with 'sad', as this is a very versatile mode.
  </p>
)

const spotIt = () => (
  <p>
    You'll have hours of joy using this mode over any progression descending from the vi.
    Try a vi-V-IV-V loop.
  </p>
)

const soloOverIt = () => (
  <p>
    This is just the minor pentatonic you know and love so well with a perfect second and minor sixth added.
    You've got this - just don't neglect all of those evocative minor notes.
  </p>
)

const hearIt = () => (
  <ul>
    <li>Babe I'm Gonna Leave You - Led Zeppelin</li>
    <li>All Along The Watchtower - Bob Dylan</li>
  </ul>
)

const title = () => <div className='subtitle'>Aeolian</div>

export default Aeolian
