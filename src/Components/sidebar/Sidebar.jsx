import React, { useState } from 'react';
import style from './Sidebar.module.css';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SearchBar from './SearchBar';

const Sidebar = ({
  notes,
  onAddNote,
  activeNote,
  setActiveNote,
  // onUpdateNote,
  onUpdateNoteTitle,
}) => {
  // const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  const [editedTitle, setEditedTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onEditTitle = (id, newTitle) => {
    onUpdateNoteTitle(id, newTitle);
  };

  const handleTitleChange = (id, newTitle) => {
    setEditedTitle(newTitle);
    onEditTitle(id, newTitle);
  };

  const handleSearch = () => {
    // Perform search operation here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="app-sidebar">
      <div className={style.head}>
         <SearchBar onSearch={handleSearch} setSearchTerm={setSearchTerm} />
        {/* <h1>Notes</h1> */}
        <button onClick={onAddNote} className={style.createNote}><DriveFileRenameOutlineIcon />Create New Notes</button>
        <hr />
      </div>
      <div className={style.NotesList}>
        {filteredNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-note ${id === activeNote && 'active'}`}
            onClick={() => setActiveNote(id)}
            key={id}
          >
            <div className={style.createNoteInput}>
              {id === activeNote ? (
                <input
                  type="text"
                  value={editedTitle !== '' ? editedTitle : title}
                  onChange={(e) => handleTitleChange(id, e.target.value)}
                  onBlur={() => setEditedTitle('')} // Reset edited title
                  placeholder="Note Title"
                />
              ) : (
                <strong>{title}</strong>
              )}
            </div>
            <p>{body && body.substr(0, 100) + '...'}</p>
            <small className="note-meta">
              Last Modified{' '}
              {new Date(lastModified).toLocaleDateString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
