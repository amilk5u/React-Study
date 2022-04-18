import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({ data , onDel, onToggle }) => {
    return (
        <ul className="TodoList">
            {
                data.map( todo => <TodoItem key={todo.id} todo={todo} onDel={onDel} onToggle={onToggle} />)
            }            
        </ul>
    );
};

export default TodoList;