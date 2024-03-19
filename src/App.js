import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Notes from './components/Notes';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/side' element={<Sidebar/>}/>
      </Routes>
    </div>
  );
}

export default App;
