import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'

const Dorian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview modeName={'Dorian'} />
  </div>
)

const title = () => <div className='subtitle'>Dorian</div>

export default Dorian
