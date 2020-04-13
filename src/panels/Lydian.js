import React from 'react'
import Panel from '../components/Panel'
import ModeOverview from '../components/ModeOverview'
import { getChords } from '../constants/chords'

const Lydian = props => <Panel content={() => content(props)} title={() => title()} />

const content = props => (
  <div className='mode-section'>
    <ModeOverview
      modeName={'Lydian'}
      chords={getChords(props.selectedKey, 3)}
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
    <li>The Lydian mode is the fourth degree mode of the major scale.</li>
    <li>In other words, its scale is the major scale starting from the fourth note of the major scale.</li>
    <li>Its intervals are T-T-T-S-T-T-S.</li>
  </ul>
)

const soundsLike = () => (
  <p>
    Ah yes, the mode every guitarist wants to master. The Lydian mode is a proper dreamboat of a mode.
    By which I mean it has a 'dreamlike' quality, an ethereal, almost otherwordly quality that induces transports of delight and-
    oops, sorry, got carried away a bit there. Easy done with this belter of a mode.
  </p>
)

const spotIt = () => (
  <p>
    There are progressions to look out for that will enable you to use the Lydian mode,
    but to really get the most out of it you're looking for the IV chord in your progression to have
    a #11 (which is enharmonic with the #4 in the scale.) Ideally you're looking for the IV chord to be followed by a V,
    but resist the urge to then resolve that V back to the I. You <i>want</i> that slightly uneasy,
    unresolved feeling. The best way to get into the Lydian mode is to try it over a repeating IV-V vamp,
    especially if you can throw in a maj7#11 on the IV chord.
  </p>
)

const soloOverIt = () => (
  <p>
    When you get that IV-V loop, don't just mindlessly trill that #4. It's the tempting thing to do
    as it's the killer note of the scale, but what really gives you the benefit is to run up the scale
    from the root. Hit the root... then the perfect second... then the major third... nice, ok, lovely major scale...
    NOW - BAM! - hit that #4. It's that illusion of playing a basic major scale but then knowing when to
    leverage the dreamlike qualities of that #4 that will make you sound like a Lydian god.
    Just remember that it's not always a simple mode to use as that #4 can easily sound jarring.
  </p>
)

const hearIt = () => (
  <ul>
    <li>Flying In A Blue Dream - Joe Satriani</li>
    <li>The Simpsons Theme Song</li>
  </ul>
)

const title = () => <div className='subtitle'>Lydian</div>

export default Lydian
