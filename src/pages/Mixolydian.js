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
    <li>The Mixolydian mode is the fifth degree mode of the major scale.</li>
    <li>In other words, its scale is the major scale starting from the fifth note of the major scale.</li>
    <li>Its intervals are T-T-S-T-S-S-T.</li>
  </ul>
)

const soundsLike = () => (
  <p>
    The major scale on cocaine. Just take the major scale and flatten the seventh and you've
    got a totally different beast. It's screaming blues, it's classic rock, hard rock, it's the
    scale I use more than any other.
  </p>
)

const spotIt = () => (
  <p>
    You can wang a Mixolydian phrase in anywhere there's a dominant chord (a 7, 9 or 13 chord).
    This means you can play it over any progression with a V chord. It works well over a V-IV-I.
    It's probably most commonly associated with the twelve bar blues, where every chord is a dominant.
    Just remember that with the changing of the chords in your 12 bar progression, the key changes.
    This is because as a general rule, a dominant chord is always the V and can be used to determine the key.
    For example, if you have a 12 bar in E, when you play that E7 the home key is A.
    When you then hit an A7, you're really saying A is the V chord and the home key is D.
  </p>
)

const soloOverIt = () => (
  <p>
    You can't go wrong with this one - slide up from the minor 7 to the octave, bend a minor third up to the major third,
    throw in double stops, whammy dips and bends all over the shop, just go wild and have a really great time.
  </p>
)

const hearIt = () => (
  <ul>
    <li>I'm Tore Down - Eric Clapton</li>
  </ul>
)

const title = () => <div className='subtitle'>Mixolydian</div>

export default Mixolydian
