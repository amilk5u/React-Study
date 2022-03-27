import React from 'react';

const Test2Name = ({ text, onText }) => {
   return (
      <div>
         <h2>Name</h2>
         <label>이름 : </label>
         <input type="text" value={text} onChange={onText} />
         <span>{text}</span>
      </div>
   );
};

export default Test2Name;