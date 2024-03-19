import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './NoteForm.css';
import { saveAs } from 'file-saver'; // Import file-saver for saving PDF
import { Document, Page, Text, StyleSheet } 
from '@react-pdf/renderer'; // Import necessary functions from react-pdf
import { renderToStream } from '@react-pdf/renderer';

const NoteForm = ({ addNote }) => {
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

  const handleSaveAsPDF = async () => {
    const pdfContent = (
      <Document>
        <Page style={styles.page}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </Page>
      </Document>
    );
  
    // Render PDF content to a stream
    const stream = await renderToStream(pdfContent).toBuffer();
  
    // Convert stream to blob
    const blob = new Blob([stream], { type: 'application/pdf' });
  
    // Save PDF file
    saveAs(blob, `${title}.pdf`);
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      padding: 10,
    },
    title: {
      fontSize: 20,
      marginBottom: 10,
    },
    content: {
      fontSize: 12,
    },
  });

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <div className='content'>
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          placeholder="Content"
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={handleSaveAsPDF}>Save as PDF</button>
    </form>
  );
};

export default NoteForm;
