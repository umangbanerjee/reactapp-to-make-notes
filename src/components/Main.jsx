import React, { useCallback, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../App.css";
import jsPDF from "jspdf";

export default function Main({ activeNote, onUpdateNote }) {
  const [noteData, setNoteData] = useState({
    title: activeNote ? activeNote.title : "",
    body: activeNote ? activeNote.body : "",
  });

  // Update noteData when activeNote changes
  useEffect(() => {
    setNoteData({
      title: activeNote ? activeNote.title : "",
      body: activeNote ? activeNote.body : "",
    });
  }, [activeNote]);

  const handleChange = useCallback((content) => {
    setNoteData((prevNoteData) => ({
      ...prevNoteData,
      body: content,
    }));
  }, []);

  const handleSave = () => {
    onUpdateNote({
      ...activeNote,
      title: noteData.title,
      body: noteData.body,
      lastModified: Date.now(),
    });
  };

  const handleUpdate = () => {
    onUpdateNote({
      ...activeNote,
      title: noteData.title,
      body: noteData.body,
      lastModified: Date.now(),
    });
    const editor = document.querySelector(".ql-editor");
    editor.focus();
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(noteData.title, 10, 10);
    doc.text(noteData.body, 10, 20);
    doc.save(`${noteData.title}.pdf`);
  };

  return (
    <div className="app-main">
      {/* Heading Input */}
      <input
        type="text"
        value={noteData.title}
        onChange={(e) =>
          setNoteData((prevNoteData) => ({
            ...prevNoteData,
            title: e.target.value,
          }))
        }
        placeholder="Enter Note Heading"
        className="note-heading-input"
      />

      <div className="app-main-note-edit">
        <ReactQuill
          theme="snow"
          value={noteData.body}
          onChange={handleChange}
          modules={{
            toolbar: {
              container: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image", "video"],
                ["clean"],
              ],
            },
          }}
        />
        <div className="button-container">
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
          <button className="update-button" onClick={handleUpdate}>
            Update
          </button>
          <button className="download-button" onClick={handleDownloadPDF}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
