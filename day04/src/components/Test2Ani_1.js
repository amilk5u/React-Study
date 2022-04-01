import React from 'react';

const Test2Ani_1 = ({ onAni, ani1 }) => {
   /* 
      1. 내가 좋아하는 동물 state props를 가져와서 onChange 를 통해 value 값을 setState에 넣는다
   */
   return (
      <div>
         <span>animal : </span>
         <input onChange={onAni} value={ani1} />
      </div>
   );
};

export default Test2Ani_1;