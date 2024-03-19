import React from 'react'

import {jsPDF} from 'jsPDF'

const CreateNote = ({inputText, setInputText, saveHandler}) => {
    const char= 150;
    const charLimit = char - inputText.length;
  return (
    <div className='note' id="text1">
        <textarea
        cols={20}
        rows={2}
        placeholder='Type Your Note Here'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={150}
        id='textarea'
        >
        </textarea>
        <div className='note_footer'>
            <span className='label'>{charLimit} Left</span>
            <button className='note_save' onClick={saveHandler}>Save</button>
        </div>
    </div>
  )
}

export default CreateNote