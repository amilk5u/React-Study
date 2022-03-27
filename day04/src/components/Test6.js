import { useState } from 'react'
import Test6Sub from './Test6Sub'

const dataList = [
   { id: 1, name: '유재석' },
   { id: 2, name: '김종국' },
   { id: 3, name: '송지효' },
   { id: 4, name: '하하' },
   { id: 5, name: '지석진' }
]
const Test6 = () => {
   const [data, setData] = useState(dataList)
   const onDel1 = () => {
      setData(data.filter(item => item.id !== 1))
   }
   const onDel2 = (id) => {
      setData(data.filter(item => item.id !== id))
   }
   const onAdd1 = () => {
      setData(data.concat({ id: 6, name: '양세찬' }))
   }
   const onAdd2 = (name) => {
      setData([...data, { id: 7, name }])
   }
   const onMod = (num) => { 
      setData(data.map(item => item.id === num ? {...item, name:'이광수'} : item))
   }
   return (
      <div>
         <ul>
            {
               data.map(item => <li key={item.id}>{item.id} / {item.name}</li>)
            }
         </ul>
         <Test6Sub onDel1={onDel1} onDel2={onDel2} onAdd1={onAdd1} onAdd2={onAdd2} onMod={onMod} />
      </div>
   );
};

export default Test6;