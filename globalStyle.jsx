import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    user-select: none;
}
body, html, #root{
	display: flex;
    width: 99%;
    height: 97vh;
    //justify-content: center;
    //-items: center;
    flex-direction: column;
   
}
`;