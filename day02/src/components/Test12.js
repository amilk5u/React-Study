import React, { useState } from 'react';

const Test12 = () => {
   const [visible, setVisible] = useState(true) // Default 가 false

   const onShow = () => {
      setVisible(true)
   }
   const onHide = () => {
      setVisible(false)
   }
   const onToggle = () => {
      setVisible(!visible) // visible 이 true 가 아닐 때
      // 반대로 바꿔라!!!!! (true 이면 false로 false 면 true 로!!)
      // !true -> false , ! false -> true !not
   }

   const [bol, setBol] = useState(false)

   const onBlock = () => {
      console.log('onBlock')
      setBol(true)
   }
   const onNone = () => {
      console.log('onNone')
      setBol(false)
   }
   const onToggle2 = () => {
      console.log('onToggle2')
      setBol(!bol)
   }
   return (
      <>
         <div style={{ padding: '10px 10px 0 10px' }}>
            <button onClick={onShow}>보이기</button>
            <button onClick={onHide}>숨기기</button>
            <button onClick={onToggle}>
               {visible ? '숨기기' : '보이기'}
            </button>
         </div>
         {
            visible &&
            <div style={{ width: '300px', height: '100px', margin: '10px', backgroundColor: 'pink' }}>박스</div>
         }


         <span style={{ padding: 10, fontSize: 20, fontWeight: 800 }}>만들어보기</span>
         <div style={{ padding: 10 }}>
            <button onClick={onBlock}>block</button>
            <button onClick={onNone}>none</button>
            <button onClick={onToggle2}>
               {
                  bol === true ? 'none' : 'block'
               }
            </button>
         </div>
         <div style={
            {
               width: 300,
               height: 200,
               backgroundColor: 'blue',
               margin: 10,
               display: bol === true ? 'block' : 'none'
            }
         }>
         </div>
      </>


   );
};
export default Test12;