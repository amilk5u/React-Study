import react, { useRef } from 'react'

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
         <button onClick={onView}>확인</button>
      </div>
   );
};

export default Test7;

/* 
useRef
직접 DOM 요소에 접근해야 할 때, useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능
useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능

공식문서 내용
useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다
useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.
*/