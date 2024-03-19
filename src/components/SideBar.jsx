import React, { useState } from "react";

export default function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedNotes = notes
    .filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.lastModified - a.lastModified);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-search">
        <input
          type="text"
          placeholder="Search by Note Heading"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            key={id}
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteNote(id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
