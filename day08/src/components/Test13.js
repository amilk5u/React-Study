import { useReducer, useState } from "react";

const initalState = {
   width: 150
}
const useReducer = (state, action) => {
   switch (action.type) {
      case 'PLUS':
         return {
            width: 200
         }
      case 'MINUS':
         return {
            width: 100
         }
      case 'RESET':
         return {
            width: 150
         }
      default:
         return state
   }

}
const Test13 = () => {
   const [state, dispatch] = useReducer(reducer, initalState)
   return (
      <div style={{ margin: 20 }}>
         <div style={{ width: 100, height: 100, background: 'hotpink', transition: '.5s' }}></div>
         <p>
            <button>50씩 증가</button>
            <button>30씩 감소</button>
            <button>초기화</button>
         </p>
      </div>
   );
};

export default Test13;