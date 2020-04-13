import React from 'react'
import Panel from '../components/Panel'

const Modes102 = () => <Panel content={() => content()} title={() => title()} />

const content = () => (
  <div className='modes-102'>
    <p>
      Or is it modes 201..? Either way, once you're familiar with the basic concept of modes,
      you can start to think about how to use them effectively. It's worth pointing out at this
      stage that you'll often spot modal progressions within songs, but they may not apply to the
      whole song. After all, keys change, you might want to throw dominant III chords in, accidentals occur.
      So when looking for modal sections, try to look at short sections where you may spot modal themes.
    </p>
    <p>
      The next thing, and probably the single most important thing when thinking modally,
      is that <em>context is everything</em>. We know that, given a key signature, all of the
      modes of that major scale will consist of the same notes. That means you could play any
      of the modal scales over any of the chords in the song, and it would be musically correct.
      Would it be modal though?
    </p>
    <p>
      Let's consider a V-IV-I progression in C. Let's say the chords are simply G-F-C.
      If you skip ahead to the Mixolydian panel below, you'll see that V-IV-I works well
      as a base for a Mixolydian scale. So you play a G Mixolydian pattern over that progression
      and you think, well, this is just a C major scale really, isn't it? Well, hopefully this
      is where the penny will start to drop. It's not enough to simply play the major scale but
      start on a different note, you have to think about the modal context.
    </p>
    <p>
      But what does it all <em>mean</em>, Basil? Well, there are certain notes in each modal scale
      that give them all a unique sound and feel (and possibly taste). In the Mixolydian mode, the
      really important notes are the major third and the minor seventh. The third is always important
      as it determines if your scale is major or minor. In the Mixolydian, the minor seventh is what
      distinguishes the scale from the major scale, and gives it that cool bluesy feel.
    </p>
    <p>
      Ok, cool, so we're going to emphasise the third and seventh of our G Mixolydian scale - that's
      a B and an F. But there are things we can do with the progression to really anchor down that
      G Mixolydian feel. We could keep our V-IV-I, but make sure we use those notes in all of our chords,
      which will mean we can really play on that B and F in our licks. So we could make our G a G7
      (G-B-D-F), our F a F/G (G-F-A-C) and our C a Csus4 (C-F-G) or Cmaj7 (C-E-G-B) or just a C/G (G-C-E-G).
      Don't force it though - notice I didn't add a B to our F chord - we don't want the Lydian mode creeping
      into our Mixolydian party, and that's what that #4 (B being a #4 of F) would want to do.
    </p>
    <p>
      We'll look at more specific examples of this below - for now, pick a key and let's dive into the modes.
    </p>
  </div>
)

const title = () => <div className='subtitle'>Modes 102</div>

export default Modes102
