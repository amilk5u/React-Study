import React, { useRef } from 'react';

const Test7 = () => {
   const idRef = useRef(null)
   const pwRef = useRef()
   const onView = () => {
      const data = {
         id: idRef.current.value,
         pw: pwRef.current.value
      }
      console.log(data)
   }
   return (
      <div>
         {/* ref 수업용 */}
         <input type="text" ref={idRef} />
         <input type="text" ref={pwRef} />
         <button onClick={onView}> 확인</button>
      </div>
   );
};

export default Test7;

/*
   useRef
   직접 DOM 요소에 접근해야 할 때, useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능
   useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능​

   공식문서 내용
   useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다
   useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.

   const 이름  = useRef(null)
   const 이름  = useRef()
   const 이름  = useRef(초기값)
   const 이름  = useRef(10)

   <태그 ref={이름} />
   이름.current.xxx 

   const nameRef = useRef(null)
   <button ref={nameRef} />

   nameRef.current.style.color ='xxx
   nameRef.current.style.fontSize ='xxx
   nameRef.current.style.backgroundColor ='xxx

   ** useRef는 참조를 목적으로 사용되지만 컴포넌트 렌더링에 영향을 주지 않는것을 목적으로 사용한다 함수 컴포넌트 내부의 특정값을 지속적으로 참조할때 사용한다 

   *** Ref를 사용해야 할 때
   포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
   애니메이션을 직접적으로 실행 시킬 때.
   서드 파티 DOM 라이브러리를 React와 같이 사용할 때.
*/