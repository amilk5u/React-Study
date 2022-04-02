import { useState } from "react";
import GalleryText from "./GalleryText";
import GalleryView from "./GalleryView";
import './style.css'
import dataList from './../assets/api/catData_1'

const Gallery = () => {
	/* 
		현재 클릭한 데이터를 넣을 state를 만든다
		li를 클릭 하면 현재 li의 id 값과 같으면 big 이미지에 id의 해당하는data를 넣는 함수를 만든다
	*/
	const [data, setData] = useState(dataList)
	const [selectImg, setSelectImg] = useState(data[0])
	const onSelct = (id) => {
		// setSelectImg(data[id - 1])
		setSelectImg(data.find(item => item.id === id))
		console.log(data.find(item => item.id === id))
	}
	return (
		<>
			<div className="wrap">
				<GalleryView selectImg={selectImg} data={data} onSelct={onSelct} />
				<GalleryText selectImg={selectImg} />
			</div>
		</>
	);
};

export default Gallery;