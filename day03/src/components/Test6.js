import { useState } from 'react'

const Test6 = () => {
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
   }

   return (
      <div>
         <input type="text" onChange={changeInput1} value={userId}/>
         <input type="text" onChange={changeInput2} value={userPw} />
         <button onClick={onReset}>초기화</button>
         <h2>
            id : {userId} / pw : {userPw}
         </h2>
      </div>
   );
};

export default Test6;