import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Container  = styled.div`
    width: 1400px; margin: 15px auto; display: flex; flex-wrap: wrap; justify-content: center;
`
const Article  = styled.article`
    width: 300px; display: 15px; margin: 10px; border:1px solid #999; margin-bottom: 15px;
    padding: 10px;
    a {
        text-decoration: none; color:#000;
        h2 { font-size:20px; margin-bottom: 10px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
        img {   width:300px; height:300px; }
        p { font-size: 15px; line-height: 1.7  }
    }
`

const Test5 = () => {
    const [ data , setData ] = useState([])

    useEffect( ()  => {
        const url ='https://newsapi.org/v2/top-headlines?country=kr&apiKey=개인키'
        axios.get( url )
             .then( res => setData( res.data.articles ))
    },[])

    return (
        <Container>
            {
                data.map( (item, index) => <Article key={index}>
                    <a href={item.url} target="_blank">
                        <h2>{item.title} </h2>
                        <img src={item.urlToImage} alt={item.title} />
                        <p>{item.description} </p>
                    </a>
                </Article>)
            }
        </Container>
    );
};

export default Test5;