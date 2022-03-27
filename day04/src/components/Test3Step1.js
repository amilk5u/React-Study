import React from 'react';
import { useState } from 'react';

const Test3 = () => {
   const [form , setForm] = useState({
      userId : '',
      userPw : '',
      userEmail : ''
   })
   const [userId, setUserId] = useState('')
   const [userPw, setUserPw] = useState('')
   const [userEmail, setUserEmail] = useState('')

   const changeInput1 = (e) => {
      setUserId(e.target.value)
   }
   const changeInput2 = (e) => {
      const {value} = e.target
      setUserPw(value)
   }
   const changeInput3 = (e) => {
      const {value} = e.target
      setUserEmail(value)
   }

   const onReset = () => {
      console.log("reset")
   }

   return (
      <div>
         <input type="text" value={userId} onChange={changeInput1} />
         <input type="text" value={userPw} onChange={changeInput2} />
         <input type="text" value={userEmail} onChange={changeInput3} />
         <button onClick={onReset}>초기화</button>
         <hr />
         <h3>아이디 : {userId}</h3>
         <h3>비밀번호 : {userPw}</h3>
         <h3>이메일 : {userEmail}</h3>
      </div>
   );
};

export default Test3;