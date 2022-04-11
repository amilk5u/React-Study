import React, { useEffect, useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Message from './Message';
import './style.css'


const dataList  = [
    {id:1 , name:'김희선', addr:'서울'},
    {id:2 , name:'로운', addr:'제주'},
    {id:3 , name:'이수혁', addr:'울산'},
    {id:4 , name:'김해숙', addr:'경남'},
    {id:5 , name:'윤지온', addr:'전주'},
]

const Customer = () => {
    const no = useRef( dataList.length + 1 )
    const [ users , setUsers ] = useState( 
        () => JSON.parse( localStorage.getItem('users')) || dataList 
     )
    const [ isEdit  , setIsEdit ] = useState( false )
    const [ current , setCurrent ] = useState({})

    const [ msg , setMsg ] = useState('')
    const [ isShow , setIsShow ] = useState(false)

    
    useEffect( () => {
        localStorage.setItem( 'users', JSON.stringify( users ))
    },[users])    



    //추가
    const onAdd  = ( form )  => {
        form.id = no.current++
        setUsers([ ...users ,form  ])
        setMsg('명단에 추가했습니다.')
        setIsShow( true )
    }

    //삭제
    const onDel  = ( id ) => {
        setUsers( users.filter( user => user.id !== id ))
        setMsg('명단에서 삭제했습니다.')
        setIsShow( true )
    }

    //수정상태 
    const onEdit  = ( user )  => { 
        setIsEdit( true )
        setCurrent( user )
        setMsg('명단 수정상태입니다 ')
        setIsShow( true )
    }

    //갱신 
    const onUpdate = (user)  => { 
        setIsEdit( false )
        setUsers( users.map( item => item.id === user.id ? user : item  ))
        setMsg('명단 수정 했습니다.')
        setIsShow( true )
    }

    return (
        <div className="Customer">

            <Message msg={ msg } isShow={isShow} setIsShow={ setIsShow } />

            {
                isEdit ? <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit} /> : 
                         <AddUser  onAdd={onAdd} />
            }            
            
            <ListUser users={users} onDel={onDel} onEdit={onEdit} />
        </div>
    );
};

export default Customer;