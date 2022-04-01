const Step1 = ({ onInput, upCount, myCat }) => {
   const { catName, catAge, catAddr } = myCat
   // 첫번째
   return (
      <div className="wrap">
         <h2>야옹이 소개서</h2>
         <p>
            <label>이름 :</label>
            <input type="text" onChange={onInput} name="catName" value={catName} />
         </p>
         <p>
            <label>나이 :</label>
            <input type="text" onChange={onInput} name="catAge" value={catAge} />
         </p>
         <p>
            <label>주소 :</label>
            <input type="text" onChange={onInput} name="catAddr" value={catAddr} />
         </p>
         <p>
            <button type="button" onClick={upCount}>다음</button>
         </p>
      </div>
   );
};

export default Step1;