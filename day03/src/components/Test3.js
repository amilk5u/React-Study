import { useState } from 'react'
import './Test3.css'
import '../assets/css/reset.css'

const Test3 = () => {
   const [data, setData] = useState([
      { id: 1, name: '최우식', age: 20, addr: '서울', done: true },
      { id: 2, name: '김다미', age: 25, addr: '경기', done: false },
      { id: 3, name: '김성철', age: 29, addr: '전남', done: true },
      { id: 4, name: '노의정', age: 35, addr: '경북', done: false },
      { id: 5, name: '박진주', age: 31, addr: '충청', done: false },
   ])

   const [cat, setCat] = useState([
      { id: 1, name: '야옹이', age: 15, done: true },
      { id: 2, name: '나비', age: 11, done: false },
      { id: 3, name: '천국이', age: 14, done: false },
      { id: 4, name: '길냥이', age: 10, done: true },
      { id: 5, name: '번개', age: 7, done: true },
      { id: 6, name: '져씨', age: 3, done: false },
   ])

   return (
      <div>
         <table className="list">
            <caption>그 해 우리는 출연진</caption>
            <colgroup>
               <col className="num"></col>
               <col className="name"></col>
               <col className="age"></col>
               <col className="addr"></col>
            </colgroup>
            <thead>
               <tr>
                  <th>번호</th>
                  <th>이름</th>
                  <th>나이</th>
                  <th>주소</th>
                  <th>동의여부</th>
               </tr>
            </thead>
            <tbody>
               {
                  data.map((item, index) =>
                     <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.addr}</td>
                        <td>{item.done ? '동의' : '비동의'}</td>
                     </tr>
                  )
               }
            </tbody>
         </table>
         <table className="list">
            <caption>우리집 고양이들</caption>
            <colgroup>
               <col className="num"></col>
               <col className="name"></col>
               <col className="age"></col>
            </colgroup>
            <thead>
               <tr>
                  <th>번호</th>
                  <th>이름</th>
                  <th>나이</th>
                  <th>동의여부</th>
               </tr>
            </thead>
            <tbody>
               {
                  cat.map((item) => {
                     return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.done ? '동의' : '비동의'}</td>
                     </tr>
                  })
               }
            </tbody>
         </table>
      </div>
   );
};

export default Test3;