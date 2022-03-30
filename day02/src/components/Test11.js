import React, { useState } from 'react';

const Test11 = () => {
   const [bgColor, setBgColor] = useState('yellow') // default 값 은 yellow
   const onColor = () => { 
      bgColor === 'red' ? setBgColor('pink') : setBgColor('red') 
      /* if (bgColor === 'red') {
         setBgColor('pink')
      } else {
         setBgColor('red') 
      } */
   }

   return (
      <>
         <h3 style={{ padding: 10, margin: 10, color: 'black' }}>h1 을 클릭하면 배경색이 pink에서 - red로 왕복</h3>
         <h1 style={
            {
               margin: '10px', padding: '30px', backgroundColor: bgColor,
               cursor: 'pointer', fontSize: '20px'
            }}
            onClick={onColor}
         >
            backgroundColor: {bgColor}
         </h1>
      </>
   );
};

export default Test11;