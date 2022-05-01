import { useState, useRef } from 'react'

const Test3 = () => {
   const no = useRef(1)
   const textRef = useRef()  
   const [text, setText] = useState('') // input 내용
   // id 와 text를 담는 곳
   const [data, setData] = useState([
      // { id: 1, text: 'xxx' }
   ])
   const changeInput = (e) => {
      const { value } = e.target
      setText(value)
   }

   const onAdd2 = () => {
      setData([
         ...data,
         {
            id : no.current ++,
            text : text
         }
      ])
      setText('')
      textRef.current.focus()
   }
   return (
      <>
         <input type="text" onChange={changeInput} value={text} ref={textRef}/>
         <button onClick={onAdd2}>추가</button>
         <hr />
         <ul>
            {
               data.map(item => <li key={item.id}>
                  {item.id} / {item.text}
               </li>)
            }
         </ul>
      </>
   );
};

export default Test3;