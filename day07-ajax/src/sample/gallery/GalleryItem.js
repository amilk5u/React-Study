import React from 'react';
import { ImageBox } from '../styled/pixastyle'


const GalleryItem = ({ item }) => {
   const { view, downloads, likes, webformatURL, tags, user } = item
   const tagList = tags.split(',')

   return (
      <ImageBox>
         <img src={webformatURL} alt="" />
         <h2>{user}</h2>
         <ul>
            <li>조회수: {view}</li>
            <li>다운로드: {downloads}</li>
            <li>좋아요: {likes}</li>
         </ul>
         <p>{tagList.map((item, index) => <span key={index}>#{item.trim()}</span>)}</p>
      </ImageBox>
   );
};

export default GalleryItem;