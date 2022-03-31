import React from 'react';

const GalleryBig = ({ cat }) => {
    const { title , imgurl  } = cat 
    
    return (
        <div className="bigimg">
            <h2> {title } </h2>
            <img src={imgurl} alt="" />
        </div>
    );
};

export default GalleryBig;