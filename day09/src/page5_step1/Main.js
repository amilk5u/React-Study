import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Member from './Member'

const Main = () => {
   const [data, setData] = useState([])

   useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res => setData(res.data))
   }, [])
   return (
      <div>
         <h1>Main Page / 회원수 : {data.length}</h1>
         {
            data.map(item => <Member key={item.id} item={item}/>)
         }
      </div>
   );
};

export default Main;