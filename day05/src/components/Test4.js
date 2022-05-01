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

   const onAdd = (e) => {
   	e.preventDefault()
   	// 공백은 submit 되지 않음
   	/* if ( text.length === 0 || age.length === 0 ) {
   		return
   	} */
   	if (!text || !age) return // 간단하게 만듬
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

   /* const onAdd2 = (e) => {
      e.preventDefault();
      if (!text || !age) return
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
   } */

   return (
      <div>
         <form onSubmit={onAdd}>
            <input type="text" onChange={changeInput} name="text" value={text} ref={textRef} />
            <input type="text" onChange={changeInput} name="age" value={age} />
            <button type="submit">추가</button>
         </form>
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