import React from 'react'


const CreateNote = ({inputText, setInputText, saveHandler}) => {
    const char= 150;
    const charLimit = char - inputText.length;
  return (
    <div className='note'>
        <textarea
        cols={20}
        rows={2}
        placeholder='Type Your Note Here'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={150}
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