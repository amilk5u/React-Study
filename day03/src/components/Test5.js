import { useState } from 'react';
import './Test5.css'

const Test5 = () => {

   const [isColor, setIsColor] = useState(false)
   const [age, setAge] = useState(21)

   // 증가
   const upAge = () => {
      setAge(age + 1)
   }
   // 감소
   const downAge = () => {
      setAge(age - 1)
   }
   // 컬러 변경
   // 토글 - !not : !true -> false, !false -> true
   const onColor = () => {
      setIsColor(!isColor)
   }

   return (
      <div className={`wrap ${isColor ? 'pink' : 'tomato'}`}>
         <h2>backgroundColor : {isColor ? 'pink' : 'tomato'} </h2>
         <h2>나이 : {age}</h2>
         <p>
            <button onClick={onColor}>배경바꾸기:{isColor ? 'true' : 'false'} </button>
            <button onClick={upAge}>증가</button>
            <button onClick={downAge}>감소</button>
            {/* <button onClick={onToggle}>classList.toggle</button> */}
         </p>
      </div>
   );
};

export default Test5;