const GalleryItem = ({ onSelct, item }) => {
	const { id, imgUrl } = item
	return (
		<li onClick={() => onSelct(id)}>
			<img src={imgUrl} />
		</li>
	);
};

export default GalleryItem;