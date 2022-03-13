const Test2 = () => {
    // 함수 영역 - 조건문, 제어문 등 모두가능하고 제약이 없음
    /* 
        {속성 : 값, 속성 : 값 , backgroundColor, fontSize, textIndent: 숫자,
        '숫자px', 속성- 'background-color'}
    */

    const title = '신상명세서'
    const name = "신민주"
    const age = 20
    const addr = '서울시 서초구 서초동'
    const css1 = { backgroundColor: 'pink', padding: 20, margin: 10, border: '1px solid black', fontSize: '25px' }
    const css2 = { backgroundColor: 'green', padding: 20, margin: 10, border: '1px solid black', fontSize: '25px' }
    const css4 = { backgroundColor: 'red', padding: 10, margin: 10, border: '1px solid transparent', fontSize: '20px' }


    return (
        <>
            <h1 style={css1}>{title}</h1>
            <h2 style={css2}>이름 : {name}</h2>
            <h2 style={{ backgroundColor: 'yellow', padding: '20px', borderTop: '5px solid black', fontSize: '20px' }}>나이 : {age}</h2>
            <h2 style={css4}>주소 : {addr}</h2>
            {/* <p style={객체}> {자바스크립트 형식}</p> */}
        </>
    );
};

export default Test2;