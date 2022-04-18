import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test4 = () => {
    const [ todo , setTodo ] = useState({})
    const [loading , setLoading] = useState( true )
    const [ error , setError ] = useState('')
    const [ id , setId ] = useState( 4 )
    const [ num , setNum ] = useState( 4 ) 
    
    useEffect( () => {
        const url =`https://jsonplaceholder.typicode.com/todos/${id}`
        axios.get( url )
             .then( res => {
                setTodo( res.data )
                setLoading( false )
                setError('')
             })
             .catch( error  => {
                setTodo( {} )
                setLoading( true )
                setError('주소를 찾을수 없습니다.')
             })
    },[num])
    const onNum  = ()  =>{
        setNum( id )
    }

    return (
        <div>
            <p>
                <input type="text" value={id} onChange={ e => setId(e.target.value)} />                
                <button onClick={ onNum }>검색</button>
            </p>        
            <h3> { todo.id } / { todo.title } </h3>
        </div>
    );
};

export default Test4;