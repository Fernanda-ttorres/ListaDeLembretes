import styled from "styled-components";

export const CardDiv = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #28b7c5 ;
    border-radius: 15px;
    width: 98%;
    height: 2.5rem;
    padding: 0 1.5rem;
    margin: 0.5rem 1rem;

    button {
        background: transparent;
       color: #fff;
        border: none;
        cursor: pointer;
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