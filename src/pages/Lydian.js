import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'
import { lydianChords } from '../constants/chords'

const Lydian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview
      modeName={'Lydian'}
      chords={lydianChords}
    />
  </div>
)

const title = () => <div className='subtitle'>Lydian</div>

export default Lydian
