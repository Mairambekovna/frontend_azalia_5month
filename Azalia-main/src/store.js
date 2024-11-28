import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './features/notesSlice';

export const store = configureStore({
    reducer: {
        notesReducer
    }
})
