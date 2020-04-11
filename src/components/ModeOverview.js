import React from 'react'

const renderTable = chords => (
  <table className='mode-table'>
    <tbody>
      <tr className='tr-header'>
        <td>Scale</td>
        <td>Chords</td>
      </tr>
      {chords.map((row, i) => renderTableRow(row, i))}
    </tbody>
  </table>
)

const renderTableRow = (row, i) => (
  <tr key={`tr-${i}`} className='tr-data'>
    <td key={row.note}>{row.note}</td>
    <td key={`${row.note}-${i}`}>{row.chords}</td>
  </tr>
)

export default props => (
  <div className={`mode-overview mode-overview-${props.modeName}`}>
    <h3>The {props.modeName} Mode</h3>
    {renderTable(props.chords)}
    <div className='mode-detail'>
      <h3 className='mode-detail-subheader'>
        What is it?
      </h3>
      {props.whatIsIt()}
      <h3 className='mode-detail-subheader'>
        What does it sound like?
      </h3>
      {props.soundsLike()}
      <h3 className='mode-detail-subheader'>
        How do I spot/write {props.article} {props.modeName} progression?
      </h3>
      {props.spotIt()}
      <h3 className='mode-detail-subheader'>
        How do I solo over it?
      </h3>
      {props.soloOverIt()}
      <h3 className='mode-detail-subheader'>
        Where can I hear it?
      </h3>
      {props.hearIt()}
    </div>
  </div>
)
