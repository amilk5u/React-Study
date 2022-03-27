import { useState } from 'react'

// 형제관계
const Name = (props) => {
   const [text, setText] = useState('')
   const changeInput = (e) => {
      const { value } = e.target
      setText(value)
   }
   return (
      <div >
         <h2 onClick={props.minJu}>Name 컴포넌트</h2>
         <label>이름 </label>
         <input type="text" value={text} onChange={changeInput} />
         <span style={{ marginLeft: "10px" }}>{text}</span>
      </div>
   );
};

// 형제관계
const Display = ({ ani }) => {
   return (
      <div>
         <h2>Display 컴포넌트</h2>
         <h3>내가 좋아하는 동물은 '{ani}' 입니다</h3>
      </div>
   );
};

// 형제관계
const Animal = ({ ani, onAni, minJu }) => {
   return (
      <div>
         <h2>Animal 컴포넌트</h2>
         <label>동물 : </label>
         <input type="text" value={ani} onChange={onAni} onClick={minJu} />
         <span style={{ marginLeft: "10px" }}>{ani}</span>
      </div>
   );
};

// 부모님
const Test1 = () => {
   const [ani, setAni] = useState('고양이')

   // 상태값이 있는 곳에서 바뀌는 (값)함수를 만들어줘야 한다
   const onAni = (e) => {
      const { value } = e.target
      setAni(value)
   }
   const minJu = () => {
      console.log('민주입니다')
   }

   return (
      <div>
         <Name minJu={minJu}  />
         <input value={setAni}/>
         <hr />
         <Animal ani={ani} onAni={onAni} minJu={minJu} />
         <hr />
         <Display ani={ani} />
      </div>
   );
};

export default Test1;