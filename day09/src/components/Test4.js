import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

const Test4 = () => {
    const { state, increment, decrement } = useCounter(1)
    const { data } = useFetch(`https://jsonplaceholder.typicode.com/todos/${state}`)
    
    return (
        <div style={{ margin: 40 }}>
            <h1> 숫자  : { state } </h1>        
            <button onClick={() => decrement() }> 감소 </button>
            <button onClick={() => increment() }> 증가 </button>
            {
                data && <div>
                    <h3> id : { data.id} </h3>
                    <h2> title : { data.title} </h2>
                </div>
            }
        </div>
    );
};

export default Test4;