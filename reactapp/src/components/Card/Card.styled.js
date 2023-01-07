import styled from "styled-components";

export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: #28b7c5 ;
    border-radius: 15px;
    width: 100%;
    height: 3rem;
    margin: 0.5rem 0;

    h3::before{
        content: '';
        display: block;
        width: 7px;
        height: 35px;
        background: #a52158;
        border-radius: 10px;
    }
`;