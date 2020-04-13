import React from 'react'
import Panel from '../components/Panel'
import ModeOverview from '../components/ModeOverview'
import { getChords } from '../constants/chords'

const Dorian = props => <Panel content={() => content(props)} title={() => title()} />

const content = props => (
  <div className='mode-section'>
    <ModeOverview
      modeName={'Dorian'}
      chords={getChords(props.selectedKey, 1)}
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
    <li>Its intervals are T-S-T-T-T-S-T.</li>
  </ul>
)

const soundsLike = () => (
  <p>
    The Dorian mode to me has a Latin vibe with a little bit of jazz.
    Latin probably because I associate this mode heavily with Carlos Santana, and jazz because it's the ii-V-I mode,
    and every jazz piece is legally obliged to have at least 17 ii-V-I turnarounds.
  </p>
)

const spotIt = () => (
  <p>
    This is the ii-V-I mode. When you see ii-V-I, hit that Dorian button. Hard.
  </p>
)

const soloOverIt = () => (
  <p>
    The major 6 in this scale is what separates it from a natural minor and in my opinion you can't really overplay that note.
    I like to slide up into it from a minor 6. Don't neglect the minor 3 either as it provides a nice contrast with the major 6.
    If you can, pay attention to the notes in the chords. I know that's easier said than done though so hopefully the above advice helps you just utilise the scale.
  </p>
)

const hearIt = () => (
  <p>
    Any and all jazz standards, or if jazz isn't your bag, just listen to the riff of Oye Como Va by Santana.
    And if Santana isn't your bag, I really don't think we can be friends any more.
  </p>
)

const title = () => <div className='subtitle'>Dorian</div>

export default Dorian
