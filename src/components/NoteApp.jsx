import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import JoditEditor from "jodit-react";

const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [currentTitle, setCurrentTitle] = useState('');
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
    const [editorContent, setEditorContent] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);

        const savedNote = localStorage.getItem('note');
        if (savedNote) {
            setEditorContent(savedNote);
        }
    }, []);
    const editor = useRef(null);


    // useEffect(() => {
    //     const editor = Jodit.make('.editor-box', {
    //         width: 950,
    //         height: 670,
    //         value:{editorContent},
    //         onChange:{setEditorContent},
    //     });
    //     return () => {
    //         editor.destruct(); // Clean up Jodit editor instance on component unmount
    //     };
    // }, []);

    const handleAddNote = () => {
        if (currentTitle.trim() !== '' && editorContent.trim() !== '') {
            const newNote = { title: currentTitle, content: editorContent };
            setNotes([...notes, newNote]);
            setCurrentTitle('');
            setEditorContent('');
            setSelectedNoteIndex(null);
            // Update local storage with the new note
            localStorage.setItem('notes', JSON.stringify([...notes, newNote]));
        }
    };

    const handleOpenNote = (index) => {
        setCurrentTitle(notes[index].title);
        setEditorContent(notes[index].content);
        setSelectedNoteIndex(index);
    };

    const handleSaveNote = () => {
        if (selectedNoteIndex !== null) {
            const updatedNotes = [...notes];
            const updatedContent = editor.current.value; // Retrieve the updated content from the Jodit editor
            updatedNotes[selectedNoteIndex] = { title: currentTitle, content: updatedContent };
            setNotes(updatedNotes);
            // Update local storage with the updated notes
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
        }
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    
    const handleTitleChange = (e) => {
        setCurrentTitle(e.target.value);
    };

    return (
        <div className="wrapper">
            <div className="notes">
                <ul>
                    <li>
                        <div className='head-name'>
                            <ul className='btn'>
                                <h2>Notes</h2>

                                {/* <li><button onClick={handleSearch}>Search</button></li> */}
                            </ul>
                            <br />
                        </div>
                        <div className='head'>
                            <div className='input-field'>

                                <input
                                    type="text"
                                    value={currentTitle}
                                    placeholder='Enter title here...'
                                    onChange={handleTitleChange}
                                    required
                                ></input>
                                <button onClick={handleAddNote}>Save</button>
                            </div>

                            <br />
                        </div>

                    </li>
                    <li>
                        <div className='lists'>
                            <ul className='notesList'>
                                {notes.map((note, index) => (
                                    <li key={index} onClick={() => handleOpenNote(index)}>
                                        {note.title}
                                        {selectedNoteIndex !== null && (
                                            <button onClick={handleSaveNote}>Update</button>
                                        )}
                                        <button onClick={() => handleDeleteNote(index)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="">
                <div>
                    <JoditEditor
                        value={editorContent}
                        onChange={setEditorContent}
                        className="editor-box"
                        ref={editor}
                        config={{
                            buttons: [
                                'bold',
                                'italic',
                                "strikethrough",
                                'underline',
                                "|",
                                "superscript",
                                "subscript",
                                "align",
                                "|",
                                "font",
                                "paragraph",
                                "|",
                                "fontsize",
                                "brush",
                                '|',
                                'ul',
                                'ol',
                                "|",
                                "outdent",
                                "indent",
                                "|",
                                "hr",
                                "eraser",
                                "|",
                                'image',
                                'link',
                                'table',
                                "|",
                                'selectall',
                                'print',
                            ],
                            height: 670,
                            width: 950
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteApp;
