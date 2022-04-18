import React, { useEffect, useState } from 'react';
import GlobalStyle from '../styled/Global';
import axios from 'axios'
import styled from 'styled-components'
import GallerySearch from './GallerySearch';
import GalleryList from './GalleryList';


const Container  = styled.div`
    width:${ props  => props.width }; 
    margin:auto;
`

const Gallery = () => {
    const [ data , setData ] =useState([])
    const [ loading , setLoading ] = useState( true )
    const [ error  , setError ] = useState('')

    useEffect( () => {
        const API_KEY =''
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`
        axios.get(url)
             .then( res => {
                setData( res.data.hits )
                setLoading( false )
                setError('')
             })
             .catch( error  => {
                setData([])
                setLoading( true )
                setError('주소를 찾을수 없습니다.')
             })
    },[])
    
    return (
        <>
        <GlobalStyle />
            <Container width="1400px">
               <GallerySearch />
               <GalleryList data={data} />
            </Container>                   
        </>
    );
};

export default Gallery;