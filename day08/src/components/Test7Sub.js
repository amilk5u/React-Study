import React, { memo } from 'react';

const Test7Sub = memo(({ cnt, title }) => {
   console.log(cnt, title)
   return (
      <div style={{ border: '1px solid #f00', padding: 15, fontSize: 15, margin: 20 }}>
         <h1>출력 : {title} /  {cnt}</h1>
      </div>
   );
});

export default Test7Sub;


/* 
const Test7Sub = ({ cnt, title }) => {
   console.log(cnt, title)
   return (
      <div style={{ border: '1px solid #f00', padding: 15, fontSize: 15, margin: 20 }}>
         <h1>출력 : {title} /  {cnt}</h1>
      </div>
   );
};

export default React.memo(Test7Sub); */