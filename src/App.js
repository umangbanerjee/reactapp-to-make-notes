import './App.css';
import React, { useState } from 'react'
import { jsPDF } from "jspdf";
function App() {
  const [text, setText] = useState("");
  const [container, setContainer] = useState([]);


const [isBold,setIsBold] = useState(false);
const [isItalic, setIsItalic] = useState(false);
const [isUnderlined, setIsUnderlined] = useState(false);

const handleBoldClick = () => {
  setIsBold(!isBold);
};

const handleItalicClick = () => {
  setIsItalic(!isItalic);
};

const handleUnderlineClick = () => {
  setIsUnderlined(!isUnderlined);
};

const generatePdf = () => {

  const doc = new jsPDF();
  doc.text(text, 10, 10);
  doc.save("a4.pdf");
}


  const submitHandler = (e) => {
    e.preventDefault();
    setContainer([...container, { text }]);
    console.log(container);
    setText("");
  }

const deleteHandler = (i) =>{
  let  copyCon = [...container]
  copyCon.splice(i, 1);
  setContainer(copyCon)
}

  let renderTask = <p>No notes available</p>
  renderTask = container.map((t, i) => {
    return (
      <div className='notesItem'>
        <div className='notes'>
          <p id='myText'>{t.text}</p>
        </div>
        <i onClick={()=>{deleteHandler(i)}} class="fa-solid fa-trash"></i>
        <i onClick={generatePdf} class="fa-regular fa-circle-down"></i>
      </div>


    )
  })
  
  return (
    <div className='main'>
      <div className='left'>
        <h2>My Notes</h2>
        <div className='title'>
          <input type="text" placeholder='search here'></input>
          <div className='icon'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className='listCon'>
          <ul>{renderTask}</ul>
        </div>
      </div>
      <div className='right'>
        <div className='tools'>
          <i onClick={handleBoldClick} class="fa-solid fa-bold"></i>
          <i onClick={handleItalicClick} class="fa-solid fa-italic"></i>
          <i onClick={handleUnderlineClick} class="fa-solid fa-underline"></i>
          <i class="fa-solid fa-palette"></i>
          <i class="fa-solid fa-bars"></i>
        </div>
        <form onSubmit={submitHandler}>
          <textarea 
          style={{ fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal',textDecoration: isUnderlined ? 'underline' : 'none' }} placeholder='write here...' value={text}
            onChange={(e) => { setText(e.target.value) }}
            
          ></textarea>
          <button>save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
