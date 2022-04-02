import { useState, useRef } from 'react'

// onChange 함수 실행 (Html의 요소가 바뀌었을 때 실행한다)
// 이해가 완벽하게 되지는 않았지만, useRef 를 더 알아보기
const Test7 = () => {
   const idRef = useRef(null)
   const [userId, setUserId] = useState('')
   const [userPw, setUserPw] = useState('')
   const changeInput1 = (e) => {
      // setUserId(e.target.value)
      const { value } = e.target
      setUserId(value)
   }
   const changeInput2 = (e) => {
      // setUserPw(e.target.value)
      const { value } = e.target
      setUserPw(value)
   }
   const onReset = () => {
      setUserId('')\m///////////////////////////////
      setUserPw('')
      idRef.current.focus()
   }
   return (
      <div>
         <input type="text" onChange={changeInput1} value={userId} ref={idRef} />
         <input type="text" onChange={changeInput2} value={userPw} />
         <button onClick={onReset}>초기화</button>
         <h2>
            id : {userId} / pw : {userPw}
         </h2>
         <h3>
            id : {userId} <br />
            pw : {userPw}
         </h3>
      </div>
   );
};

export default Test7;