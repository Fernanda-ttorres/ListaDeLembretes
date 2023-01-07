import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ text, type, id, onClick }) => {
    return (
        <StyledButton type={type} id={id} onClick={onClick}> {text} </StyledButton>
    );
};

export default Button;