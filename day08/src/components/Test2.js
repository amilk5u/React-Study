import { useMemo, useState } from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {
   const [cnt, setCnt] = useState(1)
   const increment = () => {
      setCnt(cnt + 1)
   }

   // 사용자 함수
   const testSub = useMemo(() => {
      return <Test2Sub />
   }, [cnt])

   return (
      <div>
         <h1>출력 : {cnt}</h1>
         <button onClick={increment}>증가</button>
         <hr />
         {testSub}
      </div>
   );
};

export default Test2;