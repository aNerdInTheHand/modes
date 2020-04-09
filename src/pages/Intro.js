import React from 'react'
import Page from '../components/Page'

const Intro = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <p>
    Modes can be a confusing aspect of music theory, particularly when approaching them as a guitarist who has been used to simply learning scales. Ok, one scale, the trusty minor pentatonic. Maybe the blues scale. Natural minor if you want to get fancy.
    Then one day you hear somebody talking about 'modes'. <i>Modes</i> you think. Sounds interesting. So you search <a
          className="App-link"
          href="https://ecosia.org/search?q=modes"
          target="_blank"
          rel="noopener noreferrer"
        >
          ecosia
        </a> and three days later you're crying and aren't even sure what a guitar is any more.
    Why? Because there's just so much information, claims and counter claims, fake news and scholarly arguments about what modes are and what they aren't. So I thought what the hell, one more explanation can't hurt, and here you are.
  </p>
)

const title = () => <div className='subtitle'>What is this page?</div>

export default Intro
