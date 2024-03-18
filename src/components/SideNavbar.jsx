import React, { useState } from 'react'
// for download as pdf
import { jsPDF } from "jspdf";

import styles from './SideNavbar.module.css'
export default function SideNavbar({setObject,object,arr,setArr,writeNotes,setWriteNotes,dis,setDis}) {
    const doc = new jsPDF();
    function handleClick(){
        setWriteNotes(true)
        setObject({title:"",text:""})
    }
    function deleTitle({index}){
        var temp=arr
        temp.splice(index,1)
        setArr([...temp])
    }
    function download({index}){
        doc.text(arr[index].text, 10, 10);
        doc.save("a4.pdf");
    }
    function display(index){
        setObject(arr[index])
        // setWriteNotes(true)
        setDis(true)
    }
  return (
    <div className={styles.sidebar}>
        <div className={styles.addNotes}>
            <h1>Add Notes</h1>
        <button className={styles.addbtn} onClick={handleClick}>+</button>
        </div>
        <div>
            {arr.map((value,index)=><div key={index}><button className={styles.kuch} onClick={()=>display(index)}>{value.title}</button><button onClick={()=>deleTitle({index})}><i class="fa-solid fa-trash"></i></button> <button onClick={()=>download({index})}><i class="fa-solid fa-download"></i></button></div>)}
        </div>
        
    </div>
   )
}
