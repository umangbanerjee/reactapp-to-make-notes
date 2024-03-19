import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Theme state
  const [searchTerm, setSearchTerm] = useState(''); // Search term state

  useEffect(() => {
    // Load theme preference from local storage (optional for persistence)
    const storedTheme = localStorage.getItem('theme');
    setIsDarkTheme(storedTheme === 'dark');
  }, []);

  useEffect(() => {
    // Save theme preference to local storage (optional for persistence)
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const handleSaveNote = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      const newNote = { id: Date.now(), title, content };
      setNotes([...notes, newNote]);
      setTitle('');
      setContent('');
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleDownloadNote = (note) => {
    const element = document.createElement('a');
    const file = new Blob([`Title: ${note.title}\nContent: ${note.content}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${note.title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <center>
        <div className={`name ${isDarkTheme ? 'dark' : 'light'}`}>
          <b>Notes App</b>
          <button className="theme-toggle" onClick={handleThemeToggle}>
            {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
          </button>
        </div>
      </center>
      <div className={`app ${isDarkTheme ? 'dark' : 'light'}`}>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Notes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <div className="sidebar">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button className="save-button" onClick={handleSaveNote}>Save</button>
        </div>
        <div className="notes-container">
          {/* Update notes with filter based on searchTerm */}
          {notes
            .filter((note) =>
              note.title.toLowerCase().includes(searchTerm) ||
              note.content.toLowerCase().includes(searchTerm)
            )
            .map((note) => (
              <div key={note.id} className="note">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <button className="delete-button" onClick={() => handleDeleteNote(note.id)}>Delete</button>
                <button className="download-button" onClick={() => handleDownloadNote(note)}>Download</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
