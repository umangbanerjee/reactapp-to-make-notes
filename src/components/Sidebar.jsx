import './Sidebar.css';

const Sidebar = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add Note</button>
      </div>
      <div className='sidebar-notes'>
        {notes.map((note) => (
          <div
            key={note.id}
            className={`sidebar-note ${note.id === activeNote && 'active'}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className='sidebar-note-title'>
              <strong>{note.body}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;