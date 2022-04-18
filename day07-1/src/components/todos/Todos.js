import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'

const Todos = () => {
    const no = useRef(1)
    const [ data , setData ] = useState([])   

    const onDel = (id) => {
        setData( data.filter( todo => todo.id !== id ))
    }  
    const onAdd = ( text )  => {
      setData([
          ...data ,
          {
              id: no.current++ ,
              text ,
              isActive: false 
          }
      ])
    }    
    const onToggle = ( id )  => {
      setData( data.map( todo => todo.id === id ? { ...todo , isActive: !todo.isActive } : todo ))
    }


    return (
        <div className="Todos">
            <h1>일정관리앱</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Todos;