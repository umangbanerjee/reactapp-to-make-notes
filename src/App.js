import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import Main from "./components/Main";
import Sidebar from "./components/SideBar";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
    setActiveNote(null);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => notes.find(({ id }) => id === activeNote);

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}
