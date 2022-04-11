import React from 'react';

const ItemUser = ({ user , onDel , onEdit}) => {
    const {id, name , addr } = user 
    return (
        <tr>
            <td>{name}</td>
            <td>{addr}</td>
            <td>
                <button onClick={ () => onEdit( user ) }> 수정</button>
                <button onClick={ () => onDel(id) }>삭제</button>
            </td>
        </tr>
    );
};

export default ItemUser;