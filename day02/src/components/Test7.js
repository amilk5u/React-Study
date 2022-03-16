import Test7Sub from './Test7Sub';

const Test7 = ( ) => {
    return (
        <>
            <Test7Sub 
                name="야옹이" 
                age={16}
                addr="서울시 서초동"
                color="red"
                bgColor="#eee"
                done={true}
            />
              <Test7Sub 
                name="나비" 
                age={15}
                addr="경기도 평택시"
                color="blue"
                bgColor="pink"
                done={false}
            />
              <Test7Sub 
                name="천국이" 
                age={14}
                addr="경기도 이천시"
                color="green"
                bgColor="yellow"
                done={true}
            />
        </>
    );
};

export default Test7;