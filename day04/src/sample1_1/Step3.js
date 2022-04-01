import React from 'react';

const Step3 = ({ myCat }) => {
   const { catName, catAge, catAddr, catTel, catEmail, catSex } = myCat
   // 전체표시
   return (
      <div className="wrap">
         <ul>
            <li><span>이름 : </span><em>{catName}</em></li>
            <li><span>나이 : </span><em>{catAge}</em></li>
            <li><span>성별 : </span><em>{catAddr}</em></li>
            <li><span>폰번호 : </span><em>{catTel}</em></li>
            <li><span>주소 : </span><em>{catEmail}</em></li>
            <li><span>이메일 : </span><em>{catSex}</em></li>
         </ul>
      </div>
   );
};

export default Step3;