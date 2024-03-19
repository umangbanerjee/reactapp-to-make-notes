import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './NoteForm.css';
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer'; // Import necessary functions from react-pdf/renderer

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

  const MyDocument = () => (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </Page>
    </Document>
  );

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div className='title'>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      </div>
      <div className='content'>
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          placeholder="Content"
        />
      </div>
      <button type="submit">Save</button>
      <PDFDownloadLink document={<MyDocument />} fileName={`${title}.pdf`}>
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Save as PDF'
        }
      </PDFDownloadLink>
    </form>
  );
};

export default NoteForm;
