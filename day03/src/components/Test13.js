import { useState } from "react"
import Test13Modal from './Test13Modal'
import './Test13.css'



const Test13 = () => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div>
         <button onClick={()=> setIsOpen(true)}>팝업 띄우기</button>
         {
            isOpen && <Test13Modal onClose={()=>setIsOpen(false)}/>
         }
      </div>
   );
};

export default Test13;