import { useState } from 'react'
// import React, { useState } from 'react';

const Test1 = () => {
   const [count, setCount] = useState(0)

   const onUp = () => { setCount(count + 1) }
   const onDown = () => { setCount(count - 1) }
   const onReset = () => { setCount(0) }

   return (
      <div>
         <h1>숫자 : {count}</h1>
         <p>
            <button onClick={onUp}>증가</button>
            <button onClick={onDown}>감소</button>
            <button onClick={onReset}>초기화</button>
         </p>
      </div>
   );
};
export default Test1;

/* 
   useState: 유동으로 변경될때 - import useState
   React.useState
   const [상태데이터, setter함수] = useState(초기값)
   setter함수(값, 수식)

   const [상태데이터, setter함수] = useState(초기값)
   const [상태데이터] = useState(초기값)  <-변경안하고 사용할 때 
*/