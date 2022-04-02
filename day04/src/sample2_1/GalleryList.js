import GalleryItem from "./GalleryItem";

const GalleryList = ({ data, onSelct }) => {
	return (
		<ul className="list">
			{
				data.map(item => {
					return <GalleryItem key={item.id} onSelct={onSelct} item={item} />
				})
			}
		</ul>
	);
};

export default GalleryList;