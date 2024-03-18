import React, { useState, useEffect } from 'react';
import './App.css';
import { jsPDF } from "jspdf";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Load notes from local storage 
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes to local storage whenever 'notes' state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Handle notes creation
  const handleCreateNote = () => {
    if (title && content) {
      const newNote = { id: Date.now(), title, content };
      setNotes([...notes, newNote]);
      setTitle('');
      setContent('');
    }
  };

  // Handle notes deletion
  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  // Generate PDF document containing saved note
  const handleDownloadNote = (note) => {
    const doc = new jsPDF();
    doc.text(note.title, 10, 10);
    doc.text(note.content, 10, 20);
    doc.save(`${note.title}.pdf`);
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Saved Notes</h2>
        <input
          className='searchBar'
          type="text"
          placeholder="Search Notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="saved-notes">
          {filteredNotes.map((note) => (
            <div key={note.id} className="note">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button className="download" onClick={() => handleDownloadNote(note)}>Download</button>
              <button className="delete" onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <div className="notes-container">
        <h2>Add New Notes</h2>
        <input
          type="text"
          placeholder="Notes Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Notes Content"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="save-button" onClick={handleCreateNote}>Save Notes</button>
      </div>
    </div>
  );
}

export default App;
