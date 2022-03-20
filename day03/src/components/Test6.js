import { useState } from 'react'
import { useRef } from 'react'

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
      setUserId('')
      setUserPw('')
      idRef.current.focus()
   }

   return (
      <div>
         <input type="text" onChange={changeInput1} value={userId} ref={idRef}/>
         <input type="text" onChange={changeInput2} value={userPw} />
         <button onClick={onReset}>초기화</button>
         <h2>
            id : {userId} / pw : {userPw}
         </h2>
      </div>
   );
};

export default Test7;