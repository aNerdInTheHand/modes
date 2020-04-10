import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'

const Phrygian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview modeName={'Phrygian'} />
  </div>
)

const title = () => <div className='subtitle'>Phrygian</div>

export default Phrygian
