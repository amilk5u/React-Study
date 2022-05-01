import { useEffect, useState } from "react";

const user = [
   { id: 1, name: '유재석' },
   { id: 2, name: 'navi' },
   { id: 3, name: 'dog' },
   { id: 4, name: '송지효' },
   { id: 5, name: 'cat' },
   { id: 6, name: '김종국' },
   { id: 7, name: 'DAUM' },
   { id: 8, name: '하하' },
   { id: 9, name: '양세찬' },
   { id: 10, name: 'NAVER' },
   { id: 11, name: '전소민' },
   { id: 12, name: '이광수' },
   { id: 13, name: 'naver' },
]
const Test4 = () => {
   const [data, setData] = useState(user)
   const [text, setText] = useState('')
   const [search, setSearch] = useState('')

   // 한굴 - sql초성검사 (초성까지 판단해서 검색해줌/ 찾아서 해보기)
   /* useEffect(() => {
      setData(user.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) != -1))
   }, [text]) */

   useEffect(() => {
      setData(user.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
   }, [search])

   const onSearch = (e) => {
      setSearch(text)
      console.log('검색!!')
   }
   return (
      <div style={{ margin: 20 }}>
         <input type="text" value={text} onChange={e => setText(e.target.value)} />
         <button onClick={onSearch}>검색</button>
         <hr />
         <ul>
            {
               data.map(item => <li key={item.id}>{item.id} / {item.name}</li>)
            }
         </ul>

      </div>
   );
};

export default Test4;