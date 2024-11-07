import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useSelector(state => state.todoReducer.todos);
    const filter = useSelector(state => state.filter);

    // Фильтруем задания на основе выбранного фильтра
    const filteredTodos = todos.filter(todo => {
        if (filter === 'all') return true;
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <ul>
            {filteredTodos.map(todo => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
};

export default TodoList;
