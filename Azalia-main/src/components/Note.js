import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { MdDelete } from 'react-icons/md';
import { DeleteButton, NoteContent, NoteWrapper } from "../styles";
import { useDrag } from '@use-gesture/react';
import { useDispatch } from "react-redux";
import { removeNote, updateNote } from "../features/notesSlice";

const Note = ({ blockId, note }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(note.content);

    const [props, set] = useSpring(() => ({
        opacity: 1,
        transform: 'scale(1)',
    }));

    const bind = useDrag(
        (state) => {
            set({ transform: `translate(${state.offset[0]}px, ${state.offset[1]}px)` });
        },
        { bounds: { left: 0, top: 0, right: window.innerWidth - 200, bottom: window.innerHeight - 200 } }
    );

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        dispatch(updateNote({ blockId, noteId: note.id, newContent }));
        setIsEditing(false);
    };

    const handleDelete = () => {
        dispatch(removeNote({ blockId, noteId: note.id }));
    };

    return (
        <animated.div {...bind()} style={props}>
            <NoteWrapper>
                <NoteContent>
                    {isEditing ? (
                        <textarea
                            autoFocus
                            onChange={(e) => setNewContent(e.target.value)}
                            onBlur={handleSave}
                            value={newContent}
                        />
                    ) : (
                        <p onClick={handleEdit}>{note.content}</p>
                    )}
                </NoteContent>
                <DeleteButton onClick={handleDelete}>
                    <MdDelete />
                </DeleteButton>
            </NoteWrapper>
        </animated.div>
    );
};

export default Note;
