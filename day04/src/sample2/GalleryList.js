import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryList = ({ data , onView }) => {
    return (
        <ul className="list">
            {
                data.map( item => <GalleryItem  key={item.id} item={item} onView={onView} />)
            }
        </ul>
    );
};

export default GalleryList;