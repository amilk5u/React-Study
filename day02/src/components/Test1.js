const Test1 = () => {
    return (
        <>
            <h1>JSX 영역</h1>
            <h2>한줄 이상은, div, Feagment(아무것도 안쓴상태<></>), seciton, acticle 등등</h2>
            <p>빈태그 반드시 맨뒤에 / (슬러시)</p>
            <img />
            <input />
            <hr />
            <br />
            {/* 주석 */}
            <h3
            // 한줄 설명
            /* 
                여러줄 설명
            */
            >
                내용
            </h3>
        </>
    );
};

export default Test1;

/* 
    * React 란 ?

    - es6 기반 ( Array, string - 메서드 ) 80% 정도 예습 하길 권장!!! 특히 array 공부하기!
    - React : 선언형 (속도가 빠름)
      Javascript : 절차형 
    - virtual dom : 가상돔
      Dom을 추상화한 가상의 객체를 메모리에 만들어 놓는 것
      특정된 부분만 변경 가능하고, 전체 렌더링 되지않아 처리 속도가 빠르다
      반복되는 부분을 컴포넌트화 하여 사용한다 

*/