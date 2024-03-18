import jsPDF from 'jspdf';
import './NoteDisplay.css';

function NoteDisplay ({activeNote, onUpdateNote}){
  if (!activeNote){
    return <div className='no-active-note'> No Active Note </div>;
  } 

  const download = () => {
    const pdf = new jsPDF();
    pdf.text(activeNote.body, 10, 10);
    pdf.save('note.pdf');
  };

  return (
    <div className='note-display'>
      <textarea
        value={activeNote.body}
        onChange={(e) => onUpdateNote(e.target.value)}
      ></textarea>
      <button onClick={download}> Download </button>
    </div>
  );
};

export default NoteDisplay;
