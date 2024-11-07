import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import todoReducer from "./todoReducer";
import filterReducer from "./filterReducer";

export const rootReducer = combineReducers({
    mainReducer,
    todoReducer,
    filter: filterReducer
});
