import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'
import { mixolydianChords } from '../constants/chords'

const Mixolydian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview
      modeName='Mixolydian'
      chords={mixolydianChords}
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
    <li>The Dorian mode is the second degree mode of the major scale.</li>
    <li>In other words, its scale is the major scale starting from the second note of the major scale.</li>
    <li>Its intervals are T-T-S-T-T-T-S.</li>
  </ul>
)

const soundsLike = () => (
  <p>
    The Ionian mode is happy, as you'd expect from a mode with all perfect and major intervals.
    Don't expect too much drama from this mode - lots of nice, soft major sevenths on both the I and the IV are the order of the day.
  </p>
)

const spotIt = () => (
  <p>
    Keep it simple, stupid. I-IV-V-I will work nicely with a major 7 chord on the I.
    To really pin down the Ionian flavour, use a second inversion on the IV chord (this uses the I note of the scale in the root of your IV chord) and a sus4 on your V chord (which again uses that I note).
    If you want to get really wild, make the V dominant, but don't come crying to me if you just end up smashing wild Mixolydian phrases over it.
  </p>
)

const soloOverIt = () => (
  <p>
    Softly softly catchy monkey. If you're playing over an Ionian progression, you're probably not going to be smashing out whammy bar dives with the gain up to 11.
    But hey, don't let me stop you. To really get the feel of the Ionian mode though, you want to really play on the half-step between the major 7 and the I (or octave).
  </p>
)

const hearIt = () => (
  <p>
    You'll hear Ionian music in lots of places - think nursery rhymes, Christmas carols, sentimental music, live lounge acoustic music.
  </p>
)

const title = () => <div className='subtitle'>Mixolydian</div>

export default Mixolydian
