import { useState, useRef } from 'react';
import './TodoForm.css'

const TodoForm = ({ onAdd }) => {
   const textRef = useRef()
   const [text, setText] = useState('')
   const changeInput = (e) => {
      const { value } = e.target
      setText(value)
   }
   const onSubmit = (e) => {
      e.preventDefault()
      if (!text) return false
      onAdd(text)
      setText('')
      textRef.current.focus()
   }
   return (
      <form className="TodoForm" onSubmit={onSubmit}>
         <input type="text" placeholder="할일을 입력하세요" onChange={changeInput} value={text} ref={textRef} />
         <button type="submit">추가</button>
      </form>
   );
};

export default TodoForm;