import React from 'react'
import Styles from './Savetext.module.css'
export default function Savetext({notes,onDelete}) {
  return (
    <div>
          <div className={Styles.body1}>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => onDelete(note.id)}>Delete</button>
            </li>
          ))}
        </ul>

          </div>
    </div>
  )
}
