import { useMemo, useState } from 'react';

const Test1 = () => {
   const [cnt1, setCnt1] = useState(1)
   const [cnt2, setCnt2] = useState(1)

   // 동시에 처리 되기 때문에 ... 값을 찾을수 없음
   // 사용자가 함수를 만들어서 return 을 처리할경우 (return값 기억 - useMemo)
   const isEven = useMemo(() => {
      console.log('test')
      console.log(cnt1)
      return cnt1 % 2 === 0
   },[cnt1])

   return (
      <div>
         <h2>카운트 : {cnt1}</h2>
         <button onClick={() => setCnt1(cnt1 + 1)}>증가</button>
         <h2>카운트 : {cnt2}</h2>
         <button onClick={() => setCnt1(cnt2 + 1)}>증가</button>
         <h2>
            결과 : {isEven ? '짝수' : '홀수'}
         </h2>
      </div>
   );
};

export default Test1;

/* 
   리액트는 컴포넌트가 실행될때마다 내부의 것들을 다시 만든다.
   변수 선언하면 변수, 함수를 선안 하면 다시 함수를 만든다
   state값을 선언해야 고정된 값을 설정할수 있음 (기억을한다)

   함수
   바뀌는 값이 있으면 그때 새로만든다.
   함수를 또만들지 않고 그냥 써

   필요이상으로 일을 너무 많이 한다.
   컴포넌트들이 많을시 자식 컴포넌트안의 내부 변수와 함수들이 계속 재랜더링된다



*/