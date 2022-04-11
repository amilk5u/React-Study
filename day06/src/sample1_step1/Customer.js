import React, { useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
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
    const [ users , setUsers ] = useState( dataList )
    const [ isEdit  , setIsEdit ] = useState( false )
    const [ current , setCurrent ] = useState({})
    
    //추가
    const onAdd  = ( form )  => {
        form.id = no.current++
        setUsers([ ...users ,form  ])
    }

    //삭제
    const onDel  = ( id ) => {
        setUsers( users.filter( user => user.id !== id ))
    }

    //수정상태 
    const onEdit  = ( user )  => { 
        setIsEdit( true )
        setCurrent( user )
    }

    //갱신 
    const onUpdate = (user)  => { 
        setIsEdit( false )
        setUsers( users.map( item => item.id === user.id ? user : item  ))
    }

    return (
        <div className="Customer">
            {
                isEdit ? <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit} /> : 
                         <AddUser  onAdd={onAdd} />
            }            
            
            <ListUser users={users} onDel={onDel} onEdit={onEdit} />
        </div>
    );
};

export default Customer;