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
  return chordArray.slice(startIndex,7,0).concat(chordArray[chordArray.length - startIndex])
}
export const getIonianChords = key => makeChordArray(key, 0)
export const getDorianChords = key => makeChordArray(key, 1)
export const getPhrygianChords = key => makeChordArray(key, 2)
export const getLydianChords = key => makeChordArray(key, 3)
export const getMixolydianChords = key => makeChordArray(key, 4)
export const getAeolianChords = key => makeChordArray(key, 5)
export const getLocrianChords = key => makeChordArray(key, 6)
const ionianArray = [{note:'C',chords:majorChords},{note:'D',chords:minorChords},{note:'E',chords:minorChords},{note:'F',chords:fourthChords},{note:'G',chords:dominantChords},{note:'A',chords:minorChords},{note:'B',chords:halfDimChords}]
const dorianArray = ionianArray.slice(1,7,0).concat(ionianArray[0])
const phrygianArray = dorianArray.slice(1,7,0).concat(dorianArray[0])
const lydianArray = phrygianArray.slice(1,7,0).concat(phrygianArray[0])
const mixolydianArray = lydianArray.slice(1,7,0).concat(lydianArray[0])
const aeolianArray = mixolydianArray.slice(1,7,0).concat(mixolydianArray[0])
const locrianArray = mixolydianArray.slice(1,7,0).concat(mixolydianArray[0])
export const ionianChords = ionianArray
export const dorianChords = dorianArray
export const phrygianChords = phrygianArray
export const lydianChords = lydianArray
export const mixolydianChords = mixolydianArray
export const aeolianChords = aeolianArray
export const locrianChords = locrianArray
