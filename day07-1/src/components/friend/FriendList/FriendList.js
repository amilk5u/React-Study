import React from 'react';
import FriendItem from './FriendItem';
import styles from './FriendList.module.css';


const FriendList = ({ friends }) => {
    return (
        <ul className={styles.list}>
           {
               friends.map( friend => <FriendItem  key={ friend.id }  friend={friend} /> )
           } 
        </ul>
    );
};

export default FriendList;