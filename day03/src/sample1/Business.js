import { useState } from 'react'
import BusinessList from './BusinessList';
import '../assets/css/reset.css'
import './style.css'
// import dataLst from '경로/파일명.js - js생략'
import dataList from '../assets/api/businessData'

const Business = () => {
   const [data, setData] = useState(dataList)

   return (
      <>
         <section className="business">
            <div className="inner">
               <h2>BUSINESS</h2>
               <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
               { /* List 들어옴 */}
               <BusinessList data={data}/>
            </div>
         </section>
      </>
   );
};

export default Business;