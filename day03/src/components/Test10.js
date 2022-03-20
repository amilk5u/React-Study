import React from "react"
import { useState } from "react"

const Test10 = () => {
   const [isChk, setIsChk] = useState(false)
   const onChk = (e) => {
      const {checked} = e.target
      setIsChk(!isChk)
   }
   return (
      <>
         {/* 글자색을 pink / skyblue */}
         <div style={{ color: isChk ? "pink" : "skyblue", margin: '30px', fontSize: '30px' }}>
            <input type="checkbox" checked={isChk} onChange={onChk} />
            오늘은 일요일입니다
         </div>
      </>
   );
};

export default Test10;