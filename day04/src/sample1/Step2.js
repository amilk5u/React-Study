import { useState } from 'react';

const Step2 = ({ job, email, sex, inter, changeInput, onNext, onPrev }) => {
   return (
      <>
         <p>
            <label>직업</label> :
            <input type="text" value={job} name="job" onChange={changeInput} />
         </p>
         <p>
            <label>이메일</label> :
            <input type="text" value={email} name="email" onChange={changeInput} />
         </p>
         <p>
            <label>성별</label> :
            <input type="text" value={sex} name="sex" onChange={changeInput} />
         </p>
         <p>
            <label>관심분야</label> :
            <input type="text" value={inter} name="inter" onChange={changeInput} />
         </p>
         <p>
            <button onClick={onPrev}>이전</button>
            <button onClick={onNext}>다음</button>
         </p>
      </>
   );
};

export default Step2;