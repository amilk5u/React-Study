import React from 'react';

const GalleryItem = ({ item, onView }) => {
	const { id, imgurl } = item
	return (
		<li onClick={() => onView(id)}>
			<img src={imgurl} alt="" />
		</li>
	);
};

export default GalleryItem;