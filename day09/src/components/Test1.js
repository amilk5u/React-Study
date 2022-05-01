import React from 'react';
import { useCounter } from '../hooks/useCounter';

const Test1 = () => {
    const { state, increment, decrement , reset } = useCounter(100)

    return (
        <div>
            <h1>카운트 : {state} </h1>
            <p>
                <button onClick={() => increment() }>증가</button>
                <button onClick={() => decrement() }>감소</button>
                <button onClick={() => reset() }>초기화</button>
            </p>
        </div>
    );
};

export default Test1;