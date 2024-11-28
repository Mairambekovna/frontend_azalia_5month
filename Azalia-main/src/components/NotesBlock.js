import React, { useState } from "react";
import { AddNoteButton, BlockTitle, NotesBlockWrapper } from "../styles";
import Note from "./Note";
import { useDispatch } from "react-redux";
import { addNote } from "../features/notesSlice";

const NotesBlock = ({ block }) => {
    const dispatch = useDispatch()
    const [noteContent, setNoteContent] = useState('')

    const handleAddNote = () => {
        if (noteContent.trim()) {
            dispatch(addNote({blockId: block.id, noteContent}))
            setNoteContent('')
        }
    }
    
    return (
        <NotesBlockWrapper>
            <BlockTitle>{block.title}</BlockTitle>
            <div className="notes-container">
                {block.notes.map((note) => (
                    <Note key={note.id} blockId={block.id} note={note} />
                ))}
            </div>
            <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Write a new note..."
            />
            <AddNoteButton onClick={handleAddNote}>Add Note</AddNoteButton>
        </NotesBlockWrapper>
    )
}

export default NotesBlock;