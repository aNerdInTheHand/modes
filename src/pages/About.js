import React from 'react'
import Page from '../components/Page'

const About = () => <Page content={() => content()} title={() => title()} />

const content = () => (
  <div className=''>
    So what are modes? Well, Wikipedia defines a mode as <blockquote citation=''>a type of musical scale coupled with a set of characteristic melodic behaviors</blockquote>.
    That sounds easy enough, but it's the <i>second</i> part of that definition that often gets overlooked. I'll explain why this is important, but first, we'll look at the modes as scales.
    A scale is just a series of notes defined by the interval (either a tone or a semitone) between each step.
    The modes of the major scale are simply, when taken in isolation, the notes of the major scale starting from each degree of the scale.
    If we start with a C major scale, this means that every mode will have the same notes (C, D, E, F, G, A, B), but the interval breakdown of the scale will be different.
  </div>
)

// const ionian = () => (
//   <div className=''></div>
// )

const title = () => <div className='subtitle'>Modes 101</div>

export default About
