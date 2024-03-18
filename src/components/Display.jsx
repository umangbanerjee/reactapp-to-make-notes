import React, { useState } from 'react'
import styles from './Display.module.css'
export default function Display({setObject,object,arr,setArr,writeNotes,setWriteNotes,dis,setDis}) {
  const[bold,setBold]=useState(false)
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [center, setCenter] = useState(false);
  function handleChange(e){
    e.preventDefault();
    if(object.title!==""){
      setObject({...object,[e.target.id]:e.target.value})
    }
    else{
      alert("first add TITLE By clicking + icon ")
    }
  }
  function submitnotes(e){
    e.preventDefault()
    if(object.text===""){
      alert("you not add data")
    }
    else{
      setArr([...arr,object])
      setWriteNotes(false)
      setObject({title:"",text:""})
    }
}
function addnotes(e){
        setObject({...object,[e.target.id]:e.target.value})
        
    }
  function handleBold(e){
    e.preventDefault();
        setBold(!bold)
        if (!bold) {
            document.getElementById("text").style.fontWeight = "bold";
            document.getElementById("bold").style.backgroundColor="Gray"
        }
        else {
            document.getElementById("text").style.fontWeight = "normal";
            document.getElementById("bold").style.backgroundColor="white"
        }
  }
  function handleItalic(e) {
    e.preventDefault();
    setItalic(!italic)
    if (!italic) {
        document.getElementById("text").style.fontStyle = "italic";
        document.getElementById("i").style.backgroundColor="Gray"
    }
    else {
        document.getElementById("text").style.fontStyle = "normal";
        document.getElementById("i").style.backgroundColor="white"
    }
}
function handleUnderline(e) {
    e.preventDefault();
    setUnderline(!underline)
    if (!underline) {
        document.getElementById("text").style.textDecorationLine = "underline";
        document.getElementById("u").style.backgroundColor="Gray"
    }
    else {
        document.getElementById("text").style.textDecorationLine = "none";
        document.getElementById("u").style.backgroundColor="white"
    }
}
function handleLeft(e) {
    e.preventDefault();
    setLeft(!left)
    if (!left) {
        document.getElementById("text").style.textAlign = "left";
        document.getElementById("left").style.backgroundColor="gray"
        setRight(false)
        setCenter(false)
        document.getElementById("right").style.backgroundColor="white"
        document.getElementById("center").style.backgroundColor="white"
    }
    else{
        document.getElementById("left").style.backgroundColor="white"
    }
}
function handleRight(e) {
    e.preventDefault();
    setRight(!right)
    if (!right) {
        document.getElementById("text").style.textAlign = "right";
        document.getElementById("right").style.backgroundColor="Gray"
        setLeft(false)
        setCenter(false)
        document.getElementById("left").style.backgroundColor="white"
        document.getElementById("center").style.backgroundColor="white"
    }
    else{
        document.getElementById("right").style.backgroundColor="white"
    }
}
function handleCenter(e) {
  e.preventDefault();
  setCenter(!center)
  if (!center) {
      document.getElementById("text").style.textAlign = "center";
      document.getElementById("center").style.backgroundColor="Gray"
      setRight(false)
      setLeft(false)
      document.getElementById("left").style.backgroundColor="white"
      document.getElementById("right").style.backgroundColor="white"
  }
  else{
      document.getElementById("center").style.backgroundColor="white"
  }
}
  return (
    <div className={styles.display}>
        <div className={styles.title}><h2>{writeNotes?<div>
            <form action="" onSubmit={submitnotes}>
                <input type="text" onChange={addnotes} id='title' className={styles.input}/>
                <button className={styles.btn}>Add</button>
            </form>
        </div>:dis?object.title:<h1>TITLE</h1>}</h2></div>
        <div>
          <button id='bold' className={styles.b} onClick={handleBold}>B</button>
          <button id='i' onClick={handleItalic} className={styles.i}>I</button>
          <button id='u' onClick={handleUnderline} className={styles.u}>U</button>
          <button id='left' onClick={handleLeft} className={styles.left}>left</button>
          <button id='right' onClick={handleRight} className={styles.right}>right</button>
          <button id='center' onClick={handleCenter} className={styles.center}>center</button>
          
          </div>
        {/* <div className={styles.notes}> */}
            <textarea  onChange={handleChange}  className={styles.notesTextArea}  id='text'  value={object.text} ></textarea>
            
            {/* </div> */}
            <label htmlFor="words" className={styles.lab}>Total Letters : </label>
            <input   type="text" id='words' value={object.text.length}/>
    </div>
  )
}
