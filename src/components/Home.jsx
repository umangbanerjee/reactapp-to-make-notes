import React, { useState, useEffect } from 'react';
import Post from './NotesPart/Post';
import Notes from './NotesPart/Notes';
import SideBar from './SideBarPart/SideBar'; 

export default function Home() {
    const [notes, setNotes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => { 
        const savedNotes = JSON.parse(localStorage.getItem('notes'));
        if (savedNotes) {
            setNotes(savedNotes);
        }
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
    }

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    return (
        <div>
            <SideBar />
            <Notes addNote={addNote} handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
            <Post notes={notes} deleteNote={deleteNote} filteredNotes={notes.filter((note) => 
                note.title.toLowerCase().includes(searchQuery.toLowerCase()))} />
        </div>
    );
}
