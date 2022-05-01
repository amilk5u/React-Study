import React, { useEffect, useState } from 'react';
import GlobalStyle from '../styled/Global';
import axios from 'axios'
import GallerySearch from './GallerySearch';
import GalleryList from './GalleryList';
import { Container } from '../styled/pixastyle'

const Gallery = () => {
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState('')
   const [text, setText] = useState('flower')

   useEffect(() => {
      const API_KEY = '7249849-74b9ce8b271eb8283e7bbf0c1'
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`
      axios.get(url)
         .then(res => {
            setData(res.data.hits)
            setLoading(false)
            setError('')
         })
         .catch(error => {
            setData([])
            setLoading(true)
            setError('주소를 찾을수 없습니다.')
         })
   }, [text])

   const onSearch = (text) => {
      setText(text)
   }

   return (
      <>
         <GlobalStyle />
         <Container width="1400px">
            <GallerySearch onSearch={onSearch} />
            {
               loading && data.length === 0 && (<h1> No Images Found </h1>)
            }
            {
               data && !loading && <GalleryList data={data} />
            }
         </Container>
      </>
   );
};

export default Gallery;