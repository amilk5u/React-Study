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
      const {value} = e.target
      setForm({
         userId : value
      })
   }
   const changeInput2 = (e) => {
      const {value} = e.target
      setForm({
         userPw : value
      })
   }
   const changeInput3 = (e) => {
      const {value} = e.target
      setForm({
         userEmail : value
      })
   }

   const onReset = () => {
      console.log("reset")
   }

   return (
      <div>
         <input type="text" value={form.userId} onChange={changeInput1} />
         <input type="text" value={form.userPw} onChange={changeInput2} />
         <input type="text" value={form.userEmail} onChange={changeInput3} />
         <button onClick={onReset}>초기화</button>
         <hr />
         <h3>아이디 : {form.userId}</h3>
         <h3>비밀번호 : {form.userPw}</h3>
         <h3>이메일 : {form.userEmail}</h3>
      </div>
   );
};

export default Test3;