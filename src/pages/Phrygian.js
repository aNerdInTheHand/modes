import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'
import { phrygianChords } from '../constants/chords'

const Phrygian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview
      modeName={'Phrygian'}
      chords={phrygianChords}
      article={'a'}
      whatIsIt={() => whatIsIt()}
      soundsLike={() => soundsLike()}
      spotIt={() => spotIt()}
      soloOverIt={() => soloOverIt()}
      hearIt={() => hearIt()} />
  </div>
)

const whatIsIt = () => (
  <ul>
    <li>The Phrygian mode is the third degree mode of the major scale.</li>
    <li>In other words, its scale is the major scale starting from the third note of the major scale.</li>
    <li>Its intervals are S-T-T-T-S-T-S.</li>
  </ul>
)

const soundsLike = () => (
  <p>
    The "Spanish Gypsy mode" has a lot of minor flavour to it but maintains perfect IV and V intervals.
    This gives it a pretty cool and very distinctive sound that you can spot from a mile away.
    It screams "Flamenco".
  </p>
)

const spotIt = () => (
  <p>
    I think the Phrygian mode is one of the trickiest to write progressions for.
    Really you're looking for a iii-IV-V - although the iii will often be a dominant chord.
    The key is that half-step between the iii and the IV chord, which gives you that minor second interval in your Phrygian scale.
    When the perfect IV is followed by the perfect V, you know you're dealing with a Phrygian progression.
  </p>
)

const soloOverIt = () => (
  <p>
    Again, I think this is tricky. While the Phrygian scale is beautiful, I rarely find myself with the chance to utilise it.
    If you do come across that elusive iii-IV-V, just stretch your legs and have a nice run up and down the scale,
    smashing a few hammer-ons between the 5th and minor 6 note and the root and minor second, those little semitones are what make the mode.
  </p>
)

const hearIt = () => (
  <p>
    Flamenco - that's where my knowledge of this mode really starts and ends.
  </p>
)

const title = () => <div className='subtitle'>Phrygian</div>

export default Phrygian
