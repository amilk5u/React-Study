import React, { useRef, useState } from 'react';
import datalist from '../../../assets/api/data'
import FriendInput from '../FirendForm/FriendInput';
import styles from './Friend.module.css';
import FriendList from '../FriendList/FriendList';

const Friend = () => {
    const no = useRef( datalist.length + 1 )
    const [ friends , setFriends ] = useState( datalist )
    const [ isView , setIsView ] = useState( false )

    const onDel = ()  => {
        setFriends([])
    }
    const onRestore = ()  => {
        setFriends(datalist)
    }

    //추가
    const onAdd = ( form ) => {
        form.id = no.current++
        setFriends([
            ...friends, form 
        ])
    }

    return (
        <div className={styles.wrap}>
            <h1>친구들 총인원: { datalist.length } </h1>
            <p className={styles.chk}>
                <input type="checkbox"  checked={isView} 
                    onChange = { e => setIsView( e.target.checked ) }
                />
                활성 / 비활성 
            </p>

            <FriendList  friends={friends} />

            <p className={styles.btn}>
                <button onClick={ onDel }>모두 삭제</button>
                <button onClick={ onRestore }>초기 복구</button>
            </p>

            {
                isView && <FriendInput onAdd={onAdd} />
            }
            
        </div>
    );
};

export default Friend;