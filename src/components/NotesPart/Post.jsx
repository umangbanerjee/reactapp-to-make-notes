import React from 'react';
import styles from './Post.module.css';
import { jsPDF } from 'jspdf';

const Post = ({ filteredNotes, deleteNote }) => {
    const handleDeleteNote = (index) => {
        deleteNote(index);
    };

    const handleDownloadPDF = (title) => {
        generatePDF(title);
    };

    const generatePDF = (title) => {
        const doc = new jsPDF();
        let yPos = 10;

        filteredNotes.forEach((note, index) => {
            const text = `Title: ${note.title}\nContent: ${note.content}`;
            doc.text(text, 10, yPos);
            yPos += 20;
        });

        doc.save(`${title}.pdf`);
    };

    return (
        <div>
            <div className={styles.cardPost}> 
                {filteredNotes.map((note, index) => (
                    <div className={styles.card} key={index}>
                        <h3 className={styles.title}>{note.title}</h3>
                        <p className={styles.content}>{note.content}</p>
                        <button onClick={() => handleDeleteNote(index)}>Delete</button>
                        <button onClick={() => handleDownloadPDF(note.title)}>Download PDF</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Post;
