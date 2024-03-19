
import Styles from './TextBody.module.css'
import React, { useState } from 'react';

export default function TextBody({onSave}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    onSave({ title, content });
    setTitle('');
    setContent('');
  };
  return (
    <div >
      
      <div className={Styles.body2}>
        <input
          type="text"
          placeholder="Enter note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{marginLeft:'10px'}}
        />
        <textarea
          placeholder="Enter note content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ height: '82vh', width:'72vw' , marginLeft:'10px'}}
        />
        <button onClick={handleSave} style={{marginLeft:'10px'}}>Save</button>
    
      </div>
     
    </div>
  )
}
