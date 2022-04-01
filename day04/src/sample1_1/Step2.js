const Step2 = ({ onInput, catTel, catEmail, catSex, upCount, downCount }) => {
   // 두번째
   return (
      <div className="wrap">
         <p>
            <label>폰번호 :</label>
            <input type="text" onChange={onInput} name="catTel" value={catTel} />
         </p>  
         <p>
            <label>이메일 :</label>
            <input type="text" onChange={onInput} name="catEmail" value={catEmail} />
         </p>
         <p>
            <label>성별 :</label>
            <input type="text" onChange={onInput} name="catSex" value={catSex} />
         </p>
         <p>
            <button type="button" onClick={downCount}>이전</button>
            <button type="button" onClick={upCount}>다음</button>
         </p>
      </div>
   );
};

export default Step2;