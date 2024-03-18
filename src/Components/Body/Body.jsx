

import { useEffect, useState } from "react";
// import Header from "../Header/Header";
import uuid from "react-uuid";
import Main from '../main/Main';
import Sidebar from "../sidebar/Sidebar";
import style from './Body.module.css';


function Body() {
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
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };


  const onUpdateNoteTitle = (id, newTitle) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, title: newTitle } : note
      )
    );
  };


  const onUpdateNoteBody = (noteId, newBody) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, body: newBody } : note
    );
    setNotes(updatedNotes);
  };
  return (
    <div className="App">
      <div className="bg-dark bg-gradient ">
      <nav class="navbar ">
        <div class="container-fluid ">
          <a class="navbar-brand flex " href="#">
            <img
              src="https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Logo"
              width="80"
              height="60"
              class="d-inline-block align-text-top rounded"
            />
            <h1 className={style.noteHeading}>Notes</h1>
          </a>
        </div>
      </nav>
    </div>
      {/* <Header/> */}
      <div className={style.header}>
      <div className={style.sidebar}><Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        onUpdateNote={onUpdateNote}
        onUpdateNoteTitle={onUpdateNoteTitle}
      /></div>
      <div className={style.note}><Main onDeleteNote={onDeleteNote} activeNote={getActiveNote()} onUpdateNoteBody={onUpdateNoteBody} />
    </div></div></div>
  );
}

export default Body;

