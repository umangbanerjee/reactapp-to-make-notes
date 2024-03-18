import React, { useState } from 'react';
import './App.css';

 export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSaveNote = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      const newNote = { id: Date.now(), title, content };
      setNotes([...notes, newNote]);
      setTitle('');
      setContent('');
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleDownloadNote = (note) => {
    const element = document.createElement('a');
    const file = new Blob([`Title: ${note.title}\nContent: ${note.content}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${note.title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
   <center> <div className="name"><b>Notes App</b></div></center>
    <div className="app">
      <div className="sidebar">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="save-button" onClick={handleSaveNote}>Save</button>
      </div>
      <div className="notes-container">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button className="delete-button" onClick={() => handleDeleteNote(note.id)}>Delete</button>
            <button className="download-button" onClick={() => handleDownloadNote(note)}>Download</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}