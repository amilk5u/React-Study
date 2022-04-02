import BusinessItem from "./BusinessItem";
const BusinessList = ({ data }) => {
   return (
      <ul className="list">
         {
            data.map((item, index) => {
              return <BusinessItem key={index} item1={item} />
            })
         }
      </ul>
   );
};

export default BusinessList;