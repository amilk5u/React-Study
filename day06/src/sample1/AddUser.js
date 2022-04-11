import React, { useRef, useState } from 'react';

const AddUser = ({ onAdd }) => {
    const nameRef  = useRef()
    const [ user , setUser ] = useState({
        name:'' , addr:'' 
    })
    const { name , addr } = user 

    const changeInput = (e) => {
        const { value , name } = e.target 
        setUser({
            ...user , 
            [name]:value 
        })
    } 

    const onSubmit  = (e) => {
        e.preventDefault()
        //공백
        if( !name || !addr ) return 
        // onAdd(name , addr )
        onAdd( user )
        setUser({
            name:'', addr:'' 
        })
        nameRef.current.focus()
    }

    return (
        <form onSubmit={ onSubmit }>
            <h2> 내일 출연진 명단추가 </h2>
            <p>
                <label>이름</label>
                <input type="text" value={ name } name="name" onChange={ changeInput }  ref={nameRef} />
            </p>
            <p>
                <label>주소</label>
                <input type="text" value={ addr } name="addr" onChange={ changeInput } />
            </p>
            <p>
                <button type="submit"> 추가 </button>
            </p>
        </form>
    );
};

export default AddUser;