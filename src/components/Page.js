import React, { useState } from 'react'

const Page = props => {
  const [showContent, setShowContent] = useState(false)
  const collapseSymbol = '➖'
  const expandSymbol = '➕'
  const borderColor = showContent ? '#bada55' : '#b000b5'
  const style = { border: `1px solid ${borderColor}`}
  return (
    <div
      className='section' onClick={() => setShowContent(!showContent)}
      style={style}
      >
      <span
        className='expand-collapse'
        role='img'
        aria-label='expand or collapse'
      >
        {showContent ? collapseSymbol : expandSymbol}
      </span>
      <div>
        {showContent
          ? props.content()
          : props.title()
        }
      </div>
    </div>
  )
}

export default Page
