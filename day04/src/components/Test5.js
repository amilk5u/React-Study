import { useState } from 'react'

const Test5 = () => {
   const dataList = [
      { id: 1, name: '유재석' },
      { id: 2, name: '김종국' },
      { id: 3, name: '송지효' },
      { id: 4, name: '하하' },
      { id: 5, name: '지석진' }
   ]

   const [data, setData] = useState(dataList)

   const onDel1 = () => {
      setData(data.filter(item => item.name !== '송지효'))
   }
   const onDel2 = () => {
      setData(data.filter(item => item.id !== 3))
   }
   const onDel3 = (num) => {
      alert(num + '번째줄을 삭제한다')
      setData(data.filter(item => item.id !== num))
   }
   const onAdd1 = () => {
      setData(data.concat({ id: 6, name: '이광수' }))
   }
   const onAdd2 = () => {
      setData([...data, { id: 7, name: '양세찬' }])
   }
   // 인자와 키값이 같을 경우에 (:) 생략하고 합쳐서 사용할 수 있다
   const onAdd3 = (name) => {
      setData([...data, { id: 8, name /* name:name */ }])
   }

   const onMod1 = () => {
      setData(
         data.map(item => {
            if (item.id === 5) {
               return {
                  ...item,
                  name: '전소민'
               }
            } else {
               return item
            }
         })
      )
   }
   const onMod2 = () => {
      setData(data.map(item => item.id === 4 ? {...item, name:"이광수"} : item))
   }
   const onMod3 = (num) => { 
      setData(
         data.map(item => item.id === num ? {...item, name:'양세찬'} : item)
      )
   }

   return (
      <div>
         <p>
            <button onClick={onDel1}>삭제</button>
            <button onClick={onDel2}>삭제</button>
            {/* react에서 함수의 인자값을 전달 할 때는 꼭 화살표 함수를 포함하여 작성해야 한다 */}
            <button onClick={() => onDel3(1)}>1삭제</button>
            <button onClick={() => onDel3(4)}>4삭제</button>
         </p>
         <p>
            <button onClick={onAdd1}>추가</button>
            <button onClick={onAdd2}>추가</button>
            <button onClick={() => onAdd3('전소민')}>추가</button>
         </p>
         <p>
            <button onClick={onMod1}>수정</button>
            <button onClick={onMod2}>수정</button>
            <button onClick={() => onMod3(1)}>수정</button>
         </p>
         <hr />
         <ul>
            {
               // 1 / 유재석
               data.map((item, index) => {
                  return <li key={item.id}>{item.id} / {item.name}</li>
               })
            }
         </ul>
      </div>
   );
};

export default Test5;