import React from "react"
import { useState } from "react"

/* 
<select onchange="showValue(this)">
  <option value="빨강">빨강색</option>
  <option value="노랑">노랑색</option>
  <option value="초록">초록색</option>
</select>
// Javascript

const showValue = (target) => {
  // 선택한 option의 value 값
  console.log(target.value);
  
  // option의 text 값
  console.log(target.options[target.selectedIndex].text);
}
 */
const Test9 = () => {
   const [color, setColor] = useState('skyblue')
   const [text, setText] = useState('')
   const onView = () => {
      setColor(text)
   }

   const onColor = (e) => {
      const { value } = e.target
      setText(value)
   }
   return (
      <div>
         <h2 style={{ fontSize: '50px', color: color }}>컬러 바꾸기</h2>
         <select onChange={onColor}>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="gray">gray</option>
         </select>
         <button onClick={onView}>선택</button>
      </div>
   );
};

export default Test9;