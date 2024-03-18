// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Container from './components/Container';
import SideNavbar from './components/SideNavbar';
import Display from './components/Display';

function App() {
  const [writeNotes,setWriteNotes]=useState(false)
  const [dis,setDis]=useState(false)
  const [object,setObject]=useState({
    title:"",
    text:""
    
  })
  const [arr, setArr]=useState([])
  return (
    <div className="App">
      <Container>
        <SideNavbar setObject={setObject} object={object} arr={arr} setArr={setArr} setWriteNotes={setWriteNotes} writeNotes={writeNotes} dis={dis} setDis={setDis}></SideNavbar>
        <Display object={object} setObject={setObject} arr={arr} setArr={setArr} setWriteNotes={setWriteNotes} writeNotes={writeNotes} dis={dis} setDis={setDis}></Display>
      </Container>
    </div>
  );
}

export default App;
