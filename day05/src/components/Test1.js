import { useState } from 'react'

const Test1 = () => {
   const [data, setData] = useState([
      { id: 1, text: '유재석' },
   ])

   // length 로 사용하지 않는다. 고유번호가 아니기 때문에 중간에 삭제가 되었을시 찾아가기 어렵다.
   const onAdd1 = () => {
      setData(data.concat({
         id: data.length,
         text: '유재석' + Math.floor(Math.random() * 10)
      }))
   }

   const onAdd = () => {
      setData([
         ...data,
         {
            id: data.length,
            text: '송지효' + Math.floor(Math.random() * 10)
         }
      ])
   }



   return (
      <>
         <h2>데이터 추가</h2>
         <button onClick={onAdd}>추가</button>
         <hr />
         <ul>
            {
               data.map((item, index) => {
                  return <li key={index}>
                     {item.id} / {item.text} / index : {index}
                  </li>
               })
            }
         </ul>
      </>
   );
};

export default Test1;