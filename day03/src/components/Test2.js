import { useState } from 'react'
import './Test2.css'

const Test2 = () => {
   const [isClass, setIsClass] = useState(false)

   const onAdd = () => {
      setIsClass(true)
   }
   const onRemove = () => {
      setIsClass(false)
   }
   const onToggle = () => {
      setIsClass(!isClass)
   }

   return (
      <div className="wrap">
         <p className="on">오늘은 일요일입니다</p>
         <p className="on1">오늘은 일요일입니다</p>
         <p className="test on">오늘은 일요일입니다</p>
         <hr />
         <p className={ isClass ? 'on' : '' }>오늘은 일요일입니다</p>
         <p className={ isClass ? 'on1' : '' }>오늘은 일요일입니다</p>
         <p className={ `test ${isClass ? 'on' : ''}`  }>오늘은 일요일입니다</p>
         <div>
            <button onClick={onAdd}>classList.add</button>
            <button onClick={onRemove}>classList.remove</button>
            <button onClick={onToggle}>classList.toggle</button>
         </div>
      </div>
   );
};

export default Test2;