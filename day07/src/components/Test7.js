import styled, {css} from 'styled-components'

// ${ props => props.props명 }
const Container = styled.div`
   width:${ props => props.ww };
   margin:10px;
   border:1px solid #000;
   padding:15px;
   background-color: ${ props => props.bg ? props.bg : 'beige' };
`
// 
const Box = styled.button`
   border:none;
   width:${ props => props.width ? props.width : '100px' }; height:50px; border:1px solid #000;
   margin:5px; 
   background-color: ${ props => props.bgColor ? props.bgColor : '#333' };

   ${props => props.vscss && css`
      background-color: tomato;
      width:100%;
      color:#fff;
      border:none;
      text-transform: uppercase;
      transition: .5s;
      &:hover { background-color:hotpink; color:#fff; }
   `}
`

const Test7 = () => {
   return (
      <Container ww="450px" bg1="pink">
         <Box width="150px" bgColor="hotpink">test</Box>
         <Box width="200px">test</Box>
         <Box>test</Box>
         <Box width="80px" bgColor="lime">test</Box>
         <Box width="160px">test</Box>
         <Box vscss >test</Box>
      </Container>
   );
};

export default Test7;