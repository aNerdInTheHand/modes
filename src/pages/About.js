import React from 'react'
import Page from '../components/Page'

const About = () => <Page content={() => content()} title={() => title()} />

const content = () => (
  <div className='modes-101'>
    <p>
      So what are modes? Well, Wikipedia defines a mode as <i className='quote'>a type of musical scale coupled with a set of characteristic melodic behaviors.</i>
      That sounds easy enough, but it's the <i>second</i> part of that definition that often gets overlooked. I'll explain why this is important, but first, we'll look at the modes as scales.
      A scale is just a series of notes defined by the interval (either a tone or a semitone) between each step.
      The modes of the major scale are simply, when taken in isolation, the seven notes of the major scale starting from each degree (i.e. note) of the scale.
      If we start with a C major scale, this means that every mode will have the same notes (C, D, E, F, G, A, B), but the interval breakdown of the scale will be different.
      So the first degree mode of C will be C-D-E-F-G-A-B, the second degree mode will be D-E-F-G-A-B-C and so on.
      Notice that the notes are the same, but the spacing of the intervals between them is different.
      This is because the intervals between C-D-E-F-G-A-B are tone-tone-semitone-tone-tone-tone-semitone, but between D-E-F-G-A-B-C the intervals are tone-semitone-tone-tone-tone-semitone-tone.
    </p>
    <p>
      Hopefully you can see now how the notes of the modes of a given key don't change.
      If a progression is in the key of C, there are seven modal scales available to you, all featuring the same seven notes.
    </p>
    <p>
      This is a very easy place to get confused!
      You'd be forgiven for wondering how playing all the same notes but starting from a different point is any different to playing 'non-modally'.
      But that's kind of the point - it's not. Knowing the modal scales is just the starting point for playing modally.
      What's more important is knowing which notes in the scale provide the 'colour', and knowing when to use them.
      So pick a key below and let's have a look at the different modes in all their glory and how we can use them.
    </p>
  </div>
)

const title = () => <div className='subtitle'>Modes 101</div>

export default About
