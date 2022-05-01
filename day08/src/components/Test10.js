import { useReducer, useState } from "react";

// 함수를 여러개 많들지 않고 케이스별로 함수를 가를수 있다
const initalState = 'hotpink'
const reducer = (state, action) => {
   switch (action.type) {
      case 'RED':
         return 'red'
      case 'GREEN':
         return 'green'
      case 'YELLOW':
         return 'yellow'
      case 'PINK':
         return 'pink'
      default:
         return state
   }
}

const Test10 = () => {
   const [color, dispatch] = useReducer(reducer, initalState)
   return (
      <div>
         <h2 style={{color:color}}>color : {color}</h2>
         <p>
            <button onClick={()=> dispatch({type:'RED'})}>red</button>
            <button onClick={()=> dispatch({type:'GREEN'})}>green</button>
            <button onClick={()=> dispatch({type:'YELLOW'})}>yellow</button>
            <button onClick={()=> dispatch({type:'PINK'})}>pink</button>
         </p>
      </div>
   );
};

export default Test10;
