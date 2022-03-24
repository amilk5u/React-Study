import React, { useState } from 'react';

const Test10 = () => {
    const [ isChk , setIsChk ] = useState(false)

    const onChk  = (e)  => {
        const { checked } = e.target 
        setIsChk( checked )
    }

    return (
        <>
            {/* 글자색을 tomato / skyblue  */}
            <div style={{ color: isChk ? 'tomato':'skyblue', margin:30, fontSize:25 }}>
                <input type="checkbox" checked={ isChk } onChange={ onChk } />
                오늘은 일요일 입니다.
            </div>
        </>
    );
};

export default Test10;