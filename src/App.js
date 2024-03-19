import React from 'react'
import MainNav from './Components/MainNav.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import ShowSavedNotes from './Components/ShowSavedNotes.jsx'
import SideView from './Components/SideView.jsx'
import MainEditor from './Components/MainEditor.jsx'
export default function App() {
  return (
    <div>
      <MainNav />
      <div className="below_nav">
        <SideView />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/ShowSaved' element={<ShowSavedNotes/>} />
          <Route path='/editor' element={<MainEditor/>} />
        </Routes>

      </div>
    </div>
  );
}
