import React from 'react'

const renderTable = chords => (
  <table className='mode-table'>
    {chords.map(row => renderTableRow({row}))}
  </table>
)

const renderTableRow = ({row}) => (
  <tr>
    <td key={row.note}>{row.note}</td>
    <td key={row.chords}>{row.chords}</td>
  </tr>
)

export default props => (
  <div className={`mode-overview mode-overview-${props.modeName}`}>
    <h3>The {props.modeName} Mode</h3>
    {renderTable(props.chords)}
  </div>
)
