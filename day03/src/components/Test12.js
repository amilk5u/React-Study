import React from "react"
import { useState } from "react"

const Test12 = () => {

   const [userName, setUserName] = useState('')
   const [password, setPassword] = useState('')

   const changeInput1 = (e) => {
      setUserName(e.target.value)
   }
   const changeInput2 = (e) => {
      const { value } = e.target
      setPassword(value)
   }

   return (
      <div>
         <input type="text" value={userName} onChange={changeInput1}/>
         <input type="password" value={password} onChange={changeInput2}/>
         {
            password.length > 6 ?  
            <button>로그인 합니다.</button> : 
            <button disabled >로그인 합니다.</button>
         }
      </div>
   );
};

export default Test12;