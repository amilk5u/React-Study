import React, { useEffect, useState } from 'react';

export const useFetch = ( url ) => {
    const [ data , setData ] = useState([])
    const [ loading , setLoading ] = useState(false)
    const [ error , setError ] = useState(null)

    useEffect( () => {
        fetch( url )
        .then( res => res.json() )
        .then( res => {
            setData( res )
            setError( null )
            setLoading( true )
        })
        .catch( error => {
            setError( error )
            setData([])
            setLoading( false )
        })
    },[url])

    return  { data , error , loading }
};

 