import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'

const Dorian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <p className='mode-section'>
    <ModeOverview />
  </p>
)

const title = () => <div className='subtitle'>Dorian</div>

export default Dorian
