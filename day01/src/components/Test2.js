const Test2 = () => {
    //함수영역 - 조건문, 제어문, 등등 가능 
    let title ='신상명세서'
    const name = '홍길동'
    const age = 20
    const tel = '010-0000-1111'
    const addr ='서울'
    //한줄

    return (
        <>
            <h2>JSX 영역 </h2>      
            <h3> {title} </h3>  
            <ul>
                <li>이름:{name} </li>
                <li>나이:{age} </li>
                <li>주소:{addr} </li>
                <li>전화:{tel} </li>
            </ul>
            //한줄주석 
            /*
            여러줄 주석 
            */
            {/* 주석 설명달아주기 */}
            <p
                //한줄주석 
                /*
                    여러줄 주석 
                */
            >
                안녕하세요
            </p>
        </>
    );
};

export default Test2;