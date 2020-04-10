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
    />
  </div>
)

const title = () => <div className='subtitle'>Locrian</div>

export default Locrian
