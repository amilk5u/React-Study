import React from 'react';

const FriendItem = ({friend}) => {
    const { id , name , age , image } = friend 

    return (
        <li>
           <p> <img src={friend.image} alt="" /> </p> 
           <div> <strong>이름: {friend.name} </strong>
                 <span>나이: {friend.age} </span>
           </div>
        </li>
    );
};

export default FriendItem;