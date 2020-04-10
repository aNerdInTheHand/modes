import React from 'react'

const renderTable = chords => {
  console.log(chords)
  return (<table className='mode-table'>
    <tbody>
      {chords.map((row, i) => renderTableRow(row, i))}
    </tbody>
  </table>)
}

const renderTableRow = (row, i) => (
  <tr key={`tr-${i}`}>
    <td key={row.note}>{row.note}</td>
    <td key={`${row.note}-${i}`}>{row.chords}</td>
  </tr>
)

export default props => (
  <div className={`mode-overview mode-overview-${props.modeName}`}>
    <h3>The {props.modeName} Mode</h3>
    {renderTable(props.chords)}
  </div>
)
