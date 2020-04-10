import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'

const Lydian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview modeName={'Lydian'} />
  </div>
)

const title = () => <div className='subtitle'>Lydian</div>

export default Lydian
