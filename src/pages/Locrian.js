import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'

const Locrian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <p className='mode-section'>
    <ModeOverview />
  </p>
)

const title = () => <div className='subtitle'>Locrian</div>

export default Locrian
