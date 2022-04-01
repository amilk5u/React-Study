const BusinessItem = ({ item1 }) => {
   const { imgUrl, itemTitle, subTitle, desc } = item1
   return (
      <li>
         <a src="#">
            <div>
               <img src={imgUrl} />
            </div>
            <h3>
               {itemTitle}
               <span>{subTitle}</span>
            </h3>
            <p>{desc}</p>
         </a>
      </li>
   );
};

export default BusinessItem;