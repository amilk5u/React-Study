import { useState } from 'react';

const Step1 = ({ userName, age, addr, tel, changeInput, onNext }) => {
   return (
      <>
         <p>
            <label>이름</label> :
            <input type="text" value={userName} name="userName" onChange={changeInput} />
         </p>
         <p>
            <label>나이</label> :
            <input type="text" value={age} name="age" onChange={changeInput} />
         </p>
         <p>
            <label>주소</label> :
            <input type="text" value={addr} name="addr" onChange={changeInput} />
         </p>
         <p>
            <label>연락처</label> :
            <input type="text" value={tel} name="tel" onChange={changeInput} />
         </p>
         <p>
            <button onClick={onNext}>다음</button>
         </p>
      </>
   );
};

export default Step1;