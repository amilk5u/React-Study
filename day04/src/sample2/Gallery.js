import React, { useState } from 'react';
import GalleryText from './GalleryText';
import GalleryView from './GalleryView';
import datalist from '../assets/api/catData'
import './style.css'


const Gallery = () => {
    const [data, setData] = useState(datalist)
    const [cat, setCat] = useState(data[0])

    const onView = (id) => {
        // alert('ddd')
        // setCat( data[ id - 1 ])
        //.find 
        setCat(data.find(item => item.id === id))
    }

    return (
        <div className="wrap">
            <GalleryView data={data} cat={cat} onView={onView} />
            <GalleryText cat={cat} />
        </div>
    );
};

export default Gallery;