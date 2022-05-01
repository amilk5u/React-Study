import { useState } from "react";
import Test3Sub from "./Test3Sub";

const Test3 = () => {
   const [color, setColor] = useState('')
   const [food, setFood] = useState('')

   const onColor = (e) => {
      const { value } = e.target
      setColor(value)
   }
   const onFood = (e) => {
      const { value } = e.target
      setFood(value)
   }
   return (
      <div style={{margin:20}}>
         <h2>당신이 좋아하는 색은?</h2>
         <div>
            <input type="text" value={color} onChange={onColor} />
            <p> 선택 : pink, hotpink, skyblue, orange</p>
         </div>
         <hr />
         <h2>당신이 좋아하는 음식은?</h2>
         <div>
            <p>
               <input type="radio" value="갈비" name="food" onChange={onFood} />
               <label>갈비</label>
            </p>
            <p>
               <input type="radio" value="떡볶이" name="food" onChange={onFood} />
               <label>떡볶이</label>
            </p>
            <p>
               <input type="radio" value="수제비" name="food" onChange={onFood} />
               <label>수제비</label>
            </p>
            <p>
               <input type="radio" value="냉면" name="food" onChange={onFood} />
               <label>냉면</label>
            </p>
         </div>
         <hr />
         <Test3Sub color={color} food={food}/>
      </div>
   );
};

export default Test3;