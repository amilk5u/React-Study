import { useState, useRef } from 'react'

const Test3 = () => {
   const no = useRef(1)
   const textRef = useRef()
   const [text, setText] = useState('')
   const [data, setData] = useState([
      // { id: 1, text: 'xxx' }
   ])
   const changeInput = (e) => {
      const { value } = e.target
      setText(value)
   }
   const onAdd = () => {
      setData([
         ...data,
         {
            id: no.current++,
            text: text
         }
      ])
      setText('')
      textRef.current.focus()
   }
   return (
      <div>
         <input type="text" onChange={changeInput} value={text} ref={textRef}/>
         <button onClick={onAdd}>추가</button>
         <hr />
         <ul>
            {
               data.map(item => <li key={item.id}>
                  {item.id} / {item.text}
               </li>)
            }
         </ul>
      </div>
   );
};

export default Test3;