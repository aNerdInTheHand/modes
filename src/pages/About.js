import React, { useState } from 'react'

const About = props => {
  const [showContent, setShowContent] = useState(false)
  return (
    <div className='section'>
      <div onClick={() => setShowContent(!showContent)}>
        {showContent
          ? returnContent()
          : returnTitle()
        }
      </div>
    </div>
  )
}

const returnContent = () => (
  <p>
    So what are modes? Well, Wikipedia defines a mode as <cite>a type of musical scale coupled with a set of characteristic melodic behaviors</cite>.
    That sounds easy enough, but it's the <i>second</i> part of that definition that often gets overlooked. I'll explain why this is important, but first, we'll look at the modes as scales.
  </p>
)

const returnTitle = () => <div class='subtitle'>Modes 101</div>

export default About
