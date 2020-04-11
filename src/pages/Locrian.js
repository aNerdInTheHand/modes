import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'
import { locrianChords } from '../constants/chords'

const Locrian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview
      modeName={'Locrian'}
      chords={locrianChords}
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
    <li>The Locrian mode is the seventh degree mode of the major scale.</li>
    <li>In other words, its scale is the major scale starting from the seventh note of the major scale.</li>
    <li>Its intervals are S-T-T-S-T-T-T.</li>
  </ul>
)

const soundsLike = () => (
  <p>
    Scary. Unpleasant. Tense. Threatening. There are minor and imperfect intervals all over the shop in this mode.
    There's a minor second, a minor third, a minor fifth, a minor sixth and a minor seventh.
    That's a lot of minor intervals. It's never going to sound 'nice'.
  </p>
)

const spotIt = () => (
  <p>
    This is really tough. It's apparently used a lot in metal but not being much of a metalhead,
    I can't really give you any examples. I could give you examples of songs with possible Locrian riffs,
    but nothing to really back up the fact that they're real Locrian progressions. The problem with this one
    is that the home chord of the mode is the m7♭5 chord that's both a semitone away from the root of the key
    and also one bass note away from being the dominant V chord of the key. It's bloody hard to write anything
    that's truly Locrian - I did give it a shot in a rip off of the Jaws theme and that was enough for me.
  </p>
)

const soloOverIt = () => (
  <p>
    I mean... if you want. You can sort of use it similarly to the Phrygian scale.
    Just remember not to resolve it. If your solo isn't making you feel anxious, you aren't doing it right.
  </p>
)

const hearIt = () => (
  <ul>
    <li>The 'Shark Theme' from Jaws evokes the Locrian mode (though as a two note theme it can't really be classified as modal at all)</li>
  </ul>
)

const title = () => <div className='subtitle'>Locrian</div>

export default Locrian
