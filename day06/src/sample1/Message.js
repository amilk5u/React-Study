import React, { useEffect } from 'react';

const Message = ({msg, isShow ,setIsShow}) => {

    // 2초후에 사라지기 useEffect 이용 setTimeout 
    useEffect( () => {
        const timer  = setTimeout( () => {
            setIsShow( false )
        }, 2000 )
        return() => {
            clearTimeout( timer )
        }
    },[ msg ])

    return (
        <div className={`message ${isShow ? "on":"" }`}>
            {msg}
        </div>
    );
};

export default Message;