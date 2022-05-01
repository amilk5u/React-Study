import { useCallback, useState } from "react";

const Text5 = () => {
   const [count, setCount] = useState(1)
   const ran = Math.random()
   const increment = useCallback(() => {
      console.log(ran)
      setCount(count + 1)
   }, [count])
   const decrement = useCallback(() => {
      console.log(ran)
      // setCount(count - 1)
      setCount(c => c - 1)
   }, [])
   return (
      <div>
         <h2>카운트 : {count}</h2>
         <p>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
         </p>
      </div>
   );
};

export default Text5;