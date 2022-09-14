import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
       'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
       'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif !important;
   }

   body {
    padding: 0;
    margin: 0;
   }

   a {
    text-decoration: none;
    color: inherit;
   }
 `;

export default GlobalStyle;
