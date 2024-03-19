import React from 'react';
import styles from './SideBar.module.css';
import NotesIcon from '@mui/icons-material/Notes';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.nav}>
                    <div className={styles.icon}>
                        <NotesIcon />
                    </div>
                    <h1 className={styles.nav}>Scribble</h1>
                </div>

                <div className={styles.boxes}>
                    <div className={styles.notes}>
                        <Link exact to="/" className={styles.Link}>
                            <button className={styles.btn}>
                                <div className={styles.iconn}>
                                    <DescriptionIcon />
                                </div>
                                <h3>Notes</h3>
                            </button>
                        </Link>
                    </div>

                    <div className={styles.projects}>
                        <Link exact to="/project" className={styles.Link}>
                            <button className={styles.btn}>
                                <div className={styles.iconn}>
                                    <CheckCircleOutlineIcon />
                                </div>
                                <h3>Projects</h3>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
