
const GalleryBig = ({ selectImg }) => {
    const { id, imgUrl, name } = selectImg
    return (
        <div className="bigimg">
            <h2>{name}</h2>
            <img src={imgUrl} />
        </div>
    );
};

export default GalleryBig;