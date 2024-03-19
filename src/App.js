import React from 'react'
import Navbar from '../../reactapp-to-make-notes/src/components/Navbar'
import Notes from '../../reactapp-to-make-notes/src/components/Notes'
import { useState } from 'react'
import styles from './App.module.css'

export default function App() {
    const [currentNote, setCurrentNote] = useState({ title: "", text: "" });
    const [arrNotes, setArrNotes] = useState([]);

    return (
        <div className={styles.box}>
            <Navbar note={currentNote} setNote={setCurrentNote} arrNotes={arrNotes} setArrNotes={setArrNotes}></Navbar>
            <Notes note={currentNote} setNote={setCurrentNote} arrNotes={arrNotes} setArrNotes={setArrNotes}></Notes>
        </div>
    );
}
