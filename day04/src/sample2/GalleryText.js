import React from 'react';

const GalleryText = ({ cat }) => {
    const { title , des  } = cat 
    return (
        <div className="text">
            <strong> {title} </strong>
            <p>{des}</p>
        </div>
    );
};

export default GalleryText;