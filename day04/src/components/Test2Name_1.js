import React from 'react';

const Test2Name_1 = ({onName , name1}) => {
   /* 
      1. 나의 name State props를 가져와서 onChange 를 통해 value 값을 setState에 넣는다
   */
   return (
      <div>
         <span>name : </span>
         <input onChange={onName} value={name1}/>
      </div>
   );
};

export default Test2Name_1;