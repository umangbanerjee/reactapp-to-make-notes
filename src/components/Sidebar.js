import styles from "./Sidebar.module.css"
const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarheader}>
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className={styles.sidebarnotes}>
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div 
            className={`styles.sidebarnote ${id === activeNote && "active"}`} 
            onClick={() => setActiveNote(id)}
          >
            <div className={styles.sidebarNoteTitle}>
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteNote(id)}>Delete</button>
            </div>

            <p>{body && body.substr(0, 20) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;