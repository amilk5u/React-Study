import React, { useState } from 'react';

const Test12 = () => {
    const [ username , setUsername] = useState('')
    const [ password , setPassword] = useState('')

    const changeInput1  = (e) => {
        setUsername( e.target.value )
    }
    const changeInput2  = (e) => {
        const { value } = e.target 
        setPassword( value )
    }

    return (
        <div>
            <input type="text" value={ username }  onChange={ changeInput1 }/>
            <input type="password" value={ password } onChange={ changeInput2 }/>
            <button disabled={ password.length < 7 }>로그인 합니다.</button>
            <hr />
            {
                password.length > 6 ? 
                <button>로그인 합니다.</button> :
                <button disabled >로그인 합니다.</button>
            }
        </div>
    );
};

export default Test12;