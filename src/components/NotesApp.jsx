import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import SearchBar from './SearchBar';
import HubIcon from '@mui/icons-material/Hub';
import './NotesApp.css';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredNotes = notes.filter((note) => {
    const noteText = note.title.toLowerCase() + note.content.toLowerCase();
    return noteText.includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h1><HubIcon/> NoteHub</h1>
      <SearchBar handleSearch={handleSearch} />
      <NoteForm addNote={addNote} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
};

export default NotesApp;
