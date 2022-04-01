import BusinessItem from "./BusinessItem";

const BusinessList = ({ data }) => {
   return (
      <ul className="list">
          {
            data.map((item, index) => {
              return <BusinessItem key={item.id} item={item} />
            })
         }
      </ul>
   );
};

export default BusinessList;