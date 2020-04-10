import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'
import { phrygianChords } from '../constants/chords'

const Phrygian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview
      modeName={'Phrygian'}
      chords={phrygianChords}
    />
  </div>
)

const title = () => <div className='subtitle'>Phrygian</div>

export default Phrygian
