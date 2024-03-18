import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NoteDisplay from './components/NoteDisplay';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: Math.random(),
      body: ''
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onUpdateNote = (text) => {
    const updatedNotes = notes.map((note) =>
      note.id === activeNote ? { ...note, body: text } : note
    );
    setNotes(updatedNotes);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className='App'>
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <NoteDisplay activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
};

export default App;