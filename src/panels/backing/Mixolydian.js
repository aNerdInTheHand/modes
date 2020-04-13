import React from 'react'
import Panel from '../../components/Panel'
import Player from '../../components/Player'

const content = () => <Player audioPath={'../audio/Mixolydian-lead.wav'} />
const title = () => <div className='subtitle'>Mixolydian Example</div>

export default props => (
  <Panel content={() => content()} title={() => title()} />
)
