import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'

const Mixolydian = props => <Page content={() => content()} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview modeName='Mixolydian' />
  </div>
)

const title = () => <div className='subtitle'>Mixolydian</div>

export default Mixolydian
