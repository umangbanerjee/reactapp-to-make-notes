import React, { useState } from 'react'
import styles from "./Navbar.module.css"

export default function Navbar({ note, setNote, arrNotes, setArrNotes }) {
    const [add, setAdd] = useState(true);
    const [search, setSearch] = useState(false);
    const [searchInp, setSearchInp] = useState("");
    const [searchArr, setSearchArr] = useState([]);
    const [update, setUpdate] = useState({state:false,index:-1});

    function handleaddInput(e) {
        e.preventDefault();
        setAdd(true)
        setSearch(false);
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
        // setAdd(false);
        setUpdate({state:false,index:update.index})
    }
    function handleDelete(index){
        setArrNotes(arrNotes.filter((ele,ind)=>ind!==index))
        setNote({title:"",text:""})
        
    }
    function handleDisplay(index){
        setNote(arrNotes[index])
        setUpdate({state:true,index:[index]})
    }
    function handleSearchChange(e){
        e.preventDefault()
        setSearchInp(e.target.value)
    }
    function handleSearch(e){
        e.preventDefault()
        if(searchInp!==""){
            setSearchArr(arrNotes)
            setArrNotes(arrNotes.filter((ele)=>ele.title.includes(searchInp)))
        }
        setSearchInp("")
        setSearch(false);
    }
    function handleSearchInput(e){
        e.preventDefault()
        setSearch(true);
        setAdd(false)
    }
    function handleCancel(e){
        e.preventDefault()
        setArrNotes(searchArr);
        setSearchInp("")
        setSearch(false);
    }
    function handleUpdate(e){
        e.preventDefault()
        if(note.title!==""){
            arrNotes[update.index]=note;
            setNote({title:"",text:""})
            setUpdate({state:false,index:update.index})
        }
        else{
            alert("Enter the Title")
        }
    }
    return (
            <div>
        <div className={styles.Navbox}>
            <div className={styles.addNotes}>Add Notes <button className={styles.addNotesBtn} onClick={handleaddInput}><i class="fa-solid fa-plus"></i></button><button className={styles.searchBtn} onClick={handleSearchInput}><i class="fa-solid fa-magnifying-glass"></i></button>
            {add && (
                <div className={styles.inputBox}>
                    <form >
                        <input type="text" placeholder=' Enter The Title' onChange={handleChange} value={note.title} id='title' />
                        <button onClick={handleClick} className={styles.btn}><i class="fa-solid fa-floppy-disk"></i></button>
                    </form>
                </div>
            )}
            {search && (
                <div className={styles.inputBox}>
                    <form >
                        <input type="text" placeholder=' Search' onChange={handleSearchChange} className={styles.search} value={searchInp} id='title' />
                        <button onClick={handleSearch} ><i class="fa-solid fa-magnifying-glass"></i></button>
                        <button onClick={handleCancel} ><i class="fa-solid fa-xmark"></i></button>
                    </form>
                </div>
            )}
            </div>
            <div className={styles.titlesBox}>
            {arrNotes.map((element,index) => <div><button onClick={()=>handleDisplay(index)} className={styles.titleBtn}>{element.title}</button> <button className={styles.deleteBtn} onClick={()=>handleDelete(index)}><i class="fa-solid fa-trash"></i></button></div>)}
            </div>
            </div>
            {update.state &&(<div>
                <button className={styles.updateBtn} onClick={handleUpdate}>Update</button>
                
            </div>)}
            {/* <div className={styles.titlesBox}>
            {arrNotes.map((element,index) => <div><button onClick={()=>handleDisplay(index)} className={styles.titleBtn}>{element.title}</button> <button className={styles.deleteBtn} onClick={()=>handleDelete(index)}><i class="fa-solid fa-trash"></i></button></div>)}
            </div> */}
        </div>
    )
}
