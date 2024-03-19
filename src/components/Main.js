import ReactMarkdown from "react-markdown";
import styles from "./Main.module.css"

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className={styles.noActiveNote}>No Active Note</div>;

  return (
    <div className={styles.main}>
      <div className={styles.mainNoteEdit}>
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <div className={styles.mainNotePreview}>
        <h1 className={styles.previewTitle}>{activeNote.title}</h1>
        <ReactMarkdown className={styles.markdownPreview}>
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;