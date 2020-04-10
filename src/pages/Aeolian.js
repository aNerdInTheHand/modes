import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'
import { aeolianChords } from '../constants/chords'

const Aeolian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview
      modeName={'Aeolian'}
      chords={aeolianChords}
    />
  </div>
)

const title = () => <div className='subtitle'>Aeolian</div>

export default Aeolian
