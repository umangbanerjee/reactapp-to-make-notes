import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Notes.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SearchIcon from '@mui/icons-material/Search';

function Notes({ addNote, handleSearchChange, searchQuery  }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(''); 

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (value) => {
        setContent(value);
    };

    const stripHtmlTags = (html) => {
        return html.replace(/<[^>]*>?/gm, '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() !== '' && content.trim() !== '') {
            const plainTextContent = stripHtmlTags(content);
            addNote({
                title,
                content: plainTextContent,
            });
            setTitle('');
            setContent('');
        }
    };

    return (
        <>
            <div className={styles.note}>
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className={styles.inputBox}
                />
            </div>

            <br />
            <form onSubmit={handleSubmit} className={styles.noteForm}>
                <label>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </label>
                <ReactQuill
                    value={content}
                    onChange={handleContentChange}
                    placeholder="Content"
                    className={styles.quill}
                />
                <br /><br /><br />
                <button type="submit">Save</button>
            </form>
        </>
    );
}

export default Notes;
