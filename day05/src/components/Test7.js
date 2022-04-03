import React, { useEffect, useRef } from 'react';

const Test7 = () => {
    const ref1 = useRef() 

    //화면에 그려진후 한번만 실행 
    useEffect( () => {
        ref1.current.focus() 
    }, [])

    return (
        <div>
            <input type="text" ref={ ref1 } />
        </div>
    );
};

export default Test7;