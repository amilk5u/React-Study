import React, { useEffect, useState } from 'react';

const Test2 = () => {
    const [ count , setCount ] = useState(1)

    useEffect( () =>{
        console.log('useEffect')
        const timer  = setInterval( () => {
            console.log( 'interval')
            // setCount( 이전값매개변수 => 이전값매개변수 +  1 )
            setCount( cnt => cnt +  1 )

            //자식컴포넌트로 처리하는경우가 많아서 시간이 나오면 뒷정리를 꼭한다 
            return() => {
                console.log( '뒷정리')
                clearInterval( timer )
            }
        }, 1000 )
    },[])

    return (
        <div>
            <h1> 카운트 : { count } </h1>
        </div>
    );
};

export default Test2;