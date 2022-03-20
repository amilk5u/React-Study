import React, { useState } from 'react';

const Test9 = () => {
    const [ color , setColor ] = useState('skyblue')
    const [ text , setText ] = useState('')

    const onView = ()  => {
        setColor( text )
    }
    const onColor = (e)  => {
        // setColor( e.target.value )
        const { value } = e.target 
        setText( value )
    }

    return (
        <div>
            <h2 style={{fontSize:50, color:color }}> 컬러 바꾸기 </h2>
            <select onChange={ onColor }>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="pink">pink</option>
                <option value="tomato">tomato</option>
            </select>
            <button onClick={ onView }>선택</button>
        </div>
    );
};

export default Test9;