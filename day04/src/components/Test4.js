// src 안에 이미지처리
// import 참조변수 from '이미지경로'
import m0 from '../assets/img/m1.jpg'
import m1 from '../assets/img/m0.jpg'

const Test4 = () => {
   return (
      <div>
         <img src={m0} alt=""/>
         <img src={m1} alt=""/>
         {/* 
            public - index.html 에서 바라보기
            images는 상대경로 단 ./ 생략하지말자
         */}
         <img src="./images/cat0.jpg" alt=""/>-
         <img src="./images/cat1.jpg" alt=""/>
      </div>
   );
};

export default Test4;