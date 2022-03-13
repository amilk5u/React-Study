import React, { useState } from 'react';

const Test12 = () => {
    const [visible, setVisible] = useState(false)

    const onShow = () => {
        setVisible(true)
    }
    const onHide = () => {
        setVisible(false)
    }
    const onToggle = () => {
        setVisible(!visible)
        // !true -> false , ! false -> true !not
    }

    return (
        <>
            <button onClick={onShow}>보이기</button>
            <button onClick={onHide}>숨기기</button>
            <button onClick={onToggle}>
                {
                    visible ? '숨기기' : '보이기'
                }
            </button>
            {
                visible === true ?
                    <div style={{
                        width: '300px', height: '100px', margin: '10px',
                        backgroundColor: 'pink'
                    }}></div> : null
            }
        </>
    );
};

export default Test12;