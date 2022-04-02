import { useState, useRef } from 'react';

const Test3_1 = () => {
   const [form, setForm] = useState({
      userId: '',
      userPw: '',
      userEmail: ''
   })
   const onValue = (e) => {
      const { value, name } = e.target
      setForm({
         ...form,
         [name]: value
      })
   }

   const idRef = useRef(null)
   const onRest = () => {
      console.log('리셋')
      setForm({
         userId: '',
         userPw: '',
         userEmail: ''
      })
      idRef.current.focus()
   }

   const { userId, userPw, userEmail } = form

   return (
      <>
         <div style={{ margin: 10 }}>
            <span>아이디 : </span>
            <input type="text" onChange={onValue} name="userId" value={userId} ref={idRef} />
         </div>
         <div style={{ margin: 10 }}>
            <span>비밀번호 : </span>
            <input type="password" onChange={onValue} name="userPw" value={userPw} />
         </div>
         <div style={{ margin: 10 }}>
            <span>이메일 : </span>
            <input type="text" onChange={onValue} name="userEmail" value={userEmail} />
         </div>
         <button style={{ margin: 10 }} type="button" onClick={onRest}>초기화</button>
         <hr style={{ margin: 10 }} />
         <div style={{ margin: 10 }}>
            <h2>아이디는 : <span>{userId}</span></h2>
            <h2>비밀번호는 : <span>{userPw}</span></h2>
            <h2>이메일은 : <span>{userEmail}</span></h2>
         </div>
      </>
   );
};

export default Test3_1;