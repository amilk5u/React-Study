import React, { useState } from 'react';

const Test10 = () => {

    const [name, setName] = useState('신민주')
    const [color, setColor] = useState('pink')
    const [age, setAge] = useState(5)
   
/*     <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
  </div>
 */

    const onName1 = () => setName('야옹이')
    const onName2 = () => {
        setName('나비')
    }
    const onName3 = () => {
        setName('천국이')
    }
    const onColor1 = () => {
        setColor('blue')
    }
    const onColor2 = () => {
        setColor('red')
    }
    const onColor3 = () => {
        setColor('pink')
    }

   
    return (
        <div>
            <h2 style={{backgroundColor:color}}>
                이름 : {name},
                나이 : {age}살,
                컬러 : {color},
            </h2>
            <p>
                <button onClick={ onName1 }>야옹이</button>
                <button onClick={ onName2 }>나비</button>
                <button onClick={ onName3 }>천국이</button>
            </p>
            <p>
                <button onClick={ onColor1 }>blue</button>
                <button onClick={ onColor2 }>red</button>
                <button onClick={ onColor3 }>pink</button>
            </p>
            <p>
                <button onClick={ () => setAge(16) }>16살</button>
                <button onClick={ () => setAge(15) }>15살</button>
                <button onClick={ () => setAge(14) }>14살</button>
            </p>
        </div>
    );
};

export default Test10;

/* 
    Hook은 React 16.8버전에 새로 추가되었습니다.
    Hook은 클래스 컴포넌트를 작성하지 않아도 state와 같은 특징들을 사용할 수 있습니다. 

    const [A,B] = useState(100)
    A = 100
    B(200) => A = 200

    const [상태데이터, setter함수 ]= useState(초기값)
    const [name, setName] =  useState(초기값)
    const [count, setCount] =  useState(0)
    const [철수, 영희] =  useState(0)
    영희(100)

 */