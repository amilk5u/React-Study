import { useCallback, useMemo, useState } from 'react'
const Test6 = () => {
   const [data, setData] = useState([])
   const [text, setText] = useState('')

   const onAdd = useCallback(() => {
      setData([...data, text])
      setText('')
   }, [text, data])

   const textSize = useMemo(() => {
      return text.length
   }, [text])

   return (
      <div>
         <input type="text" value={text} onChange={e => setText(e.target.value)} />
         <button onClick={onAdd}>추가</button>
         <hr />
         <h3>길이 : {text} / {text.length}</h3>
         <hr />
         <h3>수업용 길이 : {textSize}</h3>
         <hr />
         <ul>
            {
               data.map((item, index) => {
                  return <li key={index}>
                     {index} / {item}
                  </li>
               })
            }
         </ul>
      </div>
   );
};

export default Test6;

/* 
   또만들고 또만들고 하지 않는다
   시각적으로 좋긴한데 겉으론 아니다
   불 필요한 작업
*/