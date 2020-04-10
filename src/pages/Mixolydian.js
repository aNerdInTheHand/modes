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
    />
  </div>
)

const title = () => <div className='subtitle'>Mixolydian</div>

export default Mixolydian
