import React, { useRef, useState } from 'react';

const Test2 = () => {
   //고유번호처리 
   const no = useRef(1) //초기값
   const [data, setData] = useState([])
   const names = '김다미,최우식,유재석,김희선,최진우,송혜교,전지현,이승기,강호동,송소희'.split(',')

   const onAdd = () => {
      const ran = Math.floor(Math.random() * names.length) // names 의 갯수만큼 랜덤값으로 나타내라
      setData([
         ...data,
         {
            id: no.current++,
            text: names[ran]
         }
      ])
   }
   return (
      <>
         <button onClick={onAdd}>추가</button>
         <hr />
         <ul>
            {
               data.map((item, index) => {
                  return <li key={item.id}>{item.id} / {item.text}</li>
               })
            }
         </ul>
      </>
   );
};

export default Test2;