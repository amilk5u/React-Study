import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const Test3 = () => {
    const [ btn , setBtn ] = useState('posts')    
    const [ list , setList ] = useState(['posts','albums','photos','todos'])
    const  { data , error , loading } = useFetch(`https://jsonplaceholder.typicode.com/${btn}`)

    const onShow  = ( text ) => {
        setBtn( text )
    }

    return (
        <div>
            <h1> {btn} data List </h1>
            <p>
                { list.map( item => <button key={item} onClick={() => onShow(item)}> {item} </button>)}                
            </p>
            <div>
            { !loading && <h2>Loading... </h2>}
            {
                data && data.map( item => <p key={item.id}>
                    {btn} : {item.id} / { item.title}
                </p>)
            }
            </div>
        </div>
    );
};

export default Test3;