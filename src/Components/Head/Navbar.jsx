import React from 'react'
import Styles from './Navbar.module.css'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
export default function Navbar() {
  return (
    <div className={Styles.container}>
       <div className={Styles.list}>
       <div className={Styles.note}>
        <h1>NotePad</h1>
       </div>

       <div className={Styles.icon}>
                  <DeleteSweepIcon style={{ height: '9vh', fontSize:'5vh',color:'red'}} className={Styles.internal}/>
                  <CloudDownloadIcon style={{ height: '9vh', fontSize: '5vh', marginLeft: '20px' ,color:'green'}} className={Styles.internal} />
                  <FileCopyIcon style={{ height: '9vh', fontSize: '4vh', marginLeft: '20px', color:'Blue'}} className={Styles.internal} />
                  <ContentPasteIcon style={{ height: '9vh', fontSize: '4vh', marginLeft: '20px',color:'orange' }} className={Styles.internal} />
                  <PrintIcon style={{ height: '9vh', fontSize: '4vh', marginLeft: '20px' ,color:'SlateBlue' }} className={Styles.internal} />
                  <SaveIcon style={{ height: '9vh', fontSize: '4vh', marginLeft: '20px',color:'Tomato' }} className={Styles.internal} />


       </div>
       
       
       </div>
    </div>
  )
}

