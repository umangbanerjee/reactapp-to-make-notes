import React, { useState } from 'react'
import Style from './Home.module.css'
import { jsPDF } from "jspdf";

export default function Home() {
    const [data, setData] = useState({ title: "", area: "" });
    const [addnotes, setAddnotes] = useState([]);
    const [bold, setBold] = useState("");
    const [italic, setItalic] = useState("");
    const [underline, setUnderline] = useState("");
    const [searchInp,setSearchInp]=useState("");
    const [originalNotes, setOriginalNotes] = useState([]);
    const [edit,setEdit]=useState(-1);
    const [left, setLeft] = useState(true);
  const [right, setRight] = useState(true);
 
    function handleSubmit(e) {
        e.preventDefault();
        setAddnotes([...addnotes, data]);
        setData({ title: "", area: "" })
    }
    function handleChange(e) {
        e.preventDefault();
        setData({ ...data, [e.target.id]: e.target.value })
    }
    function handleClick(index) {
        let temp = [...addnotes];
        temp.splice(index, 1);
        setAddnotes(temp);
        setData({ title: "", area: "" })

    }
    function handlereOpen(index) {
      

        {
            setData(addnotes[index]);
            setEdit(index);
        }
    }


    function handleBold(e) {
        e.preventDefault();
        setBold(!bold);
        if (bold == false) {
            document.getElementById("area").style.fontWeight = '1000';
        }
        else {
            document.getElementById("area").style.fontWeight = 'normal';
        }
    }
    function handleItalic(e) {
        e.preventDefault();
        setItalic(!italic);
        if (italic == false) {
            document.getElementById("area").style.fontStyle = 'Italic';
        }
        else {
            document.getElementById("area").style.fontStyle = 'normal';
        }
    }
    function handleUnderLine(e) {
        e.preventDefault();
        setUnderline(!underline);
        if (underline == false) {
            document.getElementById("area").style.textDecoration = 'underline';
        }
        else {
            document.getElementById("area").style.textDecoration = 'none';
        }
    }
    function searchList(e){
        e.preventDefault();
        if(searchInp.trim() !== ""){
            setOriginalNotes(addnotes)
            const filteredNotes = addnotes.filter(note => note.title.toLowerCase().includes(searchInp.toLowerCase()));
            setAddnotes(filteredNotes);
        } 
        setSearchInp("");
    }
   function reopenNotes() {
        setAddnotes(originalNotes);
  }

  function handleEdit(e){
    e.preventDefault();
    if(data.title !== ""){
        addnotes[edit] = data;
    }
    setData({ title: "", area: "" })
  }
  const handleLeft = (event) => {
    event.preventDefault();
    setLeft(!left);
    if (left) {
      document.getElementById("area").style.textAlign = "left";
    }
    setRight(true);
  };

  const handleRight = (event) => {
    event.preventDefault();
    setRight(!right);
    if (right) {
      document.getElementById("area").style.textAlign = "right";
    }
    setLeft(true);
  };

  const genratePDF = () => {

    const doc = new jsPDF();
    doc.text(data.area, 10, 10);
    doc.save("a4.pdf");
  }

    return (
        <div>
                <div className={Style.headingg}><img width="70" height="50" src="https://img.icons8.com/bubbles/100/task.png" alt="task"/><h3>Notes Maker APP</h3></div>
            <div className={Style.BigBox}>
                <div className={Style.SideBox}>
                    <div className={Style.Addnote}> <h2>Your Notes List</h2></div>
                    {/* <hr /> */}
                    <input
                    type="text" 
                    className={Style.searchhh}
                        placeholder='Search'  
                        id="search" 
                        value={searchInp} 
                        onChange={(e) => setSearchInp(e.target.value)} 
                    /><button onClick={searchList} className={Style.searchh}><i class="fa-solid fa-magnifying-glass"></i></button>
                    <button onClick={reopenNotes} className={Style.searchhhh}><i class="fa-solid fa-list"></i></button>
                    <div className={Style.addnotesmap}>
                        {addnotes.map((ele, index) => <div className={Style.adNote}><div className={Style.addlistitle} key={index} onClick={() => handlereOpen(index)}>{ele.title}</div><div><button className={Style.icon} onClick={handleClick}><i class="fa-solid fa-trash"></i></button></div></div>)}


                    </div>
                </div>

                <div className={Style.Textbox}>
                    <form onSubmit={handleSubmit}>
                        <div className={Style.boldd}>
                            <button onClick={handleBold} id='text' className={Style.bold}><strong><i class="fa-solid fa-bold"></i></strong></button>
                            <button onClick={handleItalic} id='text' className={Style.bold}><strong><i class="fa-solid fa-italic"></i></strong></button>
                            <button onClick={handleUnderLine} id='text' className={Style.bold}><strong><i class="fa-solid fa-underline"></i></strong></button>
                            <button onClick={handleLeft} className={Style.bold}>
              <i class="fa-solid fa-align-left"></i>
            </button>

            <button onClick={handleRight} className={Style.bold}>
              <i class="fa-solid fa-align-right"></i>
            </button>
                            
                        </div>
                        <hr />

                        <label htmlFor="title" > Title : </label>
                        <input type="text" required placeholder='Write Your Title . . .' id='title' value={data.title} onChange={handleChange} className={Style.title} />

                        <button type='submit' className={Style.btn}>Save</button>


                        <textarea placeholder='Write Your Notes . . . . . .' required cols="90" id='area' rows="25"
                            onChange={handleChange} value={data.area} >
                        </textarea>

                        <button  className={Style.btn} onClick={handleEdit}><i class="fa-solid fa-pen-to-square"></i>Update</button>
                        <button onClick={genratePDF} className={Style.btn}><i class="fa-solid fa-download"></i>Download</button>
                    </form>

                </div>

            </div>
        </div>
    )
}
