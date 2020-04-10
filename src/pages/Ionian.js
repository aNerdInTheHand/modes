import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'

const Ionian = props => <Page content={() => content(props)} title={() => title()}></Page>

const content = () => (
  <div className='mode-section'>
    <ModeOverview modeName={'Ionian'} />
  </div>
)

const title = () => <div className='subtitle'>Ionian</div>

export default Ionian
