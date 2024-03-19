import React from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom';   
import Home from './components/Home';

export default function App({addNote}) {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>  
      </Routes>
    </div>
  )
}
