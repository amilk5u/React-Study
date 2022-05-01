import { useState } from 'react';

const Test2Sub = () => {
   const [num, setNum] = useState(0)

   return (
      <div>
         <h3>Test2Sub : {num}</h3>
      </div>
   );
};

export default Test2Sub;