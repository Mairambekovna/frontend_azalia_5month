
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setFilter, resetFilter } from "../../redux/actions";
import TodoList from "./TodoList";

const Todo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    const handleFilterChange = (newFilter) => {
        dispatch(setFilter(newFilter));
    };

    const handleResetFilter = () => {
        dispatch(resetFilter());
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Enter a new task"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button onClick={handleAddTodo}>Add task</button>
            <div>
                <button onClick={() => handleFilterChange('all')} disabled={filter === 'all'}>
                    Все задания
                </button>
                <button onClick={() => handleFilterChange('active')} disabled={filter === 'active'}>
                    Активные задания
                </button>
                <button onClick={() => handleFilterChange('completed')} disabled={filter === 'completed'}>
                    Завершенные задания
                </button>
                <button onClick={handleResetFilter}>Сбросить</button>
            </div>
            <TodoList />
        </div>
    );
};

export default Todo;
