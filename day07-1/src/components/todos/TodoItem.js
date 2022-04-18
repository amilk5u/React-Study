import React from 'react';

const TodoItem = ({ todo, onDel , onToggle }) => {
    const { id, text , isActive } = todo

    return (
        <li className={ isActive ? 'on':''}>
           <span onClick={() => onToggle(id)}>&#10003;</span> 
           <em onClick={() => onToggle(id)}> { text } </em>
           <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;