import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'

const Aeolian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <p className='mode-section'>
    <ModeOverview />
  </p>
)

const title = () => <div className='subtitle'>Aeolian</div>

export default Aeolian
