import { useState } from "react";
import GalleryText from "./GalleryText";
import GalleryView from "./GalleryView";
import './style.css'

const Gallery = () => {
   return (
      <>
         <div className="wrap">
            <GalleryView />
            <GalleryText />
         </div>
      </>
   );
};

export default Gallery;