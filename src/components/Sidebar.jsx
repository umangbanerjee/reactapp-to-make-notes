import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import { sortNotes } from "../utils/sortNotes";
import { faFileCirclePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoteCard from "./NoteCard";
import './Sidebar.css'

function Sidebar(props) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredNotes = props.notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="sidebar border-end">
        <h1 className="not">NOTES</h1>
            <div className="akn">
            <Stack direction="horizontal" className="p-3 border-bottom">
                <div className="search-bar ms-auto in">
                    <input
                        type="text" 
                        className="sear"
                        placeholder="Search notes..." 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                    {/* <FontAwesomeIcon icon={faSearch} /> */}
                    </div>
                <FontAwesomeIcon className="ms-auto icon-btn add-btn addbtn" icon={faFileCirclePlus} onClick={props.addNote} />
            </Stack>
            </div>
            <Stack>
                {sortNotes(filteredNotes).map((note) => {
                    return (
                        <NoteCard
                        className="not"
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            updatedAt={note.updatedAt}
                            deleteNote={props.deleteNote}
                            currentNoteId={props.currentNoteId}
                            setCurrentNoteId={props.setCurrentNoteId}
                        />
                    );
                })}
            </Stack>
        </div>
    );
}

export default Sidebar;
