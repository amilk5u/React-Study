import { useState } from "react"
import Test13Modal_1 from './Test13Modal_1'
import './Test13.css'

const Test13 = () => {
   /* 
      1. 팝업창 열기 누르면 팝업이 열려야한다.
      2. true / false로 판별
      3. useState 로 클릭시 true 하고 
      4. x 버튼 클릭시 false로 만든다
      5. 함수는 부모에 만들기
      6. 프록스는... boolen 값과 닫기 함수를 전달한다
      7. 
   */
   const [open, setOpen] = useState(false)
   const onPop = () => {
      setOpen(true)
   }
   return (
      <div>
         <button onClick={onPop}>팝업창열기</button>
         <Test13Modal_1 open={open} close={()=>{setOpen(false)}} />
      </div>
   );
};

export default Test13;