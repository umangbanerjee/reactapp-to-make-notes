import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      const newNote = { id: Date.now(), title, content };
      setNotes([...notes, newNote]);
      setTitle('');
      setContent('');
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const downloadNote = (note) => {
    const element = document.createElement('a');
    const file = new Blob([note.title + '\n\n' + note.content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'note.txt';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <center><div className="title"><b>Simple Notes Website</b></div></center>
      <div className="container">
        <div className="sidebar">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button className="save-btn" onClick={addNote}>Save Note</button>
        </div>
        <div className="notes-container">
          {notes.map((note) => (
            <div key={note.id} className="note">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button className="download-btn" onClick={() => downloadNote(note)}>Download</button>
              <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}