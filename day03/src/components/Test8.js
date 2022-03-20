import react, { useRef } from 'react'
import React from 'react';

const Test8 = () => {
   const colorRef = useRef(null)//null 생략가능
   const onView = () => {
      const data = {
         color: colorRef.current.value
      }
      console.log(data)
   }


   return (
      <div>
         {/* ref 수업용 */}
         <select ref={colorRef}>
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

export default Test8;