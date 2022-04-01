import { useState } from 'react'

const Name = () => {
   const [name, setName] = useState('아무개')
   const changeInput = (e) => {
      const { value } = e.target
      setName(value)
   }
   return (
      <>
         <h2>Name 컴포넌트</h2>
         <label>이름:</label>
         <input type="text" value={name} onChange={changeInput} />
         <span style={{ marginLeft: 10 }}> {name} </span>
      </>
   );
};


const Display = ({ ani }) => {
   return (
      <>
         <h2>Display 컴포넌트</h2>
         <h1>내가 좋아하는 동물은 '{ani}' 입니다.</h1>
      </>
   );
};


const Animail = ({ ani, onAni }) => {
   return (
      <>
         <h2>Animail 컴포넌트</h2>
         <label>동물:</label>
         <input type="text" value={ani} onChange={onAni} />
         <span style={{ marginLeft: 10 }}>{ani}</span>
      </>
   );
};

const Test1 = () => {
   const [ani, setAni] = useState('아무동물')

   const onAni = (e) => {
      const { value } = e.target
      setAni(value)
   }
   return (
      <>
         <Name />
         <hr />
         <Animail ani={ani} onAni={onAni} />
         <hr />
         <Display ani={ani} />
      </>
   );
};

export default Test1;