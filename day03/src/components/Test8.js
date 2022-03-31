import React, { useRef } from 'react';

const Test8 = () => {
   const colorRef = useRef(null)
   const onView = () => {
      const data = {
         color: colorRef.current.value
      }
      console.log(data)
   }

   const catRef = useRef()
   let data1
   
   const onCat = () => {
      // console.log(data1)
      data1 = { cat: catRef.current.value }
      console.log(data1)
   }
   return (
      <div>
         {/* ref수업용 */}
         <select ref={colorRef}>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="pink">pink</option>
            <option value="tomato">tomato</option>
         </select>
         <button onClick={onView}>선택</button>

         <select ref={catRef}>
            <option value="야옹이">야옹이</option>
            <option value="나비">나비</option>
            <option value="천국이">천국이</option>
            <option value="길냥이">길냥이</option>
         </select>
         <button onClick={onCat}>클릭</button>
      </div>
   );
};

export default Test8;