import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.3rem 0;

    @media (max-width: 768px) {
        margin: 0;
    }
`;

export const LabelStyled = styled.label`
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 400;
    color: #767676;    
    padding: 0.5rem 0;
`;

export const InputStyled = styled.input`
    width: 100%;
    height: 2.5rem;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
    padding: 0 0.6rem;

    @media (max-width: 768px) {
        border-radius: 20px;
    }
`;