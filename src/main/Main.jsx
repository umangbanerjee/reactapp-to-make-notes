import React, { useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Main = ({ activeNote, onUpdateNote }) => {
  const pdfContentRef = useRef(null);

  const handleDownloadPDF = () => {
    if (!pdfContentRef.current) return;

    html2canvas(pdfContentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('downloaded-file.pdf');
    });
  };

  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <div ref={pdfContentRef} id="pdf-content">
        {/* Placeholder for PDF content */}
        {/* You can add the content that you want to convert to PDF here */}
        {activeNote.title}
        {activeNote.body}
      </div>
      <button type="submit" className="download" onClick={handleDownloadPDF}> <img src="https://t3.ftcdn.net/jpg/00/83/51/80/360_F_83518047_z53XTOWgvzSGDSevOHntbRCSjP33ocfe.jpg" alt="download" height={50}/> </button>
    </div>
  );
};

export default Main;
