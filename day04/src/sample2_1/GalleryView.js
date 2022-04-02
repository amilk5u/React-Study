import GalleryList from "./GalleryList";
import GalleryBig from "./GalleryBig";

const GalleryView = ({ selectImg, data, onSelct }) => {
	return (
		<div className="bigview">
			<GalleryBig selectImg={selectImg} />
			<GalleryList data={data} onSelct={onSelct} />
		</div>
	);
};

export default GalleryView;