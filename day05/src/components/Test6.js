import React, { useEffect, useRef, useState } from 'react';

const Test6 = () => {
    const  ref1 = useRef()
    const  ref2 = useRef()
    const [ count , setCount ] = useState(1)

    const onColor = ()  => {
        setCount( count + 1 )
        ref1.current.style.backgroundColor='pink'
        ref2.current.style.backgroundColor='hotpink'
    }

    //화면에 그려진후 실행 
    useEffect( () => {
        console.log('useEffect')
        ref1.current.style.backgroundColor='skyblue'
        ref2.current.style.backgroundColor='tomato'
    })

    return (
        <div>
            <h2> hooks :  useEffect 형식1 </h2> 
            <h1> 카운트  : { count } </h1>
            <h2 ref={ ref1 }> useEffect </h2>         
            <h2 ref={ ref2 }> 결과 입니다. </h2>         
            <button onClick={ onColor }> 컬러 + 숫자 </button>
        </div>
    );
};

export default Test6;

/*
책 139 page 
Hooks는 React 16.8버전에 새로 추가되었습니다. 
Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있습니다.
side effect : 부수효과  - 함수가 결과값을 반환하는것 외에 다른 일을할때 
side effect : 비동기통신 요청/응답 - ajax 
              DOM조작, 구독/취소 등 

React의 class컴포넌트 생명주기 
componentDidMount : 처음한번만 
componentDidUpdate: 갱신 
componentWillUnmount:  종료시 

함수형컴포넌트에서는 useEffect가 클래스 라이프사이클 3개를 합쳐놓은것 

형식)
useEffect( 콜백함수 , [의존성])


형식1) mount  / update  - 많이 사용하지 않는다 
useEffect( () => {
    실행문   
})


형식2) mount 
useEffect( () => {
    실행문   
},[])


형식3) mount / update : 의존값 - state , 특정 props ***
useEffect( () => {
    실행문   
},[state, props])

형식4) mount / update : 의존값 - state , 특정 props ***  
useEffect( () => {
    실행문   
    return() => {
        뒷정리
    }
},[state, props])
:: 메모리 누수가 발생하지 않도록 정리 

사용범위
1. props를 받아서 갱신할때 
2. 외부 api ( 비동기 처리 - ajax )
3. setTimout , setInterval 
4. 외부 라이브러리 

*/
