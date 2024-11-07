import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../redux/actions";

const TodoItem = ({ id, text, completed}) => {
    const dispatch = useDispatch()

    return (
        <li style={{ textDecoration: completed ? 'line-through': 'none'}}>
            <span onClick={() => dispatch(toggleTodo(id))}>{text}</span>
            <button onClick={() => dispatch(removeTodo(id))}>Delete</button>
        </li>
    )
}

export default TodoItem;