import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    html,body{
        font-size:14px;
        box-sizing:border-box;
        width:100%;
        height:100%;
    }
    a{
        text-decoration:none;
        color:black;
    }
`;


export default GlobalStyles;