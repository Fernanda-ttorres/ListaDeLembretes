import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    user-select: none;
}
body, html, #root{
	display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #E5E5E5;
}
`;