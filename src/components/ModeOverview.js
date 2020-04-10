import React from 'react'

export default props => (
  <div className={`mode-overview mode-overview-${props.modeName}`}>
    <h3>The {props.modeName} Mode</h3>
  </div>
)
