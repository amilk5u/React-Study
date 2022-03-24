const BusinessItem = ({ item }) => {
   // 비구조할당
   const { id, imgUrl, title, titleEnd, des } = item
   return (
      <li>
         <a href="#">
            <div><img src={imgUrl} alt="" /></div>
            <h3>
               {title}
               <span>{titleEnd}</span></h3>
            <p>{des}</p>
         </a>
      </li>
   );
};

export default BusinessItem;