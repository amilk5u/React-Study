import styled from 'styled-components'

const Container = styled.div`
   width:300px; border: 1px solid #000; padding:20px; margin:20px auto; 
`
const Box1 = styled.section`
   padding:15px; background-color: pink; margin-bottom:15px; transition:.4s;
   &:hover { background-color:tomato; padding:25px; }
`
const Box2 = styled('article')`
   padding:20px; background-color: lime; margin-bottom:15px; transition: .4s;
`
const Box3 = styled('button')`
   width:100%; border:none; background-color: #333; color:#fff; height:50px; transition: .4s;
   &:hover { background-color:hotpink; text-indent:20px; }
`

const Test6 = () => {
   return (
      <Container>
         <Box1>안녕하세요</Box1>
         <Box2>안녕하세요</Box2>
         <Box3>button</Box3>
      </Container>
   );
};

export default Test6;

/* 
   styled-components

   const 컴포넌트 = style.태그``
   const 컴포넌트 = style.('태그')``

   장점
   유지보수가 용이하다
   props로 처리가 가능하다
   
*/