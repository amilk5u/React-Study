import React from 'react';
import { useState } from 'react';
import Test2Name from './Test2Name';
import Test2Ani from './Test2Ani';
import Test2Dis from './Test2Dis';


const Test2 = () => {

   const [text, setText] = useState('아무개')
   const [ani, setAni] = useState('아무동물')

   const onText = (e) => {
      setText(e.target.value)
   }

   const onAni = (e) => {
      const { value } = e.target
      setAni(value)
   }


   return (
      <div>
         <Test2Name text={text} onText={onText} />
         <hr />
         <Test2Ani ani={ani} onAni={onAni}/>
         <hr />
         <Test2Dis text={text} ani={ani} />
      </div>
   );
};

export default Test2;