import { useReducer, useState } from "react";

// 초기값
const initalState = 0
// 함수
const reducer = (state, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return state + 1
      case 'DECREMENT':
         return state - 1
      case 'REACT':
         return 0
      default:
         return state
   }
}

const Test9 = () => {
   const [count, dispatch] = useReducer(reducer, initalState)

   // 여러개의 함수를 스위치 케이스로 분리해서 작성할수 있다
   // const increment = () => { setCount(count + 1) }
   // const decrement = () => { setCount(count - 1) }
   // const reset = () => { setCount(0) }

   return (
      <div>
         <h1>카운트 : {count}</h1>
         <p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>증가 : INCREMENT</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>감소 : DECREMENT</button>
            <button onClick={() => dispatch({ type: 'REACT' })}>초기화 : REACT</button>
         </p>
      </div>
   );
};

export default Test9;

/* 
   useReducer 는 useState의 대체 함수입니다. 
   (state, action) => newState의 형태로 reducer를 받고 (필수) 
   dispatch 메서드와 짝의 형태로 현재 state를 반환합니다. 
   const [state, dispatch] = useReducer(reducer, initial);

   (Redux에 익숙하다면 이것이 어떻게 동작하는지 여러분은 이미 알고 있을 것입니다.)
   redex에서는 useReducer 가 필수

   다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우나 다음 state가 
   이전 state에 의존적인 경우에 보통 useState보다 useReducer를 선호합니다. 
   또한 useReducer는 자세한 업데이트를 트리거 하는 컴포넌트의 성능을 
   최적화할 수 있게 하는데, 이것은 콜백 대신 dispatch를 전달 할 수 있기 때문입니다.

   const [state, dispatch] = useReducer(reducer, initial);
   state : 상태데이터 (이름 임의)
   dispatch : 액션을 발생시키는 함수 (액션을 보내는고소, 액션 전달자)
   reducer : 상태분리함수 (이름 임의) - 상태 업데이트 로직을 담은 함수
   initalState : 초기값

   dispatch({type: 'decrement'}
   dispatch({type: '액션명'}
   1. type 필수 - 액션명 (별명, 별칭) : 소문자, 대문자, 한글 가능 
                                       한글 x , 주로 대문자로 작성한다 (소문자는 함수랑 헷갈리기때문에 잘안씀)
      dispatch({type: '액션명', 키1 : 값, 키2 : 값 }
      action.type
      action.키1
      action.키2

      * 상태분리로직
      function 함수명(state, action) {
         switch (action.type) {
            case '액션명':
               return 넘길값;
            default:
               return state
         }
      }
}


*/