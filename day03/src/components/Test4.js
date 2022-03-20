import { useState } from 'react';

const Test4 = () => {

   // event, evt, e
   const onTest = (e) => {
      console.log(e.target) //현재 클릭한 엘리먼트
      console.log(e.currentTarget) // 버튼
   }

   return (
      <div>
         <button onClick={onTest}>
            <span>안녕하세요 누르세요</span>
            <br/>
            <br/>
            <b>일요일입니다</b>
         </button>
      </div>
   );
};

export default Test4;