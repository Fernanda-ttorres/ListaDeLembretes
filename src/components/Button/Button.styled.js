import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 7rem;
    height: 2.4rem;
    background: #514ca0 ;
    border: none;
    border-radius: 9px;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    align-self: end;
    margin: 1rem 0;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 100%;
        gap: 0.6rem;
        align-self: center;
        border-radius: 20px;
        margin: 1rem 0 1.5rem 0;
    }
`;