import React, { useState } from 'react';

const Test11 = () => {
    const [bgColor, setBgColor] = useState('yellow')
    const onColor = () => {
        bgColor === 'red' ? setBgColor('pink') : setBgColor('red')
    }

    return (
        <>
            <h3>h1 을 클릭하면 배경색이 pink에서 - red로 왕복</h3>
            <h1 style={
                {
                    margin: '10px', padding: '40px', backgroundColor: bgColor,
                    cursor: 'pointer', fontSize: '18px'
                }}
                onClick={onColor}
            >
                backgroundColor: {bgColor}
            </h1>
        </>
    );
};

export default Test11;