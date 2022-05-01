import React from 'react';
import { useFetch } from '../hooks/useFetch';

const Test2 = () => {
    const  { data , error , loading } = useFetch('https://jsonplaceholder.typicode.com/posts')
    
    if( error ) {
        console.log( error )
    }    

    return (
        <div>
            <h1> Posts data list </h1>
            { !loading && <h2>Loading... </h2>}
            {
                data && data.map( item => <p key={item.id}>
                    {item.id} / { item.title}
                </p>)
            }
        </div>
    );
};

export default Test2;