/* const Sub = (props) => {
    return (
        <div>
            <h2>자식 컴포넌트</h2>
            <h3>이름 : {props.name} / ({typeof props.name})</h3>
            <h3>나이 : {props.age} / ({typeof props.age})</h3>
            <hr />
        </div>
    );
}; */

const Sub = (props) => {
   const { name, age } = props
   return (
      <div>
         <h2>자식 컴포넌트</h2>
         <h3>이름 : {name} / ({typeof name})</h3>
         <h3>나이 : {age} / ({typeof age})</h3>
         <hr />
      </div>
   );
};

const Test6 = () => {
   const data1 = { id: 1, name: '천국이', age: 14 }
   const data2 = { id: 2, name: '길냥이', age: 12 }
   const data3 = { id: 3, name: '번개', age: 7 }
   return (
      <>
         <Sub name="야옹이" age="16" />
         <Sub name="나비" age={15} />
         <Sub name={data1.name} age={data1.age} />
         <Sub name={data2.name} age={data2.age} />
         <Sub name={data3.name} age={data3.age} />
         {/* <Sub {...data1} /> */}
         {/* <Sub {...data2} /> */}
         {/* 
                부모 컴포넌트에서 자식 컴포넌트에 값을 전달할 때 
                자식 컴포넌트에서 부모의 값을 받아올 때  
                자식에서 부모에 값을 콜백으로 전달할 때

                <자식컴포넌트 props명 = 전달값/>
                값 : 숫자, 문자, 논리 - {숫자}, {논리값}
                실제로는 state, setState, function 등을 전달한다 = {state}

             */}
      </>
   );
};

export default Test6;