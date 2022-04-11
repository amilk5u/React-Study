import React, { useState } from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {
    const [ msg , setMsg ] = useState('출력')
    const [ isShow , setIsShow ] = useState( false )

    const onMsg1  = ()  => {
        const result = window.confirm('전부 삭제하시겠습니까?')
        if( result ) {
            setMsg('예 전부 삭제해 주세요 ')
            setIsShow( true )
        }else{
            return 
        }
    }

    const onMsg2  = ()  => {
        const result = window.confirm('전부 복구하시겠습니까?')
        if( result ) {
            setMsg('예 전부 복구해 주세요')
            setIsShow( true )
        }else{
            return 
        }
    }


    return (
        <div>
           <p>
                <button onClick={ onMsg1 }> 메세지1 </button>   
                <button onClick={ onMsg2 }> 메세지2 </button>   
            </p>     
            <hr/>             
            <Test6Sub msg={msg} isShow={isShow} setIsShow={setIsShow} />
        </div>
    );
};

export default Test6;