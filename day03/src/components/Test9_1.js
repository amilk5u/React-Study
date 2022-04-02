import React, { useRef, useState } from 'react';

const Test9_1 = () => {
    /* 
        1. 색상을 가져온다 무엇을 이용해서? ref 이용하자 
        2. ref를 state 에 넣는다
        3. 클릭시 select의 value 값을 가져온다 
        4. 가져온 value 값을 컬러에 넣는다
    */
    const [color, setColor] = useState('hotpink')
    const getColor = useRef(null)
    let colorCat
    const onColor = () => {
        colorCat = { cat: getColor.current.value }
        setColor(colorCat.cat)
    }
    return (
        <div>
            <h2 style={{ color: color }}> 컬러 바꾸기 </h2>
            <select ref={getColor}>
                <option value="gray">야옹이 gray</option>
                <option value="blue">나비 blue</option>
                <option value="pink">천국이 pink</option>
                <option value="yellow">길냥이 yellow</option>
                <option value="orange">번개 orange</option>
            </select>
            <button onClick={onColor}>선택</button>
        </div>
    );
};

export default Test9_1;