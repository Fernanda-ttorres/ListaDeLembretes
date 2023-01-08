import styled from "styled-components";

export const CardDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #28b7c5 ;
    border-radius: 15px;
    width: 100%;
    height: 3rem;
    margin: 0.5rem 0;
    padding: 0 1rem;

    button {
        cursor: pointer;
        border: none;
        background: transparent;
    }

    /* h3::before{
        content: '';
        display: block;
        width: 7px;
        height: 35px;
        background: #a52158;
        border-radius: 10px;
    } */
`;

export const CardBranco = styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 35rem;
    margin: auto;
    background: #ffffff;
    border-radius: 30px;
    padding: 2.5rem;
`;