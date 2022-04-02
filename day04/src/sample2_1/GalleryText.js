import React from 'react';

const GalleryText = ({ selectImg }) => {
	const { name, desc } = selectImg
	return (
		<div className="text">
			<strong>{name}</strong>
			<p>{desc}</p>
		</div>
	);
};

export default GalleryText;