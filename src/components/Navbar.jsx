import React, { useState } from 'react'
import styles from "./Navbar.module.css"

export default function Navbar({ note, setNote, arrNotes, setArrNotes }) {
    const [add, setAdd] = useState(false);

    function handleaddInput(e) {
        e.preventDefault();
        setAdd(!add)
    }
    function handleChange(e) {
        e.preventDefault();
        setNote({ ...note, [e.target.id]: e.target.value })
    }
    function handleClick(e) {
        e.preventDefault();
        if(note.title!==""){
            setArrNotes([...arrNotes, note])
            setNote({title:"",text:""})
        }
        setAdd(false);
    }
    function handleDelete(index){
        setArrNotes(arrNotes.filter((ele,ind)=>ind!==index))
    }
    function handleDisplay(index){
        setNote(arrNotes[index])
    }
    return (
        <div className={styles.Navbox}>
            <div className={styles.addNotes}>Add Notes <button className={styles.addNotesBtn} onClick={handleaddInput}> +</button>
                {/* <hr /> */}
            {add && (
                <div className={styles.inputBox}>
                    <form >
                        <input type="text" placeholder=' Enter The Title' onChange={handleChange} value={note.title} id='title' />
                        <button onClick={handleClick}><i class="fa-solid fa-floppy-disk"></i></button>
                    </form>
                </div>
            )}
            </div>
            <div className={styles.titlesBox}>
            {arrNotes.map((element,index) => <div><button onClick={()=>handleDisplay(index)} className={styles.titleBtn}>{element.title}</button> <button className={styles.deleteBtn} onClick={()=>handleDelete(index)}><i class="fa-solid fa-trash"></i></button></div>)}
            </div>
        </div>
    )
}
