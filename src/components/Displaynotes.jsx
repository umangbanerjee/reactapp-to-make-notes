import React, { useState } from 'react';
import styles from './Displaynotes.module.css';
import { useNavigate } from 'react-router-dom';

export default function Displaynotes() {
    const [data, setData] = useState([]);
    const [notes, setNotes] = useState("");
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
    const navigate = useNavigate();

    function handlechange(e) {
        let id = e.target.id;
        if (id === 'name') {
            setNotes(e.target.value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const updatedData = [...data];
        if (selectedNoteIndex !== null) {
            // Update existing note
            updatedData[selectedNoteIndex] = notes;
        } else {
            // Add new note
            updatedData.push(notes);
        }
        setData(updatedData);
        localStorage.setItem('notes', JSON.stringify(updatedData));
        setNotes("");
        setSelectedNoteIndex(null);
    }

    function handleDelete(index) {
        const updatedData = data.filter((n, i) => i !== index);
        setData(updatedData);
        localStorage.setItem('notes', JSON.stringify(updatedData));
    }

    function handleView(index) {
        setNotes(data[index]);
        setSelectedNoteIndex(index);
    }

    function handleEdit() {
        setSelectedNoteIndex(null);
    }

    return (
        <div>
            <div className={styles.border}>
                <div className={styles.list}>
                    <h1>Your Notes List:</h1>
                    <div>
                        {data.map((value, index) => (
                            <ul key={index}>
                                <li>
                                    {/* Render notes with markdown-like formatting */}
                                    <div dangerouslySetInnerHTML={{ __html: value }}></div>
                                    <button type='button' className='deletebtn' onClick={() => handleDelete(index)}>Delete</button>
                                    <button type='button' onClick={() => handleView(index)}>View</button>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>

                <div className={styles.notes}>
                    <h1>{selectedNoteIndex !== null ? "Edit Your Note" : "Write Your Notes here:"}</h1>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            name=""
                            id="name"
                            cols="90"
                            rows="40"
                            className={styles.notes1}
                            value={notes}
                            onChange={handlechange}
                        ></textarea>
                        <button type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
