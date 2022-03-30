const Bird = (props) => {
   const { name } = props
   return (
      <>
         <div>
            <h2>나는 {name} 컴포턴트</h2>
         </div>
      </>
   );
};

const Cat = ({ name }) => {
   // const { name } = props
   return (
      <>
         <div>
            <h2>나는 {name} 컴포턴트</h2>
         </div>
      </>
   );
};

const Dog = ({ name, name2 }) => {
   // props => 객체형식 => 객체명 props = {사용자정의 props명 :값}
   // props => { name : 강아지 }
   // const { name, name2 } = props
   return (
      <>
         <div>
            <h2>나는 {name} 컴포턴트</h2>
            <hr />
            <h2>나는 {name2} 컴포턴트</h2>
         </div>
      </>
   );
};

const Test5 = () => {
   return (
      <>
         <Dog name="강아지" name2="멍멍이" />
         <hr />
         <Cat name="고양이" />
         <hr />
         <Bird name="새" />
         {/* 
                <자식컴포넌트 props명 = 전달값> 
                <자식컴포넌트 속성 = 값> 
                <자식컴포넌트 변수처럼 = 값> 
            */}
      </>
   );
};

export default Test5;