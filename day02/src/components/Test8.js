const Test8 = () => {

    const handleClick1 = () => {
        console.log("test1")
    }
    const handleClick2 = () => {
        console.log("test2")
    }
    const handleClick3 = () => {
        console.log("test3")
    }
    const make1 = (num) => {
        alert(`${num} 입니다`)
    }
    const make2 = (num) => {
        alert(`${num} 입니다`)
    }
    return (
        <>
            <h2>이벤트 : on + 첫글자 대문자 : onClick </h2>
            <p>
                <button onClick={handleClick1}>클릭 1</button>
                <button onClick={handleClick2}>클릭 2</button>
                <button onClick={handleClick3}>클릭 3</button>
            </p>
            <p>
                <button onClick={ () => {
                    console.log("test2")
                    // 여러 줄일 경우에는 {}생략하지말고 그안에 작성한다
                }
                }>클릭 1</button>
                <button onClick={ ()=> alert("test2") }>클릭 2</button>
            </p>
            <p>
                {/* 
                    함수는 함수()쓰면 무조건 호출, 처음부터 실행
                    값 넘길 때 함수(값) => 함수(매개변수)로 받기

                    - 해결하는 방법
                    함수로 한번 묶어준다
                    () => 함수명(값)

                 */}
                <button onClick={ () => make1(100) }>클릭 1</button>
                <button onClick={ () => make2(200) }>클릭 2</button>
            </p>
        </>
    );
};

export default Test8;