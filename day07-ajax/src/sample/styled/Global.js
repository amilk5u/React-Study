import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  body{
    font-family: 'Noto Sans KR', sans-serif;
    font-size:16px;
    line-height: 1.6;
    color:#000;
  }  
  a {
      color:#000; text-decoration: none;
  }
`

export default GlobalStyle;