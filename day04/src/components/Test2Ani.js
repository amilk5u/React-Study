import React from 'react';

const Test2Ani = ({ ani, onAni }) => {
   return (
      <div>
         <h2>Animal</h2>
         <label>동물 : </label>
         <input type="text" value={ani} onChange={onAni} />
         <span>{ani}</span>
      </div>
   );
};

export default Test2Ani;