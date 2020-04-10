import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'
import { dorianChords } from '../constants/chords'

const Dorian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview
      modeName={'Dorian'}
      chords={dorianChords} />
  </div>
)

const title = () => <div className='subtitle'>Dorian</div>

export default Dorian
