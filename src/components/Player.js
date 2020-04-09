import React, { useState, useEffect } from 'react'

const useAudio = audioPath => {
  const [audio] = useState(new Audio(audioPath))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
      playing ? audio.play() : audio.pause()
    },
    [playing]
  )

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, toggle]
}

const Player = ({ audioPath }) => {
  const [playing, toggle] = useAudio(audioPath)

  return (
    <div>
      <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  )
}

export default Player
