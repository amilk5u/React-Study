import { useState, useRef } from "react";
import FriendList from "./FriendList";
import FriendInput from "./FriendInput";
import dataList from './../assets/api/friendData'
import './style.css'

const Friend = () => {
   const [data, setData] = useState(dataList)
   const [isChk, setIsChk] = useState(true)
   const no = useRef(data.length + 1)

   const onOff = () => {
      setIsChk(!isChk)
   }
   // 삭제
   const onDel = (id) => {
      setData(data.filter(item => item.id !== id))
   }
   // 모두삭제
   const onRemove = () => {
      setData(data.filter(item => item === null))
      // setData([])
   }
   // 초기복구
   const onRestore = () => {
      setData(dataList)
   }
   //추가
   const onAdd = (form) => {
      form.id = no.current++
      setData([
         ...data,
         form
      ])
   }


   return (
      <div className="wrap">
         <h1>친구들 총인원 : {data.length}</h1>
         <p className="chk">
            <input type="checkbox" onChange={e => onOff(e.target.checked)} /* onClick={onOff} */ />
            {/* 추가/비활성 */}
            {
               isChk ? '추가 비활성' : '추가 활성'
            }
         </p>
         <FriendList data={data} onDel={onDel} />
         <p className="btn">
            <button onClick={onRemove}>모두삭제</button>
            <button onClick={onRestore}>초기복구</button>
         </p>
         {
            isChk && <FriendInput onAdd={onAdd} />
         }
      </div>
   );
};

export default Friend;