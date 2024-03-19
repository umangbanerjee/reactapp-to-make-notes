

import React, { useState } from "react";

import style from "./Main.module.css";
// import styles from './Header.module.css'

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import Button from "@mui/material/Button";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import HMobiledataIcon from "@mui/icons-material/HMobiledata";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import ColorLensIcon from '@mui/icons-material/ColorLens';

const Main = ({ activeNote, onUpdateNoteBody, onDeleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  const onEditBody = (e) => {
    onUpdateNoteBody(activeNote.id, e.target.value);
  };

  const handleDeleteNote = () => {
    onDeleteNote(activeNote.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleBold = () => {
    setBold(!bold);
  };

  const handleItalic = () => {
    setItalic(!italic);
  };

  const handleUnderline = () => {
    setUnderline(!underline);
  };

  

  if (!activeNote) return <div className="fs-1 px-4">No Active Note</div>;

  return (
    <>

      <div className={style.header}>
        <div className={style.font}>
          <div className={style.btn}>
            <button onClick={handleBold}>
              <FormatBoldIcon className='mt-2' style={{ fontSize: "40px", color: bold ? 'white' : '' }} />
            </button>
            <button onClick={handleItalic}>
              <FormatItalicIcon className='mt-2' style={{ fontSize: "38px", color: italic ? 'white' : '' }} />
            </button>
            <button onClick={handleUnderline}>
              <FormatUnderlinedIcon className='mt-2' style={{ fontSize: "30px", color: underline ? 'white' : '' }} />
            </button>

            {isEditing ? (
              <Button
                variant="contained"
                style={{ marginLeft: "20.5%" }}
                startIcon={<SaveAsIcon />}
                onClick={handleSaveClick}
                className='mt-2'
              >
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{ marginLeft: "20.5%" }}
                startIcon={<SaveAsIcon />}
                onClick={handleEditClick}
                className='mt-2'
              >
                Edit
              </Button>
            )}

            <Button
              variant="contained"
              style={{ marginLeft: "5%" }}
              startIcon={<DeleteIcon />}
              onClick={handleDeleteNote}
              className='mt-2'
            >
              Delete
            </Button>
            <Button
              variant="contained"
              style={{ marginLeft: "5%" }}
              startIcon={<FileDownloadIcon />}
              className='mt-2'
            >
              Download
            </Button>
            <Button
              variant="contained"
              style={{ marginLeft: "5%" }}
              startIcon={<ShareIcon />}
              className='mt-2'
            >
              Share
            </Button>
          </div>
        </div>
      </div>

      {isEditing ? (
        <div className={style.edit}>
          <textarea
            id="body"
            placeholder="Write your note here..."
            value={activeNote.body}
            onChange={onEditBody}
            style={{
              fontWeight: bold ? 'bold' : 'normal',
              fontStyle: italic ? 'italic' : 'normal',
              textDecorationLine: underline ? 'underline' : 'none',
       
            }}
          />
        </div>
      ) : (
        <div className={style.preview}>
          <h1 className={style.title}>{activeNote.title}</h1>
          <div
            className={style.description}

            style={{
              fontWeight: bold ? 'bold' : 'normal',
              fontStyle: italic ? 'italic' : 'normal',
              textDecorationLine: underline ? 'underline' : 'none',
            }}
          />
           <span className={style.description}>{activeNote.body}</span>
        </div>
      )}
    </>
  );
};

export default Main;
