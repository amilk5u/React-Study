import React from "react"
import { useState } from "react"

const Test11 = () => {

   // const checkbox = true
   const [isBox, setBox] = useState(false)

   const onChk = (e) => {
      setBox(!isBox)
   }

   return (
      <div style={{ margin: '20px' }}>
         <p>
            <input type="checkbox" checked={isBox} onChange={onChk} />
            {
               isBox ? '숨기기' : '보이기'
            }
         </p>
         {
            isBox && <div style={{ width: '200px', height: '200px', backgroundColor: 'skyblue' }}></div>
         }
      </div>
   );
};

export default Test11;