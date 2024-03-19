import React, { useState } from 'react'
import Navbar from './componanent/Navbar'
import Form from './componanent/Form'
import Notes from './componanent/Notes'

export default function App() {
  const [title, setTitle] =useState("")
  const [decripotion, setDiscription] =useState("")
  return (
    <>
      <Navbar/>
      <Form title={title} setTitle={title} decripotion={decripotion} setDiscription={decripotion}/>
      <Notes/>

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <h1 className='md-3'>Your Name</h1>
          </div>
        </div>
      </div>
  </>
  )
}
