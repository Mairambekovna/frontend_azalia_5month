import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blocks: [
        { id: 1, title: 'Personal Notes', notes: [] },
        { id: 2, title: 'Work Notes', notes: []},
    ]
}

const notesSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {
        addNote: (state, action) => {
            const { blockId, noteContent } = action.payload;
            const block = state.blocks.find((block) => block.id === blockId)
            if (block) {
                block.notes.push({id: Date.now(), content: noteContent})
            }
        },
        updateNote: (state, action) => {
            const { blockId, noteId, newContent } = action.payload;
            const block = state.blocks.find((block) => block.id === blockId);
            if (block) {
                const note = block.notes.find((note) => note.id === noteId);
                if (note) {
                    note.content = newContent;
                }
            }
        },

        removeNote: (state, action) => {
            const { blockId, noteId } = action.payload;
            const block = state.blocks.find((block) => block.id === blockId);
            if (block) {
                block.notes = block.notes.filter((note) => note.id !== noteId)
            }
        },
        addBlock: (state, action) => {
            state.blocks.push({
                id: Date.now(),
                title: action.payload,
                notes: []
            })
        }
    }
})

export const { addNote, addBlock, updateNote, removeNote } = notesSlice.actions

export default notesSlice.reducer