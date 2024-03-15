import React, { useState } from 'react'
import styles from "./Notes.module.css"
import { ColorPicker } from 'primereact/colorpicker';

export default function Notes({ note, setNote }) {
    const [color1, setColor1] = useState(false);
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [color, setColor] = useState("black");
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const [justify, setJustify] = useState(false);
    const [center, setCenter] = useState(false);
    const [print, setPrint] = useState(false);
    


    function handleChange(e) {
        e.preventDefault();
        if (note.title !== "") {
            setNote({ ...note, [e.target.id]: e.target.value })
        }
        else {
            alert("Write the Title first")
        }
    }
    function handleBold(e) {
        e.preventDefault();
        setBold(!bold)
        if (bold) {
            document.getElementById("text").style.fontWeight = "bold";
            document.getElementById("bold").style.backgroundColor = "lightgreen"
        }
        else {
            document.getElementById("text").style.fontWeight = "normal";
            document.getElementById("bold").style.backgroundColor = "white"
        }
    }
    function handleItalic(e) {
        e.preventDefault();
        setItalic(!italic)
        if (italic) {
            document.getElementById("text").style.fontStyle = "italic";
            document.getElementById("italic").style.backgroundColor = "lightgreen"
        }
        else {
            document.getElementById("text").style.fontStyle = "normal";
            document.getElementById("italic").style.backgroundColor = "white"
        }
    }
    function handleUnderline(e) {
        e.preventDefault();
        setUnderline(!underline)
        if (underline) {
            document.getElementById("text").style.textDecorationLine = "underline";
            document.getElementById("underline").style.backgroundColor = "lightgreen"
        }
        else {
            document.getElementById("text").style.textDecorationLine = "none";
            document.getElementById("underline").style.backgroundColor = "white"
        }
    }
    function handleColor(e) {
        e.preventDefault();
        setColor1(!color1)
        if (color1) {
            document.getElementById("color").style.backgroundColor = "white"
        }
        else {
            document.getElementById("color").style.backgroundColor = "lightgreen";
        }
    }
    function handleLeft(e) {
        e.preventDefault();
        setLeft(!left)
        if (left) {
            document.getElementById("text").style.textAlign = "left";
            document.getElementById("left").style.backgroundColor = "lightgreen"
            setRight(true)
            setCenter(true)
            setJustify(true)
            document.getElementById("right").style.backgroundColor = "white"
            document.getElementById("center").style.backgroundColor = "white"
            document.getElementById("justify").style.backgroundColor = "white"
        }
        else {
            document.getElementById("left").style.backgroundColor = "white"
        }
    }
    function handleRight(e) {
        e.preventDefault();
        setRight(!right)
        if (right) {
            document.getElementById("text").style.textAlign = "right";
            document.getElementById("right").style.backgroundColor = "lightgreen"
            setLeft(true)
            setCenter(true)
            setJustify(true)
            document.getElementById("left").style.backgroundColor = "white"
            document.getElementById("center").style.backgroundColor = "white"
            document.getElementById("justify").style.backgroundColor = "white"
        }
        else {
            document.getElementById("right").style.backgroundColor = "white"
        }
    }
    function handleJustify(e) {
        e.preventDefault();
        setJustify(!justify)
        if (justify) {
            document.getElementById("text").style.textAlign = "justify";
            document.getElementById("justify").style.backgroundColor = "lightgreen"
            setRight(true)
            setCenter(true)
            setLeft(true)
            document.getElementById("right").style.backgroundColor = "white"
            document.getElementById("center").style.backgroundColor = "white"
            document.getElementById("left").style.backgroundColor = "white"
        }
        else {
            document.getElementById("justify").style.backgroundColor = "white"
        }
    }
    function handleCenter(e) {
        e.preventDefault();
        setCenter(!center)
        if (center) {
            document.getElementById("text").style.textAlign = "center";
            document.getElementById("center").style.backgroundColor = "lightgreen"
            setRight(true)
            setLeft(true)
            setJustify(true)
            document.getElementById("right").style.backgroundColor = "white"
            document.getElementById("left").style.backgroundColor = "white"
            document.getElementById("justify").style.backgroundColor = "white"
        }
        else {
            document.getElementById("center").style.backgroundColor = "white"
        }
    }
    function handlePrint(e) {
        e.preventDefault();
        setPrint(!print)
        if (print) {
            var printTextArea = document.getElementById("text");
            var WinPrint = window.open('left=0,top=0,width=800,height=900,');
            WinPrint.document.write(printTextArea.innerHTML);
            WinPrint.document.close();
            WinPrint.focus();
            WinPrint.print();
            WinPrint.close();
        }
        setPrint(true);
    }
    function handleColorChange(e) {
        setColor(e.target.value)
        document.getElementById("text").style.color = `#${color}`;
    }

    return (
        <div className={styles.Notesbox}>
            <div className={styles.notesName}>
                <u>{note.title === "" ? "Title" : note.title}</u>
            </div>
            <div className={styles.funBtn}>
                <button className={styles.btn} onClick={handleBold} id="bold"><i class="fa-solid fa-bold"></i></button>
                <button className={styles.btn} onClick={handleItalic} id="italic"><i class="fa-solid fa-italic"></i></button>
                <button className={styles.btn} onClick={handleUnderline} id="underline"><i class="fa-solid fa-underline"></i></button>
                <button className={styles.btn} onClick={handleColor} id="color"><i class="fa-solid fa-palette" ></i></button>
                <button className={styles.btn} onClick={handleLeft} id="left"><i class="fa-solid fa-align-left"></i></button>
                <button className={styles.btn} onClick={handleRight} id="right"><i class="fa-solid fa-align-right"></i></button>
                <button className={styles.btn} onClick={handleJustify} id="justify"><i class="fa-solid fa-align-justify" ></i></button>
                <button className={styles.btn} onClick={handleCenter} id="center"><i class="fa-solid fa-align-center"></i></button>
                <button className={styles.btn} onClick={handlePrint} id="print"><i class="fa-solid fa-print"></i></button>
            </div>
            {color1 && (
                <div className={styles.colorPopup}>
                    <ColorPicker value={color} onChange={handleColorChange} inline />
                </div>
            )}
            <textarea type="text" onChange={handleChange} id='text' value={note.text} className={styles.inputNotes} placeholder='Write Your Notes Here' />
        </div>
    )
}