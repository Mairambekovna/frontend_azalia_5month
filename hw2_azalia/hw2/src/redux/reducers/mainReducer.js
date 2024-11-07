import { types } from "../types"


const initialState = {
    title: ''
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return { title: 'Hello' }
        default: return state
    }
}