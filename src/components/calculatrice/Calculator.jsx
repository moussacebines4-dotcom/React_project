import React from 'react'

export default function Calculatrice({ note1, note2 }) {
  return (
    <div className='calculatrice'>
      <p>la note de module 1 = {note1} et la note de module 2 = {note2}</p>
      <p>la moyenne est : {(note1 + note2) / 2}</p>
    </div>

  )
}
