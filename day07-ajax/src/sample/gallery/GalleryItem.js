import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.article``

const GalleryItem = ({item}) => {
    
    return (
        <ImageBox>
            <img src="" alt="" />
            <h2>타이틀</h2>
            <ul>
                <li>조회수:</li>
                <li>다운로드:</li>
                <li>좋아요:</li>
            </ul>
            <p> 태그  #xxx </p>
        </ImageBox>
    );
};

export default GalleryItem;