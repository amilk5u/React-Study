import { useState, useRef } from 'react'
const Test2 = () => {
   const no = useRef(1)
   const [data, setData] = useState([])
   const names = '유재석,송지효,김종국,하하,전소민,양세찬,지석진,신민주,강개리,이광수'.split(",")
   //mdn 문자열 - 배열로
   // const nameArr = name.split(",");

   const onAdd = () => {
      const ran = Math.floor(Math.random() * names.length)
      setData([
         ...data,
         {
            id: no.current++,
            text: names[ran]
         }
      ])
   }
   return (
      <div>
         <button onClick={onAdd}>추가</button>
         <hr />

         <ul>
            {
               data.map((item, index) => {
                  return <li key={item.id}>
                     {item.id} / {index.text}
                  </li>
               })
            }
         </ul>
      </div>
   );
};

export default Test2;