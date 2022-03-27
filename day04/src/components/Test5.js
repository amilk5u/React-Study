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
            <button>추가</button>
            <button>추가</button>
            <button>추가</button>
         </p>
         <p>
            <button>수정</button>
            <button>수정</button>
            <button>수정</button>
         </p>
         <hr />
         <ul>
            {/* {
               arr.map((item, index) => {
                  return (<li key={index}>{index} / {item}</li>)
               })
            } */}
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