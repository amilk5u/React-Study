import { useState } from "react"

const Test13Modal_1 = ({ open, close }) => {
   return (
      <>
         <div style={{ display: open ? 'block' : 'none' }}>
            <div className="bg"></div>
            <div className="popup">
               <h2>팝업연습</h2>
               <div className="close" onClick={close}>X</div>
            </div>
         </div>
      </>
   );
};

export default Test13Modal_1;