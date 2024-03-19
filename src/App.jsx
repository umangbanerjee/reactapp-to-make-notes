import './App.css'
import Header from './Components/Header'
import Notes from './Components/Notes'
import Navbar from './Components/Navbar'
import {ReactToPrint} from 'react-to-print'

function App() {

  return (
    <div >
    <div className='main'>
      <ReactToPrint
      trigger={()=>{
        return <button>Print</button>
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
