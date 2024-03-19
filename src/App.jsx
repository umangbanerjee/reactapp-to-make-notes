import './App.css'
import Header from './Components/Header'
import Notes from './Components/Notes'
import Navbar from './Components/Navbar'
import {ReactToPrint} from 'react-to-print'
import CreateNote from './Components/CreateNote'
import {jsPDF} from 'jsPDF'

function App() {
  function printDiv() { 
    var divContents = document.getElementById("text1").innerHTML; 
    var a = window.open('', '', 'height=500, width=500'); 
    a.document.write('<html>'); 
    a.document.write('<body > <h1>Div contents are <br>'); 
    a.document.write(divContents); 
    a.document.write('</body></html>'); 
    a.print(); 
    // a.document.close(); 
} 

  return (
    <div >
    <div className='main'>
      <ReactToPrint
      trigger={()=>{
        return <button onClick={printDiv}>Print</button>
      }}
      content = {() => this.componentRef}
      documentTitle="new document"
      pageStyle="print"
      />
      <Header />
      
      <Navbar/>
      <Notes />
    </div>
</div>
  )
}

export default App
