export const notes = {
  'C': ['C','D','E','F','G','A','B'],
  'G': ['G','A','B','C','D','E','F#'],
  'D': ['D','E','F#','G','A','B','C#'],
  'A': ['A','B','C#','D','E','F#','G#'],
  'E': ['E','F#','G#','A','B','C#','D#'],
  'B': ['B','C#','D#','E','F#','G#','A#'],
  'F#': ['F#','G#','A#','B','C#','D#','E#']
}
const majorChords = 'maj, M7, M9, 6'
const minorChords = 'm, m7, m9'
const dominantChords = 'maj, 7, 9, 13'
const fourthChords = 'maj, maj9, maj7#11'
const halfDimChords = 'm7♭5'
const chords = [
  majorChords,
  minorChords,
  minorChords,
  fourthChords,
  dominantChords,
  minorChords,
  halfDimChords
]
const makeChordArray = (key, startIndex) => {
  const keyChords = notes[key]
  const chordArray = keyChords.map((note, i) => (
    { note, chords: chords[i] }
  ))
  const startArray = chordArray.slice(startIndex, 7, 0)
  const endArray = chordArray.slice(0, startIndex)
  return startArray.concat(endArray)
}
export const getChords = (key, startIndex) => makeChordArray(key, startIndex)
