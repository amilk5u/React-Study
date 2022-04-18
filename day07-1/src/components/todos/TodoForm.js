import React, { useRef, useState } from 'react';
import './TodoForm.css'

const TodoForm = ({ onAdd }) => {
    const textRef = useRef()
    const [text, setText] = useState('')

    const changeInput = (e) => {
        const { value } = e.target 
        setText( value )
    }
    const onSubmit = (e)  => {
        e.preventDefault() 

        if( !text ) return

        onAdd( text )
        setText('')
        textRef.current.focus() 
    }

    return (
        <form className="TodoForm" onSubmit={ onSubmit }>
            <input type="text" value={text} onChange={ changeInput } ref={textRef} placeholder="할일을 입력하세요" />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoForm;