import { useState } from "react";
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import './style.css'

const Main = () => {
   const [myCat, setMyCat] = useState({
      catName: '', catAge: '', catAddr: '', catTel: '', catEmail: '', catSex: ''
   })
   const { catName, catAge, catAddr, catTel, catEmail, catSex } = myCat
   const onInput = (e) => {
      const { value, name } = e.target
      setMyCat({
         ...myCat,
         [name]: value
      })
   }
   const [count, setCount] = useState(0)
   const upCount = () => {
      setCount(count + 1)
   }
   const downCount = () => {
      setCount(count - 1)
   }
   return (
      <>
         {
            count === 0 ? <Step1 myCat={myCat} onInput={onInput} upCount={upCount} /> : null
         }
         {
            count === 1 ? <Step2 myCat={myCat} onInput={onInput} upCount={upCount} downCount={downCount} /> : null
         }
         {
            count === 2 ? <Step3 myCat={myCat} /> : null
         }
      </>
   );
};

export default Main;