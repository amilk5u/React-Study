import React, { useState } from 'react';

const Test10_1 = () => {
   /* 
      1. 체크되면 컬러를 red 체크가 풀리면 컬러 블루로 만들기
      2. 체크됨 true / 체크안됨 fasle
   */
   const [chk, setChk] = useState(false)
   const onChk = (e) => {
      const { checked } = e.target
      setChk(checked)
   }

   return (
      <div>
         <input style={{ width: 30, height: 30 }} onChange={onChk} type="checkbox" checked={chk} />
         <p style={{
            fontSize: 40, margin: 0, fontWeight: 800,
            color: chk ? 'red' : 'blue'
         }}>야옹이가 화를 냅니다.</p>
      </div>
   );
};

export default Test10_1;