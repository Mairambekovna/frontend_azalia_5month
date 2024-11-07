import { types } from "../types";

const initialFilterState = 'all';

export default function filterReducer(state = initialFilterState, action) {
    switch (action.type) {
        case types.SET_FILTER:
            return action.payload;
        case types.RESET_FILTER:
            return 'all';
        default:
            return state;
    }
}
