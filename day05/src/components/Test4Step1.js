import { useState, useRef } from 'react'

const Test4 = () => {
   const no = useRef(1)
   const textRef = useRef('')
   const [data, setData] = useState([
      // { id: 1, text: 'xxx', age: 20 }
   ])
   const [form, setForm] = useState({
      text: '', age: ''
   })
   const { text, age } = form

   const changeInput = (e) => {
      const { value, name } = e.target
      setForm({
         ...form,
         [name]: value
      })
   }
   const onAdd = () => {
      setData([
         ...data,
         {
            id: no.current++,
            text,
            age
         }
      ])
      setForm({ text: '', age: '' })
      textRef.current.focus()
   }
   return (
      <div>
         <input type="text" onChange={changeInput} name="text" value={text} ref={textRef} />
         <input type="text" onChange={changeInput} name="age" value={age} />
         <button onClick={onAdd}>추가</button>
         <hr />
         <ul>
            {
               data.map(item => <li key={item.id}>
                  {item.id} / {item.text} / {item.age}
               </li>)
            }
         </ul>
      </div>
   );
};

export default Test4;