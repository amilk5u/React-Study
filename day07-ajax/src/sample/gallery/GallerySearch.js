import React, { useState } from 'react';
import styled from 'styled-components'
import { ImageForm } from '../styled/pixastyle'

const GallerySearch = ({ onSearch }) => {
   const [text, setText] = useState('')

   const onSubmit = (e) => {
      e.preventDefault()
      if (!text) return
      onSearch(text)
      setText('')
   }

   return (
      <ImageForm onSubmit={onSubmit}>
         <input type="text" placeholder="검색어를 입력하세요" value={text}
            onChange={e => setText(e.target.value)} />
         <button>검색</button>
      </ImageForm>
   );
};

export default GallerySearch;