import React from 'react';
import './NoteList.css';

const NoteList = ({ notes, deleteNote }) => {
    const noteStyle = {
        backgroundColor: '#fff',
    };

    return (
        <div className='note-list'>
            <h1>All notes</h1>
            {notes.map((note, index) => (
                <div key={index} className='note' style={noteStyle}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <button onClick={() => deleteNote(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default NoteList;

