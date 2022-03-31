import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './style.css'

const Main = () => {
   const [count, setCount] = useState(1)
   // 카운트 1 첫번째
   // 카운트 2 두번째

   // 증가 
   const onNext = () => {
      setCount(count + 1)
   }
   // 감소 
   const onPrev = () => {
      setCount(count - 1)
   }

   const [form, setForm] = useState({
      userName: '', age: '', addr: '', tel: '', job: '', email: '', sex: '', inter: ''
   })

   // 구조분해 , 비구조할당
   const { userName, age, addr, tel, job, email, sex, inter } = form

   // 글자변경
   const changeInput = (e) => {
      const { name, value } = e.target
      setForm({
         ...form,
         [name]: value
      })
   }

   return (
      <div className="wrap">
         {
            // count 가 1이면,
            count === 1 &&
            <Step1 form={form} changeInput={changeInput} onNext={onNext} />
         }
         {
            // count 가 2이면,
            count === 2 &&
            <Step2 form={form} changeInput={changeInput} onNext={onNext} onPrev={onPrev} />
         }
         {
            // count 가 3이면,
            count === 3 &&
            <Step3 form={form} changeInput={changeInput} onNext={onNext} onPrev={onPrev} />
         }
         {
            // count 가 4이면,
            count === 4 &&
            <Step4 userName={userName} />
         }
      </div>
   );
};

export default Main;