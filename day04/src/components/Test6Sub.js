const Test6sub = ({ onDel1, onDel2, onAdd1, onAdd2, onMod }) => {
   return (
      <div>
         <p>
            <button onClick={onDel1}>삭제</button>
            <button onClick={() => onDel2(1)}>삭제</button>
         </p>
         <p>
            <button onClick={onAdd1}>추가</button>
            <button onClick={() => onAdd2('전소민')}>추가</button>
         </p>
         <p>
            <button onClick={() => onMod(3)}>수정</button>
         </p>
      </div>
   );
};

export default Test6sub;