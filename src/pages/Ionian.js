import React from 'react'
import Page from '../components/Page'
import ModeOverview from '../components/ModeOverview'
import { ionianChords } from '../constants/chords'

const Ionian = props => <Page content={() => content(props)} title={() => title()}></Page>

const content = () => {
  console.log('***', ionianChords)
return (
  <div className='mode-section'>
    <ModeOverview
      modeName={'Ionian'}
      chords={ionianChords} />
  </div>
)}

const title = () => <div className='subtitle'>Ionian</div>

export default Ionian
