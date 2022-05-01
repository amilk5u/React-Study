import { useEffect, useMemo, useState } from "react";

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
   const [text, setText] = useState('')
   const [search, setSearch] = useState('')

   const onSearch = () => {
      setSearch(text)
   }
   const data = useMemo(() => {
      return user.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
   }, [search])

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