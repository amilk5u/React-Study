import { useState } from 'react';
import Test2Ani_1 from './Test2Ani_1';
import Test2Dis_1 from './Test2Dis_1';
import Test2Name_1 from './Test2Name_1';

const Test2_1 = () => {
   const [name, setName] = useState('')
   const [ani, setAni] = useState('')
   const onName = (e) => {
      const {value} = e.target
      setName(value)
   }
   const onAni = (e) => {
      const {value} = e.target
      setAni(value)
   }
   return (
      <>
         <Test2Name_1 onName={onName} name1={name} />
         <Test2Ani_1 onAni={onAni} ani1={ani}/>
         <Test2Dis_1 ani1={ani} name1={name} />
      </>
   );
};

export default Test2_1;