import React from 'react';
import { useState, useRef } from 'react';

const Test3 = () => {
   const idRef = useRef('')
   const [form, setForm] = useState({
      userId: '',
      userPw: '',
      userEmail: ''
   })
   // form.userId , form.userPw
   // 비구조할당 (form.xxx : 이런식으로 쓰기 귀찮기 때문에)
   const { userId, userPw, userEmail } = form

   const changeInput = (e) => {
      const { value, name } = e.target
      setForm({
         ...form,
         [name]: value
      })
   }

   const onReset = () => {
      setForm({
         userId: '',
         userPw: '',
         userEmail: ''
      })
      idRef.current.focus()
   }

   return (
      <div>
         <input type="text" value={userId} name="userId" onChange={changeInput} ref={idRef} />
         <input type="text" value={userPw} name="userPw" onChange={changeInput} />
         <input type="text" value={userEmail} name="userEmail" onChange={changeInput} />
         <button onClick={onReset}>초기화</button>
         <hr />
         <h3>아이디 : {userId}</h3>
         <h3>비밀번호 : {userPw}</h3>
         <h3>이메일 : {userEmail}</h3>
      </div>
   );
};

export default Test3;