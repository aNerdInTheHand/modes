import React from 'react'
import Panel from '../components/Panel'

const Info = () => <Panel content={() => content()} title={() => title()} />

const content = () => (
  <div>
    <p>
      Ok, let's dive into the modes of the major scale, one by one.
      You're going to pick a key (for simplicity I've just got the sharp keys for now), then by clicking or tapping on any of the panels below, you'll get a list of the notes in the scale and the chords you can build from each note.
      Hopefully it'll come as no surprised to you that, once you've picked a key, the notes of all the modes will be the same, just from a different starting point.
      The chords most associated with the mode will be highlighted in a future release.
    </p>
    <p>
      Note that I've used the American notation style of a capital 'M' denoting major, so for example major 7 is written M7.
      For full disclosure, this is my own interpretation of my understanding of modal music.
      All examples, ramblings and mistakes are my own - read at your own peril.
    </p>
    <p>
      So, pick a key, any key. No, not that one, an easy one please:
    </p>
  </div>
)

const title = () => <div className='subtitle'>Introduction</div>

export default Info
