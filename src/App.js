import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Notes from './components/Notes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/nav' element={<Navbar/>}/>
      </Routes>
    </div>
  );
}

export default App;
