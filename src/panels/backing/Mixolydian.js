import React from 'react'
import Panel from '../../components/Panel'
import Player from '../../components/Player'
import Mixolydianlead from '../../audio/Mixolydianlead.wav'

const content = () => <Player audioPath={Mixolydianlead} />
const title = () => <div className='subtitle'>Mixolydian Example</div>

export default props => (
  <Panel content={() => content()} title={() => title()} />
)
