import { useState } from "react";
import BusinessList from "./BusinessList";
import './../assets/css/reset.css'
import './style.css'
import dataApi from './../assets/api/businessData_1'

const Business = () => {
   const [data] = useState(dataApi)
   const mainTitle = {
      title: 'BUSINESS',
      desc: '고객이 신뢰하는 글로벌 에너지 자원 선도 기업'
   }
   return (
      <>
         <section className="business">
            <div className="inner">
               <h2>{mainTitle.title}</h2>
               <p>{mainTitle.desc}</p>
               <BusinessList data={data} />
               <p className="more">
                  <a>View More</a>
               </p>
            </div>
         </section>
      </>
   );
};

export default Business;