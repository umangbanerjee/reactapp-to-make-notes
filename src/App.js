import React,{useState} from 'react'
import Navbar from './Components/Head/Navbar'
import TextBody from './Components/Body/TextBody'
import './App.css'
import Savetext from './Components/Body/Savetext'
export default function App() {

    const [notes, setNotes] = useState([]);

    const handleSaveNote = (newNote) => {
        setNotes([...notes, { ...newNote, id: Date.now() }]);
    };

    const handleDeleteNote = (noteId) => {
        setNotes(notes.filter((note) => note.id !== noteId));
    };
    return (
        <>
            <Navbar/>
            <div className='container'>
                <Savetext  notes={notes} onDelete={handleDeleteNote} />
                <TextBody  onSave={handleSaveNote}/>
            </div>
            
        </>

    )
}
