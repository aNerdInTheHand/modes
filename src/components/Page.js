import React, { useState } from 'react'

const Page = props => {
  const [showContent, setShowContent] = useState(false)
  const collapseSymbol = '-'
  const expandSymbol = '+'
  const borderColor = showContent ? '#c0ff33' : '#b000b5'
  const sectionStyle = {
    border: `1px solid ${borderColor}`,
  }
  const symbolStyle = {
    color: '#bada55',
    'fontWeight': '800'
  }
  return (
    <div
      className='section' onClick={() => setShowContent(!showContent)}
      style={sectionStyle}
      >
      <span
        className='expand-collapse'
        role='img'
        aria-label='expand or collapse'
        style={symbolStyle}
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
