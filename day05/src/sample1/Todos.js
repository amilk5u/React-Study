import { useState, useRef } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './Todos.css'

const Todos = () => {
   const no = useRef(1)
   const [data, setData] = useState([
      /* { id: 1, text: '일요일 입니다' },
      { id: 2, text: '친구만나기' },
      { id: 3, text: '잠자기' },
      { id: 4, text: '리엑트 강의 수업 듣기' },
      { id: 5, text: '포트폴리오 만들기' }, */

   ])

   // 삭제
   const onDelete = (id) => {
      setData(data.filter(item => item.id !== id))
   }

   // 추가
   const onAdd = (text) => {
      setData([
         ...data,
         {
            id: no.current++,
            text: text,
            isChk: false
         }
      ])
   }

   // 체크
   const onToggle = (id) => {
      setData(data.map(item => item.id === id ? { ...item, isChk: !item.isChk } : item))
   }

   return (
      <div className="Todos">
         <h1>TodoList</h1>
         <TodoForm onAdd={onAdd} data={data} />
         <TodoList data={data} onDelete={onDelete} onToggle={onToggle} />
      </div>
   );
};

export default Todos;